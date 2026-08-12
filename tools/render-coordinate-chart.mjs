import fs from "node:fs";
import path from "node:path";
import { renderCoordinateLine, renderCoordinateText } from "./song-chart-core.mjs";

const capturePath = process.argv[2];
if (!capturePath) throw new Error("Usage: node tools/render-coordinate-chart.mjs <coordinate-capture.json>");
const capture = JSON.parse(fs.readFileSync(path.resolve(capturePath), "utf8"));
const calibrations = new Map(capture.pages.map((page) => [page.page, page]));
const output = [];

for (const section of capture.sections) {
  output.push(`[${section.name}]`);
  for (const row of section.rows) {
    if (row.type === "note" || row.type === "image") {
      output.push(row.text);
      continue;
    }
    if (row.type === "lyrics") {
      if (row.fragments) {
        const calibration = calibrations.get(row.page);
        if (!calibration) throw new Error(`No calibration for page ${row.page}`);
        output.push(renderCoordinateText(row.fragments, calibration));
      } else {
        output.push(row.text);
      }
      continue;
    }
    if (row.type !== "chords") throw new Error(`Unknown row type ${row.type}`);
    const calibration = calibrations.get(row.page);
    if (!calibration) throw new Error(`No calibration for page ${row.page}`);
    if (row.expectedChordCount !== row.anchors.length) {
      throw new Error(`${section.name} page ${row.page}: captured ${row.anchors.length} chords, expected ${row.expectedChordCount}`);
    }
    output.push(renderCoordinateLine(row.anchors, calibration).line);
  }
  output.push("");
}
process.stdout.write(`${output.join("\n").trimEnd()}\n`);
