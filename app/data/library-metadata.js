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

window.initialSongs.forEach((song) => {
  const metadata = songMetadata[song.id];
  if (!metadata) return;
  Object.assign(song, metadata);
  song.contentRevision = Math.max(Number(song.contentRevision || 0), 10);
});
