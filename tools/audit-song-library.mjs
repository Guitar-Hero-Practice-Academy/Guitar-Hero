import fs from "node:fs";
import path from "node:path";
import { loadSongs } from "./song-chart-core.mjs";

const root = process.cwd();
const statePath = path.join(root, "tools", "song-library-audit-state.json");
const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
const songs = loadSongs(root).sort((a, b) => `${a.artist} ${a.title}`.localeCompare(`${b.artist} ${b.title}`));
const manifestDir = path.join(root, "tools", "song-chart-manifests");
const captureDir = path.join(root, "tools", "song-chart-captures");
const sourceRoots = [
  "/Users/robertavery/Library/Mobile Documents/com~apple~CloudDocs/Guitar Hero/Song PDF's",
  "/Users/robertavery/Downloads"
];

function walkPdfs(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkPdfs(fullPath);
    return entry.isFile() && entry.name.toLowerCase().endsWith(".pdf") ? [fullPath] : [];
  });
}

function normalize(value) {
  return value.toLowerCase()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/\b(acoustic|chords?|tabs?|text)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const pdfs = sourceRoots.flatMap(walkPdfs);
const relevantPdfs = pdfs.filter((file) => /(?:chord|tab|waterfall)/i.test(path.basename(file)));
const aliases = new Map([
  ["oasis d you know what i mean", "dyou know what i mean"],
  ["oasis cigarettes and alcohol", "cigarettes and alcohol"],
  ["the stone roses waterfall", "waterfall"],
  ["the killers all these things that ive done", "all these things that ive done"],
  ["noel gallaghers high flying birds ballad of the mighty i", "ballad of the mighty i"]
]);

function findSources(song) {
  const titleKey = normalize(song.title);
  const fullKey = normalize(`${song.artist} ${song.title}`);
  const alias = aliases.get(fullKey);
  return relevantPdfs.filter((file) => {
    const fileKey = normalize(path.basename(file, path.extname(file)));
    return fileKey === titleKey || fileKey.includes(titleKey) || (alias && fileKey.includes(alias));
  });
}

const rows = songs.map((song) => {
  const sources = findSources(song);
  const approval = state.approved[song.id];
  return {
    id: song.id,
    artist: song.artist,
    title: song.title,
    status: approval?.sourceChecked && approval?.browserChecked ? "approved" : sources.length ? "unverified" : "missing-source",
    sources,
    legacyManifest: fs.existsSync(path.join(manifestDir, `${song.id}.json`)),
    coordinateCapture: fs.existsSync(path.join(captureDir, `${song.id}.json`))
  };
});

const totals = rows.reduce((result, row) => {
  result[row.status] = (result[row.status] || 0) + 1;
  return result;
}, {});

console.log(JSON.stringify({
  generatedAt: new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Brisbane",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date()),
  totals: { librarySongs: rows.length, ...totals, pendingAdditions: state.pendingAdditions.length },
  songs: rows,
  pendingAdditions: state.pendingAdditions
}, null, 2));
