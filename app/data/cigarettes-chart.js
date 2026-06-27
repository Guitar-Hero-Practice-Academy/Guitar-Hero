const cigarettesAndAlcohol = window.initialSongs.find(
  (song) => song.id === "oasis-cigarettes-and-alcohol"
);

if (cigarettesAndAlcohol) {
  cigarettesAndAlcohol.chart = ["[Intro]", ""].join("\n");
  cigarettesAndAlcohol.chart += `
Use the intro tab above.

[Verse 1]
E
Is it my imagination
          F#             A                         E
Or have I finally found something worth living for?
E
I was looking for some action
      F#               A                 E
But all I found was cigarettes and alcohol
`;
  cigarettesAndAlcohol.chart += `
[Chorus]
A                   E
You could wait for a lifetime
A                       E
To spend your days in the sunshine
A                            E
You might as well do the white line
              D          A
Cos when it comes on top...
                 E       D          A          E
You gotta make it happen, you gotta make it happen (x2)

E   D   A
D   A   E

[Repeat intro]
`;
  cigarettesAndAlcohol.chart += `
[Verse 2]
E
Is it worth the aggravation
          F#                              A                     E
To find yourself a job when there's nothing worth working for?
E
It's a crazy situation
          F#              A                 E
But all I need are cigarettes and alcohol!
`;
  cigarettesAndAlcohol.chart += `
[Chorus]
A                   E
You could wait for a lifetime
A                       E
To spend your days in the sunshine
A                            E
You might as well do the white line
              D          A
Cos when it comes on top...
                 E       D          A          E
You gotta make it happen, you gotta make it happen (x2)

[Solo]
E   D   A (x4)
`;
  cigarettesAndAlcohol.chart += `
[Outro]
E                       D              A
You gotta, you gotta, you gotta make it
E                       D              A
You gotta, you gotta, you gotta fake it
E                       D              A
You gotta, you gotta, you gotta make it
E                       D              A
You gotta, you gotta, you gotta fake it

E   D   A (x8)
Finish with one strum on E.
`;
}

const castNoShadow = window.initialSongs.find(
  (song) => song.id === "oasis-cast-no-shadow"
);

if (castNoShadow) {
  Object.assign(castNoShadow, {
    chords: [
      { name: "G", frets: "320033", fingers: "21 34" },
      { name: "Em7", frets: "022033", fingers: "12 34" },
      { name: "A7sus4", frets: "x02033", fingers: "1 34" },
      { name: "Dsus4", frets: "xx0233", fingers: "123" },
      { name: "Cadd9", frets: "x32033", fingers: "21 34" }
    ],
    strumming: [
      {
        name: "Main acoustic pattern",
        bpm: 82,
        beats: ["D", "", "D", "U", "D", "U", "D", ""],
        accents: [0, 4],
        chordRun: "G  Em7  A7sus4  Dsus4  Cadd9",
        note: "Keep the high B and E strings ringing through the chord changes."
      },
      {
        name: "Verse",
        bpm: 82,
        beats: ["D", "", "D", "U", "D", "U", "D", "U"],
        accents: [0, 4],
        chordRun: "A7sus4  G",
        note: "Relax the attack and let each change breathe."
      },
      {
        name: "Chorus",
        bpm: 82,
        beats: ["D", "", "D", "U", "D", "U", "D", "U"],
        accents: [0, 4],
        chordRun: "G  A7sus4  Cadd9  Em7  Dsus4",
        note: "Strum more broadly while keeping the tempo steady."
      }
    ]
  });
  castNoShadow.chart = "[Intro]\n\nG  Em7  A7sus4  G\nA7sus4  G  A7sus4  G\n";
  castNoShadow.chart += `

[Verse 1]
A7sus4
Here's a thought for every man who tries to understand
                    G
What is in his hands (what's in his hands)
    A7sus4
He walks along the open road of love and life
                    G
Surviving if he can (only if he can)

[Pre-Chorus]
Em7                  Dsus4             Cadd9                 G
Bound with all the weight of all the words he tried to say
Em7                  Dsus4          Cadd9                G
Chained to all the places that he never wished to stay
Em7                  Dsus4             Cadd9                 G
Bound with all the weight of all the words he tried to say
Em7              Dsus4  Cadd9  N.C.    Cadd9
As he faced the sun he cast no shadow
`;
  castNoShadow.chart += "\n[Chorus]\nG  A7sus4  Cadd9  Em7 Dsus4\n";
}
