if (castSong) {
  const finalSection = castSong.chart.match(
    /\n\[Final Chorus\][\s\S]*?\nCadd9   G\n(?=\n\[Chorus\])/
  )?.[0] || "";
  if (finalSection) {
    castSong.chart = castSong.chart.replace(finalSection, "") + finalSection;
  }
}
