const songMetadata = {
  "oasis-cigarettes-and-alcohol": {
    album: "Definitely Maybe",
    albumYear: 1994,
    albumOrder: 8
  },
  "oasis-wonderwall": {
    album: "(What's the Story) Morning Glory?",
    albumYear: 1995,
    albumOrder: 3
  },
  "oasis-cast-no-shadow": {
    album: "(What's the Story) Morning Glory?",
    albumYear: 1995,
    albumOrder: 8
  },
  "oasis-champagne-supernova": {
    album: "(What's the Story) Morning Glory?",
    albumYear: 1995,
    albumOrder: 12
  },
  "oasis-acquiesce": {
    album: "The Masterplan",
    albumYear: 1998,
    albumOrder: 1
  },
  "oasis-little-by-little": {
    album: "Heathen Chemistry",
    albumYear: 2002,
    albumOrder: 6
  }
};

const chordLayoutRevision11 = new Set([
  "the-killers-runaways",
  "the-killers-caution",
  "rolling-stones-gimme-shelter",
  "rolling-stones-sympathy-for-the-devil",
  "guns-n-roses-sweet-child-o-mine",
  "men-without-hats-the-safety-dance",
  "fleetwood-mac-dont-stop",
  "oasis-dont-look-back-in-anger",
  "oasis-dyou-know-what-i-mean",
  "jack-johnson-do-you-remember",
  "jack-johnson-sitting-waiting-wishing",
  "coldplay-shiver",
  "oasis-morning-glory"
]);

window.initialSongs.forEach((song) => {
  const metadata = songMetadata[song.id];
  if (metadata) Object.assign(song, metadata);
  if (metadata || chordLayoutRevision11.has(song.id)) {
    song.contentRevision = Math.max(Number(song.contentRevision || 0), chordLayoutRevision11.has(song.id) ? 11 : 10);
  }
});
