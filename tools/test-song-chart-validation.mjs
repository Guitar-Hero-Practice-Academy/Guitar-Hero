import assert from "node:assert/strict";
import { chordAnchors, createChartManifest, renderCoordinateLine, validateManifest } from "./song-chart-core.mjs";

assert.deepEqual(chordAnchors("C*** Em* D"), [
  { chord: "C***", column: 0 },
  { chord: "Em*", column: 5 },
  { chord: "D", column: 9 }
]);

const verified = { sourceChecked: true, browserChecked: true, checkedAt: "2026-08-10" };
const source = { fileName: "fixture.pdf", sha256: "fixture" };
const original = {
  id: "fixture-song",
  contentRevision: 1,
  chart: `[Verse]
C       G
fixture line one

[Chorus]
   Am      F
fixture repeated line

[Chorus]
   Am      F     G
fixture repeated line`
};
const manifest = createChartManifest(original, source, verified);

assert.deepEqual(validateManifest(original, manifest), []);

const cases = [
  ["missing chord", original.chart.replace("   Am      F     G", "   Am      F")],
  ["shifted chord", original.chart.replace("C       G", "C        G")],
  ["changed wording", original.chart.replace("fixture line one", "fixture line changed")],
  ["wrong repeated section", original.chart.replace("   Am      F\nfixture repeated line", "   Am       F\nfixture repeated line")]
];

for (const [name, chart] of cases) {
  const failures = validateManifest({ ...original, chart }, manifest);
  assert.ok(failures.length > 0, `${name} must fail validation`);
}

assert.deepEqual(
  renderCoordinateLine(
    [{ chord: "C", sourceX: 0.1 }, { chord: "G", sourceX: 0.3 }],
    { originX: 0.1, cellWidth: 0.02 }
  ),
  { line: "C         G", anchors: [{ chord: "C", column: 0 }, { chord: "G", column: 10 }] }
);

assert.throws(
  () => renderCoordinateLine(
    [{ chord: "Am", sourceX: 0.2 }, { chord: "G", sourceX: 0.2 }],
    { originX: 0.1, cellWidth: 0.02 }
  ),
  /multiple chords map to column/
);

console.log("Song-chart guard tests passed.");
