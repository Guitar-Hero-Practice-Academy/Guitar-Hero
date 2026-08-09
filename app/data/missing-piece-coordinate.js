const missingPieceCoordinate = window.initialSongs.find((song) => song.id === "vance-joy-missing-piece");

if (missingPieceCoordinate) {
  missingPieceCoordinate.contentRevision = 4;
  missingPieceCoordinate.chart = `[Finger-picking pattern]
[[image:assets/missing-piece-picking-pattern.png|Finger-picking and strumming pattern]]

[Intro]
C C`;
  missingPieceCoordinate.chart += `

[Verse 1]
C                        F        C
I've been waiting for the tides to change
        F        C           G
For the waves to send you my way
C                        F   C
I see you darling but you pixilate
        F       C          G
It gets hard to take these days

[Pre-Chorus]
         C             F   C           F
But we'll hold the line, I won't let go`;
  missingPieceCoordinate.chart += `
       C                 G                           C
'Cause I'll be there when you can finally make it home
                 F
And I don't mind
       C            F
'Cause we both know
     C                  G                          G
That we'll be fine when you can finally make it home

[Chorus]
             Am                   F                      C    G
Because when I'm in a room with you that missing piece is found
              Am                        F
You know when you're by my side, darling
                     C   G
Nothing can bring us down`;
  missingPieceCoordinate.chart += `

[Verse 2]
C               F      C
I remember happy wasted days
        F      C           G
Summers golden haze in our eyes`;
  missingPieceCoordinate.chart += `
C                    F        C
Lifting you above the breaking waves
         F       C          G
Memories floating back to my mind

[Pre-Chorus]
        C             F   C           F
You said hold the line, I won't let go`;
  missingPieceCoordinate.chart += `
      C                 G                           C
Cause I'll be there when you can finally make it home
                F
And I don't mind
       C           F
'Cause we both know
     C                  G                          G
That we'll be fine when you can finally make it home`;
  missingPieceCoordinate.chart += `

[Chorus]
             Am   F C G
Because when I'm in a room with you that missing piece is found
              Am                        F
You know when you're by my side, darling
                     C   G
Nothing can bring us down
              Am                    F                   C  G
It's like when you're far away from me I get lost in the crowd
             Am                   F                      C    G
Because when I'm in a room with you that missing piece is found

[Bridge]
F                    C            G
I won't waste a minute when you're here
          G                   F
And we're finally in the clear`;
  missingPieceCoordinate.chart += `
             C             G
When every day is like the last
              G
I just keeping holding fast

[Chorus]
             Am                   F                      C    G
Because when I'm in a room with you that missing piece is found
              Am                        F
You know when you're by my side, darling
                     C   G
Nothing can bring us down
              Am                    F                   C  G
It's like when you're far away from me I get lost in the crowd
             Am                   F                      C    G
Because when I'm in a room with you that missing piece is found

[Outro]
C F C F C G
C F C F C G`;
}
