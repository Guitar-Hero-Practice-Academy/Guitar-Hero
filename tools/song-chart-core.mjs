import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const chordTokenPattern = /(?<![A-Za-z0-9#b/])([A-G](?:#|b)?(?:(?:maj|min|dim|aug|sus|add)?\d*|m\d*)?(?:\/[A-G](?:#|b)?)?\*?)(?![A-Za-z0-9#b/])/g;

export function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function loadSongs(root) {
  const appDir = path.join(root, "app");
  const html = fs.readFileSync(path.join(appDir, "index.html"), "utf8");
  const dataScripts = [...html.matchAll(/<script src="(data\/[^"]+\.js)"><\/script>/g)]
    .map((match) => match[1]);
  const context = vm.createContext({
    console,
    structuredClone,
    window: { initialSongs: [] }
  });

  for (const relativePath of dataScripts) {
    const filename = path.join(appDir, relativePath);
    vm.runInContext(fs.readFileSync(filename, "utf8"), context, { filename });
  }
  return context.window.initialSongs;
}

export function parseChart(chart) {
  const sections = [];
  const occurrenceCounts = new Map();
  let current = null;

  for (const line of chart.split("\n")) {
    const heading = line.match(/^\[([^\]]+)\]$/);
    if (heading) {
      const name = heading[1];
      const occurrence = (occurrenceCounts.get(name) || 0) + 1;
      occurrenceCounts.set(name, occurrence);
      current = { name, occurrence, lines: [] };
      sections.push(current);
      continue;
    }
    if (!current) {
      current = { name: "__preamble__", occurrence: 1, lines: [] };
      sections.push(current);
    }
    current.lines.push(line);
  }
  return sections;
}

export function chordAnchors(line) {
  return [...line.matchAll(chordTokenPattern)].map((match) => ({
    chord: match[1],
    column: match.index
  }));
}

export function isChordLine(line) {
  const anchors = chordAnchors(line);
  if (!anchors.length) return false;
  const residue = line
    .replace(chordTokenPattern, "")
    .replace(/(?:^|\s)x\d+(?=\s|$)/gi, "")
    .replace(/[\s/|(),.-]/g, "");
  return residue.length === 0;
}

export function createChartManifest(song, source, verification) {
  const sections = parseChart(song.chart);
  return {
    schemaVersion: 1,
    songId: song.id,
    contentRevision: song.contentRevision ?? null,
    source,
    verification,
    chartHash: sha256(song.chart),
    sections: sections.map((section) => ({
      name: section.name,
      occurrence: section.occurrence,
      lines: section.lines.map((line, lineOffset) => ({
        lineOffset,
        hash: sha256(line),
        ...(isChordLine(line) ? { anchors: chordAnchors(line) } : {})
      }))
    }))
  };
}

export function validateManifest(song, manifest) {
  const failures = [];
  if (manifest.songId !== song.id) failures.push(`song id is ${song.id}, manifest expects ${manifest.songId}`);
  if (!manifest.verification?.sourceChecked) failures.push("source verification is not recorded");
  if (!manifest.verification?.browserChecked) failures.push("browser verification is not recorded");
  if (manifest.chartHash !== sha256(song.chart)) failures.push("complete chart hash changed");

  const actualSections = parseChart(song.chart);
  const expectedSections = manifest.sections || [];
  if (actualSections.length !== expectedSections.length) {
    failures.push(`section count is ${actualSections.length}, expected ${expectedSections.length}`);
  }

  expectedSections.forEach((expectedSection, sectionIndex) => {
    const actualSection = actualSections[sectionIndex];
    const key = `${expectedSection.name} #${expectedSection.occurrence}`;
    if (!actualSection) return;
    if (actualSection.name !== expectedSection.name || actualSection.occurrence !== expectedSection.occurrence) {
      failures.push(`section ${sectionIndex + 1} is ${actualSection.name} #${actualSection.occurrence}, expected ${key}`);
      return;
    }
    if (actualSection.lines.length !== expectedSection.lines.length) {
      failures.push(`${key} has ${actualSection.lines.length} lines, expected ${expectedSection.lines.length}`);
    }
    expectedSection.lines.forEach((expectedLine) => {
      const actualLine = actualSection.lines[expectedLine.lineOffset];
      const label = `${key}, line offset ${expectedLine.lineOffset}`;
      if (actualLine === undefined) return;
      if (sha256(actualLine) !== expectedLine.hash) failures.push(`${label} text or whitespace changed`);
      if (expectedLine.anchors) {
        const actualAnchors = chordAnchors(actualLine);
        if (JSON.stringify(actualAnchors) !== JSON.stringify(expectedLine.anchors)) {
          failures.push(`${label} anchors are ${formatAnchors(actualAnchors)}, expected ${formatAnchors(expectedLine.anchors)}`);
        }
      }
    });
  });
  return failures;
}

export function formatAnchors(anchors) {
  return anchors.map(({ chord, column }) => `${chord}@${column}`).join(", ") || "none";
}

export function renderCoordinateLine(anchors, calibration) {
  if (!Array.isArray(anchors) || anchors.length === 0) throw new Error("a chord row must contain at least one anchor");
  const seen = new Set();
  const positioned = anchors.map(({ chord, sourceX }) => {
    if (!chord || !Number.isFinite(sourceX)) throw new Error("each anchor requires chord and numeric sourceX");
    const column = Math.round((sourceX - calibration.originX) / calibration.cellWidth);
    if (column < 0) throw new Error(`${chord} maps before column zero`);
    if (seen.has(column)) throw new Error(`multiple chords map to column ${column}`);
    seen.add(column);
    return { chord, column };
  }).sort((a, b) => a.column - b.column);

  let line = "";
  for (const { chord, column } of positioned) {
    if (line.length > column) throw new Error(`${chord}@${column} overlaps the previous chord`);
    line = line.padEnd(column, " ") + chord;
  }
  return { line, anchors: positioned };
}

export function renderCoordinateText(fragments, calibration) {
  if (!Array.isArray(fragments) || fragments.length === 0) throw new Error("a text row must contain at least one fragment");
  let line = "";
  for (const { text, sourceX } of [...fragments].sort((a, b) => a.sourceX - b.sourceX)) {
    if (typeof text !== "string" || !Number.isFinite(sourceX)) throw new Error("each text fragment requires text and numeric sourceX");
    const column = Math.round((sourceX - calibration.originX) / calibration.cellWidth);
    if (column < 0) throw new Error(`text maps before column zero`);
    if (line.length > column) throw new Error(`text fragment at column ${column} overlaps the previous fragment`);
    line = line.padEnd(column, " ") + text;
  }
  return line;
}
