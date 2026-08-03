# Song Entry Rules

These rules apply every time a song is added or corrected.

## Required Format

- Reproduce the song as typed text in the app chart area.
- Use the same structure as the source PDF: section headings, chord lines, lyric lines, repeats, solos, bridges, and outros.
- For normal song sections, use chord lines above lyric lines. Do not group several lyric lines under one chord line unless the source PDF does that.
- Preserve chord placement as closely as possible. Do not condense spacing if it changes timing or where the chord lands.
- Do not rewrite lyrics, expand contractions, simplify wording, or "clean up" the source text.
- Ignore alternate arrangements only when Rob specifically asks, such as alternate capo versions.

## Riffs, Intros, Solos, and Outros

- Riffs and solos may be inserted as tight cropped images or exact text tabs.
- Do not use full PDF page images as a substitute for the song chart.
- If using a text tab, preserve spacing exactly enough that the rhythm and fret positions still make sense.
- Put riffs in the sensible musical position: intro before verse, solo where the solo occurs, outro at the end.

## Quality Checklist

Before finishing a song addition:

- No `sourceImages` for whole song pages.
- No placeholder text such as "use the PDF pages above".
- No missing verses, choruses, bridge, solo, or outro from the requested arrangement.
- No three-line lyric blocks where the PDF has chord lines above each lyric line.
- Chords in the chord diagram bar match the chart.
- Riffs/solos are cropped snippets or exact text, not whole pages.
- Run the app data load/build check after editing.

## Workflow

1. Render or inspect the PDF visually.
2. Use OCR only as a draft.
3. Manually compare the typed chart against the PDF.
4. Add cropped riff images only where text tabs would be risky.
5. Build and verify the song appears in the library.
