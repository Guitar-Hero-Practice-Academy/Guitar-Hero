# Enforced song-chart workflow

Every coordinate-based song chart has a verification manifest under `tools/song-chart-manifests/`. The production build runs `tools/validate-song-charts.mjs` before writing output.

## Import or correct a chart

1. Render every supplied PDF page and derive chord and lyric anchors from the same page coordinate system.
2. Record page-specific `originX` and `cellWidth` values plus every source chord anchor in a coordinate-capture JSON file. Start from `tools/coordinate-capture.example.json`.
3. Include `expectedChordCount` on every chord row. Generate chart text with:

   `node tools/render-coordinate-chart.mjs coordinate-capture.json`

   Generation stops on a missing chord, duplicate column, negative column, overlap, or absent page calibration.
4. Copy the generated chart text into the song data without changing source wording.
5. Verify every page and chord row against the PDF, then inspect the complete chart in the application.
6. Only after both checks pass, update the protected manifest:

   `node tools/update-song-chart-manifest.mjs --song <song-id> --source <source.pdf> --source-check-complete --browser-check-complete`
7. Run:

   `node tools/validate-song-charts.mjs`

   `node tools/test-song-chart-validation.mjs`

   `node tools/build-single-file.mjs`

   `git diff --check`

## What the build gate protects

- Exact section order and repeated-section occurrence.
- Exact line count and line offset within each section.
- Exact lyric/note/image-line hashes without duplicating their text in manifests.
- Every chord token and its zero-based character column.
- The complete chart hash.
- A recorded source check and browser check.
- A manifest for every `*-coordinate.js` chart.

Never update a manifest merely to silence a failure. A manifest update is the final attestation that the supplied PDF and complete rendered chart were checked.
