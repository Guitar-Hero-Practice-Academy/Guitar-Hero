import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadSongs, validateManifest } from "./song-chart-core.mjs";

export function validateSongChartManifests(root = process.cwd()) {
  const manifestDir = path.join(root, "tools", "song-chart-manifests");
  const songs = loadSongs(root);
  const songsById = new Map(songs.map((song) => [song.id, song]));
  const files = fs.readdirSync(manifestDir).filter((file) => file.endsWith(".json")).sort();
  const failures = [];

  for (const file of files) {
    const manifest = JSON.parse(fs.readFileSync(path.join(manifestDir, file), "utf8"));
    const song = songsById.get(manifest.songId);
    if (!song) {
      failures.push(`${file}: song ${manifest.songId} is not loaded`);
      continue;
    }
    validateManifest(song, manifest).forEach((failure) => failures.push(`${file}: ${failure}`));
  }

  const manifestIds = files.map((file) => JSON.parse(fs.readFileSync(path.join(manifestDir, file), "utf8")).songId);
  const protectedIds = new Set(manifestIds);
  if (protectedIds.size !== manifestIds.length) failures.push("multiple manifests protect the same song id");
  const coordinateFiles = fs.readdirSync(path.join(root, "app", "data"))
    .filter((file) => file.endsWith("-coordinate.js"));
  for (const file of coordinateFiles) {
    const source = fs.readFileSync(path.join(root, "app", "data", file), "utf8");
    const id = source.match(/song\.id === "([^"]+)"/)?.[1];
    if (!id) failures.push(`${file}: could not determine the protected song id`);
    else if (!protectedIds.has(id)) failures.push(`${file}: coordinate chart has no verification manifest`);
  }

  if (failures.length) {
    throw new Error(`Song-chart verification failed:\n- ${failures.join("\n- ")}\nRun the source and browser checks before updating a manifest.`);
  }
  return { manifests: files.length, songs: [...protectedIds] };
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isDirectRun) {
  const result = validateSongChartManifests();
  console.log(`Validated ${result.manifests} protected song charts.`);
}
