import fs from "node:fs";
import path from "node:path";
import { createChartManifest, loadSongs, sha256 } from "./song-chart-core.mjs";

const args = new Map(process.argv.slice(2).map((value, index, all) => value.startsWith("--") ? [value, all[index + 1]] : null).filter(Boolean));
const songId = args.get("--song");
const sourcePath = args.get("--source");
if (!songId || !sourcePath || !process.argv.includes("--source-check-complete") || !process.argv.includes("--browser-check-complete")) {
  throw new Error("Usage: node tools/update-song-chart-manifest.mjs --song <id> --source <pdf> --source-check-complete --browser-check-complete");
}

const root = process.cwd();
const song = loadSongs(root).find((candidate) => candidate.id === songId);
if (!song) throw new Error(`Song not found: ${songId}`);
const sourceBytes = fs.readFileSync(path.resolve(sourcePath));
const manifest = createChartManifest(song, {
  fileName: path.basename(sourcePath),
  sha256: sha256(sourceBytes)
}, {
  sourceChecked: true,
  browserChecked: true,
  checkedAt: new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Brisbane",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date())
});
const output = path.join(root, "tools", "song-chart-manifests", `${songId}.json`);
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(output);
