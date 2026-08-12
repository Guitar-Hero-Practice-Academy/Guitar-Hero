# Guitar Hero repository instructions

## Mandatory song-chart workflow

These rules apply every time a song is added, transcribed, imported, or corrected.

1. Treat the supplied PDF and the current repository as the only sources of truth. Do not reconstruct a chart from memory, another website, or an earlier conversation.
2. Store the song as searchable, editable chord-and-lyric text in the same format as the rest of the library. Never substitute full PDF pages or screenshots for the chart. Images are allowed only for genuine notation, riffs, tablature, or diagrams that cannot be represented faithfully as chart text.
3. Never estimate chord placement by eye. For every chord-bearing PDF line, derive the chord anchors and lyric anchors from the same coordinate system, then map them to character columns on a monospaced grid. A chord must be placed at the character column corresponding to its exact horizontal anchor in the source.
4. Preserve the supplied song wording exactly. Do not rewrite, normalize, correct, omit, merge, or invent lyric lines while aligning chords. Preserve section order, repeats, chord names, capo, tuning, key, BPM, and performance notes as supplied.
5. Verify every page and every section line by line against the rendered PDF. For each chord-bearing line, explicitly check the first chord, every mid-line chord change, and the final chord. Do not spot-check only a few lines.
6. Validate the stored chart in the actual application with a monospaced chart font and preserved whitespace. Hide optional tone and chord-diagram panels when necessary, inspect the complete chart at a normal desktop viewport, and confirm that no chord or lyric line is clipped or unintentionally wrapped.
7. A successful build, a visible song heading, non-empty chart text, image counts, or absence of console errors does not validate chord placement. These checks are necessary but insufficient.
8. Do not report a song as complete until both checks pass:
   - source check: every chord anchor matches the supplied PDF;
   - browser check: the complete rendered chart preserves those anchors and remains readable.
9. If reliable coordinate extraction is unavailable, stop and say that exact placement is not yet verified. Do not fill spaces manually and present the result as complete.

## Song-data safety

- Preserve existing song data exactly unless the user specifically asks to change it or the supplied source proves a correction is required.
- Keep unrelated working-tree changes intact.
- Run syntax validation, the production build, `git diff --check`, and complete chart-placement verification after song-data changes.
- Follow `tools/SONG_CHART_WORKFLOW.md`. Every `*-coordinate.js` chart must have a passing manifest, and manifests may be updated only after the complete source and browser checks pass.
