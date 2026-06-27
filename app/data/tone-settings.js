const toneProfiles = {
  cleanJangle: {
    channel: "Normal", bright: "On", volume: "2.5",
    treble: "7", middle: "5", bass: "4", reverb: "3", presence: "6",
    sd1: { on: false },
    note: "Use the bridge or bridge/middle position; keep the attack articulate."
  },
  cleanWarm: {
    channel: "Normal", bright: "Off", volume: "2.5",
    treble: "5.5", middle: "6", bass: "5", reverb: "2.5", presence: "5",
    sd1: { on: false },
    note: "Use a rounder pickup setting and let open chords ring."
  },
  edge: {
    channel: "Drive", bright: "Off", drive: "3", master: "2",
    treble: "6", middle: "6", bass: "5", reverb: "2", presence: "6",
    sd1: { on: true, level: "1:00", tone: "11:30", drive: "8:30" },
    note: "Set the amp just at breakup; the SD-1 adds focus rather than heavy gain."
  },
  rock: {
    channel: "Drive", bright: "Off", drive: "4.5", master: "2",
    treble: "6", middle: "7", bass: "5", reverb: "2", presence: "6",
    sd1: { on: true, level: "1:00", tone: "11:00", drive: "9:30" },
    note: "Use the bridge pickup; roll guitar volume back slightly for cleaner verses."
  },
  heavyRock: {
    channel: "Drive", bright: "Off", drive: "5.5", master: "2",
    treble: "6", middle: "7", bass: "4.5", reverb: "1.5", presence: "6.5",
    sd1: { on: true, level: "2:00", tone: "12:00", drive: "10:00" },
    note: "Keep bass controlled; use the SD-1 as a tight mid-forward boost."
  },
  darkClean: {
    channel: "Normal", bright: "On", volume: "2.5",
    treble: "7", middle: "5", bass: "4", reverb: "2", presence: "6.5",
    sd1: { on: false },
    note: "Pick close to the bridge for the sitar-like bite; keep the sound mostly clean."
  }
};

const songTones = {
  "oasis-acquiesce": ["rock", "Big rhythm tone; engage SD-1 for choruses and interludes."],
  "oasis-cigarettes-and-alcohol": ["heavyRock", "Bridge pickup and tight palm control for the main riff."],
  "oasis-cast-no-shadow": ["cleanWarm", "Neck or middle pickup; keep the high strings chiming."],
  "oasis-wonderwall": ["cleanJangle", "Middle pickup works well; leave the SD-1 off."],
  "oasis-champagne-supernova": ["edge", "Use light breakup, then engage the SD-1 for the later solo sections."],
  "oasis-little-by-little": ["rock", "Use the SD-1 for the chorus and solo; back off guitar volume in verses."],
  "oasis-rock-n-roll-star": ["heavyRock", "Bridge pickup, strong mids, and a firm attack."],
  "oasis-live-forever": ["edge", "Mild breakup for rhythm; SD-1 on for the solo and final chorus."],
  "oasis-listen-up": ["cleanWarm", "Use the neck pickup for a round acoustic-style rhythm; keep the SD-1 off."],
  "oasis-round-are-way": ["cleanJangle", "Use middle pickup for an acoustic-style chime; keep the SD-1 off."],
  "ram-jam-black-betty": ["heavyRock", "Keep the riff dry and percussive with controlled low end."],
  "kansas-carry-on-wayward-son": ["rock", "Bridge pickup; engage SD-1 for riffs and solo, bypass for vocal openings."],
  "stone-roses-waterfall": ["cleanJangle", "Use a bright clean tone and light compression from your picking hand."],
  "rolling-stones-paint-it-black": ["darkClean", "Pick close to the bridge for the sitar-like bite; SD-1 stays off."],
  "lynyrd-skynyrd-sweet-home-alabama": ["edge", "Use bridge pickup with light breakup; keep the riff clean enough to hear the picked strings."]
};

const guitarProfiles = {
  cleanJangle: {
    pickup: "Middle",
    neckVolume: "7.5",
    bridgeVolume: "9",
    neckTone: "7",
    bridgeTone: "9"
  },
  cleanWarm: {
    pickup: "Neck",
    neckVolume: "8",
    bridgeVolume: "7",
    neckTone: "7",
    bridgeTone: "7"
  },
  edge: {
    pickup: "Bridge",
    neckVolume: "7",
    bridgeVolume: "8.5",
    neckTone: "6.5",
    bridgeTone: "7.5"
  },
  rock: {
    pickup: "Bridge",
    neckVolume: "7",
    bridgeVolume: "9",
    neckTone: "6",
    bridgeTone: "7"
  },
  heavyRock: {
    pickup: "Bridge",
    neckVolume: "7",
    bridgeVolume: "10",
    neckTone: "6",
    bridgeTone: "7"
  },
  darkClean: {
    pickup: "Bridge",
    neckVolume: "7",
    bridgeVolume: "8",
    neckTone: "6",
    bridgeTone: "8.5"
  }
};

const acousticUnpluggedTone = {
  guitar: "Steel-string acoustic · fresh-ish phosphor bronze",
  shape: "Unplugged recreation · open chords first · light bass notes",
  amp: "Plugged in: clean channel · volume 2 · bright off · SD-1 off",
  eq: "T 5 · M 4 · B 3.5 · Rev 1.5 · Pres 5 · cut boom before adding volume",
  capo: "Use song capo setting",
  note: "Medium pick or fingers; relax the attack and let the rhythm breathe."
};

window.initialSongs.forEach((song) => {
  song.acousticTone = structuredClone(acousticUnpluggedTone);
  song.acousticTone.capo = song.capo || "None";
  const assignment = songTones[song.id];
  if (!assignment) return;
  const [profileName, note] = assignment;
  song.tone = structuredClone(toneProfiles[profileName]);
  song.tone.guitar = structuredClone(guitarProfiles[profileName]);
  song.tone.note = note;
});
