window.academyData = {
  chordDiagrams: [
    {
      name: "G",
      group: "Open Major",
      frets: [3, 2, 0, 0, 0, 3],
      fingers: ["2", "1", "", "", "", "3"]
    },
    {
      name: "C",
      group: "Open Major",
      frets: ["x", 3, 2, 0, 1, 0],
      fingers: ["", "3", "2", "", "1", ""]
    },
    {
      name: "D",
      group: "Open Major",
      frets: ["x", "x", 0, 2, 3, 2],
      fingers: ["", "", "", "1", "3", "2"]
    },
    {
      name: "A",
      group: "Open Major",
      frets: ["x", 0, 2, 2, 2, 0],
      fingers: ["", "", "1", "2", "3", ""]
    },
    {
      name: "E",
      group: "Open Major",
      frets: [0, 2, 2, 1, 0, 0],
      fingers: ["", "2", "3", "1", "", ""]
    },
    {
      name: "Em",
      group: "Open Minor",
      frets: [0, 2, 2, 0, 0, 0],
      fingers: ["", "2", "3", "", "", ""]
    },
    {
      name: "Am",
      group: "Open Minor",
      frets: ["x", 0, 2, 2, 1, 0],
      fingers: ["", "", "2", "3", "1", ""]
    },
    {
      name: "Dm",
      group: "Open Minor",
      frets: ["x", "x", 0, 2, 3, 1],
      fingers: ["", "", "", "2", "3", "1"]
    },
    {
      name: "A7",
      group: "Open 7th",
      frets: ["x", 0, 2, 0, 2, 0],
      fingers: ["", "", "1", "", "2", ""]
    },
    {
      name: "D7",
      group: "Open 7th",
      frets: ["x", "x", 0, 2, 1, 2],
      fingers: ["", "", "", "2", "1", "3"]
    },
    {
      name: "E7",
      group: "Open 7th",
      frets: [0, 2, 0, 1, 0, 0],
      fingers: ["", "2", "", "1", "", ""]
    },
    {
      name: "B7",
      group: "Open 7th",
      frets: ["x", 2, 1, 2, 0, 2],
      fingers: ["", "2", "1", "3", "", "4"]
    },
    {
      name: "F",
      group: "Barre Chords",
      frets: [1, 3, 3, 2, 1, 1],
      fingers: ["1", "3", "4", "2", "1", "1"],
      startFret: 1,
      barre: "1st fret"
    },
    {
      name: "Bm",
      group: "Barre Chords",
      frets: ["x", 2, 4, 4, 3, 2],
      fingers: ["", "1", "3", "4", "2", "1"],
      startFret: 2,
      barre: "2nd fret"
    },
    {
      name: "F#m",
      group: "Barre Chords",
      frets: [2, 4, 4, 2, 2, 2],
      fingers: ["1", "3", "4", "1", "1", "1"],
      startFret: 2,
      barre: "2nd fret"
    },
    {
      name: "C#m",
      group: "Barre Chords",
      frets: ["x", 4, 6, 6, 5, 4],
      fingers: ["", "1", "3", "4", "2", "1"],
      startFret: 4,
      barre: "4th fret"
    }
  ],
  phases: [
    {
      id: "phase-1-foundations",
      phaseNumber: 1,
      title: "Phase 1: Foundations",
      description: "Build the essential skills and confidence every guitarist needs.",
      missions: ["mission-open-chord-foundations"]
    },
    {
      id: "phase-2-rhythm",
      phaseNumber: 2,
      title: "Phase 2: Rhythm",
      description: "Develop solid timing, strumming, and groove.",
      missions: []
    },
    {
      id: "phase-3-lead-guitar",
      phaseNumber: 3,
      title: "Phase 3: Lead Guitar",
      description: "Learn pentatonic scales, bends, slides, vibrato, and simple solos.",
      missions: []
    },
    {
      id: "phase-4-songs-performance",
      phaseNumber: 4,
      title: "Phase 4: Songs & Performance",
      description: "Turn techniques into complete songs and confident playing.",
      missions: []
    }
  ],
  skills: [
    {
      id: "skill-open-chords",
      title: "Open Chords",
      description: "Play essential open-position chords cleanly and confidently.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: ["lesson-open-chords-1", "lesson-open-chords-2"],
      exerciseIds: [
        "exercise-open-chords-1-g-clarity",
        "exercise-open-chords-2-d-clarity"
      ]
    },
    {
      id: "skill-chord-changes",
      title: "Chord Changes",
      description: "Move between chords without breaking the musical pulse.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: ["lesson-open-chords-1", "lesson-open-chords-2"],
      exerciseIds: [
        "exercise-open-chords-1-g-to-c",
        "exercise-open-chords-2-g-c-d-loop"
      ]
    },
    {
      id: "skill-rhythm",
      title: "Rhythm",
      description: "Keep a steady musical pulse while playing chords and songs.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: ["lesson-open-chords-1", "lesson-open-chords-2"],
      exerciseIds: [
        "exercise-open-chords-1-downstrokes",
        "exercise-open-chords-1-song-application",
        "exercise-open-chords-2-steady-strum"
      ]
    },
    {
      id: "skill-strumming",
      title: "Strumming",
      description: "Use the picking hand to create consistent rhythm patterns.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: ["lesson-open-chords-1", "lesson-open-chords-2"],
      exerciseIds: [
        "exercise-open-chords-1-downstrokes",
        "exercise-open-chords-1-song-application",
        "exercise-open-chords-2-steady-strum"
      ]
    },
    {
      id: "skill-alternate-picking",
      title: "Alternate Picking",
      description: "Pick with efficient down-up motion for scales, riffs, and lead lines.",
      missionIds: [],
      lessonIds: [],
      exerciseIds: []
    },
    {
      id: "skill-pentatonic-scales",
      title: "Pentatonic Scales",
      description: "Learn the core scale shapes used for riffs, solos, and improvising.",
      missionIds: [],
      lessonIds: [],
      exerciseIds: []
    },
    {
      id: "skill-muting",
      title: "Muting",
      description: "Control unwanted string noise with both hands.",
      missionIds: [],
      lessonIds: [],
      exerciseIds: []
    },
    {
      id: "skill-timing",
      title: "Timing",
      description: "Stay locked to a beat, count, or song groove.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: ["lesson-open-chords-1", "lesson-open-chords-2"],
      exerciseIds: [
        "exercise-open-chords-1-g-to-c",
        "exercise-open-chords-1-downstrokes",
        "exercise-open-chords-2-g-c-d-loop",
        "exercise-open-chords-2-steady-strum"
      ]
    },
    {
      id: "skill-song-performance",
      title: "Song Performance",
      description: "Turn technique into complete, confident song playing.",
      missionIds: ["mission-open-chord-foundations"],
      lessonIds: [],
      exerciseIds: [
        "exercise-open-chords-1-song-application"
      ]
    }
  ],
  skillProgress: [
    {
      skillId: "skill-open-chords",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    },
    {
      skillId: "skill-chord-changes",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    },
    {
      skillId: "skill-rhythm",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    },
    {
      skillId: "skill-strumming",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    },
    {
      skillId: "skill-alternate-picking",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: []
    },
    {
      skillId: "skill-pentatonic-scales",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: []
    },
    {
      skillId: "skill-muting",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: []
    },
    {
      skillId: "skill-timing",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    },
    {
      skillId: "skill-song-performance",
      currentLevelPercent: 0,
      lastPracticed: null,
      relatedMissionIds: ["mission-open-chord-foundations"]
    }
  ],
  missions: [
    {
      id: "mission-open-chord-foundations",
      phaseId: "phase-1-foundations",
      title: "Open Chord Foundations",
      subtitle: "Your first module is to become confident with the essential open chords.",
      dashboardSubtitle: "Become fluent with open chords.",
      description: "Build clean chord changes, steady rhythm, and confidence with the most common beginner chords.",
      whyItMatters: "Open chords are the foundation of rhythm guitar. If you can change between them cleanly and keep steady timing, hundreds of songs become playable.",
      estimatedSessions: "7-10 practice sessions",
      nextStep: "Choose Lesson 1 when you are ready to begin.",
      skillIds: [
        "skill-open-chords",
        "skill-chord-changes",
        "skill-rhythm",
        "skill-strumming",
        "skill-timing"
      ],
      objectives: [
        "Play the main open chords clearly",
        "Change between chords without stopping",
        "Strum with steady timing",
        "Understand why clean rhythm matters",
        "Use these chords in real songs"
      ],
      connectedSongs: [
        { id: "oasis-wonderwall", title: "Wonderwall", artist: "Oasis" },
        { id: "oasis-supersonic", title: "Supersonic", artist: "Oasis" },
        { id: "oasis-live-forever", title: "Live Forever", artist: "Oasis" },
        { id: "oasis-cigarettes-and-alcohol", title: "Cigarettes & Alcohol", artist: "Oasis" }
      ],
      successCriteria: [
        "Change between open chords smoothly.",
        "Maintain consistent rhythm.",
        "Play your first complete songs confidently."
      ],
      lessons: [
        "lesson-open-chords-1",
        "lesson-open-chords-2"
      ],
      completed: false
    }
  ],
  lessons: [
    {
      id: "lesson-open-chords-1",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 1,
      title: "Why Chord Transitions Matter",
      description: "Learn why clean chord changes are the gateway from knowing chords to playing songs.",
      objectiveHeading: "Today's goal",
      objective: "Today's goal is not speed. The goal is clean chord movement, clear notes, and steady timing.",
      whyThisLesson: "Stopping between chords breaks the rhythm. This lesson builds the habit of moving on time, even before the chord is perfect.",
      estimatedMinutes: 58,
      skillIds: [
        "skill-open-chords",
        "skill-chord-changes",
        "skill-rhythm",
        "skill-strumming",
        "skill-timing"
      ],
      exercises: [
        "exercise-open-chords-1-warmup",
        "exercise-open-chords-1-g-clarity",
        "exercise-open-chords-1-g-to-c",
        "exercise-open-chords-1-downstrokes",
        "exercise-open-chords-1-song-application",
        "exercise-open-chords-1-free-play"
      ],
      checkpoint: "checkpoint-open-chords-1",
      completed: false
    },
    {
      id: "lesson-open-chords-2",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 2,
      title: "Adding D Major To The Pattern",
      description: "Introduce D major and build the common G-C-D movement used in many songs.",
      whyThisLesson: "G, C, and D form one of the most useful open chord families. Getting comfortable with them opens up a lot of rhythm guitar.",
      estimatedMinutes: 45,
      skillIds: [
        "skill-open-chords",
        "skill-chord-changes",
        "skill-rhythm",
        "skill-strumming",
        "skill-timing"
      ],
      exercises: [
        "exercise-open-chords-2-d-clarity",
        "exercise-open-chords-2-g-c-d-loop",
        "exercise-open-chords-2-steady-strum"
      ],
      checkpoint: "checkpoint-open-chords-2",
      completed: false
    }
  ],
  exercises: [
    {
      id: "exercise-open-chords-1-warmup",
      lessonId: "lesson-open-chords-1",
      title: "Warm-up: 1-2-3-4 Chromatic Exercise",
      objective: "Wake up the fretting hand and check finger independence before chord work.",
      instructions: "Play frets 1, 2, 3, and 4 on each string with fingers 1, 2, 3, and 4. Keep the notes even and relaxed.",
      instructionSteps: [
        "Place fingers 1, 2, 3, and 4 over frets 1, 2, 3, and 4.",
        "Pick each note evenly on one string.",
        "Move across all six strings without squeezing the neck.",
        "Keep the notes relaxed and steady."
      ],
      durationMinutes: 5,
      tempo: "60 BPM",
      passCriteria: "Play all six strings cleanly at 60 BPM without hand tension.",
      skillIds: ["skill-timing"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-1-g-clarity",
      lessonId: "lesson-open-chords-1",
      title: "Chord Clarity: G Major String Check",
      objective: "Make every string of G major ring clearly.",
      instructions: "Hold G major and pick each string slowly from low E to high E. Adjust fingers until every string rings.",
      instructionSteps: [
        "Place the G major shape slowly and deliberately.",
        "Pick each string from low E to high E.",
        "Pause on any muted or buzzing string and adjust the nearest finger.",
        "Repeat until every string rings clearly."
      ],
      durationMinutes: 10,
      tempo: "No metronome",
      passCriteria: "Each string rings clearly three times in a row.",
      skillIds: ["skill-open-chords"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-1-g-to-c",
      lessonId: "lesson-open-chords-1",
      title: "Chord Change: G To C Every 4 Beats",
      objective: "Move between G and C without stopping the beat.",
      instructions: "Set a metronome to 60 BPM. Hold G for four beats, then C for four beats. Keep moving even if the chord is imperfect.",
      instructionSteps: [
        "Set the metronome to 60 BPM.",
        "Hold G major for four beats.",
        "Change to C major and hold it for four beats.",
        "Keep the beat moving even if a chord lands imperfectly."
      ],
      durationMinutes: 10,
      tempo: "60 BPM",
      passCriteria: "Complete ten G-C changes without losing the pulse.",
      skillIds: ["skill-chord-changes", "skill-timing"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-1-downstrokes",
      lessonId: "lesson-open-chords-1",
      title: "Rhythm: Downstrokes Only At 60 BPM",
      objective: "Build a steady right-hand pulse.",
      instructions: "Strum one downstroke per beat at 60 BPM. Keep the arm moving evenly and avoid rushing the change.",
      instructionSteps: [
        "Set the metronome to 60 BPM.",
        "Strum one downstroke on each click.",
        "Keep the strumming arm moving evenly.",
        "Avoid rushing when you prepare for the next chord."
      ],
      durationMinutes: 10,
      tempo: "60 BPM",
      passCriteria: "Strum for one full minute without speeding up or stopping.",
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-1-song-application",
      lessonId: "lesson-open-chords-1",
      title: "Song Application: Simple G-C Strumming",
      objective: "Apply the chord change to a musical rhythm.",
      instructions: "Use a simple downstroke pattern over G and C. Focus on staying in time more than perfect tone.",
      instructionSteps: [
        "Use the same G to C change from the earlier exercise.",
        "Strum simple downstrokes through the change.",
        "Prioritise staying in time over perfect tone.",
        "Recover from small mistakes without stopping."
      ],
      durationMinutes: 15,
      tempo: "60 BPM",
      passCriteria: "Play the G-C pattern for two minutes with no full stops.",
      skillIds: ["skill-rhythm", "skill-strumming", "skill-song-performance"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-1-free-play",
      lessonId: "lesson-open-chords-1",
      title: "Free Play",
      objective: "End the session by exploring the sound of the chords without pressure.",
      instructions: "Play any simple combination of G and C. Listen for clean strings and steady rhythm.",
      instructionSteps: [
        "Choose any simple pattern using G and C.",
        "Play without judging every mistake.",
        "Listen for clean strings and steady rhythm.",
        "Notice one thing that felt better than at the start."
      ],
      durationMinutes: 8,
      tempo: "Free time",
      passCriteria: "Play for the full eight minutes and notice one thing that improved.",
      skillIds: ["skill-open-chords", "skill-rhythm"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-2-d-clarity",
      lessonId: "lesson-open-chords-2",
      title: "Chord Clarity: D Major String Check",
      objective: "Make the top four strings of D major ring clearly.",
      instructions: "Hold D major and pick from the D string to high E. Avoid hitting the low E string.",
      instructionSteps: [
        "Place the D major shape carefully.",
        "Pick from the D string to the high E string.",
        "Avoid the low E and A strings.",
        "Adjust until the top four strings ring clearly."
      ],
      durationMinutes: 10,
      tempo: "No metronome",
      passCriteria: "Play D cleanly five times with only the intended strings ringing.",
      skillIds: ["skill-open-chords"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-2-g-c-d-loop",
      lessonId: "lesson-open-chords-2",
      title: "Chord Change: G-C-D Loop",
      objective: "Connect three essential open chords in sequence.",
      instructions: "Play G for four beats, C for four beats, and D for four beats. Repeat slowly.",
      instructionSteps: [
        "Settle into a slow, even count.",
        "Play G for four beats.",
        "Change to C for four beats, then D for four beats.",
        "Repeat the loop slowly without stopping between chords."
      ],
      durationMinutes: 20,
      tempo: "55 BPM",
      passCriteria: "Complete five full loops without stopping.",
      skillIds: ["skill-chord-changes", "skill-timing"],
      mediaLinks: [],
      completed: false
    },
    {
      id: "exercise-open-chords-2-steady-strum",
      lessonId: "lesson-open-chords-2",
      title: "Rhythm: Steady Strum With Three Chords",
      objective: "Keep timing steady while changing across G, C, and D.",
      instructions: "Use downstrokes only. Change chords every four beats and keep the strumming hand moving.",
      instructionSteps: [
        "Use downstrokes only.",
        "Change chords every four beats.",
        "Keep the strumming hand moving between changes.",
        "Stay relaxed and let small mistakes pass without stopping."
      ],
      durationMinutes: 15,
      tempo: "60 BPM",
      passCriteria: "Play for two minutes with a steady pulse and no long pauses.",
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      mediaLinks: [],
      completed: false
    }
  ],
  checkpoints: [
    {
      id: "checkpoint-open-chords-1",
      lessonId: "lesson-open-chords-1",
      title: "G To C Transition Check",
      purpose: "This checkpoint is not about perfection. It checks whether you are ready to move forward without building bad habits.",
      requirements: [
        "G major rings clearly",
        "C major rings clearly",
        "Change from G to C without stopping",
        "Keep downstrokes steady at 60 BPM for one minute"
      ],
      completed: false
    },
    {
      id: "checkpoint-open-chords-2",
      lessonId: "lesson-open-chords-2",
      title: "G-C-D Loop Check",
      purpose: "This checkpoint is not about perfection. It checks whether you are ready to move forward without building bad habits.",
      requirements: [
        "D major rings clearly on the top four strings",
        "Complete five G-C-D loops",
        "Keep the rhythm steady at 60 BPM",
        "Recover from small mistakes without stopping"
      ],
      completed: false
    }
  ]
};

const guitarCoachRoadmap = [
  {
    phaseId: "phase-1-foundations",
    phaseNumber: 1,
    phaseTitle: "Phase 1: Foundations",
    phaseDescription: "Build the essential skills and confidence every guitarist needs.",
    missions: [
      { title: "Open Chord Foundations", id: "mission-open-chord-foundations", skillsDeveloped: ["Open Chords", "Chord Changes", "Rhythm", "Strumming", "Timing"] },
      { title: "Rhythm Foundations", skillsDeveloped: ["Rhythm", "Timing"] },
      { title: "Strumming Patterns", skillsDeveloped: ["Strumming", "Rhythm", "Timing"] },
      { title: "First Complete Songs", skillsDeveloped: ["Song Performance", "Rhythm", "Open Chords"] }
    ]
  },
  {
    phaseId: "phase-2-technique",
    phaseNumber: 2,
    phaseTitle: "Phase 2: Technique",
    phaseDescription: "Build fretting-hand strength, accuracy, and core rhythm-guitar technique.",
    missions: [
      { title: "Power Chords", skillsDeveloped: ["Power Chords", "Muting", "Rhythm"] },
      { title: "Barre Chords", skillsDeveloped: ["Barre Chords", "Chord Changes"] },
      { title: "Picking Accuracy", skillsDeveloped: ["Picking Accuracy", "Alternate Picking", "Timing"] },
      { title: "Pentatonic Foundations", skillsDeveloped: ["Pentatonic Scales", "Picking Accuracy"] }
    ]
  },
  {
    phaseId: "phase-3-lead-guitar",
    phaseNumber: 3,
    phaseTitle: "Phase 3: Lead Guitar",
    phaseDescription: "Develop lead-guitar vocabulary, expression, and simple improvisation.",
    missions: [
      { title: "Lead Guitar Fundamentals", skillsDeveloped: ["Lead Guitar", "Pentatonic Scales", "Picking Accuracy"] },
      { title: "Expressive Playing", description: "Placeholder module for bends, vibrato, slides, hammer-ons and pull-offs.", skillsDeveloped: ["Bends", "Vibrato", "Slides", "Hammer-ons", "Pull-offs"] },
      { title: "Improvisation", skillsDeveloped: ["Improvisation", "Pentatonic Scales", "Timing"] },
      { title: "Playing Over Chord Progressions", skillsDeveloped: ["Chord Progressions", "Improvisation", "Timing"] }
    ]
  },
  {
    phaseId: "phase-4-musicianship",
    phaseNumber: 4,
    phaseTitle: "Phase 4: Musicianship",
    phaseDescription: "Turn technique into musical understanding, performance, and recording confidence.",
    missions: [
      { title: "Ear Training", skillsDeveloped: ["Ear Training", "Timing"] },
      { title: "Learning Songs by Ear", skillsDeveloped: ["Ear Training", "Song Performance"] },
      { title: "Song Analysis", skillsDeveloped: ["Song Analysis", "Musicianship"] },
      { title: "Performance and Recording", skillsDeveloped: ["Performance", "Recording", "Song Performance"] }
    ]
  }
];

const roadmapMissionDefinitions = guitarCoachRoadmap.flatMap((phase) =>
  phase.missions.map((mission) => ({
    ...mission,
    phaseId: phase.phaseId
  }))
);

window.academyData.phases = guitarCoachRoadmap.map((phase) => ({
  id: phase.phaseId,
  phaseNumber: phase.phaseNumber,
  title: phase.phaseTitle,
  description: phase.phaseDescription,
  missions: phase.missions.map((mission) => mission.id || roadmapId("mission", mission.title))
}));

roadmapMissionDefinitions.forEach((missionDefinition, index) => {
  const id = missionDefinition.id || roadmapId("mission", missionDefinition.title);
  const previousMissionId = index > 0
    ? roadmapMissionDefinitions[index - 1].id || roadmapId("mission", roadmapMissionDefinitions[index - 1].title)
    : null;
  const existingMission = window.academyData.missions.find((mission) => mission.id === id);
  const placeholderLessonId = roadmapId("lesson", missionDefinition.title);
  const baseMission = {
    id,
    phaseId: missionDefinition.phaseId,
    title: missionDefinition.title,
    subtitle: missionDefinition.description || `Placeholder module for ${missionDefinition.title}.`,
    dashboardSubtitle: missionDefinition.title,
    description: missionDefinition.description || `Placeholder module for ${missionDefinition.title}.`,
    whyItMatters: missionDefinition.description || `Placeholder module for ${missionDefinition.title}.`,
    estimatedSessions: "TBD",
    estimatedPracticeHours: "TBD",
    prerequisiteMissionIds: previousMissionId ? [previousMissionId] : [],
    connectedSongs: [],
    skillsDeveloped: missionDefinition.skillsDeveloped || [],
    skillIds: existingMission?.skillIds || [],
    objectives: existingMission?.objectives || [],
    successCriteria: existingMission?.successCriteria || [],
    lessons: [placeholderLessonId],
    completed: false
  };

  if (existingMission) {
    Object.assign(existingMission, {
      estimatedPracticeHours: baseMission.estimatedPracticeHours,
      prerequisiteMissionIds: baseMission.prerequisiteMissionIds,
      skillsDeveloped: baseMission.skillsDeveloped
    });
    return;
  }

  window.academyData.missions.push(baseMission);
  window.academyData.lessons.push({
    id: placeholderLessonId,
    missionId: id,
    lessonNumber: 1,
    title: "Placeholder Lesson",
    description: `Placeholder lesson for ${missionDefinition.title}.`,
    whyThisLesson: `Placeholder lesson for ${missionDefinition.title}.`,
    estimatedMinutes: 0,
    skillIds: [],
    exercises: [],
    checkpoint: null,
    completed: false
  });
});

const missionOneLessonBlueprints = [
  { id: "lesson-open-chords-1", lessonNumber: 1, title: "Why Chord Changes Matter" },
  { id: "lesson-open-chords-2", lessonNumber: 2, title: "Building Perfect Chords" },
  { id: "lesson-open-chords-3", lessonNumber: 3, title: "Efficient Chord Changes" },
  { id: "lesson-open-chords-4", lessonNumber: 4, title: "Adding D Major" },
  { id: "lesson-open-chords-5", lessonNumber: 5, title: "Three-Chord Movement" },
  { id: "lesson-open-chords-6", lessonNumber: 6, title: "Rhythm and Timing" },
  { id: "lesson-open-chords-7", lessonNumber: 7, title: "Basic Strumming Patterns" },
  { id: "lesson-open-chords-8", lessonNumber: 8, title: "Cleaner Sound and Muting" },
  { id: "lesson-open-chords-9", lessonNumber: 9, title: "Making Music" }
];

const missionOneLessonIds = missionOneLessonBlueprints.map((lesson) => lesson.id);
const missionOne = window.academyData.missions.find((mission) => mission.id === "mission-open-chord-foundations");

if (missionOne) {
  Object.assign(missionOne, {
    estimatedPracticeHours: "TBD",
    prerequisiteMissionIds: [],
    skillsDeveloped: ["Open Chords", "Chord Changes", "Rhythm", "Strumming", "Timing"],
    lessons: missionOneLessonIds,
    performance: {
      id: "performance-open-chord-foundations",
      missionId: "mission-open-chord-foundations",
      title: "Module Performance: Open Chord Foundations",
      performanceTitle: "Open Chord Foundations",
      performanceDescription: "Placeholder performance description.",
      performanceCriteria: [
        "Placeholder performance criterion."
      ],
      reflectionQuestions: [
        "Placeholder reflection question."
      ],
      coachSummary: "Placeholder coach summary.",
      completed: false
    }
  });
}

missionOneLessonBlueprints.forEach((blueprint) => {
  const existingLesson = window.academyData.lessons.find((lesson) => lesson.id === blueprint.id);
  const placeholderExerciseId = `exercise-${blueprint.id.replace(/^lesson-/, "")}-placeholder`;
  const placeholderCheckpointId = `checkpoint-${blueprint.id.replace(/^lesson-/, "")}`;
  const lessonStructure = {
    missionContext: "Placeholder module context.",
    why: "Placeholder why.",
    watch: {
      title: "Placeholder watch item.",
      mediaLinks: []
    },
    listen: {
      title: "Placeholder listen item.",
      mediaLinks: []
    },
    coachNotes: "Placeholder coach notes.",
    definitionOfDone: [
      "Placeholder definition of done."
    ],
    commonMistakes: [
      "Placeholder common mistake."
    ],
    performanceTest: {
      title: "Placeholder performance test.",
      criteria: [
        "Placeholder performance test criterion."
      ]
    },
    practiceJournal: [
      "Placeholder practice journal prompt."
    ]
  };
  const lessonData = {
    id: blueprint.id,
    missionId: "mission-open-chord-foundations",
    lessonNumber: blueprint.lessonNumber,
    title: blueprint.title,
    description: "Placeholder lesson description.",
    objectiveHeading: "Lesson Objective",
    objective: "Placeholder lesson objective.",
    whyThisLesson: "Placeholder why this lesson matters.",
    estimatedMinutes: 0,
    skillIds: [
      "skill-open-chords",
      "skill-chord-changes",
      "skill-rhythm",
      "skill-strumming",
      "skill-timing"
    ],
    exercises: [placeholderExerciseId],
    checkpoint: placeholderCheckpointId,
    completed: false,
    ...lessonStructure
  };

  if (existingLesson) {
    Object.assign(existingLesson, lessonData);
  } else {
    window.academyData.lessons.push(lessonData);
  }

  upsertAcademyItem("exercises", {
    id: placeholderExerciseId,
    lessonId: blueprint.id,
    title: "Placeholder Exercise",
    objective: "Placeholder exercise objective.",
    instructions: "Placeholder exercise instructions.",
    instructionSteps: [
      "Placeholder exercise step."
    ],
    durationMinutes: 0,
    tempo: "TBD",
    passCriteria: "Placeholder pass criteria.",
    skillIds: [],
    mediaLinks: [],
    completed: false
  });

  upsertAcademyItem("checkpoints", {
    id: placeholderCheckpointId,
    lessonId: blueprint.id,
    title: `${blueprint.title} Checkpoint`,
    purpose: "Placeholder checkpoint purpose.",
    requirements: [
      "Placeholder checkpoint requirement."
    ],
    completed: false
  });
});

const lessonOneExerciseIds = [
  "exercise-open-chords-1-hand-reset-relax",
  "exercise-open-chords-1-g-major-string-check",
  "exercise-open-chords-1-c-major-string-check",
  "exercise-open-chords-1-silent-g-to-c",
  "exercise-open-chords-1-g-to-c-four-beats",
  "exercise-open-chords-1-simple-downstroke-strumming",
  "exercise-open-chords-1-free-play"
];

upsertAcademyItem("lessons", {
  id: "lesson-open-chords-1",
  missionId: "mission-open-chord-foundations",
  lessonNumber: 1,
  title: "Why Chord Changes Matter",
  description: "This is the first real lesson in Open Chord Foundations. The goal is not speed yet. The goal is learning how to practise chord changes properly.",
  objectiveHeading: "Lesson Objective",
  objective: "Learn how to practise chord changes properly before chasing speed.",
  whyThisLesson: "Chord changes are the foundation of rhythm guitar. If you stop every time you change chords, the song falls apart. This lesson teaches the basic method for moving between chords cleanly and in time.",
  estimatedMinutes: 52,
  skillIds: [
    "skill-open-chords",
    "skill-chord-changes",
    "skill-rhythm",
    "skill-strumming",
    "skill-timing"
  ],
  exercises: lessonOneExerciseIds,
  checkpoint: "checkpoint-open-chords-1",
  completed: false,
  missionContext: "This is the first real lesson in Open Chord Foundations. The goal is not speed yet. The goal is learning how to practise chord changes properly.",
  why: "Chord changes are the foundation of rhythm guitar. If you stop every time you change chords, the song falls apart. This lesson teaches the basic method for moving between chords cleanly and in time.",
  watch: {
    title: "How clean chord changes work",
    provider: "YouTube",
    url: "",
    note: "Add a video later showing slow chord transitions.",
    mediaLinks: []
  },
  listen: {
    title: "Teach Rob to listen for",
    items: [
      "buzzing strings",
      "muted strings",
      "uneven volume",
      "rushing the chord change",
      "tension in the strumming hand",
      "stopping between chords"
    ]
  },
  coachNotes: [
    "Do not chase speed today.",
    "A slow clean change is better than a fast messy change.",
    "Keep fingers close to the fretboard.",
    "If the chord sounds bad, fix one finger at a time.",
    "The aim is to train your ears as much as your fingers."
  ],
  definitionOfDone: [
    "G chord rings clearly.",
    "C chord rings clearly.",
    "G to C changes can happen slowly without rushing.",
    "Downstrokes stay steady for one minute."
  ],
  commonMistakes: [
    "Chasing speed before clean sound.",
    "Stopping the rhythm to repair every chord.",
    "Letting fingers fly too far away from the fretboard.",
    "Holding tension in the fretting hand or strumming shoulder."
  ],
  performanceTest: {
    title: "Clean G to C Change",
    requirements: [
      "G chord rings clearly",
      "C chord rings clearly",
      "Can move G to C and back slowly",
      "Can change every four beats at 60 BPM",
      "Can strum downstrokes for one minute without stopping"
    ],
    passRule: "Pass if the changes are mostly clean and steady. Do not require perfection."
  },
  practiceJournal: [
    "What felt easiest today?",
    "What felt awkward?",
    "What did you hear that needs work?",
    "What is one thing to focus on next session?"
  ]
});

[
  {
    id: "exercise-open-chords-1-hand-reset-relax",
    title: "Hand Reset and Relax",
    purpose: "Remove tension before practising.",
    objective: "Start with relaxed hands and good posture.",
    instructionSteps: [
      "Sit comfortably.",
      "Hold the guitar naturally.",
      "Shake out both hands.",
      "Rest your fretting hand thumb behind the neck.",
      "Lightly touch the strings without squeezing."
    ],
    durationMinutes: 3,
    tempo: "",
    passCriteria: "Your hand feels relaxed and your wrist is not strained.",
    definitionOfDone: "Your hand feels relaxed and your wrist is not strained.",
    commonMistakes: [
      "Squeezing the neck",
      "Bending the wrist sharply",
      "Tensing the shoulder"
    ],
    skillIds: []
  },
  {
    id: "exercise-open-chords-1-g-major-string-check",
    title: "G Major String Check",
    purpose: "Learn to hear whether a chord is clean.",
    objective: "Make every note in G major ring clearly.",
    instructionSteps: [
      "Form a G major chord.",
      "Pick each string one at a time from low E to high E.",
      "If a string buzzes or is muted, adjust one finger only.",
      "Repeat slowly.",
      "Do not strum until individual strings sound clean."
    ],
    durationMinutes: 8,
    tempo: "",
    passCriteria: "Play G and pick all six strings clearly three times in a row.",
    definitionOfDone: "Play G and pick all six strings clearly three times in a row.",
    commonMistakes: [
      "Fingers touching neighbouring strings",
      "Pressing too far from the fret",
      "Squeezing too hard"
    ],
    chordNames: ["G"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-1-c-major-string-check",
    title: "C Major String Check",
    purpose: "Learn clean fretting on a harder open chord.",
    objective: "Make every note in C major ring clearly.",
    instructionSteps: [
      "Form a C major chord.",
      "Start from the A string.",
      "Pick each string one at a time.",
      "Do not play the low E string.",
      "Adjust fingers until each note rings clearly."
    ],
    durationMinutes: 8,
    tempo: "",
    passCriteria: "Play C and pick the correct five strings clearly three times in a row.",
    definitionOfDone: "Play C and pick the correct five strings clearly three times in a row.",
    commonMistakes: [
      "Accidentally hitting the low E string",
      "Muting the open G string",
      "Collapsing the index finger"
    ],
    chordNames: ["C"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-1-silent-g-to-c",
    title: "Silent G to C Movement",
    purpose: "Learn the movement before adding rhythm.",
    objective: "Move between G and C without rushing.",
    instructionSteps: [
      "Form G.",
      "Move slowly to C without strumming.",
      "Keep fingers close to the strings.",
      "Pause and check the C shape.",
      "Move back to G.",
      "Repeat slowly."
    ],
    durationMinutes: 8,
    tempo: "",
    passCriteria: "Move G to C and back 10 times without rushing.",
    definitionOfDone: "Move G to C and back 10 times without rushing.",
    commonMistakes: [
      "Flying fingers too far away",
      "Looking only after the chord is wrong",
      "Trying to move too fast"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes"]
  },
  {
    id: "exercise-open-chords-1-g-to-c-four-beats",
    title: "G to C Every Four Beats",
    purpose: "Start connecting chord changes to timing.",
    objective: "Change chords in time without stopping.",
    instructionSteps: [
      "Set metronome to 60 BPM.",
      "Play G on beat 1.",
      "Let it ring for four beats.",
      "Change to C on the next beat 1.",
      "Let it ring for four beats.",
      "Repeat."
    ],
    durationMinutes: 10,
    tempo: "60 BPM",
    passCriteria: "Complete 10 mostly clean G to C changes at 60 BPM.",
    definitionOfDone: "Complete 10 mostly clean G to C changes at 60 BPM.",
    commonMistakes: [
      "Pausing the rhythm to fix fingers",
      "Rushing the change",
      "Strumming before the fingers are ready"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes", "skill-timing"]
  },
  {
    id: "exercise-open-chords-1-simple-downstroke-strumming",
    title: "Simple Downstroke Strumming",
    purpose: "Keep the right hand steady.",
    objective: "Strum G and C with consistent downstrokes.",
    instructionSteps: [
      "Use G and C only.",
      "Strum down once per beat.",
      "Keep the arm relaxed.",
      "Aim for consistent volume.",
      "Do not speed up."
    ],
    durationMinutes: 10,
    tempo: "60 BPM",
    passCriteria: "Play G to C for one minute without stopping.",
    definitionOfDone: "Play G to C for one minute without stopping.",
    commonMistakes: [
      "Hitting too hard",
      "Changing pick angle randomly",
      "Stopping the hand during chord changes"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"]
  },
  {
    id: "exercise-open-chords-1-free-play",
    title: "Free Play",
    purpose: "Make the practice musical.",
    objective: "Explore the sound of G and C.",
    instructionSteps: [
      "Use only G and C.",
      "Try soft strums.",
      "Try louder strums.",
      "Notice how pick angle changes the sound.",
      "End on the cleanest chord you can play."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Complete five minutes of relaxed playing.",
    definitionOfDone: "Complete five minutes of relaxed playing.",
    commonMistakes: [],
    chordNames: ["G", "C"],
    skillIds: ["skill-open-chords", "skill-rhythm", "skill-strumming"]
  }
].forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-open-chords-1",
    instructions: exercise.instructionSteps.join(" "),
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-open-chords-1",
  lessonId: "lesson-open-chords-1",
  title: "Clean G to C Change",
  purpose: "Pass if the changes are mostly clean and steady. Do not require perfection.",
  requirements: [
    "G chord rings clearly",
    "C chord rings clearly",
    "Can move G to C and back slowly",
    "Can change every four beats at 60 BPM",
    "Can strum downstrokes for one minute without stopping"
  ],
  passRule: "Pass if the changes are mostly clean and steady. Do not require perfection.",
  completed: false
});

const lessonTwoExerciseIds = [
  "exercise-open-chords-2-finger-tip-placement",
  "exercise-open-chords-2-fret-position-check",
  "exercise-open-chords-2-string-clearance-drill",
  "exercise-open-chords-2-minimum-pressure-drill",
  "exercise-open-chords-2-build-g-slowly",
  "exercise-open-chords-2-build-c-slowly",
  "exercise-open-chords-2-chord-quality-check"
];

upsertAcademyItem("lessons", {
  id: "lesson-open-chords-2",
  missionId: "mission-open-chord-foundations",
  lessonNumber: 2,
  title: "Building Perfect Chords",
  description: "A good chord is not about squeezing harder. It is about placing each finger accurately, using only enough pressure, and making sure every string has room to ring. This lesson teaches the basic mechanics of clean fretting.",
  objectiveHeading: "Lesson Objective",
  objective: "Learn how to build clean open chords by focusing on finger placement, pressure, string clearance, and listening.",
  whyThisLesson: "If your chords buzz, sound dull, or have missing notes, songs will never sound right no matter how well you strum. Clean chords are the foundation of rhythm guitar.",
  estimatedMinutes: 35,
  skillIds: [
    "skill-open-chords",
    "skill-chord-changes",
    "skill-timing"
  ],
  exercises: lessonTwoExerciseIds,
  checkpoint: "checkpoint-open-chords-2",
  completed: false,
  missionContext: "This lesson builds the mechanics behind clean open chords: accurate fingertip placement, relaxed pressure, string clearance, and careful listening.",
  why: "If your chords buzz, sound dull, or have missing notes, songs will never sound right no matter how well you strum. Clean chords are the foundation of rhythm guitar.",
  watch: {
    title: "How clean fretting works",
    provider: "YouTube",
    url: "",
    note: "Add a video later showing fingertip placement and string clearance.",
    mediaLinks: []
  },
  listen: {
    title: "Teach Rob to listen for",
    items: [
      "buzzing notes",
      "muted neighbouring strings",
      "uneven chord volume",
      "excess hand pressure",
      "notes that go dull after the first pick"
    ]
  },
  coachNotes: [
    "Most beginners press too hard and flatten their fingers.",
    "Your goal is not force. Your goal is accuracy.",
    "Move one finger at a time and listen before adding speed.",
    "If a note does not ring, adjust placement before adding pressure."
  ],
  definitionOfDone: [
    "Can fret a note close behind the fret.",
    "Can identify a muted string.",
    "Can build G slowly and cleanly.",
    "Can build C slowly and cleanly."
  ],
  commonMistakes: [
    "Pressing harder instead of adjusting finger placement.",
    "Letting fingers flatten across neighbouring strings.",
    "Strumming over muted strings without checking them.",
    "Holding tension in the fretting hand."
  ],
  performanceTest: {
    title: "Clean Chord Construction",
    requirements: [
      "Can explain that clean chords come from placement, not force",
      "Can fret a note close behind the fret",
      "Can identify a muted string",
      "Can build G slowly and cleanly",
      "Can build C slowly and cleanly"
    ],
    passRule: "Pass if Rob can build G and C slowly with mostly clean notes and can identify what causes buzzing or muting."
  },
  practiceJournal: [
    "Which chord felt easier today?",
    "Which string muted most often?",
    "Did pressing harder help, or did placement matter more?",
    "What should I focus on next time?"
  ]
});

[
  {
    id: "exercise-open-chords-2-finger-tip-placement",
    title: "Finger Tip Placement",
    purpose: "Learn to fret notes with the fingertips rather than flat fingers.",
    objective: "Place each finger so it presses the string cleanly without touching nearby strings.",
    instructionSteps: [
      "Choose one string.",
      "Place your fingertip just behind the fret.",
      "Press lightly.",
      "Pick the string.",
      "Move the finger slightly until the note rings clearly.",
      "Repeat with each finger."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can make a clear note with each finger without buzzing.",
    definitionOfDone: "You can make a clear note with each finger without buzzing.",
    commonMistakes: [
      "Pressing too far from the fret",
      "Flattening the finger",
      "Pressing harder instead of adjusting position"
    ],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-fret-position-check",
    title: "Fret Position Check",
    purpose: "Learn where the finger should sit behind the fret.",
    objective: "Hear the difference between poor placement and good placement.",
    instructionSteps: [
      "Place a finger in the middle of the fret space and pick the note.",
      "Move it close behind the fret wire and pick again.",
      "Notice which position sounds cleaner.",
      "Repeat on several strings."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can identify the cleaner position by sound.",
    definitionOfDone: "You can identify the cleaner position by sound.",
    commonMistakes: [
      "Sitting too far back in the fret space",
      "Touching the fret wire directly",
      "Using too much pressure"
    ],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-string-clearance-drill",
    title: "String Clearance Drill",
    purpose: "Stop fingers from muting neighbouring strings.",
    objective: "Keep fingers arched enough that nearby strings can ring.",
    instructionSteps: [
      "Form a simple chord shape.",
      "Pick each string one at a time.",
      "If a string is muted, check which finger is touching it.",
      "Arch that finger slightly more.",
      "Retest the string."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can identify which finger is causing a muted string and correct it.",
    definitionOfDone: "You can identify which finger is causing a muted string and correct it.",
    commonMistakes: [
      "Collapsing the knuckle",
      "Letting fingers lie flat",
      "Not checking strings individually"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-minimum-pressure-drill",
    title: "Minimum Pressure Drill",
    purpose: "Learn that clean chords do not require squeezing hard.",
    objective: "Find the lightest pressure needed to make a note ring.",
    instructionSteps: [
      "Fret one note.",
      "Start with very light pressure.",
      "Pick the string.",
      "Slowly increase pressure until the note rings cleanly.",
      "Stop there.",
      "Repeat on different strings."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can make notes ring clearly without excessive squeezing.",
    definitionOfDone: "You can make notes ring clearly without excessive squeezing.",
    commonMistakes: [
      "Gripping the neck too hard",
      "Tensing the shoulder",
      "Pressing harder when placement is the real problem"
    ],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-build-g-slowly",
    title: "Build G Slowly",
    purpose: "Apply clean chord mechanics to G major.",
    objective: "Build the G chord one finger at a time.",
    instructionSteps: [
      "Place the first finger.",
      "Pick the relevant string.",
      "Add the second finger.",
      "Pick again.",
      "Add the remaining fingers.",
      "Pick every string individually."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Your G chord rings clearly across all six strings.",
    definitionOfDone: "Your G chord rings clearly across all six strings.",
    commonMistakes: [
      "Adding all fingers too quickly",
      "Not checking individual strings",
      "Muting the A or B string"
    ],
    chordNames: ["G"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-build-c-slowly",
    title: "Build C Slowly",
    purpose: "Apply clean chord mechanics to C major.",
    objective: "Build the C chord one finger at a time.",
    instructionSteps: [
      "Place the ring finger on the A string.",
      "Place the middle finger on the D string.",
      "Place the index finger on the B string.",
      "Pick from the A string down.",
      "Do not play the low E string."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Your C chord rings clearly across the correct five strings.",
    definitionOfDone: "Your C chord rings clearly across the correct five strings.",
    commonMistakes: [
      "Hitting the low E string",
      "Muting the open G string",
      "Flattening the index finger"
    ],
    chordNames: ["C"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-2-chord-quality-check",
    title: "Chord Quality Check",
    purpose: "Train your ear to judge whether a chord is clean.",
    objective: "Listen for buzzing, muted notes, and uneven volume.",
    instructionSteps: [
      "Play G.",
      "Pick each string individually.",
      "Play C.",
      "Pick each string individually.",
      "Fix one problem at a time."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can hear whether the chord is clean and identify the problem string.",
    definitionOfDone: "You can hear whether the chord is clean and identify the problem string.",
    commonMistakes: [
      "Strumming over problems",
      "Fixing too many fingers at once",
      "Ignoring muted strings"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-open-chords"]
  }
].forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-open-chords-2",
    instructions: exercise.instructionSteps.join(" "),
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-open-chords-2",
  lessonId: "lesson-open-chords-2",
  title: "Clean Chord Construction",
  purpose: "Pass if Rob can build G and C slowly with mostly clean notes and can identify what causes buzzing or muting.",
  requirements: [
    "Can explain that clean chords come from placement, not force",
    "Can fret a note close behind the fret",
    "Can identify a muted string",
    "Can build G slowly and cleanly",
    "Can build C slowly and cleanly"
  ],
  passRule: "Pass if Rob can build G and C slowly with mostly clean notes and can identify what causes buzzing or muting.",
  completed: false
});

const lessonThreeExerciseIds = [
  "exercise-open-chords-3-slow-chord-preparation",
  "exercise-open-chords-3-economy-of-motion",
  "exercise-open-chords-3-silent-chord-changes",
  "exercise-open-chords-3-four-beat-changes",
  "exercise-open-chords-3-two-beat-changes",
  "exercise-open-chords-3-one-beat-changes",
  "exercise-open-chords-3-rhythm-review"
];

upsertAcademyItem("lessons", {
  id: "lesson-open-chords-3",
  missionId: "mission-open-chord-foundations",
  lessonNumber: 3,
  title: "Efficient Chord Changes",
  description: "Develop smooth and economical movement between open chords without sacrificing accuracy.",
  objectiveHeading: "Lesson Goal",
  objective: "Develop smooth and economical movement between open chords without sacrificing accuracy.",
  whyThisLesson: "Most beginners know the chord shapes but lose time moving between them. Good rhythm comes from preparing the next chord early and moving only the fingers that need to move.",
  estimatedMinutes: 35,
  skillIds: [
    "skill-open-chords",
    "skill-chord-changes",
    "skill-rhythm",
    "skill-timing"
  ],
  exercises: lessonThreeExerciseIds,
  checkpoint: "checkpoint-open-chords-3",
  completed: false,
  missionContext: "This lesson develops smooth, economical movement between G and C without sacrificing accuracy.",
  why: "Most beginners know the chord shapes but lose time moving between them. Good rhythm comes from preparing the next chord early and moving only the fingers that need to move.",
  watch: {
    title: "How efficient chord changes work",
    provider: "YouTube",
    url: "",
    note: "Add a video later showing slow, economical G to C movement.",
    mediaLinks: []
  },
  listen: {
    title: "Teach Rob to listen for",
    items: [
      "pauses before chord changes",
      "late chord landings",
      "uneven rhythm",
      "tension during the change",
      "extra finger movement"
    ]
  },
  coachNotes: [
    "Don’t chase speed today.",
    "Smooth movements naturally become fast.",
    "Every unnecessary movement is something you’ll have to unlearn later.",
    "Prepare the next chord before you need it."
  ],
  definitionOfDone: [
    "G and C changes are mostly clean.",
    "Finger movement is controlled.",
    "Rhythm remains steady.",
    "You no longer pause before every change."
  ],
  commonMistakes: [
    "Rushing the change.",
    "Lifting fingers too high.",
    "Pulling the whole hand away from the neck.",
    "Pausing before every chord change."
  ],
  performanceTest: {
    title: "Efficient Chord Changes",
    requirements: [
      "G and C changes are mostly clean",
      "Finger movement is controlled",
      "Rhythm remains steady",
      "You no longer pause before every change"
    ],
    passRule: "Pass if G and C changes are mostly clean, finger movement is controlled, rhythm remains steady, and Rob no longer pauses before every change."
  },
  practiceJournal: [
    "Which chord change felt harder?",
    "Which finger moved the most?",
    "Did you stay relaxed?",
    "What should you focus on before Lesson 4?"
  ]
});

[
  {
    id: "exercise-open-chords-3-slow-chord-preparation",
    title: "Slow Chord Preparation",
    purpose: "Learn to prepare the next chord before you need it.",
    objective: "Plan the next chord shape before moving.",
    instructionSteps: [
      "Form a G chord.",
      "Look at the C chord.",
      "Without moving yet, identify where every finger will go.",
      "Move slowly into C.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can move without hesitation.",
    definitionOfDone: "You can move without hesitation.",
    commonMistakes: [
      "Rushing",
      "Looking at one finger at a time",
      "Guessing finger positions"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes"]
  },
  {
    id: "exercise-open-chords-3-economy-of-motion",
    title: "Economy of Motion",
    purpose: "Reduce unnecessary finger movement.",
    objective: "Keep each finger close to the strings during G to C changes.",
    instructionSteps: [
      "Alternate G and C.",
      "Watch how high your fingers lift.",
      "Keep every finger as close to the strings as possible.",
      "Repeat slowly."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Finger movement becomes smaller and more controlled.",
    definitionOfDone: "Finger movement becomes smaller and more controlled.",
    commonMistakes: [
      "Lifting fingers too high",
      "Pulling the whole hand away from the neck"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes"]
  },
  {
    id: "exercise-open-chords-3-silent-chord-changes",
    title: "Silent Chord Changes",
    purpose: "Practise changing chords without strumming.",
    objective: "Build the new chord shape accurately before playing it.",
    instructionSteps: [
      "Change G to C.",
      "Pause.",
      "Check every finger.",
      "Repeat.",
      "Don’t strum until the shape is correct."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can consistently build the new chord before playing.",
    definitionOfDone: "You can consistently build the new chord before playing.",
    commonMistakes: [
      "Strumming before the shape is ready",
      "Skipping the finger check",
      "Letting the hand tense up"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes"]
  },
  {
    id: "exercise-open-chords-3-four-beat-changes",
    title: "Four Beat Changes",
    purpose: "Introduce rhythm while maintaining clean transitions.",
    objective: "Stay in time while changing G to C every four beats.",
    instructionSteps: [
      "Strum G for four beats.",
      "Change to C.",
      "Strum C for four beats.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "You stay in time while changing chords.",
    definitionOfDone: "You stay in time while changing chords.",
    commonMistakes: [
      "Pausing during the change",
      "Rushing into C",
      "Letting the strumming hand stop"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-3-two-beat-changes",
    title: "Two Beat Changes",
    purpose: "Increase transition speed.",
    objective: "Change between G and C every two beats while staying clean.",
    instructionSteps: [
      "Play G for two beats.",
      "Play C for two beats.",
      "Continue."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Changes remain mostly clean.",
    definitionOfDone: "Changes remain mostly clean.",
    commonMistakes: [
      "Sacrificing clean sound for speed",
      "Moving the whole hand too far",
      "Losing the beat"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-3-one-beat-changes",
    title: "One Beat Changes",
    purpose: "Build confidence changing chords every bar.",
    objective: "Alternate G and C every beat while keeping accuracy.",
    instructionSteps: [
      "Alternate G and C every beat.",
      "Slow down if accuracy drops."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Maintain rhythm with mostly clean chord changes.",
    definitionOfDone: "Maintain rhythm with mostly clean chord changes.",
    commonMistakes: [
      "Chasing speed",
      "Letting accuracy collapse",
      "Tensing the fretting hand"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-3-rhythm-review",
    title: "Rhythm Review",
    purpose: "Combine all previous exercises into continuous playing.",
    objective: "Play continuously while maintaining relaxed hands, clean chords, steady rhythm, and minimal finger movement.",
    instructionSteps: [
      "Play G and C continuously for five minutes.",
      "Maintain relaxed hands.",
      "Keep chords clean.",
      "Keep rhythm steady.",
      "Use minimal finger movement."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Play G and C continuously for five minutes with relaxed hands, clean chords, steady rhythm, and minimal finger movement.",
    definitionOfDone: "Play G and C continuously for five minutes with relaxed hands, clean chords, steady rhythm, and minimal finger movement.",
    commonMistakes: [
      "Forgetting to stay relaxed",
      "Letting rhythm drift",
      "Letting fingers fly away from the strings"
    ],
    chordNames: ["G", "C"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  }
].forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-open-chords-3",
    instructions: exercise.instructionSteps.join(" "),
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-open-chords-3",
  lessonId: "lesson-open-chords-3",
  title: "Efficient Chord Changes",
  purpose: "Pass if G and C changes are mostly clean, finger movement is controlled, rhythm remains steady, and Rob no longer pauses before every change.",
  requirements: [
    "G and C changes are mostly clean",
    "Finger movement is controlled",
    "Rhythm remains steady",
    "You no longer pause before every change"
  ],
  passRule: "Pass if G and C changes are mostly clean, finger movement is controlled, rhythm remains steady, and Rob no longer pauses before every change.",
  completed: false
});

const lessonFourExerciseIds = [
  "exercise-open-chords-4-learning-d-major-shape",
  "exercise-open-chords-4-d-major-string-check",
  "exercise-open-chords-4-build-d-slowly",
  "exercise-open-chords-4-g-to-d-changes",
  "exercise-open-chords-4-c-to-d-changes",
  "exercise-open-chords-4-random-chord-builder",
  "exercise-open-chords-4-clean-chord-review"
];

upsertAcademyItem("lessons", {
  id: "lesson-open-chords-4",
  missionId: "mission-open-chord-foundations",
  lessonNumber: 4,
  title: "Adding D Major",
  description: "Learn the D major chord and integrate it smoothly with the G and C chords already learned.",
  objectiveHeading: "Lesson Goal",
  objective: "Learn the D major chord and integrate it smoothly with the G and C chords already learned.",
  whyThisLesson: "Adding D major completes one of the most common beginner chord groups. Thousands of songs rely on G, C and D. Today’s goal is not speed — it is building a clean, reliable D major chord and learning how it fits into your existing playing.",
  estimatedMinutes: 35,
  skillIds: [
    "skill-open-chords",
    "skill-chord-changes",
    "skill-rhythm",
    "skill-timing"
  ],
  exercises: lessonFourExerciseIds,
  checkpoint: "checkpoint-open-chords-4",
  completed: false,
  missionContext: "This lesson adds D major to the G and C chords already learned.",
  why: "Adding D major completes one of the most common beginner chord groups. Thousands of songs rely on G, C and D.",
  watch: {
    title: "How D major fits with G and C",
    provider: "YouTube",
    url: "",
    note: "Add a video later showing D major fingering and G-C-D movement.",
    mediaLinks: []
  },
  listen: {
    title: "Teach Rob to listen for",
    items: [
      "buzzing on the high strings",
      "accidentally hitting the low E string",
      "muted notes inside the D chord",
      "late changes into D",
      "loss of rhythm during G to D or C to D"
    ]
  },
  coachNotes: [
    "D major is a small chord shape, which means precision matters.",
    "If something buzzes, don’t squeeze harder.",
    "Identify which finger is causing the problem and adjust its position."
  ],
  definitionOfDone: [
    "D major rings clearly.",
    "G, C and D can all be built confidently.",
    "Chord changes remain mostly clean.",
    "You understand which strings should and should not be played."
  ],
  commonMistakes: [
    "Fingers too flat.",
    "Touching neighbouring strings.",
    "Forgetting that the low E string is not played.",
    "Moving the whole hand instead of one finger."
  ],
  performanceTest: {
    title: "D Major Foundations",
    requirements: [
      "D major rings clearly",
      "G, C and D can all be built confidently",
      "Chord changes remain mostly clean",
      "You understand which strings should and should not be played"
    ],
    passRule: "Pass if D major rings clearly, G, C and D can all be built confidently, chord changes remain mostly clean, and Rob understands correct string selection."
  },
  practiceJournal: [
    "What felt different about D major?",
    "Which transition was hardest?",
    "Which string buzzed most often?",
    "What will you focus on before the next lesson?"
  ]
});

[
  {
    id: "exercise-open-chords-4-learning-d-major-shape",
    title: "Learning the D Major Shape",
    purpose: "Learn the D major fingering accurately.",
    objective: "Build the D major chord from memory.",
    instructionSteps: [
      "Study the D major chord diagram.",
      "Place one finger at a time.",
      "Pause after placing each finger.",
      "When complete, check each finger before strumming."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can build D major without looking at the diagram.",
    definitionOfDone: "You can build D major without looking at the diagram.",
    commonMistakes: [
      "Fingers too flat",
      "Touching neighbouring strings",
      "Forgetting that the low E string is not played"
    ],
    chordNames: ["D"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-4-d-major-string-check",
    title: "D Major String Check",
    purpose: "Check every string individually.",
    objective: "Identify muted or buzzing strings.",
    instructionSteps: [
      "Form D major.",
      "Pick each string individually.",
      "If one buzzes, identify the finger causing it.",
      "Correct only that finger.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "All intended strings ring clearly.",
    definitionOfDone: "All intended strings ring clearly.",
    commonMistakes: [
      "Strumming without checking individual strings",
      "Accidentally hitting the low E string",
      "Moving the whole hand instead of one finger"
    ],
    chordNames: ["D"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-4-build-d-slowly",
    title: "Build D Slowly",
    purpose: "Develop accurate finger placement.",
    objective: "Build the chord with control.",
    instructionSteps: [
      "Place the first finger.",
      "Check the note.",
      "Add the second finger.",
      "Check again.",
      "Add the third finger.",
      "Play each string."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can consistently build a clean D chord.",
    definitionOfDone: "You can consistently build a clean D chord.",
    commonMistakes: [
      "Trying to place all fingers together",
      "Looking away before checking the strings",
      "Rushing"
    ],
    chordNames: ["D"],
    skillIds: ["skill-open-chords"]
  },
  {
    id: "exercise-open-chords-4-g-to-d-changes",
    title: "G to D Changes",
    purpose: "Introduce movement between familiar and new chords.",
    objective: "Maintain rhythm while changing chords.",
    instructionSteps: [
      "Play G for four beats.",
      "Change to D.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Mostly clean transitions while staying in time.",
    definitionOfDone: "Mostly clean transitions while staying in time.",
    commonMistakes: [
      "Lifting fingers too high",
      "Pausing before changing",
      "Losing the beat"
    ],
    chordNames: ["G", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-4-c-to-d-changes",
    title: "C to D Changes",
    purpose: "Develop another common chord transition.",
    objective: "Move efficiently between C and D.",
    instructionSteps: [
      "Play four beats of C.",
      "Play four beats of D.",
      "Continue at 60 BPM."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Smooth transitions with mostly clean chords.",
    definitionOfDone: "Smooth transitions with mostly clean chords.",
    commonMistakes: [
      "Watching only one finger",
      "Moving too quickly",
      "Forgetting correct string selection"
    ],
    chordNames: ["C", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-4-random-chord-builder",
    title: "Random Chord Builder",
    purpose: "Improve chord recall.",
    objective: "Build G, C or D on command.",
    instructionSteps: [
      "Randomly choose G, C or D.",
      "Build the chord.",
      "Check every string.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "All three chords can be built confidently.",
    definitionOfDone: "All three chords can be built confidently.",
    commonMistakes: [
      "Hesitation",
      "Incorrect finger order",
      "Rushing into the next chord"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-open-chords", "skill-chord-changes"]
  },
  {
    id: "exercise-open-chords-4-clean-chord-review",
    title: "Clean Chord Review",
    purpose: "Consolidate today’s learning.",
    objective: "Play G, C and D with consistent quality.",
    instructionSteps: [
      "Alternate between all three chords slowly.",
      "Check every string.",
      "Fix one problem at a time.",
      "Keep the movement relaxed."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Each chord sounds clean and confident.",
    definitionOfDone: "Each chord sounds clean and confident.",
    commonMistakes: [
      "Ignoring string selection",
      "Strumming over muted notes",
      "Rushing the review"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-open-chords", "skill-chord-changes"]
  }
].forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-open-chords-4",
    instructions: exercise.instructionSteps.join(" "),
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-open-chords-4",
  lessonId: "lesson-open-chords-4",
  title: "D Major Foundations",
  purpose: "Pass if D major rings clearly, G, C and D can all be built confidently, chord changes remain mostly clean, and Rob understands correct string selection.",
  requirements: [
    "D major rings clearly",
    "G, C and D can all be built confidently",
    "Chord changes remain mostly clean",
    "You understand which strings should and should not be played"
  ],
  passRule: "Pass if D major rings clearly, G, C and D can all be built confidently, chord changes remain mostly clean, and Rob understands correct string selection.",
  completed: false
});

const lessonFiveExerciseIds = [
  "exercise-open-chords-5-three-chord-warm-up",
  "exercise-open-chords-5-four-beat-progression",
  "exercise-open-chords-5-two-beat-progression",
  "exercise-open-chords-5-one-beat-progression",
  "exercise-open-chords-5-recovery-practice",
  "exercise-open-chords-5-dynamic-control",
  "exercise-open-chords-5-continuous-performance"
];

upsertAcademyItem("lessons", {
  id: "lesson-open-chords-5",
  missionId: "mission-open-chord-foundations",
  lessonNumber: 5,
  title: "Three-Chord Movement",
  description: "Develop smooth movement between G, C and D while maintaining steady rhythm.",
  objectiveHeading: "Lesson Goal",
  objective: "Develop smooth movement between G, C and D while maintaining steady rhythm.",
  whyThisLesson: "Knowing chord shapes isn’t enough. Songs require continuous movement between chords while keeping time. Today you’ll begin playing like a rhythm guitarist instead of practising isolated chords.",
  estimatedMinutes: 35,
  skillIds: [
    "skill-open-chords",
    "skill-chord-changes",
    "skill-rhythm",
    "skill-strumming",
    "skill-timing",
    "skill-song-performance"
  ],
  exercises: lessonFiveExerciseIds,
  checkpoint: "checkpoint-open-chords-5",
  completed: false,
  missionContext: "This lesson turns G, C and D into continuous rhythm guitar movement.",
  why: "Knowing chord shapes isn’t enough. Songs require continuous movement between chords while keeping time.",
  watch: {
    title: "How three-chord rhythm movement works",
    provider: "YouTube",
    url: "",
    note: "Add a video later showing G-C-D movement with recovery from mistakes.",
    mediaLinks: []
  },
  listen: {
    title: "Teach Rob to listen for",
    items: [
      "steady pulse",
      "smooth transitions",
      "recovery after mistakes",
      "volume changes that do not disturb timing",
      "chords that land late"
    ]
  },
  coachNotes: [
    "Mistakes happen.",
    "Your job is not to stop them — your job is to recover without stopping the rhythm.",
    "Keep the beat moving even when the chord is imperfect."
  ],
  definitionOfDone: [
    "You can move between G, C and D without stopping.",
    "Rhythm remains steady.",
    "Most chord changes are clean.",
    "You recover from mistakes instead of restarting."
  ],
  commonMistakes: [
    "Stopping immediately after a mistake.",
    "Restarting every mistake.",
    "Letting volume changes affect rhythm.",
    "Starting too fast."
  ],
  performanceTest: {
    title: "Three-Chord Performance",
    requirements: [
      "You can move between G, C and D without stopping",
      "Rhythm remains steady",
      "Most chord changes are clean",
      "You recover from mistakes instead of restarting"
    ],
    passRule: "Pass if Rob can move between G, C and D without stopping, keep rhythm steady, make mostly clean changes, and recover from mistakes instead of restarting."
  },
  practiceJournal: [
    "Which transition now feels easiest?",
    "Which still needs work?",
    "Did you recover from mistakes more naturally today?",
    "What would you like to improve before the next lesson?"
  ],
  recommendedSongs: [
    {
      title: "Wild Thing",
      artist: "The Troggs",
      note: "Excellent for repeated G-C-D movement."
    },
    {
      title: "La Bamba",
      artist: "Ritchie Valens",
      note: "Simple, repetitive three-chord progression."
    },
    {
      title: "Leaving on a Jet Plane",
      artist: "John Denver",
      note: "Reinforces smooth open chord transitions."
    }
  ]
});

[
  {
    id: "exercise-open-chords-5-three-chord-warm-up",
    title: "Three-Chord Warm-up",
    purpose: "Reconnect with all three chords.",
    objective: "Play each chord cleanly.",
    instructionSteps: [
      "Play G, C and D individually.",
      "Check every string before moving on."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "All three chords sound clean.",
    definitionOfDone: "All three chords sound clean.",
    commonMistakes: [
      "Rushing",
      "Ignoring muted strings",
      "Starting too fast"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-open-chords", "skill-timing"]
  },
  {
    id: "exercise-open-chords-5-four-beat-progression",
    title: "Four Beat Progression",
    purpose: "Build confidence changing between all three chords.",
    objective: "Maintain rhythm.",
    instructionSteps: [
      "Play G, C, D, then G.",
      "Use four beats for each chord.",
      "Complete several cycles without stopping."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Complete several cycles without stopping.",
    definitionOfDone: "Complete several cycles without stopping.",
    commonMistakes: [
      "Stopping between chords",
      "Rushing D",
      "Forgetting to recover after mistakes"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-5-two-beat-progression",
    title: "Two Beat Progression",
    purpose: "Increase transition speed.",
    objective: "Reduce hesitation.",
    instructionSteps: [
      "Play the same G, C, D, G progression.",
      "Use two beats per chord.",
      "Stay relaxed and in time."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Remain in time with mostly clean changes.",
    definitionOfDone: "Remain in time with mostly clean changes.",
    commonMistakes: [
      "Tensing up",
      "Losing the beat",
      "Moving before the next chord is prepared"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-5-one-beat-progression",
    title: "One Beat Progression",
    purpose: "Develop efficient chord movement.",
    objective: "Change chords every beat.",
    instructionSteps: [
      "Continue the G, C, D, G progression.",
      "Change chords every beat.",
      "Keep relaxed hands."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Maintain rhythm even if every change isn’t perfect.",
    definitionOfDone: "Maintain rhythm even if every change isn’t perfect.",
    commonMistakes: [
      "Expecting perfection",
      "Stopping after a rough chord",
      "Letting the strumming hand freeze"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
  },
  {
    id: "exercise-open-chords-5-recovery-practice",
    title: "Recovery Practice",
    purpose: "Learn to continue after mistakes.",
    objective: "Never stop the rhythm.",
    instructionSteps: [
      "If a chord is wrong, continue strumming.",
      "Correct it during the next change.",
      "Do not restart the progression."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Recover naturally without restarting.",
    definitionOfDone: "Recover naturally without restarting.",
    commonMistakes: [
      "Stopping immediately",
      "Looking frustrated",
      "Restarting every mistake"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-rhythm", "skill-song-performance"]
  },
  {
    id: "exercise-open-chords-5-dynamic-control",
    title: "Dynamic Control",
    purpose: "Develop control over volume.",
    objective: "Maintain rhythm while changing dynamics.",
    instructionSteps: [
      "Play the G, C, D, G progression softly.",
      "Play it at medium volume.",
      "Play it loudly.",
      "Return to medium volume.",
      "Keep steady timing."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Volume changes without affecting rhythm.",
    definitionOfDone: "Volume changes without affecting rhythm.",
    commonMistakes: [
      "Speeding up when playing louder",
      "Losing clarity when playing softly",
      "Changing volume with tension"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"]
  },
  {
    id: "exercise-open-chords-5-continuous-performance",
    title: "Continuous Performance",
    purpose: "Bring today’s skills together.",
    objective: "Play continuously for five minutes.",
    instructionSteps: [
      "Continue moving between G, C and D.",
      "Stay relaxed.",
      "Keep the beat.",
      "Recover from mistakes.",
      "Focus on enjoying the movement rather than perfection."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Five minutes of continuous playing with confident recovery from mistakes.",
    definitionOfDone: "Five minutes of continuous playing with confident recovery from mistakes.",
    commonMistakes: [
      "Restarting after mistakes",
      "Forgetting to breathe",
      "Chasing perfection instead of continuity"
    ],
    chordNames: ["G", "C", "D"],
    skillIds: ["skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"]
  }
].forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-open-chords-5",
    instructions: exercise.instructionSteps.join(" "),
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-open-chords-5",
  lessonId: "lesson-open-chords-5",
  title: "Three-Chord Performance",
  purpose: "Pass if Rob can move between G, C and D without stopping, keep rhythm steady, make mostly clean changes, and recover from mistakes instead of restarting.",
  requirements: [
    "You can move between G, C and D without stopping",
    "Rhythm remains steady",
    "Most chord changes are clean",
    "You recover from mistakes instead of restarting"
  ],
  passRule: "Pass if Rob can move between G, C and D without stopping, keep rhythm steady, make mostly clean changes, and recover from mistakes instead of restarting.",
  completed: false
});

const moduleOneRemainingLessons = [
  {
    lesson: {
      id: "lesson-open-chords-6",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 6,
      title: "Rhythm and Timing",
      description: "Develop steady timing while changing between open chords.",
      objectiveHeading: "Lesson Goal",
      objective: "Develop steady timing while changing between open chords.",
      whyThisLesson: "Good rhythm matters more than perfect chords. A missed note is recoverable, but stopping the beat makes the song fall apart. This lesson teaches Rob to keep time even when his fretting hand is still catching up.",
      estimatedMinutes: 35,
      skillIds: ["skill-rhythm", "skill-timing", "skill-chord-changes", "skill-strumming"],
      missionContext: "This lesson makes the beat the priority while G, C and D changes continue developing.",
      why: "Good rhythm matters more than perfect chords. A missed note is recoverable, but stopping the beat makes the song fall apart.",
      watch: {
        title: "How to keep the beat while changing chords",
        provider: "YouTube",
        url: "",
        note: "Add a video later showing steady downstrokes and recovery at 60 BPM.",
        mediaLinks: []
      },
      listen: {
        title: "Teach Rob to listen for",
        items: ["steady counting", "the strumming hand stopping", "rushing into beat 1", "volume changes that break timing", "recovery after mistakes"]
      },
      coachNotes: [
        "Your strumming hand is the engine.",
        "Keep it moving.",
        "If your fretting hand makes a mistake, recover on the next beat instead of stopping."
      ],
      definitionOfDone: [
        "Rob can count 1-2-3-4 steadily.",
        "Rob can strum downstrokes at 60 BPM.",
        "Rob can change between G, C and D without stopping the rhythm.",
        "Rob can recover from mistakes without restarting."
      ],
      commonMistakes: ["Stopping to fix fingers.", "Losing the count.", "Freezing the strumming hand.", "Starting again after every mistake."],
      performanceTest: {
        title: "Keep the Beat",
        requirements: [
          "Rob can count 1-2-3-4 steadily",
          "Rob can strum downstrokes at 60 BPM",
          "Rob can change between G, C and D without stopping the rhythm",
          "Rob can recover from mistakes without restarting"
        ],
        passRule: "Pass if Rob can keep a steady beat at 60 BPM while changing between G, C and D and recovering naturally from mistakes."
      },
      practiceJournal: [
        "Did rhythm or chord accuracy break down first?",
        "Which chord change interrupted the beat most?",
        "Did counting out loud help?",
        "What should be reviewed next time?"
      ]
    },
    exercises: [
      {
        id: "exercise-open-chords-6-beat-awareness",
        title: "Beat Awareness",
        purpose: "Learn to feel the beat before playing.",
        objective: "Count steadily without rushing.",
        instructionSteps: ["Start the metronome at 60 BPM.", "Do not play yet.", "Count out loud: 1, 2, 3, 4.", "Tap your foot with each beat.", "Keep counting until it feels steady."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "You can count 1-2-3-4 steadily for one minute.",
        definitionOfDone: "You can count 1-2-3-4 steadily for one minute.",
        commonMistakes: ["Rushing the count", "Losing focus", "Starting guitar before feeling the beat"],
        chordNames: [],
        skillIds: ["skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-muted-string-downstrokes",
        title: "Muted String Downstrokes",
        purpose: "Isolate the strumming hand.",
        objective: "Strum evenly without worrying about chords.",
        instructionSteps: ["Lightly mute the strings with your fretting hand.", "Strum down once per beat.", "Listen for even volume.", "Keep the wrist loose."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady downstrokes without speeding up.",
        definitionOfDone: "One minute of steady downstrokes without speeding up.",
        commonMistakes: ["Locking the wrist", "Hitting too hard", "Strumming unevenly"],
        chordNames: [],
        skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-g-chord-timing",
        title: "G Chord Timing",
        purpose: "Apply timing to one clean chord.",
        objective: "Keep a steady beat on G.",
        instructionSteps: ["Form G major.", "Strum down once per beat.", "Keep counting 1-2-3-4.", "If the chord buzzes, keep the rhythm going and adjust."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady G downstrokes.",
        definitionOfDone: "One minute of steady G downstrokes.",
        commonMistakes: ["Stopping to fix fingers", "Losing the count", "Changing volume randomly"],
        chordNames: ["G"],
        skillIds: ["skill-open-chords", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-c-chord-timing",
        title: "C Chord Timing",
        purpose: "Apply timing to a harder chord.",
        objective: "Keep rhythm while playing C.",
        instructionSteps: ["Form C major.", "Start from the A string.", "Strum once per beat.", "Keep the rhythm steady."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady C downstrokes.",
        definitionOfDone: "One minute of steady C downstrokes.",
        commonMistakes: ["Hitting the low E string", "Muting the open G string", "Slowing down when checking fingers"],
        chordNames: ["C"],
        skillIds: ["skill-open-chords", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-four-beat-g-to-c",
        title: "Four Beat G to C",
        purpose: "Combine timing with chord changes.",
        objective: "Change chords without stopping the beat.",
        instructionSteps: ["Play G for four beats.", "Change to C for four beats.", "Keep counting out loud.", "If the change is messy, continue."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Three clean cycles without stopping.",
        definitionOfDone: "Three clean cycles without stopping.",
        commonMistakes: ["Pausing between chords", "Looking at both hands at once", "Losing beat 1"],
        chordNames: ["G", "C"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-four-beat-g-to-d",
        title: "Four Beat G to D",
        purpose: "Practise timing with D major.",
        objective: "Move from G to D while keeping the beat.",
        instructionSteps: ["Play G for four beats.", "Change to D for four beats.", "Keep the strumming hand moving."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Three cycles with mostly clean timing.",
        definitionOfDone: "Three cycles with mostly clean timing.",
        commonMistakes: ["Hitting the low E on D", "Rushing the change", "Freezing the strumming hand"],
        chordNames: ["G", "D"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-6-timing-recovery-drill",
        title: "Timing Recovery Drill",
        purpose: "Learn to recover from mistakes.",
        objective: "Continue the rhythm after errors.",
        instructionSteps: ["Play G, C and D in any order.", "If a chord is wrong, do not stop.", "Fix it on the next pass."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "You keep rhythm for two minutes without restarting.",
        definitionOfDone: "You keep rhythm for two minutes without restarting.",
        commonMistakes: ["Starting again after every mistake", "Getting frustrated", "Forgetting the beat matters most"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
      }
    ],
    checkpoint: {
      id: "checkpoint-open-chords-6",
      title: "Keep the Beat",
      purpose: "Check that Rob can keep the rhythm moving while changing between open chords.",
      requirements: [
        "Rob can count 1-2-3-4 steadily",
        "Rob can strum downstrokes at 60 BPM",
        "Rob can change between G, C and D without stopping the rhythm",
        "Rob can recover from mistakes without restarting"
      ],
      passRule: "Pass if Rob can keep a steady beat at 60 BPM while changing between G, C and D and recovering naturally from mistakes."
    }
  },
  {
    lesson: {
      id: "lesson-open-chords-7",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 7,
      title: "Basic Strumming Patterns",
      description: "Learn simple strumming patterns while keeping timing steady.",
      objectiveHeading: "Lesson Goal",
      objective: "Learn simple strumming patterns while keeping timing steady.",
      whyThisLesson: "Strumming is what turns chords into music. The same chords can feel completely different depending on the rhythm of the right hand.",
      estimatedMinutes: 35,
      skillIds: ["skill-strumming", "skill-rhythm", "skill-timing", "skill-chord-changes"],
      missionContext: "This lesson adds simple right-hand patterns to the open chords already learned.",
      why: "Strumming is what turns chords into music. The same chords can feel completely different depending on the rhythm of the right hand.",
      watch: {
        title: "How simple strumming patterns work",
        provider: "YouTube",
        url: "",
        note: "Add a video later showing downstrokes, upstrokes and relaxed pick motion.",
        mediaLinks: []
      },
      listen: {
        title: "Teach Rob to listen for",
        items: ["even downstrokes", "awkward upstrokes", "speeding up", "pick angle changes", "right-hand tension"]
      },
      coachNotes: [
        "Do not try to make the pattern fancy.",
        "A simple pattern played evenly sounds better than a complicated pattern played badly."
      ],
      definitionOfDone: [
        "Rob can play steady downstrokes.",
        "Rob can add simple upstrokes.",
        "Rob can keep timing through G, C and D.",
        "Rob can hear how pick angle changes sound."
      ],
      commonMistakes: ["Strumming too hard.", "Tensing the wrist.", "Digging too deep on the upstroke.", "Focusing only on speed."],
      performanceTest: {
        title: "First Strumming Patterns",
        requirements: [
          "Rob can play steady downstrokes",
          "Rob can add simple upstrokes",
          "Rob can keep timing through G, C and D",
          "Rob can hear how pick angle changes sound"
        ],
        passRule: "Pass if Rob can play simple strumming patterns evenly while keeping time through G, C and D."
      },
      practiceJournal: [
        "Which pattern felt most natural?",
        "Did the upstroke feel awkward?",
        "Did pick angle change the sound?",
        "What should be practised again?"
      ]
    },
    exercises: [
      {
        id: "exercise-open-chords-7-downstrokes-only",
        title: "Downstrokes Only",
        purpose: "Establish a reliable strumming base.",
        objective: "Play steady downstrokes on beat.",
        instructionSteps: ["Choose G major.", "Strum down once per beat.", "Count 1-2-3-4.", "Keep the wrist loose."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady downstrokes.",
        definitionOfDone: "One minute of steady downstrokes.",
        commonMistakes: ["Strumming too hard", "Tensing the wrist", "Losing the count"],
        chordNames: ["G"],
        skillIds: ["skill-strumming", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-7-down-down-down-down",
        title: "Down Down Down Down Pattern",
        purpose: "Build confidence with a full bar pattern.",
        objective: "Strum every beat evenly.",
        instructionSteps: ["Play G for one bar.", "Play C for one bar.", "Use four downstrokes per bar."],
        durationMinutes: 5,
        tempo: "70 BPM",
        passCriteria: "Complete five clean G to C cycles.",
        definitionOfDone: "Complete five clean G to C cycles.",
        commonMistakes: ["Pausing at chord changes", "Uneven volume", "Speeding up"],
        chordNames: ["G", "C"],
        skillIds: ["skill-strumming", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-7-down-down-up",
        title: "Down Down Up Pattern",
        purpose: "Introduce upstrokes.",
        objective: "Add an upstroke without losing timing.",
        instructionSteps: ["Mute the strings first.", "Play: down, down, up.", "Keep the motion relaxed.", "Then try it on G."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Pattern feels controlled and even.",
        definitionOfDone: "Pattern feels controlled and even.",
        commonMistakes: ["Digging too deep on the upstroke", "Flicking from the elbow", "Tensing the pick hand"],
        chordNames: ["G"],
        skillIds: ["skill-strumming", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-7-down-down-up-g-c",
        title: "Down Down Up on G and C",
        purpose: "Apply the new pattern to chord changes.",
        objective: "Keep the pattern going through chord changes.",
        instructionSteps: ["Play G using down, down, up.", "Change to C.", "Repeat slowly."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Several cycles without losing the pattern.",
        definitionOfDone: "Several cycles without losing the pattern.",
        commonMistakes: ["Stopping the right hand", "Changing too late", "Overthinking the upstroke"],
        chordNames: ["G", "C"],
        skillIds: ["skill-strumming", "skill-chord-changes", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-7-quiet-and-loud-strumming",
        title: "Quiet and Loud Strumming",
        purpose: "Develop control over dynamics.",
        objective: "Change volume without changing tempo.",
        instructionSteps: ["Play G softly for one bar.", "Play G louder for one bar.", "Repeat with C and D."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Volume changes while tempo stays steady.",
        definitionOfDone: "Volume changes while tempo stays steady.",
        commonMistakes: ["Speeding up when playing louder", "Hitting too hard", "Losing accuracy"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-strumming", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-7-pick-angle-experiment",
        title: "Pick Angle Experiment",
        purpose: "Understand why strums sound different.",
        objective: "Notice how pick angle affects tone.",
        instructionSteps: ["Strum G with the pick flat.", "Strum G with the pick slightly angled.", "Try soft and firm grip.", "Notice what sounds smoother."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Rob can describe which pick angle sounds best.",
        definitionOfDone: "Rob can describe which pick angle sounds best.",
        commonMistakes: ["Holding the pick too tightly", "Digging too deep into the strings", "Ignoring tone differences"],
        chordNames: ["G"],
        skillIds: ["skill-strumming"]
      },
      {
        id: "exercise-open-chords-7-pattern-choice-practice",
        title: "Pattern Choice Practice",
        purpose: "Choose the right pattern for the moment.",
        objective: "Compare two simple patterns.",
        instructionSteps: ["Play G-C-D-G with downstrokes only.", "Then play the same progression with down, down, up.", "Notice which feels more musical."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Rob can play both patterns slowly.",
        definitionOfDone: "Rob can play both patterns slowly.",
        commonMistakes: ["Changing pattern before comfortable", "Losing timing", "Focusing only on speed"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-strumming", "skill-rhythm", "skill-timing"]
      }
    ],
    checkpoint: {
      id: "checkpoint-open-chords-7",
      title: "First Strumming Patterns",
      purpose: "Check that Rob can play simple strumming patterns evenly while keeping time.",
      requirements: [
        "Rob can play steady downstrokes",
        "Rob can add simple upstrokes",
        "Rob can keep timing through G, C and D",
        "Rob can hear how pick angle changes sound"
      ],
      passRule: "Pass if Rob can play simple strumming patterns evenly while keeping time through G, C and D."
    }
  },
  {
    lesson: {
      id: "lesson-open-chords-8",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 8,
      title: "Cleaner Sound and Muting",
      description: "Learn how to reduce unwanted string noise and make open chords sound cleaner.",
      objectiveHeading: "Lesson Goal",
      objective: "Learn how to reduce unwanted string noise and make open chords sound cleaner.",
      whyThisLesson: "As playing improves, noise becomes more noticeable. Cleaner sound comes from controlling what should ring and what should stay quiet.",
      estimatedMinutes: 35,
      skillIds: ["skill-open-chords", "skill-muting", "skill-strumming", "skill-timing"],
      missionContext: "This lesson helps the same open chords sound cleaner by controlling unwanted strings.",
      why: "As playing improves, noise becomes more noticeable. Cleaner sound comes from controlling what should ring and what should stay quiet.",
      watch: {
        title: "How clean open chord muting works",
        provider: "YouTube",
        url: "",
        note: "Add a video later showing string targeting and simple touch muting.",
        mediaLinks: []
      },
      listen: {
        title: "Teach Rob to listen for",
        items: ["extra low strings", "muddy bass notes", "muted notes that should ring", "wide strumming motion", "clean versus messy chord sound"]
      },
      coachNotes: [
        "Muting is not only for advanced players.",
        "Even simple open chords need control.",
        "The goal is not silence everywhere - it is letting the right strings ring."
      ],
      definitionOfDone: [
        "Rob can identify which strings belong in G, C and D.",
        "Rob can avoid unwanted bass strings.",
        "Rob can reduce unwanted noise.",
        "Rob can hear the difference between clean and messy strumming."
      ],
      commonMistakes: ["Treating every chord as six strings.", "Ignoring muted strings.", "Swinging too widely.", "Assuming all extra strings sound fine."],
      performanceTest: {
        title: "Cleaner Open Chords",
        requirements: [
          "Rob can identify which strings belong in G, C and D",
          "Rob can avoid unwanted bass strings",
          "Rob can reduce unwanted noise",
          "Rob can hear the difference between clean and messy strumming"
        ],
        passRule: "Pass if Rob can control which strings ring in G, C and D and hear the difference between clean and messy strumming."
      },
      practiceJournal: [
        "Which chord was hardest to control?",
        "Did unwanted bass strings appear?",
        "Did aiming the pick help?",
        "What should be reviewed before playing songs?"
      ]
    },
    exercises: [
      {
        id: "exercise-open-chords-8-what-should-ring",
        title: "What Should Ring?",
        purpose: "Understand intentional string choice.",
        objective: "Know which strings belong in each chord.",
        instructionSteps: ["Play G and notice all six strings ring.", "Play C and avoid the low E string.", "Play D and avoid the low E and A strings.", "Say out loud which strings belong."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Rob can name which strings to play for G, C and D.",
        definitionOfDone: "Rob can name which strings to play for G, C and D.",
        commonMistakes: ["Treating every chord as six strings", "Ignoring muted strings", "Not listening to the bass note"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-open-chords", "skill-muting"]
      },
      {
        id: "exercise-open-chords-8-c-low-e-avoidance",
        title: "C Major Low E Avoidance",
        purpose: "Avoid unwanted bass notes.",
        objective: "Play C without hitting low E.",
        instructionSteps: ["Form C.", "Slowly strum from the A string.", "Stop if the low E rings.", "Repeat until the target feels natural."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "C rings without the low E.",
        definitionOfDone: "C rings without the low E.",
        commonMistakes: ["Starting the strum too high", "Swinging too widely", "Not aiming the pick"],
        chordNames: ["C"],
        skillIds: ["skill-open-chords", "skill-muting", "skill-strumming"]
      },
      {
        id: "exercise-open-chords-8-d-string-targeting",
        title: "D Major String Targeting",
        purpose: "Develop accuracy with smaller chord shapes.",
        objective: "Strum D from the D string.",
        instructionSteps: ["Form D.", "Aim the pick at the D string.", "Strum only D, G, B and high E.", "Repeat slowly."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "D sounds clear without low string noise.",
        definitionOfDone: "D sounds clear without low string noise.",
        commonMistakes: ["Hitting A or low E", "Strumming too aggressively", "Not aiming before the stroke"],
        chordNames: ["D"],
        skillIds: ["skill-open-chords", "skill-muting", "skill-strumming"]
      },
      {
        id: "exercise-open-chords-8-left-hand-touch-muting",
        title: "Left-Hand Touch Muting",
        purpose: "Learn gentle muting.",
        objective: "Stop unwanted strings with light contact.",
        instructionSteps: ["Form C.", "Let the tip of the ring finger lightly touch the low E if comfortable.", "Do not press it down.", "Strum and listen."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Unwanted string noise is reduced.",
        definitionOfDone: "Unwanted string noise is reduced.",
        commonMistakes: ["Pressing the muted string down", "Changing the chord shape too much", "Forcing an uncomfortable position"],
        chordNames: ["C"],
        skillIds: ["skill-muting", "skill-open-chords"]
      },
      {
        id: "exercise-open-chords-8-right-hand-control",
        title: "Right-Hand Control",
        purpose: "Improve picking accuracy.",
        objective: "Control where the strum begins.",
        instructionSteps: ["Play G from low E.", "Play C from A.", "Play D from D.", "Repeat slowly."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Rob can start each chord from the correct string.",
        definitionOfDone: "Rob can start each chord from the correct string.",
        commonMistakes: ["Using the same strum for every chord", "Not looking before starting", "Swinging too wide"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-strumming", "skill-muting"]
      },
      {
        id: "exercise-open-chords-8-noise-check-progression",
        title: "Noise Check Progression",
        purpose: "Combine muting with chord changes.",
        objective: "Play G-C-D while controlling unwanted strings.",
        instructionSteps: ["Play G for four beats.", "Play C for four beats.", "Play D for four beats.", "Listen for extra low strings."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Progression sounds cleaner than at the start.",
        definitionOfDone: "Progression sounds cleaner than at the start.",
        commonMistakes: ["Ignoring bass strings", "Losing rhythm while aiming", "Overcorrecting and missing strings"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-muting", "skill-chord-changes", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-8-clean-vs-messy-comparison",
        title: "Clean vs Messy Comparison",
        purpose: "Train the ear.",
        objective: "Hear the difference between controlled and uncontrolled strumming.",
        instructionSteps: ["Deliberately play C with the low E ringing.", "Then play it correctly.", "Do the same with D.", "Notice the difference."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Rob can hear when extra strings are ringing.",
        definitionOfDone: "Rob can hear when extra strings are ringing.",
        commonMistakes: ["Not exaggerating the contrast", "Assuming it all sounds the same", "Ignoring muddy bass notes"],
        chordNames: ["C", "D"],
        skillIds: ["skill-muting", "skill-open-chords"]
      }
    ],
    checkpoint: {
      id: "checkpoint-open-chords-8",
      title: "Cleaner Open Chords",
      purpose: "Check that Rob can control which strings ring and hear unwanted noise.",
      requirements: [
        "Rob can identify which strings belong in G, C and D",
        "Rob can avoid unwanted bass strings",
        "Rob can reduce unwanted noise",
        "Rob can hear the difference between clean and messy strumming"
      ],
      passRule: "Pass if Rob can control which strings ring in G, C and D and hear the difference between clean and messy strumming."
    }
  },
  {
    lesson: {
      id: "lesson-open-chords-9",
      missionId: "mission-open-chord-foundations",
      lessonNumber: 9,
      title: "Making Music",
      description: "Bring together everything learned throughout Module 1 by playing complete songs using G, C and D major.",
      objectiveHeading: "Lesson Goal",
      objective: "Bring together everything learned throughout Module 1 by playing complete songs using G, C and D major.",
      whyThisLesson: "Until now you have been practising individual skills. Today you begin combining them into real music. The goal is not perfection. The goal is to maintain rhythm, recover from mistakes and enjoy playing.",
      estimatedMinutes: 35,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-muting", "skill-song-performance"],
      missionContext: "This final lesson brings the Module 1 foundations into complete songs.",
      why: "Until now you have been practising individual skills. Today you begin combining them into real music.",
      watch: {
        title: "How to approach a first complete song",
        provider: "YouTube",
        url: "",
        note: "Add a video later showing a complete G-C-D song performance with steady recovery.",
        mediaLinks: []
      },
      listen: {
        title: "Teach Rob to listen for",
        items: ["steady rhythm through a whole song", "natural recovery", "clean chord starts", "strumming hand continuity", "enjoying the groove"]
      },
      coachNotes: [
        "This is the first time you’ll spend more time making music than practising individual exercises.",
        "If you make a mistake, keep going.",
        "Most listeners notice rhythm long before they notice an occasional missed chord."
      ],
      definitionOfDone: [
        "All three chords ring clearly.",
        "G-C-D movement continues without stopping.",
        "Featured song progressions feel comfortable.",
        "Rob can play through both featured songs from beginning to end."
      ],
      commonMistakes: ["Restarting after every mistake.", "Chasing the recording speed.", "Skipping the warm-up.", "Stopping the strumming hand."],
      performanceTest: {
        title: "Module 1 Assessment",
        requirements: [
          "Build G major confidently",
          "Build C major confidently",
          "Build D major confidently",
          "Play each chord cleanly",
          "Change between G, C and D without stopping",
          "Maintain steady rhythm at 60 BPM",
          "Recover naturally from mistakes",
          "Complete both featured songs from beginning to end"
        ],
        passRule: "Pass if the foundational Module 1 skills are reliable enough to continue into Module 2. If not, review exercises previously marked Needs More Practice."
      },
      practiceJournal: [
        "Which song felt more natural?",
        "Where did rhythm feel most solid?",
        "Where did mistakes appear?",
        "What should be reviewed before Module 2?"
      ],
      recommendedSongs: [
        {
          title: "Three Little Birds",
          artist: "Bob Marley",
          note: "Reinforces relaxed rhythm and steady G, C and D chord changes."
        },
        {
          title: "Leaving on a Jet Plane",
          artist: "John Denver",
          note: "Develops confidence playing a complete song from beginning to end."
        }
      ],
      featuredSongs: [
        {
          title: "Three Little Birds",
          artist: "Bob Marley",
          purpose: "Reinforce relaxed rhythm and steady chord changes.",
          coachNotes: ["Focus on keeping time.", "Don’t chase the recording.", "Enjoy the groove."],
          suggestedPractice: "Play through the song several times rather than restarting after mistakes."
        },
        {
          title: "Leaving on a Jet Plane",
          artist: "John Denver",
          purpose: "Develop confidence playing a complete song from beginning to end.",
          coachNotes: ["Listen for clean chord transitions.", "Keep your strumming hand moving.", "Finish the song even if mistakes occur."],
          suggestedPractice: "Aim for a complete performance rather than perfection."
        }
      ]
    },
    exercises: [
      {
        id: "exercise-open-chords-9-module-warm-up",
        title: "Module Warm-up",
        purpose: "Reconnect with G, C and D.",
        objective: "Play each chord cleanly before beginning songs.",
        instructionSteps: ["Play G.", "Play C.", "Play D.", "Pick every string individually.", "Correct any muted notes."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "All three chords ring clearly.",
        definitionOfDone: "All three chords ring clearly.",
        commonMistakes: ["Rushing the warm-up", "Ignoring muted strings", "Starting songs before warming up"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-open-chords"]
      },
      {
        id: "exercise-open-chords-9-three-chord-flow",
        title: "Three-Chord Flow",
        purpose: "Reconnect with smooth chord changes.",
        objective: "Play G to C to D continuously.",
        instructionSteps: ["Use four beats per chord.", "Count aloud.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several cycles without stopping.",
        definitionOfDone: "Complete several cycles without stopping.",
        commonMistakes: ["Stopping after mistakes", "Losing the count", "Rushing chord changes"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-timing"]
      },
      {
        id: "exercise-open-chords-9-song-preparation",
        title: "Song Preparation",
        purpose: "Prepare for complete songs.",
        objective: "Play each featured song’s chord progression slowly before attempting the song.",
        instructionSteps: ["Practise each progression.", "Focus on rhythm.", "Ignore speed."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Chord progression feels comfortable.",
        definitionOfDone: "Chord progression feels comfortable.",
        commonMistakes: ["Chasing recording speed", "Skipping slow preparation", "Stopping after small mistakes"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-song-performance"]
      },
      {
        id: "exercise-open-chords-9-three-little-birds",
        title: "Featured Song: Three Little Birds",
        purpose: "Reinforce relaxed rhythm and steady chord changes.",
        objective: "Play through the song several times rather than restarting after mistakes.",
        instructionSteps: ["Use the G, C and D shapes from this module.", "Focus on keeping time.", "Do not chase the recording.", "Enjoy the groove.", "Keep going after mistakes."],
        durationMinutes: 10,
        tempo: "",
        passCriteria: "Play through the song while keeping steady rhythm.",
        definitionOfDone: "Play through the song while keeping steady rhythm.",
        commonMistakes: ["Restarting after mistakes", "Trying to match the recording too soon", "Forgetting to enjoy the groove"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-rhythm", "skill-strumming", "skill-song-performance"]
      },
      {
        id: "exercise-open-chords-9-leaving-on-a-jet-plane",
        title: "Featured Song: Leaving on a Jet Plane",
        purpose: "Develop confidence playing a complete song from beginning to end.",
        objective: "Aim for a complete performance rather than perfection.",
        instructionSteps: ["Use the G, C and D shapes from this module.", "Listen for clean chord transitions.", "Keep your strumming hand moving.", "Finish the song even if mistakes occur."],
        durationMinutes: 10,
        tempo: "",
        passCriteria: "Complete the song from beginning to end.",
        definitionOfDone: "Complete the song from beginning to end.",
        commonMistakes: ["Stopping the strumming hand", "Restarting after rough changes", "Focusing on perfection instead of completion"],
        chordNames: ["G", "C", "D"],
        skillIds: ["skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-song-performance"]
      }
    ],
    checkpoint: {
      id: "checkpoint-open-chords-9",
      title: "Module 1 Assessment",
      purpose: "Confirm that the foundational skills are becoming reliable before moving into Module 2.",
      requirements: [
        "Build G major confidently",
        "Build C major confidently",
        "Build D major confidently",
        "Play each chord cleanly",
        "Change between G, C and D without stopping",
        "Maintain steady rhythm at 60 BPM",
        "Recover naturally from mistakes",
        "Complete both featured songs from beginning to end"
      ],
      passRule: "Pass if the foundational Module 1 skills are reliable enough to continue into Module 2. If Needs More Practice is selected, review exercises previously marked Needs More Practice. Do not lock Module 2.",
      moduleSummary: {
        title: "Module 1 Complete",
        message: "Congratulations. You now have the foundations required to begin playing rhythm guitar.",
        preparingForNextModule: "In Module 2 you will build stronger rhythm skills, develop more natural strumming patterns and begin playing with greater confidence and consistency.",
        skillsDeveloped: [
          "Open chords",
          "Clean fretting",
          "Chord construction",
          "Chord transitions",
          "Basic rhythm",
          "Basic strumming",
          "String control",
          "Playing complete songs"
        ],
        featuredSongsCompleted: ["Three Little Birds", "Leaving on a Jet Plane"]
      }
    }
  }
];

moduleOneRemainingLessons.forEach(({ lesson, exercises, checkpoint }) => {
  const exerciseIds = exercises.map((exercise) => exercise.id);
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exerciseIds,
    checkpoint: checkpoint.id,
    completed: false
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

upsertAcademyItem("missions", {
  id: "mission-open-chord-foundations",
  featuredSongs: [
    {
      title: "Three Little Birds",
      artist: "Bob Marley",
      explanation: "Reinforces relaxed rhythm and steady G, C and D chord changes."
    },
    {
      title: "Leaving on a Jet Plane",
      artist: "John Denver",
      explanation: "Develops confidence playing a complete song from beginning to end."
    }
  ],
  moduleAssessment: {
    title: "Module 1 Assessment",
    purpose: "Confirm that the foundational skills are becoming reliable before moving into Module 2.",
    resultOptions: ["Pass", "Needs More Practice"],
    needsMorePracticeRecommendation: "Review any exercises previously marked Needs More Practice. Module 2 is not locked."
  },
  moduleSummary: {
    title: "Module 1 Complete",
    message: "Congratulations. You now have the foundations required to begin playing rhythm guitar.",
    preparingForNextModule: "In Module 2 you will build stronger rhythm skills, develop more natural strumming patterns and begin playing with greater confidence and consistency.",
    skillsDeveloped: [
      "Open chords",
      "Clean fretting",
      "Chord construction",
      "Chord transitions",
      "Basic rhythm",
      "Basic strumming",
      "String control",
      "Playing complete songs"
    ]
  }
});

upsertAcademyItem("missions", {
  id: "mission-rhythm-foundations",
  title: "Rhythm & Strumming Foundations",
  subtitle: "Develop steady, musical rhythm with simple strumming patterns.",
  dashboardSubtitle: "Build steady rhythm and musical strumming.",
  description: "Develop confident rhythm playing by introducing natural strumming, new open chords (Em and Am), and learning to keep the beat while playing complete songs.",
  whyItMatters: "Reliable rhythm turns chord shapes into music. This module develops the timing, strumming control, dynamics and groove needed to support complete songs.",
  estimatedSessions: "9-12 practice sessions",
  estimatedPracticeHours: "TBD",
  prerequisiteMissionIds: ["mission-open-chord-foundations"],
  skillsDeveloped: [
    "Steady timing",
    "Downstrokes",
    "Upstrokes",
    "Strumming patterns",
    "Rhythm consistency",
    "Dynamics",
    "Pick control",
    "Groove",
    "Chord endurance",
    "Em chord",
    "Am chord"
  ],
  skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-open-chords"],
  objectives: [
    "Keep a steady beat while strumming",
    "Use controlled downstrokes and upstrokes",
    "Play simple strumming patterns consistently",
    "Change chords without interrupting the rhythm",
    "Use dynamics and pick control to make rhythm musical",
    "Add Em and Am to the open-chord vocabulary"
  ],
  connectedSongs: [
    {
      title: "Stand By Me",
      artist: "Ben E. King",
      explanation: "Reinforces steady timing, chord endurance and a repeating rhythmic groove."
    },
    {
      title: "Wagon Wheel",
      artist: "Old Crow Medicine Show",
      explanation: "Applies consistent strumming and smooth chord changes across a complete song."
    },
    {
      title: "Three Little Birds",
      artist: "Bob Marley",
      explanation: "Revisits familiar open chords with steadier timing, dynamics and relaxed strumming."
    },
    {
      title: "Wonderful Tonight",
      artist: "Eric Clapton",
      explanation: "Provides a relaxed setting for Em, smooth transitions and controlled rhythm."
    },
    {
      title: "A Horse with No Name",
      artist: "America",
      explanation: "Introduces the mood created by minor harmony and a consistent repeating groove."
    }
  ],
  featuredSongs: [
    {
      title: "Stand By Me",
      artist: "Ben E. King",
      explanation: "Reinforces steady timing, chord endurance and a repeating rhythmic groove."
    },
    {
      title: "Wagon Wheel",
      artist: "Old Crow Medicine Show",
      explanation: "Applies consistent strumming and smooth chord changes across a complete song."
    }
  ],
  lessons: [
    "lesson-rhythm-foundations-1",
    "lesson-rhythm-foundations-2",
    "lesson-rhythm-foundations-3",
    "lesson-rhythm-foundations-4",
    "lesson-rhythm-foundations-5",
    "lesson-rhythm-foundations-6",
    "lesson-rhythm-foundations-7",
    "lesson-rhythm-foundations-8",
    "lesson-rhythm-foundations-9"
  ],
  moduleAssessment: {
    title: "Module 2 Assessment",
    purpose: "Confirm that steady timing and simple strumming patterns are becoming reliable.",
    resultOptions: ["Pass", "Needs More Practice"],
    needsMorePracticeRecommendation: "Review exercises marked Needs More Practice before continuing."
  },
  completed: false
});

const moduleTwoLessonDefinitions = [
  {
    id: "lesson-rhythm-foundations-1",
    lessonNumber: 1,
    title: "Feeling the Beat",
    estimatedMinutes: 30,
    objective: "Learn to recognise, count and physically feel a steady beat before adding a strumming pattern.",
    whyThisLesson: "Rhythm begins with an internal pulse. Feeling the beat makes every later strumming pattern more stable.",
    songNotes: [
      ["Stand By Me", "Its repeating pulse makes it useful for hearing and feeling a steady beat."],
      ["Wagon Wheel", "Its clear forward motion helps connect counting with musical rhythm."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-2",
    lessonNumber: 2,
    title: "Downstrokes and Timing",
    estimatedMinutes: 35,
    objective: "Develop even downstrokes that land accurately on the beat.",
    whyThisLesson: "Controlled downstrokes create the dependable rhythmic foundation used in countless songs.",
    songNotes: [
      ["Stand By Me", "Its steady pulse is well suited to practising accurate downstrokes."],
      ["Wagon Wheel", "Its chord progression rewards consistent downstroke timing."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-3",
    lessonNumber: 3,
    title: "Adding Upstrokes",
    estimatedMinutes: 35,
    objective: "Add relaxed upstrokes between downstrokes without disturbing the beat.",
    whyThisLesson: "Upstrokes add movement and allow the strumming hand to produce more musical patterns.",
    songNotes: [
      ["Stand By Me", "Its relaxed groove provides space to introduce light upstrokes."],
      ["Wagon Wheel", "Its flowing rhythm helps practise continuous down-up movement."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-4",
    lessonNumber: 4,
    title: "Simple Strumming Patterns",
    estimatedMinutes: 40,
    objective: "Combine downstrokes and upstrokes into simple, repeatable strumming patterns.",
    whyThisLesson: "Patterns turn a steady beat into a recognisable musical rhythm that can support a song.",
    songNotes: [
      ["Stand By Me", "Its repeating progression supports a simple, consistent strumming pattern."],
      ["Wagon Wheel", "Its rhythm is a useful application for a continuous down-up pattern."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-5",
    lessonNumber: 5,
    title: "Changing Chords While Strumming",
    estimatedMinutes: 40,
    objective: "Keep the strumming hand moving while changing between familiar open chords.",
    whyThisLesson: "A song loses momentum when the strumming hand stops during every chord change.",
    songNotes: [
      ["Stand By Me", "Its repeating chord cycle builds endurance while changing chords in time."],
      ["Wagon Wheel", "Its familiar progression practises smooth changes without stopping the strum."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-6",
    lessonNumber: 6,
    title: "Dynamics and Pick Control",
    estimatedMinutes: 35,
    objective: "Control pick angle, attack and volume so strumming sounds balanced rather than harsh.",
    whyThisLesson: "Dynamics and pick control make simple rhythm playing sound intentional and musical.",
    songNotes: [
      ["Stand By Me", "Its restrained groove is useful for practising softer, controlled strumming."],
      ["Wagon Wheel", "Its energetic sections provide a natural place to practise dynamic contrast."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-7",
    lessonNumber: 7,
    title: "Playing with Groove",
    estimatedMinutes: 40,
    objective: "Make a steady rhythm feel musical by controlling emphasis and maintaining relaxed motion.",
    whyThisLesson: "Groove is the difference between merely counting beats and making the rhythm feel good.",
    songNotes: [
      ["Stand By Me", "Its distinctive repeating feel is a clear example of groove supporting a song."],
      ["Wagon Wheel", "Its driving rhythm helps practise relaxed momentum and emphasis."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-8",
    lessonNumber: 8,
    title: "Introducing Em and Am",
    estimatedMinutes: 40,
    objective: "Build clean Em and Am chords and include them in steady rhythm practice.",
    whyThisLesson: "Em and Am expand the emotional range of open-chord songs while reinforcing rhythm through new changes.",
    songNotes: [
      ["Stand By Me", "Its minor-chord movement helps connect new chord colours with steady rhythm."],
      ["Wagon Wheel", "Its open-chord setting supports practising new shapes without losing the beat."]
    ]
  },
  {
    id: "lesson-rhythm-foundations-9",
    lessonNumber: 9,
    title: "Making Music with Rhythm",
    estimatedMinutes: 50,
    objective: "Combine timing, strumming, dynamics, groove and chord changes in complete musical performances.",
    whyThisLesson: "Combining the module skills in full songs builds the endurance and recovery habits needed for real playing.",
    songNotes: [
      ["Stand By Me", "It brings steady timing, groove and chord endurance together in one complete song."],
      ["Wagon Wheel", "It applies continuous strumming, chord changes and dynamics across a full performance."]
    ]
  }
];

const moduleTwoSongArtists = {
  "Stand By Me": "Ben E. King",
  "Wagon Wheel": "Old Crow Medicine Show"
};

moduleTwoLessonDefinitions.forEach((definition) => {
  const exerciseId = `exercise-${definition.id.replace(/^lesson-/, "")}-placeholder`;
  const checkpointId = definition.lessonNumber === 9
    ? "checkpoint-rhythm-foundations-module-assessment"
    : `checkpoint-${definition.id.replace(/^lesson-/, "")}`;
  const recommendedSongs = definition.songNotes.map(([title, note]) => ({
    title,
    artist: moduleTwoSongArtists[title],
    note
  }));

  upsertAcademyItem("lessons", {
    id: definition.id,
    missionId: "mission-rhythm-foundations",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    description: definition.objective,
    objectiveHeading: "What you'll learn",
    objective: definition.objective,
    whyThisLesson: definition.whyThisLesson,
    coachNotes: "Coach's note placeholder. Detailed coaching will be added with the exercise content.",
    estimatedMinutes: definition.estimatedMinutes,
    skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
    exercises: [exerciseId],
    connectedSongs: recommendedSongs,
    recommendedSongs,
    checkpoint: checkpointId,
    practiceJournal: [
      "What felt most natural?",
      "What needs more work?",
      "What should I focus on next time?"
    ],
    reflectionPrompts: [
      "What felt most natural?",
      "What needs more work?",
      "What should I focus on next time?"
    ],
    completed: false
  });

  upsertAcademyItem("exercises", {
    id: exerciseId,
    lessonId: definition.id,
    title: "Exercise content coming next",
    purpose: "Placeholder for the detailed exercises that will be added to this lesson.",
    objective: "Detailed exercise content has not been written yet.",
    instructions: "Exercise instructions will be added later.",
    instructionSteps: ["Detailed exercise steps will be added later."],
    durationMinutes: 0,
    tempo: "",
    passCriteria: "Pass criteria will be added with the detailed exercise content.",
    definitionOfDone: "Definition of done will be added with the detailed exercise content.",
    commonMistakes: [],
    skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
    mediaLinks: [],
    completed: false
  });

  upsertAcademyItem("checkpoints", {
    id: checkpointId,
    lessonId: definition.id,
    title: definition.lessonNumber === 9 ? "Module 2 Assessment" : `${definition.title} Checkpoint`,
    purpose: definition.lessonNumber === 9
      ? "Confirm that steady timing and simple strumming patterns are becoming reliable."
      : "Checkpoint content will be added with the detailed lesson exercises.",
    requirements: ["Checkpoint criteria will be added with the detailed lesson content."],
    ...(definition.lessonNumber === 9 ? {
      moduleSummary: {
        title: "Module 2 Complete",
        message: "You have completed Rhythm & Strumming Foundations.",
        preparingForNextModule: "Next you will develop a wider range of strumming patterns.",
        skillsDeveloped: [
          "Steady timing",
          "Downstrokes",
          "Upstrokes",
          "Strumming patterns",
          "Rhythm consistency",
          "Dynamics",
          "Pick control",
          "Groove",
          "Chord endurance",
          "Em chord",
          "Am chord"
        ],
        featuredSongsCompleted: ["Stand By Me", "Wagon Wheel"]
      }
    } : {}),
    completed: false
  });
});

const moduleTwoLessonOneExercises = [
  {
    id: "exercise-rhythm-foundations-1-internal-pulse",
    title: "Internal Pulse",
    purpose: "Develop awareness of a steady beat.",
    objective: "Feel the pulse before playing.",
    instructionSteps: [
      "Start the metronome at 60 BPM.",
      "Count aloud: 1 2 3 4.",
      "Tap your foot.",
      "Continue for one minute before touching the guitar."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "You can maintain a steady count without speeding up.",
    definitionOfDone: "You can maintain a steady count without speeding up.",
    commonMistakes: [
      "Rushing",
      "Looking at the guitar",
      "Ignoring the metronome"
    ],
    coachTip: "Your foot should become your internal metronome.",
    chordNames: []
  },
  {
    id: "exercise-rhythm-foundations-1-muted-downstrokes",
    title: "Muted Downstrokes",
    purpose: "Separate rhythm from fretting.",
    objective: "Develop an even strumming motion.",
    instructionSteps: [
      "Lightly mute all strings.",
      "Strum down once every beat.",
      "Listen for even volume."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "One minute of relaxed, even strumming.",
    definitionOfDone: "One minute of relaxed, even strumming.",
    commonMistakes: [
      "Locking the wrist",
      "Hitting too hard",
      "Strumming from the elbow"
    ],
    coachTip: "The wrist should do most of the work.",
    chordNames: []
  },
  {
    id: "exercise-rhythm-foundations-1-downstrokes-g",
    title: "Downstrokes on G",
    purpose: "Combine timing with a familiar chord.",
    objective: "Keep rhythm while holding G major.",
    instructionSteps: [
      "Form G.",
      "Strum once every beat.",
      "Count aloud."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Maintain one minute of steady rhythm.",
    definitionOfDone: "Maintain one minute of steady rhythm.",
    commonMistakes: [
      "Stopping to fix fingers",
      "Changing tempo"
    ],
    chordNames: ["G"]
  },
  {
    id: "exercise-rhythm-foundations-1-downstrokes-c",
    title: "Downstrokes on C",
    purpose: "Repeat the rhythm on another chord.",
    objective: "Maintain identical timing.",
    instructionSteps: [
      "Form C major.",
      "Strum once every beat.",
      "Count aloud as you repeat the rhythm from Exercise 3."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Consistent timing throughout.",
    definitionOfDone: "Consistent timing throughout.",
    commonMistakes: [],
    chordNames: ["C"]
  },
  {
    id: "exercise-rhythm-foundations-1-g-to-c",
    title: "G to C",
    purpose: "Combine rhythm and chord changes.",
    objective: "Change every four beats.",
    instructionSteps: [
      "Play G for four beats.",
      "Play C for four beats.",
      "Continue alternating without stopping."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Several cycles without stopping.",
    definitionOfDone: "Several cycles without stopping.",
    commonMistakes: [],
    chordNames: ["G", "C"]
  },
  {
    id: "exercise-rhythm-foundations-1-g-c-d",
    title: "G, C and D",
    purpose: "Apply rhythm across all Module 1 chords.",
    objective: "Maintain steady timing.",
    instructionSteps: [
      "Play G.",
      "Play C.",
      "Play D.",
      "Repeat without restarting."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Steady rhythm without restarting.",
    definitionOfDone: "Steady rhythm without restarting.",
    commonMistakes: [],
    chordNames: ["G", "C", "D"]
  },
  {
    id: "exercise-rhythm-foundations-1-rhythm-challenge",
    title: "Rhythm Challenge",
    purpose: "Build endurance.",
    objective: "Play continuously for five minutes.",
    instructionSteps: [
      "Continue strumming and changing chords.",
      "Recover naturally from mistakes."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "Five minutes without stopping.",
    definitionOfDone: "Five minutes without stopping.",
    commonMistakes: [],
    chordNames: ["G", "C", "D"]
  }
];

upsertAcademyItem("lessons", {
  id: "lesson-rhythm-foundations-1",
  missionId: "mission-rhythm-foundations",
  lessonNumber: 1,
  title: "Feeling the Beat",
  description: "Learn to feel and maintain a steady beat before introducing more complex strumming.",
  objectiveHeading: "What you'll learn",
  objective: "Learn to feel and maintain a steady beat before introducing more complex strumming.",
  whyThisLesson: "Rhythm is the foundation of every song. Good timing makes even simple chords sound musical.",
  coachNotes: "Your right hand is now becoming just as important as your left hand. Don’t chase speed—chase consistency.",
  estimatedMinutes: 35,
  skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
  exercises: moduleTwoLessonOneExercises.map((exercise) => exercise.id),
  connectedSongs: [
    {
      title: "Stand By Me",
      artist: "Ben E. King",
      note: "Excellent for developing relaxed rhythm and endurance."
    },
    {
      title: "Three Little Birds",
      artist: "Bob Marley",
      note: "Revisit this song using improved timing and steadier strumming."
    }
  ],
  recommendedSongs: [
    {
      title: "Stand By Me",
      artist: "Ben E. King",
      note: "Excellent for developing relaxed rhythm and endurance."
    },
    {
      title: "Three Little Birds",
      artist: "Bob Marley",
      note: "Revisit this song using improved timing and steadier strumming."
    }
  ],
  checkpoint: "checkpoint-rhythm-foundations-1",
  practiceJournal: [
    "What interrupted your rhythm most?",
    "Did counting help?",
    "Which chord change still needs work?",
    "What will you focus on next practice?"
  ],
  reflectionPrompts: [
    "What interrupted your rhythm most?",
    "Did counting help?",
    "Which chord change still needs work?",
    "What will you focus on next practice?"
  ],
  completed: false
});

moduleTwoLessonOneExercises.forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-rhythm-foundations-1",
    instructions: exercise.instructionSteps.join(" "),
    skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-rhythm-foundations-1",
  lessonId: "lesson-rhythm-foundations-1",
  title: "Feeling the Beat Checkpoint",
  purpose: "Confirm that the beat remains steady while counting, strumming and changing chords.",
  requirements: [
    "Count steadily",
    "Keep rhythm at 60 BPM",
    "Change chords without losing the beat",
    "Recover naturally from mistakes"
  ],
  passRule: "Pass if Rob can count steadily, keep rhythm at 60 BPM, change chords without losing the beat, and recover naturally from mistakes.",
  completed: false
});

const moduleTwoLessonsTwoToFour = [
  {
    lesson: {
      id: "lesson-rhythm-foundations-2",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 2,
      title: "Introducing Em",
      description: "Learn the E minor chord while maintaining the rhythm skills developed in Lesson 1.",
      objectiveHeading: "What you'll learn",
      objective: "Learn the E minor chord while maintaining the rhythm skills developed in Lesson 1.",
      whyThisLesson: "E minor is one of the easiest and most commonly used chords in modern music. Learning it now dramatically increases the number of songs you can play without introducing unnecessary technical difficulty.",
      coachNotes: "Your hands already know how to build clean chords. Today should feel easier than Module 1. Use that confidence to focus on rhythm instead of worrying about finger placement.",
      estimatedMinutes: 35,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Uses Em within a steady repeating progression."
        },
        {
          title: "Wonderful Tonight",
          artist: "Eric Clapton",
          note: "Recommended future song for applying Em in a relaxed rhythm setting."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Uses Em within a steady repeating progression."
        },
        {
          title: "Wonderful Tonight",
          artist: "Eric Clapton",
          note: "Recommended future song for applying Em in a relaxed rhythm setting."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-2",
      practiceJournal: [
        "Did Em feel easier than G or C?",
        "Which transition needs more work?",
        "What surprised you today?"
      ],
      reflectionPrompts: [
        "Did Em feel easier than G or C?",
        "Which transition needs more work?",
        "What surprised you today?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-2-learning-em",
        title: "Learning Em",
        purpose: "Learn the Em chord shape.",
        objective: "Build Em confidently from memory.",
        instructionSteps: [
          "Study the chord diagram.",
          "Place one finger.",
          "Place the second finger.",
          "Check every string.",
          "Play slowly."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Em rings clearly across all six strings.",
        definitionOfDone: "Em rings clearly across all six strings.",
        commonMistakes: ["Fingers too flat", "Pressing too hard", "Rushing"],
        coachTip: "Notice how relaxed Em feels. Remember that feeling—it becomes your reference for future chords.",
        chordNames: ["Em"]
      },
      {
        id: "exercise-rhythm-foundations-2-em-string-check",
        title: "Em String Check",
        purpose: "Check every string individually.",
        objective: "Develop good listening habits.",
        instructionSteps: [
          "Build Em from memory.",
          "Pick every string individually.",
          "Fix only one problem at a time."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Every string rings clearly.",
        definitionOfDone: "Every string rings clearly.",
        commonMistakes: [],
        chordNames: ["Em"]
      },
      {
        id: "exercise-rhythm-foundations-2-g-to-em",
        title: "G to Em",
        purpose: "Introduce movement into Em.",
        objective: "Maintain rhythm while changing chords.",
        instructionSteps: [
          "Play G for four beats.",
          "Change to Em for four beats.",
          "Continue without stopping the rhythm."
        ],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Change between G and Em while keeping a steady beat.",
        definitionOfDone: "Several mostly clean G to Em cycles without stopping.",
        commonMistakes: [],
        chordNames: ["G", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-2-c-to-em",
        title: "C to Em",
        purpose: "Develop another common transition.",
        objective: "Move between C and Em without losing the beat.",
        instructionSteps: [
          "Play C for four beats.",
          "Change to Em for four beats.",
          "Repeat at a steady tempo."
        ],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Keep the rhythm steady through repeated C to Em changes.",
        definitionOfDone: "Several mostly clean C to Em cycles without stopping.",
        commonMistakes: [],
        chordNames: ["C", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-2-em-to-d",
        title: "Em to D",
        purpose: "Connect Em to existing Module 1 skills.",
        objective: "Change between Em and D while maintaining rhythm.",
        instructionSteps: [
          "Play Em for four beats.",
          "Change to D for four beats.",
          "Repeat without restarting."
        ],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Keep a consistent beat while changing between Em and D.",
        definitionOfDone: "Several mostly clean Em to D cycles without stopping.",
        commonMistakes: [],
        chordNames: ["Em", "D"]
      },
      {
        id: "exercise-rhythm-foundations-2-random-chord-builder",
        title: "Random Chord Builder",
        purpose: "Build each known chord cleanly without relying on a fixed order.",
        objective: "Recall G, C, D and Em confidently.",
        instructionSteps: [
          "Randomly call G, C, D or Em.",
          "Build the called chord cleanly.",
          "Check the chord before calling the next one."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Build G, C, D and Em cleanly in a random order.",
        definitionOfDone: "Each chord can be recalled without guessing.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-2-continuous-playing",
        title: "Continuous Playing",
        purpose: "Combine all four chords in continuous rhythm.",
        objective: "Focus on rhythm rather than perfection.",
        instructionSteps: [
          "Play continuously using G, C, D and Em.",
          "Keep the strumming hand moving.",
          "Recover naturally from mistakes."
        ],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Play continuously while keeping mostly steady rhythm.",
        definitionOfDone: "Complete five minutes without restarting.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-2",
      title: "Introducing Em Checkpoint",
      purpose: "Confirm that Em is clean and can be used without losing the beat.",
      requirements: [
        "Em rings clearly",
        "Changes remain mostly clean",
        "Rhythm stays consistent"
      ],
      passRule: "Pass if Em rings clearly, changes remain mostly clean, and rhythm stays consistent."
    }
  },
  {
    lesson: {
      id: "lesson-rhythm-foundations-3",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 3,
      title: "Introducing Am",
      description: "Learn Am while developing finger independence and maintaining steady rhythm.",
      objectiveHeading: "What you'll learn",
      objective: "Build a clean Am chord and connect it to G, C and Em without losing the beat.",
      whyThisLesson: "Am adds another essential minor sound, but its tighter shape requires more finger independence than Em. Not all chords feel the same.",
      coachNotes: "Am feels cramped for many beginners. Relax your wrist before trying to force your fingers into position.",
      estimatedMinutes: 35,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Reinforces steady rhythm while using a minor chord in a repeating progression."
        },
        {
          title: "A Horse with No Name",
          artist: "America",
          note: "A discussion of mood and minor colour rather than a direct Am application."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Reinforces steady rhythm while using a minor chord in a repeating progression."
        },
        {
          title: "A Horse with No Name",
          artist: "America",
          note: "A discussion of mood and minor colour rather than a direct Am application."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-3",
      practiceJournal: [
        "Did Am feel cramped?",
        "Which finger needed the most adjustment?",
        "Which transition needs more work?"
      ],
      reflectionPrompts: [
        "Did Am feel cramped?",
        "Which finger needed the most adjustment?",
        "Which transition needs more work?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-3-learning-am",
        title: "Learn Am",
        purpose: "Learn the Am chord shape.",
        objective: "Build Am cleanly with a relaxed wrist.",
        instructionSteps: ["Study the Am diagram.", "Place each finger slowly.", "Check the wrist is relaxed.", "Pick each string."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Am rings clearly across the correct five strings.",
        definitionOfDone: "Build Am cleanly from memory.",
        commonMistakes: ["Forcing the fingers into position", "Collapsing the knuckles", "Hitting the low E string"],
        coachTip: "Am feels cramped for many beginners. Relax your wrist before trying to force your fingers into position.",
        chordNames: ["Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-string-check",
        title: "Am String Check",
        purpose: "Check every Am string individually.",
        objective: "Hear and correct muted or buzzing notes.",
        instructionSteps: ["Build Am.", "Pick from the A string to the high E string.", "Fix one problem at a time."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "All five intended strings ring clearly.",
        definitionOfDone: "Am passes three clean string checks.",
        commonMistakes: [],
        chordNames: ["Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-c-to-am",
        title: "C to Am",
        purpose: "Use shared movement between C and Am.",
        objective: "Change smoothly without losing the beat.",
        instructionSteps: ["Play C for four beats.", "Change to Am for four beats.", "Repeat steadily."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Maintain steady rhythm through repeated C to Am changes.",
        definitionOfDone: "Several mostly clean cycles without stopping.",
        commonMistakes: [],
        chordNames: ["C", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-em-to-am",
        title: "Em to Am",
        purpose: "Move between two minor chord shapes.",
        objective: "Keep the rhythm steady through a larger finger movement.",
        instructionSteps: ["Play Em for four beats.", "Change to Am for four beats.", "Repeat without restarting."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Maintain rhythm through repeated Em to Am changes.",
        definitionOfDone: "Several mostly clean cycles without stopping.",
        commonMistakes: [],
        chordNames: ["Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-g-to-am",
        title: "G to Am",
        purpose: "Practise a less familiar open-chord transition.",
        objective: "Move accurately while keeping time.",
        instructionSteps: ["Play G for four beats.", "Change to Am for four beats.", "Repeat steadily."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Keep the beat steady through repeated G to Am changes.",
        definitionOfDone: "Several mostly clean cycles without stopping.",
        commonMistakes: [],
        chordNames: ["G", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-random-chord-builder",
        title: "Random Chord Builder",
        purpose: "Recall all five learned chords without a fixed sequence.",
        objective: "Build G, C, D, Em and Am from memory.",
        instructionSteps: ["Randomly call G, C, D, Em or Am.", "Build the chord cleanly.", "Check it before moving on."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Build all five chords cleanly in a random order.",
        definitionOfDone: "Each shape can be recalled without guessing.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-3-continuous-playing",
        title: "Continuous Playing",
        purpose: "Use all five chords in continuous rhythm.",
        objective: "Keep playing rather than stopping to correct every mistake.",
        instructionSteps: ["Play continuously using G, C, D, Em and Am.", "Maintain the beat.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Play continuously with mostly steady rhythm.",
        definitionOfDone: "Complete five minutes without restarting.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-3",
      title: "Introducing Am Checkpoint",
      purpose: "Confirm that Am is clean and can be used in steady chord changes.",
      requirements: ["Am rings clearly", "The wrist remains relaxed", "Changes remain mostly clean", "Rhythm stays consistent"],
      passRule: "Pass if Am rings clearly and can be used in mostly clean, steady changes."
    }
  },
  {
    lesson: {
      id: "lesson-rhythm-foundations-4",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 4,
      title: "First Down-Up Strumming",
      description: "Introduce relaxed down-up strumming and continuous arm movement.",
      objectiveHeading: "What you'll learn",
      objective: "Introduce relaxed down-up strumming while keeping the hand moving whether or not it hits the strings.",
      whyThisLesson: "Continuous hand movement is one of the biggest breakthroughs in beginner rhythm guitar. The hand keeps moving whether or not the pick meets the strings.",
      coachNotes: "Imagine your hand is a pendulum. It doesn’t stop every beat. The pick only meets the strings when required.",
      estimatedMinutes: 40,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Supports relaxed down-up movement over a repeating progression."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Applies continuous strumming to a driving, familiar rhythm."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Supports relaxed down-up movement over a repeating progression."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Applies continuous strumming to a driving, familiar rhythm."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-4",
      practiceJournal: [
        "Did the hand keep moving continuously?",
        "Where did the motion become tense?",
        "Which chord change interrupted the rhythm?"
      ],
      reflectionPrompts: [
        "Did the hand keep moving continuously?",
        "Where did the motion become tense?",
        "Which chord change interrupted the rhythm?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-4-air-strumming",
        title: "Air Strumming",
        purpose: "Learn continuous down-up motion without contacting the strings.",
        objective: "Keep the hand moving like a relaxed pendulum.",
        instructionSteps: ["Set the metronome to 60 BPM.", "Move down on the beat and up between beats.", "Do not touch the strings.", "Keep the wrist relaxed."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Continuous relaxed down-up motion for one minute.",
        definitionOfDone: "The hand moves continuously without stopping.",
        commonMistakes: ["Stopping at the top or bottom", "Locking the wrist", "Moving only from the elbow"],
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-4-muted-down-up",
        title: "Muted Down-Up",
        purpose: "Add string contact without adding chord pressure.",
        objective: "Produce even muted down-up strokes.",
        instructionSteps: ["Lightly mute all strings.", "Strum down on the beat.", "Strum up between beats.", "Keep the motion continuous."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of even muted down-up strumming.",
        definitionOfDone: "Downstrokes and upstrokes remain even and continuous.",
        commonMistakes: [],
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-4-down-up-g",
        title: "Down-Up on G",
        purpose: "Apply continuous motion to a familiar chord.",
        objective: "Keep G ringing while the strumming hand stays relaxed.",
        instructionSteps: ["Form G.", "Strum continuous down-up eighth notes.", "Count 1 and 2 and 3 and 4 and."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady down-up strumming on G.",
        definitionOfDone: "The motion stays continuous and the chord remains clear.",
        commonMistakes: [],
        chordNames: ["G"]
      },
      {
        id: "exercise-rhythm-foundations-4-down-up-c",
        title: "Down-Up on C",
        purpose: "Repeat continuous motion on C.",
        objective: "Keep the same motion and timing used on G.",
        instructionSteps: ["Form C.", "Strum continuous down-up eighth notes.", "Keep the wrist relaxed."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "One minute of steady down-up strumming on C.",
        definitionOfDone: "The motion stays continuous and C remains clear.",
        commonMistakes: [],
        chordNames: ["C"]
      },
      {
        id: "exercise-rhythm-foundations-4-g-c",
        title: "G to C",
        purpose: "Keep continuous motion through a chord change.",
        objective: "Change between G and C without stopping the hand.",
        instructionSteps: ["Strum G with continuous down-up motion.", "Change to C after four beats.", "Keep the hand moving through the change."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "The hand keeps moving through repeated G to C changes.",
        definitionOfDone: "Several mostly clean changes without stopping the strumming motion.",
        commonMistakes: [],
        chordNames: ["G", "C"]
      },
      {
        id: "exercise-rhythm-foundations-4-four-chord-loop",
        title: "G, C, D and Em",
        purpose: "Apply down-up motion across four chords.",
        objective: "Maintain continuous rhythm through a longer progression.",
        instructionSteps: ["Play G, C, D and Em.", "Use four beats per chord.", "Keep the hand moving continuously."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several four-chord cycles without stopping the hand.",
        definitionOfDone: "Rhythm remains mostly steady through the full progression.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-4-continuous-rhythm",
        title: "Continuous Rhythm",
        purpose: "Build endurance with relaxed down-up movement.",
        objective: "Keep playing continuously and recover from mistakes.",
        instructionSteps: ["Choose from G, C, D and Em.", "Strum continuously.", "Do not stop after a rough chord change.", "Stay relaxed."],
        durationMinutes: 10,
        tempo: "60 BPM",
        passCriteria: "Continuous down-up rhythm without stopping the hand.",
        definitionOfDone: "Complete ten minutes with mostly steady rhythm.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-4",
      title: "First Down-Up Strumming Checkpoint",
      purpose: "Confirm that down-up motion remains continuous through chord changes.",
      requirements: [
        "Down-up motion remains continuous",
        "Chord changes don’t stop the hand",
        "Rhythm feels smoother than downstrokes only"
      ],
      passRule: "Pass if down-up motion remains continuous, chord changes do not stop the hand, and the rhythm feels smoother than downstrokes only."
    }
  }
];

moduleTwoLessonsTwoToFour.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      coachTip: exercise.coachTip || "",
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const moduleTwoLessonsFiveToSeven = [
  {
    lesson: {
      id: "lesson-rhythm-foundations-5",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 5,
      title: "Changing Chords While Strumming",
      description: "Maintain a continuous strumming motion while changing chords without stopping the rhythm.",
      objectiveHeading: "What you'll learn",
      objective: "Maintain a continuous strumming motion while changing chords without stopping the rhythm.",
      whyThisLesson: "Most beginners stop their strumming hand while changing chords. That creates gaps in the rhythm. Today you’ll learn that the strumming hand never stops—the fretting hand catches up.",
      coachNotes: "Don’t think about changing chords. Think about keeping your right hand moving. Your left hand is trying to keep up with the rhythm—not the other way around.",
      estimatedMinutes: 35,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Reinforces continuous strumming through a repeating chord progression."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Builds confidence changing chords without interrupting the rhythm."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Reinforces continuous strumming through a repeating chord progression."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Builds confidence changing chords without interrupting the rhythm."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-5",
      practiceJournal: [
        "Which chord interrupted your rhythm?",
        "Did your right hand stop?",
        "What became easier?"
      ],
      reflectionPrompts: [
        "Which chord interrupted your rhythm?",
        "Did your right hand stop?",
        "What became easier?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-5-continuous-hand-motion",
        title: "Continuous Hand Motion",
        purpose: "Separate strumming from chord changes.",
        objective: "Keep the strumming hand moving continuously.",
        instructionSteps: [
          "Mute the strings.",
          "Keep a constant down-up motion.",
          "Count aloud.",
          "Don’t stop moving."
        ],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Continuous movement for one minute.",
        definitionOfDone: "Continuous movement for one minute.",
        commonMistakes: ["Stopping between bars", "Locking the wrist", "Looking at the strumming hand"],
        coachTip: "Imagine your arm is a pendulum. The pendulum never stops—it simply swings.",
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-5-g-and-c",
        title: "G and C",
        purpose: "Maintain continuous motion while changing between G and C.",
        objective: "Keep the strumming hand moving through every G to C change.",
        instructionSteps: ["Strum G continuously.", "Change to C after four beats.", "Keep the down-up motion moving through the change.", "Repeat."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Repeated G and C changes without stopping the right hand.",
        definitionOfDone: "The strumming hand remains continuous through several mostly clean changes.",
        commonMistakes: [],
        chordNames: ["G", "C"]
      },
      {
        id: "exercise-rhythm-foundations-5-g-c-d",
        title: "G, C and D",
        purpose: "Add another chord while preserving rhythm.",
        objective: "Keep continuous motion through a three-chord progression.",
        instructionSteps: ["Play G, C and D for four beats each.", "Keep the right hand moving continuously.", "Repeat without restarting."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several G, C and D cycles without stopping the strum.",
        definitionOfDone: "Rhythm remains mostly steady through the complete progression.",
        commonMistakes: [],
        chordNames: ["G", "C", "D"]
      },
      {
        id: "exercise-rhythm-foundations-5-g-c-d-em",
        title: "G, C, D and Em",
        purpose: "Expand chord vocabulary without changing rhythm.",
        objective: "Keep the same strumming motion across four chords.",
        instructionSteps: ["Play G, C, D and Em.", "Use four beats per chord.", "Keep the hand moving continuously."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several four-chord cycles with continuous strumming.",
        definitionOfDone: "Chord changes happen inside the rhythm without stopping the right hand.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-5-adding-am",
        title: "Adding Am",
        purpose: "Introduce all five Module 2 chords into one progression.",
        objective: "Maintain continuous rhythm while using G, C, D, Em and Am.",
        instructionSteps: ["Play G, C, D, Em and Am.", "Use four beats per chord.", "Keep the strumming hand moving through every change."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete the five-chord progression without stopping the right hand.",
        definitionOfDone: "All five chords can be used in mostly steady continuous rhythm.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-5-recovery",
        title: "Recovery Exercise",
        purpose: "Learn to recover naturally without breaking the rhythm.",
        objective: "Keep playing after a deliberately missed chord.",
        instructionSteps: ["Start a familiar chord progression.", "Miss one chord deliberately.", "Continue strumming.", "Recover on the next chord without restarting."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Recover from a missed chord while the right hand keeps moving.",
        definitionOfDone: "Several deliberate mistakes are recovered from naturally.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-5-performance",
        title: "Five Minute Performance",
        purpose: "Combine continuous strumming, chord changes and natural recovery.",
        objective: "Play continuously using all learned chords.",
        instructionSteps: ["Use G, C, D, Em and Am.", "Don’t stop.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Five minutes of continuous playing without restarting.",
        definitionOfDone: "The right hand keeps moving and recovery happens naturally.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-5",
      title: "Changing Chords While Strumming Checkpoint",
      purpose: "Confirm that chord changes now happen inside a continuous strumming motion.",
      requirements: [
        "Right hand never stops",
        "Chord changes happen inside the rhythm",
        "Recovery happens naturally"
      ],
      passRule: "Pass if the right hand never stops, chord changes happen inside the rhythm, and recovery happens naturally."
    }
  },
  {
    lesson: {
      id: "lesson-rhythm-foundations-6",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 6,
      title: "Dynamics and Pick Control",
      description: "Learn to control tone and volume without affecting rhythm.",
      objectiveHeading: "What you'll learn",
      objective: "Learn to control tone and volume without affecting rhythm.",
      whyThisLesson: "Experienced players don’t simply play the correct notes—they control how those notes sound.",
      coachNotes: "Playing softer is often harder than playing louder. Today we’re learning control, not power.",
      estimatedMinutes: 35,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        {
          title: "Three Little Birds",
          artist: "Bob Marley",
          note: "Encourages relaxed, controlled strumming with an even dynamic."
        },
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Provides a steady progression for practising deliberate volume and tone changes."
        }
      ],
      recommendedSongs: [
        {
          title: "Three Little Birds",
          artist: "Bob Marley",
          note: "Encourages relaxed, controlled strumming with an even dynamic."
        },
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Provides a steady progression for practising deliberate volume and tone changes."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-6",
      practiceJournal: [
        "Which sounded better?",
        "Did changing dynamics affect timing?",
        "Which grip felt most comfortable?"
      ],
      reflectionPrompts: [
        "Which sounded better?",
        "Did changing dynamics affect timing?",
        "Which grip felt most comfortable?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-6-soft-strumming",
        title: "Soft Strumming",
        purpose: "Develop gentle pick control.",
        objective: "Play quietly while keeping rhythm steady.",
        instructionSteps: ["Choose a familiar chord progression.", "Use a light pick attack.", "Keep the beat steady.", "Listen for even volume."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Strum softly for one minute without losing the beat.",
        definitionOfDone: "Quiet strumming remains controlled and rhythmically steady.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-6-loud-strumming",
        title: "Loud Strumming",
        purpose: "Develop confidence without losing timing.",
        objective: "Increase volume while keeping the motion relaxed.",
        instructionSteps: ["Use a confident pick attack.", "Keep the wrist relaxed.", "Maintain the same tempo.", "Avoid forcing the strings."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Play loudly and evenly without speeding up.",
        definitionOfDone: "Volume increases while timing remains steady.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-6-soft-to-loud",
        title: "Soft to Loud",
        purpose: "Control deliberate changes in volume.",
        objective: "Alternate soft and loud strumming every four beats.",
        instructionSteps: ["Play softly for four beats.", "Play loudly for four beats.", "Continue alternating.", "Keep the tempo unchanged."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Volume changes intentionally every four beats while rhythm stays constant.",
        definitionOfDone: "Several clear soft-to-loud cycles remain in time.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-6-pick-angle",
        title: "Pick Angle",
        purpose: "Hear how pick angle changes tone.",
        objective: "Compare a flat pick with an angled pick.",
        instructionSteps: ["Strum with the pick flat against the strings.", "Listen to the tone.", "Angle the pick slightly.", "Listen to the difference."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Hear and describe the tonal difference between flat and angled pick positions.",
        definitionOfDone: "Choose a comfortable angle that keeps the rhythm smooth.",
        commonMistakes: [],
        chordNames: ["G", "C"]
      },
      {
        id: "exercise-rhythm-foundations-6-grip-pressure",
        title: "Grip Pressure",
        purpose: "Find a balanced pick grip.",
        objective: "Compare loose and firm grip pressure without losing the pick.",
        instructionSteps: ["Strum with a loose grip.", "Notice the sound and control.", "Try a firmer grip.", "Find the balance between both."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Use a comfortable grip that keeps the pick secure without creating tension.",
        definitionOfDone: "The pick feels controlled and the wrist remains relaxed.",
        commonMistakes: [],
        chordNames: ["G", "C"]
      },
      {
        id: "exercise-rhythm-foundations-6-musical-dynamics",
        title: "Musical Dynamics",
        purpose: "Use volume to shape song sections.",
        objective: "Play a soft verse and a loud chorus.",
        instructionSteps: ["Play a progression softly as a verse.", "Repeat it loudly as a chorus.", "Keep the tempo identical.", "Repeat both sections."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Create a clear dynamic difference without affecting timing.",
        definitionOfDone: "Soft verse and loud chorus feel intentional and controlled.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-6-continuous-performance",
        title: "Continuous Performance",
        purpose: "Use dynamics naturally during continuous playing.",
        objective: "Vary tone and volume while keeping rhythm steady.",
        instructionSteps: ["Play continuously using familiar chords.", "Vary the dynamics naturally.", "Experiment with pick angle and grip.", "Keep the rhythm constant."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete five minutes with intentional dynamics and steady rhythm.",
        definitionOfDone: "Tone and volume change naturally without disturbing timing.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-6",
      title: "Dynamics and Pick Control Checkpoint",
      purpose: "Confirm that tone and volume can change without disturbing rhythm.",
      requirements: [
        "Rhythm stays constant",
        "Volume changes intentionally",
        "Tone changes with pick angle"
      ],
      passRule: "Pass if rhythm stays constant, volume changes intentionally, and tone changes with pick angle."
    }
  },
  {
    lesson: {
      id: "lesson-rhythm-foundations-7",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 7,
      title: "Playing with Groove",
      description: "Stop counting every beat and begin feeling the music naturally.",
      objectiveHeading: "What you'll learn",
      objective: "Stop counting every beat and begin feeling the music naturally.",
      whyThisLesson: "Rhythm becomes music when you stop thinking about counting and start feeling the pulse.",
      coachNotes: "Groove can’t be forced. Relax. Let the rhythm happen.",
      estimatedMinutes: 35,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Its repeating progression is ideal for relaxing into a steady groove."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Its forward-moving rhythm encourages natural, less mechanical playing."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Its repeating progression is ideal for relaxing into a steady groove."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Its forward-moving rhythm encourages natural, less mechanical playing."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-7",
      practiceJournal: [
        "Did you stop counting?",
        "When did the groove start to feel natural?",
        "What relaxed the most?",
        "What still feels mechanical?"
      ],
      reflectionPrompts: [
        "Did you stop counting?",
        "When did the groove start to feel natural?",
        "What relaxed the most?",
        "What still feels mechanical?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-7-feel-before-playing",
        title: "Feel Before Playing",
        purpose: "Feel the pulse before touching the guitar.",
        objective: "Connect physically with the beat.",
        instructionSteps: ["Listen to the metronome.", "Tap your foot.", "Do not play.", "Let the pulse settle."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Tap steadily without needing to count every beat.",
        definitionOfDone: "The foot follows the pulse naturally.",
        commonMistakes: [],
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-7-foot-first",
        title: "Foot First",
        purpose: "Let the body establish time before the hands join.",
        objective: "Keep the foot steady while the hands follow.",
        instructionSteps: ["Start tapping your foot.", "Add muted strumming.", "Keep the foot unchanged.", "Let the hands follow the foot."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "The foot keeps steady time while strumming is added.",
        definitionOfDone: "Hands follow the pulse without changing it.",
        commonMistakes: [],
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-7-eyes-closed",
        title: "Eyes Closed",
        purpose: "Remove visual distraction and focus on rhythm.",
        objective: "Play G and C by feel.",
        instructionSteps: ["Form G.", "Close your eyes.", "Play G and C slowly.", "Focus only on rhythm."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Maintain a relaxed rhythm with eyes closed.",
        definitionOfDone: "G and C continue without relying on constant visual checking.",
        commonMistakes: [],
        chordNames: ["G", "C"]
      },
      {
        id: "exercise-rhythm-foundations-7-relaxation-check",
        title: "Relaxation Check",
        purpose: "Notice and release tension while playing.",
        objective: "Keep shoulders, wrists and grip relaxed.",
        instructionSteps: ["Play a familiar progression.", "Notice your shoulders.", "Notice your wrists.", "Notice your grip.", "Relax everything."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Release tension without stopping the rhythm.",
        definitionOfDone: "The body feels looser while the beat remains steady.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-7-groove-loop",
        title: "Groove Loop",
        purpose: "Let repetition turn a progression into a groove.",
        objective: "Play without analysing every movement.",
        instructionSteps: ["Choose one progression.", "Repeat it continuously.", "Don’t analyse.", "Just play."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "The progression begins to feel natural and repeatable.",
        definitionOfDone: "Play the loop continuously with relaxed rhythm.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-7-stand-by-me",
        title: "Stand By Me",
        purpose: "Apply groove to a complete musical progression.",
        objective: "Stay with the groove instead of reacting to mistakes.",
        instructionSteps: ["Play Stand By Me slowly.", "Ignore small mistakes.", "Keep your foot moving.", "Stay with the groove."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Stay with the progression without restarting after mistakes.",
        definitionOfDone: "The rhythm remains relaxed and continuous.",
        commonMistakes: [],
        chordNames: ["G", "Em", "C", "D"]
      },
      {
        id: "exercise-rhythm-foundations-7-wagon-wheel",
        title: "Wagon Wheel",
        purpose: "Apply groove to a more driving rhythm.",
        objective: "Enjoy the rhythm while maintaining continuous motion.",
        instructionSteps: ["Play Wagon Wheel at a comfortable pace.", "Keep the strumming motion relaxed.", "Focus on enjoying the rhythm.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Play continuously with a relaxed, forward-moving groove.",
        definitionOfDone: "The performance feels less mechanical and more musical.",
        commonMistakes: [],
        chordNames: ["G", "D", "Em", "C"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-7",
      title: "Playing with Groove Checkpoint",
      purpose: "Confirm that rhythm is becoming relaxed, physical and less mechanical.",
      requirements: [
        "Foot naturally keeps time",
        "Rhythm feels relaxed",
        "Playing becomes less mechanical"
      ],
      passRule: "Pass if the foot naturally keeps time, rhythm feels relaxed, and playing becomes less mechanical."
    }
  }
];

moduleTwoLessonsFiveToSeven.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      coachTip: exercise.coachTip || "",
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const moduleTwoLessonsEightAndNine = [
  {
    lesson: {
      id: "lesson-rhythm-foundations-8",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 8,
      title: "Bringing It All Together",
      description: "Combine all Module 2 skills into smooth, confident rhythm guitar playing.",
      objectiveHeading: "What you'll learn",
      objective: "Combine all Module 2 skills into smooth, confident rhythm guitar playing.",
      whyThisLesson: "You’ve learned new chords, developed steady rhythm, introduced down-up strumming and started playing with groove. Today is about combining those skills so they become one natural movement.",
      coachNotes: "Don’t think about individual techniques anymore. Think about making music. Trust your hands and keep the rhythm flowing.",
      estimatedMinutes: 30,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Excellent for reinforcing relaxed rhythm and smooth chord transitions."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Develops endurance, groove and consistent strumming."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Excellent for reinforcing relaxed rhythm and smooth chord transitions."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Develops endurance, groove and consistent strumming."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-8",
      practiceJournal: [
        "Which chord still interrupts your rhythm?",
        "Which strumming pattern feels most comfortable?",
        "Did you notice yourself relaxing more than in Module 1?",
        "What would you like to improve before the assessment?"
      ],
      reflectionPrompts: [
        "Which chord still interrupts your rhythm?",
        "Which strumming pattern feels most comfortable?",
        "Did you notice yourself relaxing more than in Module 1?",
        "What would you like to improve before the assessment?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-8-open-chord-warmup",
        title: "Open Chord Warm-up",
        purpose: "Reconnect with all learned chords.",
        objective: "Play G, C, D, Em and Am cleanly.",
        instructionSteps: ["Form each chord.", "Strum four beats.", "Listen carefully.", "Correct only obvious mistakes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Every chord rings clearly.",
        definitionOfDone: "Every chord rings clearly.",
        commonMistakes: ["Rushing", "Forgetting string targeting", "Playing before checking finger placement"],
        coachTip: "A good warm-up isn’t about speed—it’s about reminding your hands what “good” feels like.",
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-8-five-chord-progression",
        title: "Five-Chord Progression",
        purpose: "Transition smoothly between all Module 2 chords.",
        objective: "Maintain continuous rhythm.",
        instructionSteps: ["Play G, Em, C, D and Am in that order.", "Use four beats for each chord.", "Repeat continuously."],
        durationMinutes: 5,
        tempo: "65 BPM",
        passCriteria: "Several complete cycles without stopping.",
        definitionOfDone: "Several complete cycles without stopping.",
        commonMistakes: [],
        chordNames: ["G", "Em", "C", "D", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-8-dynamic-playing",
        title: "Dynamic Playing",
        purpose: "Combine rhythm with dynamic control.",
        objective: "Play the progression softly, then confidently.",
        instructionSteps: ["Play one cycle softly.", "Play one cycle at medium volume.", "Play one cycle louder.", "Return to medium volume."],
        durationMinutes: 5,
        tempo: "65 BPM",
        passCriteria: "Volume changes without affecting timing.",
        definitionOfDone: "Volume changes without affecting timing.",
        commonMistakes: [],
        chordNames: ["G", "Em", "C", "D", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-8-rhythm-recovery",
        title: "Rhythm Recovery",
        purpose: "Build confidence recovering from mistakes.",
        objective: "Continue playing regardless of errors.",
        instructionSteps: ["If a chord is late or incorrect, keep the strumming hand moving.", "Rejoin on the next beat.", "Never restart."],
        durationMinutes: 5,
        tempo: "65 BPM",
        passCriteria: "Continue for five minutes without restarting.",
        definitionOfDone: "Continue for five minutes without restarting.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-8-song-preparation",
        title: "Song Preparation",
        purpose: "Prepare for the featured songs.",
        objective: "Play each song’s chord progression without worrying about lyrics or structure.",
        instructionSteps: ["Practise the progression for Stand By Me.", "Practise the progression for Wagon Wheel.", "Focus only on rhythm and clean changes."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Both progressions feel familiar enough to play without stopping.",
        definitionOfDone: "Complete both progressions with steady rhythm and clean changes.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-8-performance-run",
        title: "Performance Run",
        purpose: "Develop confidence playing continuously.",
        objective: "Play continuously for five minutes using any combination of Module 2 chords.",
        instructionSteps: ["Choose any combination of G, C, D, Em and Am.", "Keep the rhythm flowing.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Maintain rhythm from beginning to end.",
        definitionOfDone: "Maintain rhythm from beginning to end.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-8",
      title: "Bringing It All Together Checkpoint",
      purpose: "Confirm that the Module 2 skills now work together as one natural movement.",
      requirements: [
        "Rhythm remains steady",
        "Down-up strumming feels natural",
        "Chord changes no longer interrupt the beat",
        "G, C, D, Em and Am feel comfortable",
        "You recover naturally from mistakes"
      ],
      passRule: "Pass if rhythm remains steady, down-up strumming feels natural, chord changes no longer interrupt the beat, all five chords feel comfortable, and recovery happens naturally."
    }
  },
  {
    lesson: {
      id: "lesson-rhythm-foundations-9",
      missionId: "mission-rhythm-foundations",
      lessonNumber: 9,
      title: "Making Music",
      description: "Apply everything learned in Module 2 by playing complete songs confidently from beginning to end.",
      objectiveHeading: "What you'll learn",
      objective: "Apply everything learned in Module 2 by playing complete songs confidently from beginning to end.",
      whyThisLesson: "The purpose of practising isn’t to become good at exercises—it’s to make music. Today you’ll focus on completing songs while maintaining rhythm and recovering naturally from mistakes.",
      coachNotes: "A complete performance with a few mistakes is always better than a perfect performance that stops halfway through.",
      estimatedMinutes: 50,
      skillIds: ["skill-open-chords", "skill-chord-changes", "skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Featured performance song for steady rhythm, smooth transitions and musical flow."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Featured performance song for endurance, relaxed strumming and continuous rhythm."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Featured performance song for steady rhythm, smooth transitions and musical flow."
        },
        {
          title: "Wagon Wheel",
          artist: "Old Crow Medicine Show",
          note: "Featured performance song for endurance, relaxed strumming and continuous rhythm."
        }
      ],
      checkpoint: "checkpoint-rhythm-foundations-module-assessment",
      practiceJournal: [
        "Which song felt easier?",
        "Which skill improved the most?",
        "What still feels uncomfortable?",
        "What are you most looking forward to learning next?"
      ],
      reflectionPrompts: [
        "Which song felt easier?",
        "Which skill improved the most?",
        "What still feels uncomfortable?",
        "What are you most looking forward to learning next?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-rhythm-foundations-9-rhythm-warmup",
        title: "Rhythm Warm-up",
        purpose: "Review all Module 2 chords.",
        objective: "Reconnect with G, C, D, Em and Am before playing complete songs.",
        instructionSteps: ["Build G, C, D, Em and Am.", "Strum each chord steadily.", "Correct only obvious problems.", "Keep the hand relaxed."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "All five chords feel ready for continuous playing.",
        definitionOfDone: "All Module 2 chords ring clearly in steady rhythm.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      },
      {
        id: "exercise-rhythm-foundations-9-stand-by-me",
        title: "Featured Song: Stand By Me",
        purpose: "Play the complete song.",
        objective: "Focus on steady rhythm, smooth transitions and musical flow.",
        instructionSteps: ["Play Stand By Me from beginning to end.", "Keep the rhythm steady.", "Make smooth transitions.", "Maintain musical flow."],
        durationMinutes: 15,
        tempo: "",
        passCriteria: "Complete Stand By Me without restarting.",
        definitionOfDone: "Finish the complete song with mostly steady rhythm.",
        commonMistakes: [],
        chordNames: ["G", "Em", "C", "D"]
      },
      {
        id: "exercise-rhythm-foundations-9-reflection",
        title: "Performance Reflection",
        purpose: "Notice what happened during the first performance.",
        objective: "Identify what felt comfortable and where rhythm broke down.",
        instructionSteps: ["Briefly note what felt comfortable.", "Briefly note where rhythm broke down.", "Choose one thing to carry into the next song."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Record one strength and one area needing attention.",
        definitionOfDone: "A brief, honest reflection is recorded.",
        commonMistakes: [],
        chordNames: []
      },
      {
        id: "exercise-rhythm-foundations-9-wagon-wheel",
        title: "Featured Song: Wagon Wheel",
        purpose: "Develop endurance and confidence.",
        objective: "Focus on relaxed strumming, continuous rhythm and enjoying the performance.",
        instructionSteps: ["Play Wagon Wheel from beginning to end.", "Keep the strumming relaxed.", "Maintain continuous rhythm.", "Enjoy the performance."],
        durationMinutes: 15,
        tempo: "",
        passCriteria: "Complete Wagon Wheel without restarting.",
        definitionOfDone: "Finish the complete song with relaxed, continuous rhythm.",
        commonMistakes: [],
        chordNames: ["G", "D", "Em", "C"]
      },
      {
        id: "exercise-rhythm-foundations-9-musical-recovery",
        title: "Musical Recovery",
        purpose: "Practise finishing a song despite mistakes.",
        objective: "Continue, recover and finish the song.",
        instructionSteps: ["Choose either featured song.", "Play it again.", "Whenever a mistake happens, continue.", "Recover and finish the song."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Finish the chosen song without restarting after mistakes.",
        definitionOfDone: "Mistakes are recovered from naturally while the performance continues.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em"]
      },
      {
        id: "exercise-rhythm-foundations-9-free-play",
        title: "Free Play",
        purpose: "Finish the module by enjoying the instrument rather than analysing technique.",
        objective: "Play whichever progression or song you enjoyed most during Module 2.",
        instructionSteps: ["Choose your favourite Module 2 progression or song.", "Play for five minutes.", "Enjoy the instrument.", "Do not analyse every movement."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Complete five minutes of relaxed, enjoyable playing.",
        definitionOfDone: "Finish the session by making music without over-analysing.",
        commonMistakes: [],
        chordNames: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-rhythm-foundations-module-assessment",
      title: "Module 2 Assessment",
      purpose: "Confirm that rhythm guitar fundamentals are becoming natural before progressing.",
      requirements: [
        "Keep steady rhythm",
        "Use relaxed down-up strumming",
        "Change between G, C, D, Em and Am confidently",
        "Recover naturally from mistakes",
        "Play both featured songs from beginning to end"
      ],
      passRule: "Pass if rhythm guitar fundamentals are becoming natural. If Needs More Practice is selected, review exercises previously marked Needs More Practice without locking Module 3.",
      moduleSummary: {
        title: "Module Complete",
        message: "Congratulations. You now have the rhythm skills required to play a much wider range of songs with confidence.",
        preparingForNextModule: "In Module 3 you will build more expressive strumming patterns, improve rhythmic feel, and begin tackling more recognisable modern songs.",
        skillsDeveloped: [
          "Steady timing",
          "Down-up strumming",
          "Rhythm consistency",
          "Dynamics",
          "Pick control",
          "Groove",
          "Em",
          "Am",
          "Playing complete songs"
        ],
        featuredSongsCompleted: ["Stand By Me", "Wagon Wheel"]
      }
    }
  }
];

moduleTwoLessonsEightAndNine.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

upsertAcademyItem("missions", {
  id: "mission-rhythm-foundations",
  unlockNextModuleOnAssessment: true,
  moduleAssessment: {
    title: "Module 2 Assessment",
    purpose: "Confirm that rhythm guitar fundamentals are becoming natural before progressing.",
    resultOptions: ["Pass", "Needs More Practice"],
    needsMorePracticeRecommendation: "Review specific exercises previously marked Needs More Practice. Module 3 remains available after the assessment."
  },
  moduleSummary: {
    title: "Module Complete",
    message: "Congratulations. You now have the rhythm skills required to play a much wider range of songs with confidence.",
    preparingForNextModule: "In Module 3 you will build more expressive strumming patterns, improve rhythmic feel, and begin tackling more recognisable modern songs.",
    skillsDeveloped: [
      "Steady timing",
      "Down-up strumming",
      "Rhythm consistency",
      "Dynamics",
      "Pick control",
      "Groove",
      "Em",
      "Am",
      "Playing complete songs"
    ]
  }
});

[
  {
    name: "Mini F",
    group: "Barre Skill Builder",
    frets: ["x", "x", "x", 2, 1, 1],
    fingers: ["", "", "", "2", "1", "1"],
    startFret: 1,
    barre: "top 2 strings"
  },
  {
    name: "Four-string F",
    group: "Barre Skill Builder",
    frets: ["x", "x", 3, 2, 1, 1],
    fingers: ["", "", "3", "2", "1", "1"],
    startFret: 1,
    barre: "top 2 strings"
  },
  {
    name: "Full F major",
    group: "Barre Skill Builder",
    frets: [1, 3, 3, 2, 1, 1],
    fingers: ["1", "3", "4", "2", "1", "1"],
    startFret: 1,
    barre: "1st fret"
  },
  {
    name: "Bm7 (beginner)",
    group: "Barre Skill Builder",
    frets: ["x", 2, 0, 2, 0, 2],
    fingers: ["", "1", "", "2", "", "3"]
  }
].forEach(upsertChordDiagram);

const barreChordAcceleratorLessons = [
  {
    id: "lesson-barre-accelerator-1",
    lessonNumber: 1,
    title: "Your First Playable F Chord",
    objective: "Learn a practical Mini F chord, understand the barre mechanics that make it work, and use it in a simple progression.",
    whyThisLesson: "F major appears in countless songs. Mini F gives you a real, playable version now while you gradually build toward bigger barre shapes."
  },
  {
    id: "lesson-barre-accelerator-2",
    lessonNumber: 2,
    title: "Building the Mini F",
    objective: "Learn to play the Mini F chord cleanly and use it in simple chord changes.",
    whyThisLesson: "The Mini F is one of the most useful versions of F major. It appears in thousands of songs and develops the technique needed for the full barre chord while letting you make music immediately.",
    chordNames: ["Mini F", "C", "Am", "G"]
  },
  {
    id: "lesson-barre-accelerator-3",
    lessonNumber: 3,
    title: "Introducing the Full F",
    objective: "Learn the complete Full F shape. Do not expect perfect sounding chords today. Today's objective is learning the shape.",
    whyThisLesson: "Every guitarist struggles with the first full barre chord. Learning the shape now makes future practice much easier.",
    chordNames: ["Mini F", "Full F major", "C", "Am", "G"]
  },
  {
    id: "lesson-barre-accelerator-4",
    lessonNumber: 4,
    title: "Your First Full F",
    objective: "Play your first recognisable Full F chord.",
    whyThisLesson: "Today you begin using Full F as a musical chord rather than just a hand exercise.",
    chordNames: ["Full F major", "Mini F", "C", "Am", "G"]
  },
  {
    id: "lesson-barre-accelerator-5",
    lessonNumber: 5,
    title: "Playing F Without Fighting It",
    objective: "Learn to play the Full F chord with less effort by improving efficiency instead of increasing strength.",
    whyThisLesson: "Cleaner barre chords usually come from better positioning, better thumb placement and using only the pressure required.",
    chordNames: ["Full F major", "Mini F", "C", "Am", "G"]
  },
  {
    id: "lesson-barre-accelerator-6",
    lessonNumber: 6,
    title: "Your Second Barre Chord — B Minor",
    objective: "Learn the B minor shape and recognise that it uses the same principles as the Full F chord.",
    whyThisLesson: "Once you can play one barre chord, many others become much easier. Bm is one of the most common minor barre chords in rock music.",
    chordNames: ["Bm", "Full F major", "Mini F", "G", "A"]
  },
  {
    id: "lesson-barre-accelerator-7",
    lessonNumber: 7,
    title: "Making Barre Chords Automatic",
    objective: "Build confidence changing between open chords and barre chords without stopping the music.",
    whyThisLesson: "Real songs don’t wait for perfect chord changes. Today’s focus is maintaining rhythm while improving accuracy.",
    chordNames: ["Full F major", "Mini F", "Bm", "C", "G", "A", "Am"]
  },
  {
    id: "lesson-barre-accelerator-8",
    lessonNumber: 8,
    title: "Playing Through Mistakes",
    objective: "Learn to keep playing even when a chord isn’t perfect. The objective is no longer perfect chords. The objective is keeping the music moving.",
    whyThisLesson: "When learning barre chords, stopping every time something buzzes creates hesitation and breaks your rhythm. Good players recover quickly. Today’s lesson teaches that skill.",
    chordNames: ["Full F major", "Mini F", "Bm", "C", "G", "A", "Am"]
  },
  {
    id: "lesson-barre-accelerator-9",
    lessonNumber: 9,
    title: "Graduation – Using Barre Chords Naturally",
    objective: "Use Full F and Bm naturally inside musical progressions without thinking about every movement. Today’s lesson is about confidence rather than learning something new.",
    whyThisLesson: "Barre chords stop feeling difficult when they become part of your normal playing. Today’s lesson ties everything together.",
    chordNames: ["Full F major", "Mini F", "Bm", "C", "G", "A", "Am"]
  }
];

window.academyData.skillBuilders = [
  {
    id: "skill-builder-barre-chord-accelerator",
    missionId: "mission-barre-chord-accelerator",
    title: "Barre Chord Accelerator",
    description: "Develop F major and B minor early without interrupting the main module progression.",
    whyDoThis: "Barre chords unlock hundreds of songs. This Skill Builder helps you start developing F major and B minor early while continuing the main course.",
    howOften: "Spend 10–15 minutes on this alongside your normal module practice.",
    whenToStop: "You do not need to “finish” barre chords before using them. Complete the lessons, then revisit them regularly as your strength, accuracy and relaxation improve.",
    optional: true
  }
];

upsertAcademyItem("missions", {
  id: "mission-barre-chord-accelerator",
  title: "Barre Chord Accelerator",
  subtitle: "Optional focused practice for F major and B minor.",
  description: "Develop F major and B minor as early as possible without disrupting the main module progression.",
  whyItMatters: "Short, regular barre practice builds control gradually while the main course continues.",
  estimatedSessions: "Optional ongoing practice",
  estimatedPracticeHours: "Flexible",
  prerequisiteMissionIds: [],
  connectedSongs: [],
  skillsDeveloped: ["Barre control", "F major", "B minor", "F endurance", "Barre chord changes"],
  skillIds: ["skill-chord-changes"],
  objectives: [
    "Understand how a barre works",
    "Develop two-string barre control",
    "Progress from Mini F to full F major",
    "Build F endurance and chord changes",
    "Learn Bm mechanics and a beginner Bm7 alternative"
  ],
  successCriteria: [],
  lessons: barreChordAcceleratorLessons.map((lesson) => lesson.id),
  isSkillBuilder: true,
  optional: true,
  completed: false
});

barreChordAcceleratorLessons.forEach((definition) => {
  const exerciseId = `exercise-${definition.id.replace(/^lesson-/, "")}-placeholder`;
  const checkpointId = `checkpoint-${definition.id.replace(/^lesson-/, "")}`;
  upsertAcademyItem("lessons", {
    id: definition.id,
    missionId: "mission-barre-chord-accelerator",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    description: definition.objective,
    objectiveHeading: "What you'll learn",
    objective: definition.objective,
    whyThisLesson: definition.whyThisLesson,
    coachNotes: "Coach's note placeholder. Detailed coaching will be added with the exercise content.",
    estimatedMinutes: 0,
    skillIds: ["skill-chord-changes"],
    exercises: [exerciseId],
    connectedSongs: [],
    recommendedSongs: [],
    checkpoint: checkpointId,
    practiceJournal: [
      "What felt comfortable?",
      "Where did tension appear?",
      "What should I focus on next time?"
    ],
    reflectionPrompts: [
      "What felt comfortable?",
      "Where did tension appear?",
      "What should I focus on next time?"
    ],
    completed: false
  });
  upsertAcademyItem("exercises", {
    id: exerciseId,
    lessonId: definition.id,
    title: "Exercise content coming next",
    purpose: "Placeholder for the detailed Skill Builder exercises.",
    objective: "Detailed exercise content has not been written yet.",
    instructions: "Exercise instructions will be added later.",
    instructionSteps: ["Detailed exercise steps will be added later."],
    durationMinutes: 0,
    tempo: "",
    passCriteria: "Pass criteria will be added with the detailed exercise content.",
    definitionOfDone: "Definition of done will be added with the detailed exercise content.",
    commonMistakes: [],
    chordNames: definition.chordNames || [],
    skillIds: ["skill-chord-changes"],
    mediaLinks: [],
    completed: false
  });
  upsertAcademyItem("checkpoints", {
    id: checkpointId,
    lessonId: definition.id,
    title: `${definition.title} Checkpoint`,
    purpose: "Checkpoint content will be added with the detailed Skill Builder exercises.",
    requirements: ["Checkpoint criteria will be added with the detailed lesson content."],
    completed: false
  });
});

const firstPlayableFExercises = [
  {
    id: "exercise-barre-accelerator-1-barre-setup",
    title: "Barre Setup Warm-up",
    purpose: "Prepare the index finger and thumb before forming Mini F.",
    objective: "Find a relaxed finger angle and thumb position so the small barre works without squeezing.",
    instructionSteps: [
      "Place your index finger lightly across the high E and B strings at fret 1.",
      "Roll the finger slightly toward the thumb side so the firmer edge contacts the strings.",
      "Place your thumb behind the neck roughly opposite the index finger.",
      "Pick the high E and B strings one at a time.",
      "Listen for clear notes rather than a crushed sound.",
      "If a note buzzes, adjust finger angle first, then add only a little pressure."
    ],
    durationMinutes: 3,
    tempo: "",
    passCriteria: "Both top strings ring at least a few times without hand pain or heavy squeezing.",
    definitionOfDone: "Both top strings ring at least a few times without hand pain or heavy squeezing.",
    commonMistakes: [
      "Trying to press straight down with the soft underside of the finger",
      "Wrapping the thumb over the neck and losing support",
      "Adding force before adjusting finger angle"
    ],
    chordNames: ["Mini F"]
  },
  {
    id: "exercise-barre-accelerator-1-learn-mini-f",
    title: "Learn Mini F",
    purpose: "Build your first practical F chord.",
    objective: "Form Mini F from memory and hear the intended notes clearly.",
    instructionSteps: [
      "Study the Mini F diagram.",
      "Barre the high E and B strings at fret 1 with your index finger.",
      "Place the middle finger on the G string at fret 2.",
      "Pick the G, B and high E strings one at a time.",
      "You should hear three clear notes with no dead string.",
      "If the high E or B string is muted, roll the index finger slightly and retest only that string."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can build Mini F from memory and make the top three strings ring clearly.",
    definitionOfDone: "You can build Mini F from memory and make the top three strings ring clearly.",
    commonMistakes: [
      "Flattening the middle finger into the B string",
      "Playing too many strings",
      "Moving the whole hand when only the index angle needs changing"
    ],
    chordNames: ["Mini F"]
  },
  {
    id: "exercise-barre-accelerator-1-mini-f-string-check",
    title: "Mini F String Check",
    purpose: "Train your ear to judge whether Mini F is usable in a song.",
    objective: "Identify the exact string that is buzzing or muted and fix one thing at a time.",
    instructionSteps: [
      "Form Mini F.",
      "Pick the G string, then B string, then high E string.",
      "Listen for buzzing, muted notes or uneven volume.",
      "If one string fails, stop and fix only the finger affecting that string.",
      "Retest the three strings.",
      "Finish by strumming only the top three strings softly."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Mini F rings clearly three times in a row when picked string by string.",
    definitionOfDone: "Mini F rings clearly three times in a row when picked string by string.",
    commonMistakes: [
      "Strumming over a bad note instead of checking it",
      "Pressing harder when the real problem is finger placement",
      "Accidentally hitting the low strings"
    ],
    chordNames: ["Mini F"]
  },
  {
    id: "exercise-barre-accelerator-1-c-to-mini-f",
    title: "C to Mini F",
    purpose: "Use Mini F in a real chord change.",
    objective: "Move from C to Mini F smoothly while keeping the hand relaxed.",
    instructionSteps: [
      "Form C major.",
      "Strum C once and let it ring.",
      "Move slowly to Mini F.",
      "Strum only the top three strings of Mini F.",
      "Move back to C.",
      "Listen for a clean change without a tense squeeze.",
      "If Mini F buzzes, pause briefly, fix the index angle, then continue."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "You can complete several C to Mini F changes without stopping to restart.",
    definitionOfDone: "You can complete several C to Mini F changes without stopping to restart.",
    commonMistakes: [
      "Trying to land the whole shape instantly",
      "Stopping the rhythm while fixing the F",
      "Squeezing harder during the change"
    ],
    chordNames: ["C", "Mini F"]
  },
  {
    id: "exercise-barre-accelerator-1-mini-f-progression",
    title: "Mini F Progression",
    purpose: "Make Mini F feel musical instead of isolated.",
    objective: "Play C, Mini F and G as a simple progression with steady rhythm.",
    instructionSteps: [
      "Set a slow, steady count.",
      "Play C for four beats.",
      "Play Mini F for four beats.",
      "Play G for four beats.",
      "Return to C and repeat.",
      "Listen for the progression sounding like music, not separate exercises.",
      "If the F is imperfect, keep the rhythm going and improve it on the next pass."
    ],
    durationMinutes: 5,
    tempo: "60 BPM",
    passCriteria: "You can play several cycles of C, Mini F and G with mostly steady rhythm.",
    definitionOfDone: "You can play several cycles of C, Mini F and G with mostly steady rhythm.",
    commonMistakes: [
      "Treating Mini F as a stop sign",
      "Playing all six strings on Mini F",
      "Letting one rough F chord break the whole progression"
    ],
    chordNames: ["C", "Mini F", "G"]
  },
  {
    id: "exercise-barre-accelerator-1-daily-practice",
    title: "Daily Practice: Mini F Reset",
    purpose: "Build the physical adaptation that barre chords need over time.",
    objective: "Practise a short repeatable routine you can revisit alongside normal module practice.",
    instructionSteps: [
      "Form Mini F.",
      "Pick the top three strings.",
      "Release completely.",
      "Shake the hand loose.",
      "Repeat slowly for five minutes.",
      "Stop if the hand becomes painful or tense.",
      "Your aim is relaxed consistency, not endurance heroics."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You finish five minutes with a clearer Mini F and no unnecessary tension.",
    definitionOfDone: "You finish five minutes with a clearer Mini F and no unnecessary tension.",
    commonMistakes: [
      "Holding the shape too long",
      "Forgetting to release between attempts",
      "Turning a daily adaptation exercise into a strength test"
    ],
    chordNames: ["Mini F"]
  }
];

upsertAcademyItem("lessons", {
  id: "lesson-barre-accelerator-1",
  missionId: "mission-barre-chord-accelerator",
  lessonNumber: 1,
  title: "Your First Playable F Chord",
  description: "Learn a practical Mini F chord, apply it to C and G, and finish by making the shape musical.",
  objectiveHeading: "What you'll learn",
  objective: "Today you will build a playable Mini F, learn the small barre mechanics that support it, move between C and Mini F, and use it inside a simple musical progression.",
  whyThisLesson: "F major opens the door to hundreds of songs, but the full barre version can be frustrating too early. Mini F gives you a real F sound now while teaching the same finger angle, thumb support and minimum-pressure habits you will need later.",
  coachNotes: "A barre is not about squeezing harder. It is about finger angle, thumb support, wrist position and minimum pressure. Spend a few minutes on the mechanics, then get playing.",
  estimatedMinutes: 28,
  skillIds: ["skill-chord-changes"],
  exercises: firstPlayableFExercises.map((exercise) => exercise.id),
  connectedSongs: [],
  recommendedSongs: [],
  checkpoint: "checkpoint-barre-accelerator-1",
  practiceJournal: [
    "Did Mini F feel playable today?",
    "Which string was hardest to make ring?",
    "Did adjusting angle help more than squeezing?",
    "Could you keep the C, Mini F and G progression moving?"
  ],
  reflectionPrompts: [
    "Did Mini F feel playable today?",
    "Which string was hardest to make ring?",
    "Did adjusting angle help more than squeezing?",
    "Could you keep the C, Mini F and G progression moving?"
  ],
  completed: false
});

firstPlayableFExercises.forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-barre-accelerator-1",
    instructions: exercise.instructionSteps.join(" "),
    skillIds: ["skill-chord-changes"],
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-barre-accelerator-1",
  lessonId: "lesson-barre-accelerator-1",
  title: "Your First Playable F Chord",
  purpose: "Confirm that Mini F is playable, relaxed and usable inside a simple progression.",
  requirements: [
    "Mini F rings clearly across the top three strings",
    "You understand that angle and placement matter more than squeezing",
    "You can move from C to Mini F without panic",
    "You can play C, Mini F and G in a simple steady progression",
    "You know the five-minute Daily Practice routine to keep developing the shape"
  ],
  passRule: "Pass if Mini F is mostly clear and can be used in the progression with steady rhythm. Do not require the chord to be perfect.",
  completed: false
});

const twoStringBarreControlExercises = [
  {
    id: "exercise-barre-accelerator-2-reset",
    title: "Reset",
    purpose: "Release any tension before beginning.",
    objective: "Begin with loose hands, shoulders and breathing.",
    instructionSteps: [
      "Shake both hands.",
      "Open and close the fingers.",
      "Roll the shoulders.",
      "Take several relaxed breaths."
    ],
    durationMinutes: 2,
    tempo: "",
    passCriteria: "Hands feel loose.",
    definitionOfDone: "Hands feel loose.",
    commonMistakes: [],
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-finger-angle",
    title: "Finger Angle",
    purpose: "Find the strongest contact point.",
    objective: "Find a two-string barre angle that requires the least pressure.",
    instructionSteps: [
      "Barre the high E and B strings.",
      "Roll your index finger slightly toward the thumb side.",
      "Test each string.",
      "Find the angle requiring the least pressure."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Both strings ring using noticeably less effort.",
    definitionOfDone: "Both strings ring using noticeably less effort.",
    commonMistakes: ["Finger perfectly flat", "Locked knuckle", "Excessive pressure"],
    coachTip: "The side of your index finger is naturally firmer than the soft underside. Use the bone—not brute force.",
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-thumb-support",
    title: "Thumb Support",
    purpose: "Learn how the thumb balances the hand.",
    objective: "Find a comfortable thumb position that supports rather than squeezes.",
    instructionSteps: [
      "Move the thumb slightly higher.",
      "Move it slightly lower.",
      "Notice how the pressure changes.",
      "Find the most comfortable position."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Thumb supports rather than squeezes.",
    definitionOfDone: "Thumb supports rather than squeezes.",
    commonMistakes: [],
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-lightest-pressure",
    title: "Lightest Possible Pressure",
    purpose: "Discover minimum effective pressure.",
    objective: "Use only enough pressure to make both notes ring.",
    instructionSteps: [
      "Begin with almost no pressure.",
      "Increase slowly until both notes ring.",
      "Stop immediately.",
      "Do not continue squeezing."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You understand how little pressure is actually required.",
    definitionOfDone: "You understand how little pressure is actually required.",
    commonMistakes: [],
    coachTip: "The correct pressure is almost always less than beginners expect.",
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-lift-and-replace",
    title: "Lift and Replace",
    purpose: "Develop consistency.",
    objective: "Return to the same relaxed finger angle repeatedly.",
    instructionSteps: [
      "Form the two-string barre.",
      "Release.",
      "Replace the finger.",
      "Repeat slowly."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Five clean repetitions.",
    definitionOfDone: "Five clean repetitions.",
    commonMistakes: [],
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-five-second-hold",
    title: "Five Second Hold",
    purpose: "Introduce endurance gently.",
    objective: "Hold a relaxed two-string barre briefly without building pain or excessive tension.",
    instructionSteps: [
      "Hold the two-string barre for five seconds.",
      "Relax completely.",
      "Repeat.",
      "Never continue if pain develops."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Complete several relaxed five-second holds without pain.",
    definitionOfDone: "Complete several relaxed five-second holds without pain.",
    commonMistakes: [],
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-2-reflection-play",
    title: "Reflection Play",
    purpose: "Finish by reinforcing relaxed, repeatable contact.",
    objective: "Prioritise quality over duration.",
    instructionSteps: [
      "Play several relaxed repetitions.",
      "Listen to both strings.",
      "Focus on quality rather than duration."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Several relaxed repetitions with both strings ringing.",
    definitionOfDone: "Finish with a relaxed, repeatable two-string barre.",
    commonMistakes: [],
    chordNames: []
  }
];

upsertAcademyItem("lessons", {
  id: "lesson-barre-accelerator-2",
  missionId: "mission-barre-chord-accelerator",
  lessonNumber: 2,
  title: "Two-String Barre Control",
  description: "Develop reliable control over a small barre without unnecessary tension.",
  objectiveHeading: "What you'll learn",
  objective: "Develop reliable control over a small barre without unnecessary tension.",
  whyThisLesson: "A full barre chord is simply a small barre repeated across more strings. If you can consistently control two strings, adding more later becomes much easier.",
  coachNotes: "Don’t judge success by how many strings you can barre. Judge it by how relaxed you feel while doing it. A relaxed two-string barre is far more valuable than a tense six-string barre.",
  estimatedMinutes: 32,
  skillIds: ["skill-chord-changes"],
  exercises: twoStringBarreControlExercises.map((exercise) => exercise.id),
  connectedSongs: [],
  recommendedSongs: [],
  checkpoint: "checkpoint-barre-accelerator-2",
  practiceJournal: [
    "What reduced pressure the most?",
    "Which string remained inconsistent?",
    "Did rolling the finger help?"
  ],
  reflectionPrompts: [
    "What reduced pressure the most?",
    "Which string remained inconsistent?",
    "Did rolling the finger help?"
  ],
  completed: false
});

twoStringBarreControlExercises.forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-barre-accelerator-2",
    instructions: exercise.instructionSteps.join(" "),
    skillIds: ["skill-chord-changes"],
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-barre-accelerator-2",
  lessonId: "lesson-barre-accelerator-2",
  title: "Two-String Barre Control",
  purpose: "Confirm that two-string barre contact is clear, relaxed and repeatable.",
  requirements: [
    "Both strings ring consistently",
    "Thumb feels comfortable",
    "Pressure remains relaxed",
    "Finger angle feels repeatable"
  ],
  passRule: "Pass if both strings ring consistently with comfortable thumb support, relaxed pressure and a repeatable finger angle.",
  completed: false
});

const miniFAndFourStringFLessons = [
  {
    lesson: {
      id: "lesson-barre-accelerator-3",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 3,
      title: "Mini F",
      description: "Learn your first practical F chord.",
      objectiveHeading: "What you'll learn",
      objective: "Learn your first practical F chord.",
      whyThisLesson: "Mini F is used in real music and develops all the mechanics required for the full F chord later.",
      coachNotes: "Mini F is not cheating. Many experienced guitarists still use it because it sounds great in the right musical context.",
      estimatedMinutes: 35,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-3",
      practiceJournal: [
        "Which finger caused the most problems?",
        "Did Mini F feel easier than expected?",
        "What still needs work?"
      ],
      reflectionPrompts: [
        "Which finger caused the most problems?",
        "Did Mini F feel easier than expected?",
        "What still needs work?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-3-learn-shape",
        title: "Learn the Shape",
        purpose: "Memorise the Mini F chord.",
        objective: "Build Mini F accurately without relying on the diagram.",
        instructionSteps: ["Study the chord diagram.", "Build the chord slowly.", "Check every note."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Mini F can be formed from memory.",
        definitionOfDone: "Mini F can be formed from memory.",
        commonMistakes: [],
        chordNames: ["Mini F"]
      },
      {
        id: "exercise-barre-accelerator-3-string-check",
        title: "String Check",
        purpose: "Develop clean fretting.",
        objective: "Make every intended Mini F note ring clearly.",
        instructionSteps: ["Build Mini F.", "Pick each intended string individually.", "Correct only the string that buzzes."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Every intended string rings clearly.",
        definitionOfDone: "Every intended string rings clearly.",
        commonMistakes: [],
        chordNames: ["Mini F"]
      },
      {
        id: "exercise-barre-accelerator-3-c-to-mini-f",
        title: "C to Mini F",
        purpose: "Develop efficient movement.",
        objective: "Move between C and Mini F while keeping the hand relaxed.",
        instructionSteps: ["Play C for four beats.", "Change to Mini F for four beats.", "Repeat without rushing."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Mostly clean transitions.",
        definitionOfDone: "Complete several mostly clean C to Mini F transitions.",
        commonMistakes: [],
        chordNames: ["C", "Mini F"]
      },
      {
        id: "exercise-barre-accelerator-3-mini-f-to-g",
        title: "Mini F to G",
        purpose: "Introduce another common transition.",
        objective: "Move between Mini F and G without building tension.",
        instructionSteps: ["Play Mini F for four beats.", "Change to G for four beats.", "Keep the rhythm steady.", "Repeat."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Mostly clean Mini F to G transitions.",
        definitionOfDone: "Complete several transitions while the hand remains relaxed.",
        commonMistakes: [],
        chordNames: ["Mini F", "G"]
      },
      {
        id: "exercise-barre-accelerator-3-progression",
        title: "Mini F Progression",
        purpose: "Use Mini F in musical context.",
        objective: "Keep a simple C, Mini F and G progression moving.",
        instructionSteps: ["Play C, Mini F and G.", "Use four beats per chord.", "Repeat the progression continuously."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several progression cycles without stopping.",
        definitionOfDone: "Mini F fits into the progression with mostly steady rhythm.",
        commonMistakes: [],
        chordNames: ["C", "Mini F", "G"]
      },
      {
        id: "exercise-barre-accelerator-3-continuous-playing",
        title: "Continuous Playing",
        purpose: "Maintain rhythm while using Mini F.",
        objective: "Keep playing through imperfect chord changes.",
        instructionSteps: ["Use C, Mini F and G.", "Keep the strumming hand moving.", "Recover naturally from mistakes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Five minutes of continuous playing without restarting.",
        definitionOfDone: "Rhythm continues while Mini F is used repeatedly.",
        commonMistakes: [],
        chordNames: ["C", "Mini F", "G"]
      },
      {
        id: "exercise-barre-accelerator-3-performance",
        title: "Performance",
        purpose: "Develop confidence.",
        objective: "Play continuously without restarting after mistakes.",
        instructionSteps: ["Choose a progression containing Mini F.", "Play continuously.", "Do not restart after mistakes.", "Finish the performance."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Complete the performance without restarting.",
        definitionOfDone: "Mini F is used confidently in continuous playing.",
        commonMistakes: [],
        chordNames: ["Mini F"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-3",
      title: "Mini F",
      purpose: "Confirm that Mini F is clear, usable and relaxed.",
      requirements: [
        "Mini F rings clearly",
        "Transitions continue improving",
        "Hand remains relaxed"
      ],
      passRule: "Pass if Mini F rings clearly, transitions are improving, and the hand remains relaxed."
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-4",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 4,
      title: "Four-String F",
      description: "Expand Mini F into a fuller sounding F chord.",
      objectiveHeading: "What you'll learn",
      objective: "Expand Mini F into a fuller sounding F chord.",
      whyThisLesson: "A clean four-string F produces a richer sound while remaining far easier than a full six-string barre.",
      coachNotes: "Never sacrifice quality simply to play more strings. A beautiful four-string F is always better than a buzzing six-string F.",
      estimatedMinutes: 35,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-4",
      practiceJournal: [
        "Did adding another string change your hand position?",
        "Was it harder to stay relaxed?",
        "Which version currently sounds better to you?"
      ],
      reflectionPrompts: [
        "Did adding another string change your hand position?",
        "Was it harder to stay relaxed?",
        "Which version currently sounds better to you?"
      ],
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-4-learn-shape",
        title: "Learn Four-String F",
        purpose: "Learn the new shape.",
        objective: "Build Four-string F slowly and accurately.",
        instructionSteps: ["Study the chord diagram.", "Build the chord one finger at a time.", "Check the intended four strings.", "Release and rebuild."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Four-string F can be formed from memory.",
        definitionOfDone: "Build the shape cleanly from memory several times.",
        commonMistakes: [],
        chordNames: ["Four-string F"]
      },
      {
        id: "exercise-barre-accelerator-4-string-check",
        title: "String Check",
        purpose: "Check every string individually.",
        objective: "Make every intended Four-string F note ring clearly.",
        instructionSteps: ["Build Four-string F.", "Pick each intended string individually.", "Adjust only the finger causing a problem."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Every intended string rings clearly.",
        definitionOfDone: "Complete three clean string checks.",
        commonMistakes: [],
        chordNames: ["Four-string F"]
      },
      {
        id: "exercise-barre-accelerator-4-compare",
        title: "Mini F vs Four-String F",
        purpose: "Hear the tonal difference.",
        objective: "Recognise the fuller sound created by the added string.",
        instructionSteps: ["Play Mini F.", "Play Four-string F.", "Alternate between both chord shapes.", "Listen carefully."],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Hear and describe the tonal difference between both shapes.",
        definitionOfDone: "Both shapes ring clearly and their tonal difference is recognisable.",
        commonMistakes: [],
        chordNames: ["Mini F", "Four-string F"]
      },
      {
        id: "exercise-barre-accelerator-4-to-c",
        title: "Four-String F to C",
        purpose: "Develop smooth transitions.",
        objective: "Move between Four-string F and C while keeping time.",
        instructionSteps: ["Play Four-string F for four beats.", "Change to C for four beats.", "Repeat without rushing."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Mostly clean Four-string F to C transitions.",
        definitionOfDone: "Complete several smooth transitions with steady rhythm.",
        commonMistakes: [],
        chordNames: ["Four-string F", "C"]
      },
      {
        id: "exercise-barre-accelerator-4-to-g",
        title: "Four-String F to G",
        purpose: "Expand chord movement.",
        objective: "Move between Four-string F and G without stopping.",
        instructionSteps: ["Play Four-string F for four beats.", "Change to G for four beats.", "Keep the rhythm steady.", "Repeat."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Mostly clean Four-string F to G transitions.",
        definitionOfDone: "Complete several transitions without excessive tension.",
        commonMistakes: [],
        chordNames: ["Four-string F", "G"]
      },
      {
        id: "exercise-barre-accelerator-4-progression",
        title: "Four-String Progression",
        purpose: "Use Four-String F in a musical progression.",
        objective: "Keep C, Four-string F and G moving in steady rhythm.",
        instructionSteps: ["Play C, Four-string F and G.", "Use four beats per chord.", "Repeat continuously."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Complete several progression cycles without stopping.",
        definitionOfDone: "Four-string F works inside the progression with mostly steady rhythm.",
        commonMistakes: [],
        chordNames: ["C", "Four-string F", "G"]
      },
      {
        id: "exercise-barre-accelerator-4-continuous-playing",
        title: "Continuous Playing",
        purpose: "Maintain rhythm while using Four-String F.",
        objective: "Use Four-string F repeatedly without interrupting the beat.",
        instructionSteps: ["Use C, Four-string F and G.", "Play continuously.", "Recover naturally from rough changes."],
        durationMinutes: 5,
        tempo: "60 BPM",
        passCriteria: "Five minutes of continuous playing with mostly steady rhythm.",
        definitionOfDone: "Four-string F is used continuously without stopping the performance.",
        commonMistakes: [],
        chordNames: ["C", "Four-string F", "G"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-4",
      title: "Four-String F",
      purpose: "Confirm that Four-string F is clear and usable in steady rhythm.",
      requirements: [
        "Four-String F rings clearly",
        "Rhythm remains steady",
        "Chord changes continue improving"
      ],
      passRule: "Pass if Four-string F rings clearly, rhythm remains steady, and chord changes continue improving."
    }
  }
];

miniFAndFourStringFLessons.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const barreAcceleratorLessonsTwoToFour = [
  {
    lesson: {
      id: "lesson-barre-accelerator-2",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 2,
      title: "Building the Mini F",
      description: "Learn to play the Mini F chord cleanly and use it in simple chord changes.",
      objectiveHeading: "What you'll learn",
      objective: "Learn to play the Mini F chord cleanly and use it in simple chord changes.",
      whyThisLesson: "The Mini F is one of the most useful versions of F major. It appears in thousands of songs and develops the technique needed for the full barre chord while letting you make music immediately.",
      coachNotes: "Most buzzing is caused by finger position, not lack of strength. Always reposition before increasing pressure.",
      estimatedMinutes: 25,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-2",
      practiceJournal: [
        "Which transition feels harder: C to Mini F or Mini F to C?",
        "Did repositioning help before adding pressure?",
        "What should I spend two extra minutes on?"
      ],
      reflectionPrompts: [
        "Which transition feels harder: C to Mini F or Mini F to C?",
        "Did repositioning help before adding pressure?",
        "What should I spend two extra minutes on?"
      ],
      ongoingPractice: {
        duration: "Five minutes daily",
        items: [
          "Two-string barre",
          "Mini F holds"
        ]
      },
      completionMessage: "You can now use Mini F in real music.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-2-reset",
        title: "Daily Warm-up",
        purpose: "Repeat the two-string barre exercise from Lesson 1.",
        objective: "Warm up the small barre with relaxed hand position and minimum pressure.",
        instructionSteps: [
          "Barre the high E and B strings at fret 1.",
          "Keep the hand relaxed.",
          "Use minimum pressure.",
          "Rotate the index finger slightly towards the thumb-side edge if it produces a cleaner sound.",
          "Release completely between attempts."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Five clean repetitions.",
        definitionOfDone: "Five clean repetitions.",
        commonMistakes: [
          "Squeezing before adjusting the finger angle",
          "Holding tension between attempts",
          "Ignoring which string is not ringing"
        ],
        chordNames: ["Mini F"]
      },
      {
        id: "exercise-barre-accelerator-2-finger-angle",
        title: "Build the Mini F",
        purpose: "Form the Mini F chord and check every intended string.",
        objective: "Make every note of Mini F ring cleanly before using it in changes.",
        instructionSteps: [
          "Form the Mini F chord.",
          "Check each string individually.",
          "If a note buzzes, adjust finger position.",
          "If it still buzzes, adjust finger angle.",
          "Avoid squeezing harder immediately.",
          "Play every string separately until all notes ring cleanly."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Five consecutive clean Mini F chords.",
        definitionOfDone: "Five consecutive clean Mini F chords.",
        commonMistakes: [
          "Pressing harder before repositioning",
          "Letting the middle finger mute a nearby string",
          "Strumming without checking each string first"
        ],
        coachTip: "Most buzzing is caused by finger position, not lack of strength. Always reposition before increasing pressure.",
        chordNames: ["Mini F"]
      },
      {
        id: "exercise-barre-accelerator-2-thumb-support",
        title: "C to Mini F",
        purpose: "Move between C and Mini F slowly enough to keep the shape clean.",
        objective: "Build a useful real-world chord change without rushing.",
        instructionSteps: [
          "Play C.",
          "Move to Mini F.",
          "Play Mini F.",
          "Move back to C.",
          "Move slowly.",
          "Allow the fingers to fully settle before strumming."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Twenty clean chord changes.",
        definitionOfDone: "Twenty clean chord changes.",
        commonMistakes: [
          "Trying to arrive instantly",
          "Strumming before the Mini F has settled",
          "Letting the hand tense during the change"
        ],
        chordNames: ["C", "Mini F"]
      },
      {
        id: "exercise-barre-accelerator-2-lightest-pressure",
        title: "First Progression",
        purpose: "Use Mini F in a musical progression.",
        objective: "Maintain continuous rhythm while playing C, Am, Mini F and G.",
        instructionSteps: [
          "Play C.",
          "Play Am.",
          "Play Mini F.",
          "Play G.",
          "Use steady downstrokes.",
          "Keep moving even if a chord is not perfect.",
          "Repeat ten times."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Maintain continuous rhythm.",
        definitionOfDone: "Maintain continuous rhythm.",
        commonMistakes: [
          "Stopping when Mini F is imperfect",
          "Forgetting the downstroke pulse",
          "Letting one chord interrupt the whole progression"
        ],
        chordNames: ["C", "Am", "Mini F", "G"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-2",
      title: "Building the Mini F",
      purpose: "Confirm that Mini F is clean enough to use in simple chord changes and a short progression.",
      requirements: [
        "Mini F rings clearly",
        "C to Mini F changes are improving",
        "Mini F to C changes are improving",
        "C, Am, Mini F and G can be played with continuous rhythm",
        "You know which transition needs two extra minutes of practice"
      ],
      passRule: "Pass if Mini F is mostly clean and the first progression keeps moving without stopping.",
      completed: false
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-3",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 3,
      title: "Introducing the Full F",
      description: "Learn the complete Full F shape. Do not expect perfect sounding chords today. Today's objective is learning the shape.",
      objectiveHeading: "What you'll learn",
      objective: "Learn the complete Full F shape. Do not expect perfect sounding chords today. Today's objective is learning the shape.",
      whyThisLesson: "Every guitarist struggles with the first full barre chord. Learning the shape now makes future practice much easier.",
      coachNotes: "Every guitarist misses notes when learning Full F. Diagnosis is faster than repetition.",
      estimatedMinutes: 25,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-3",
      practiceJournal: [
        "Where did the Full F shape feel unfamiliar?",
        "Which strings buzzed most often?",
        "Did diagnosis help more than repeated strumming?"
      ],
      reflectionPrompts: [
        "Where did the Full F shape feel unfamiliar?",
        "Which strings buzzed most often?",
        "Did diagnosis help more than repeated strumming?"
      ],
      ongoingPractice: {
        duration: "Daily",
        items: [
          "Mini F",
          "Full F holds",
          "Two-string barre"
        ]
      },
      completionMessage: "You've built your first full barre chord.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-3-learn-shape",
        title: "Warm-up",
        purpose: "Continue the familiar small-shape work before building Full F.",
        objective: "Prepare the hand with two-string barre and Mini F before attempting the full shape.",
        instructionSteps: [
          "Play the two-string barre.",
          "Release completely.",
          "Build Mini F.",
          "Check the intended strings.",
          "Keep the hand relaxed."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "The two-string barre and Mini F feel relaxed before starting Full F.",
        definitionOfDone: "The two-string barre and Mini F feel relaxed before starting Full F.",
        commonMistakes: [
          "Skipping the warm-up",
          "Carrying tension into the Full F shape",
          "Trying to prove the full chord before the hand is ready"
        ],
        chordNames: ["Mini F"]
      },
      {
        id: "exercise-barre-accelerator-3-string-check",
        title: "Build the Shape",
        purpose: "Construct the Full F chord one finger at a time.",
        objective: "Comfortably build the shape without rushing.",
        instructionSteps: [
          "Study the Full F chord diagram.",
          "Construct the Full F chord one finger at a time.",
          "Do not strum until every finger is in place.",
          "Hold the shape for five seconds.",
          "Relax completely.",
          "Repeat ten times."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Comfortably build the shape without rushing.",
        definitionOfDone: "Comfortably build the shape without rushing.",
        commonMistakes: [
          "Trying to place all fingers at once",
          "Rushing the barre",
          "Holding tension after each attempt"
        ],
        chordNames: ["Full F major"]
      },
      {
        id: "exercise-barre-accelerator-3-c-to-mini-f",
        title: "Diagnose the Chord",
        purpose: "Find out where the Full F chord is failing.",
        objective: "Understand where problems occur instead of repeatedly strumming and hoping it improves.",
        instructionSteps: [
          "Build the Full F chord.",
          "Pick every string individually.",
          "If a note buzzes, identify which finger caused it.",
          "Adjust that finger.",
          "Test again.",
          "Do not repeatedly strum hoping it improves."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Understand where problems occur.",
        definitionOfDone: "Understand where problems occur.",
        commonMistakes: [
          "Repeatedly strumming the whole chord",
          "Moving the whole hand for one bad string",
          "Treating buzzing as failure instead of information"
        ],
        coachTip: "Every guitarist misses notes when learning Full F. Diagnosis is faster than repetition.",
        chordNames: ["Full F major"]
      },
      {
        id: "exercise-barre-accelerator-3-mini-f-to-g",
        title: "Mini F versus Full F",
        purpose: "Notice how similar the Mini F and Full F shapes are.",
        objective: "Develop familiarity with the full shape by comparing it to the Mini F you already know.",
        instructionSteps: [
          "Play Mini F.",
          "Build Full F.",
          "Return to Mini F.",
          "Build Full F again.",
          "Notice how similar the shapes are."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Develop familiarity.",
        definitionOfDone: "Develop familiarity.",
        commonMistakes: [
          "Treating Full F as unrelated to Mini F",
          "Forcing the full chord to sound perfect",
          "Forgetting to release tension between shapes"
        ],
        chordNames: ["Mini F", "Full F major"]
      },
      {
        id: "exercise-barre-accelerator-3-progression",
        title: "Finish With Music",
        purpose: "End the lesson with a playable progression.",
        objective: "Return to a progression that feels musical so the session does not end frustrated.",
        instructionSteps: [
          "Play C.",
          "Play Am.",
          "Play Mini F.",
          "Play G.",
          "Use steady downstrokes.",
          "Finish with something enjoyable.",
          "Do not end the lesson frustrated."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Finish with something enjoyable.",
        definitionOfDone: "Finish with something enjoyable.",
        commonMistakes: [
          "Ending the session stuck on a failed Full F",
          "Ignoring musical rhythm",
          "Turning the lesson into a frustration loop"
        ],
        chordNames: ["C", "Am", "Mini F", "G"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-3",
      title: "Introducing the Full F",
      purpose: "Confirm that the Full F shape is familiar enough to practise without rushing or forcing it.",
      requirements: [
        "You can build the Full F shape slowly",
        "You do not expect perfect sounding chords today",
        "You can diagnose where buzzing occurs",
        "You can compare Mini F and Full F without tension",
        "You can finish the lesson by returning to music"
      ],
      passRule: "Pass if you can build the Full F shape comfortably and understand where problems occur.",
      completed: false
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-4",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 4,
      title: "Your First Full F",
      description: "Play your first recognisable Full F chord.",
      objectiveHeading: "What you'll learn",
      objective: "Play your first recognisable Full F chord.",
      whyThisLesson: "Today you begin using Full F as a musical chord rather than just a hand exercise.",
      coachNotes: "Resetting between attempts teaches better muscle memory than fighting one bad position.",
      estimatedMinutes: 25,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-4",
      practiceJournal: [
        "Which is harder: building F or changing into F?",
        "Did resetting help more than squeezing?",
        "Could you finish every progression?"
      ],
      reflectionPrompts: [
        "Which is harder: building F or changing into F?",
        "Did resetting help more than squeezing?",
        "Could you finish every progression?"
      ],
      ongoingPractice: {
        duration: "Five minutes daily",
        items: [
          "Full F",
          "Mini F",
          "Two-string barre"
        ]
      },
      completionMessage: "You've played your first Full F in a progression.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-4-learn-shape",
        title: "Warm-up",
        purpose: "Continue ongoing practice before trying recognisable Full F attempts.",
        objective: "Prepare the hand with Full F, Mini F and two-string barre work.",
        instructionSteps: [
          "Play the two-string barre.",
          "Build Mini F.",
          "Build Full F slowly.",
          "Release completely between attempts.",
          "Keep the warm-up relaxed."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "The hand feels prepared and relaxed.",
        definitionOfDone: "The hand feels prepared and relaxed.",
        commonMistakes: [
          "Skipping the release between shapes",
          "Warming up with too much pressure",
          "Starting the Full F attempts already tense"
        ],
        chordNames: ["Full F major", "Mini F"]
      },
      {
        id: "exercise-barre-accelerator-4-string-check",
        title: "Full F Attempts",
        purpose: "Make ten clear attempts at a recognisable Full F.",
        objective: "Build, listen, diagnose and reset instead of fighting one failed chord.",
        instructionSteps: [
          "Build the Full F chord.",
          "Strum once.",
          "Listen.",
          "Identify any buzzing.",
          "Relax completely.",
          "Reset.",
          "Repeat for ten attempts.",
          "Never keep squeezing the same failed chord."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "One recognisable Full F.",
        definitionOfDone: "One recognisable Full F.",
        commonMistakes: [
          "Keeping pressure on a failed chord",
          "Squeezing harder instead of resetting",
          "Ignoring what the chord actually sounds like"
        ],
        coachTip: "Resetting between attempts teaches better muscle memory than fighting one bad position.",
        chordNames: ["Full F major"]
      },
      {
        id: "exercise-barre-accelerator-4-compare",
        title: "Full F to C",
        purpose: "Practise moving from Full F into a familiar open chord.",
        objective: "Make the F to C transition smooth before adding speed.",
        instructionSteps: [
          "Play Full F.",
          "Move to C.",
          "Play C.",
          "Move back to Full F.",
          "Work slowly.",
          "Choose accuracy before speed."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Twenty smooth transitions.",
        definitionOfDone: "Twenty smooth transitions.",
        commonMistakes: [
          "Trying to make the change fast too soon",
          "Dragging tension from Full F into C",
          "Stopping after every imperfect F"
        ],
        chordNames: ["Full F major", "C"]
      },
      {
        id: "exercise-barre-accelerator-4-to-c",
        title: "Full Progression",
        purpose: "Use Full F in a musical progression.",
        objective: "Finish every progression while maintaining rhythm.",
        instructionSteps: [
          "Play C.",
          "Play Full F.",
          "Play Am.",
          "Play G.",
          "Continue without stopping.",
          "Ignore tiny mistakes.",
          "Maintain rhythm.",
          "Repeat ten times."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Finish every progression.",
        definitionOfDone: "Finish every progression.",
        commonMistakes: [
          "Stopping when Full F is not perfect",
          "Letting the rhythm disappear",
          "Restarting instead of recovering"
        ],
        chordNames: ["C", "Full F major", "Am", "G"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-4",
      title: "Your First Full F",
      purpose: "Confirm that Full F is becoming a recognisable musical chord.",
      requirements: [
        "You can produce one recognisable Full F",
        "You can move between Full F and C slowly",
        "You can play C, Full F, Am and G without stopping",
        "You reset between failed attempts instead of squeezing harder",
        "You know whether building F or changing into F needs more practice"
      ],
      passRule: "Pass if you can produce a recognisable Full F and use it in the progression without stopping.",
      completed: false
    }
  }
];

barreAcceleratorLessonsTwoToFour.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id
  });
});

const buildingFirstFullFExercises = [
  {
    id: "exercise-barre-accelerator-5-learn-full-shape",
    title: "Learn the Full Shape",
    purpose: "Become familiar with the complete F major chord.",
    objective: "Build the full F shape slowly and accurately from memory.",
    instructionSteps: [
      "Study the chord diagram.",
      "Place each finger one at a time.",
      "Build the shape slowly.",
      "Do not strum until every finger is placed."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can form the full F shape without referring to the diagram.",
    definitionOfDone: "You can form the full F shape without referring to the diagram.",
    commonMistakes: [
      "Trying to place every finger simultaneously",
      "Rushing",
      "Ignoring finger placement"
    ],
    coachTip: "Treat F as several small pieces you’ve already learned, not one giant impossible chord.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-finger-placement-check",
    title: "Finger Placement Check",
    purpose: "Identify where notes are failing.",
    objective: "Correct individual problem strings without disturbing the whole shape.",
    instructionSteps: [
      "Pick each string individually.",
      "Note which strings buzz.",
      "Adjust only the finger responsible.",
      "Test again."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "At least four strings ring cleanly.",
    definitionOfDone: "At least four strings ring cleanly.",
    commonMistakes: [
      "Moving the whole hand",
      "Squeezing harder instead of adjusting"
    ],
    coachTip: "One small adjustment is usually more effective than adding more pressure.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-build-release-repeat",
    title: "Build, Release, Repeat",
    purpose: "Develop consistency without fatigue.",
    objective: "Rebuild F repeatedly while releasing all tension between attempts.",
    instructionSteps: [
      "Form F.",
      "Hold for three seconds.",
      "Release completely.",
      "Shake out the hand.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Ten relaxed repetitions.",
    definitionOfDone: "Ten relaxed repetitions.",
    commonMistakes: [
      "Holding too long",
      "Building unnecessary tension"
    ],
    coachTip: "Relaxation between repetitions is part of the exercise, not a break from it.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-minimum-pressure",
    title: "Minimum Pressure Challenge",
    purpose: "Discover how little pressure is actually required.",
    objective: "Find the lightest grip that allows the notes to begin ringing.",
    instructionSteps: [
      "Form F.",
      "Start with almost no pressure.",
      "Gradually increase until the notes begin ringing.",
      "Stop immediately."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You understand the minimum effective pressure.",
    definitionOfDone: "You understand the minimum effective pressure.",
    commonMistakes: [
      "Crushing the neck",
      "Thumb pain",
      "Wrist tension"
    ],
    coachTip: "The goal is to find the lightest successful grip, not the strongest.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-twenty-second-holds",
    title: "Twenty Second Holds",
    purpose: "Build endurance gradually.",
    objective: "Increase hold time while remaining relaxed and pain-free.",
    instructionSteps: [
      "Hold the F chord for 10 seconds.",
      "Rest completely.",
      "Hold for 15 seconds.",
      "Rest completely.",
      "Hold for 20 seconds.",
      "If pain develops, stop and reset."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Complete all three holds while remaining relaxed.",
    definitionOfDone: "Complete all three holds while remaining relaxed.",
    commonMistakes: [
      "Continuing through pain",
      "Forgetting to breathe",
      "Locking the wrist"
    ],
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-cleanest-f",
    title: "Cleanest F Wins",
    purpose: "Focus on quality rather than strength.",
    objective: "Recognise the physical setup that produces your cleanest F.",
    instructionSteps: [
      "Attempt five F chords.",
      "Choose the cleanest one.",
      "Analyse why it worked.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can identify your best attempt and explain why it felt better.",
    definitionOfDone: "You can identify your best attempt and explain why it felt better.",
    commonMistakes: [],
    coachTip: "Learning to recognise a good F is just as important as learning to play one.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-5-confidence-builder",
    title: "Confidence Builder",
    purpose: "Finish on a positive note.",
    objective: "Compare every F variation and finish with the version that currently sounds best.",
    instructionSteps: [
      "Play Mini F.",
      "Play Four-string F.",
      "Play Full F.",
      "Repeat several times.",
      "Notice how much progress you’ve already made."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Finish the lesson feeling confident using whichever F variation currently sounds best.",
    definitionOfDone: "Finish the lesson feeling confident using whichever F variation currently sounds best.",
    commonMistakes: [],
    chordNames: ["Mini F", "Four-string F", "Full F major"]
  }
];

upsertAcademyItem("lessons", {
  id: "lesson-barre-accelerator-5",
  missionId: "mission-barre-chord-accelerator",
  lessonNumber: 5,
  title: "Building Your First Full F",
  description: "Build a complete F major barre chord using correct technique, relaxation and minimum pressure.",
  objectiveHeading: "What you'll learn",
  objective: "Build a complete F major barre chord using correct technique, relaxation and minimum pressure.",
  whyThisLesson: "The full F major is often the first true barre chord beginners encounter. It can feel impossible at first, but it is built from the same mechanics you’ve already developed. Today’s goal is not perfection—it’s learning how to approach the chord correctly.",
  coachNotes: "Today is not about mastering F major. Today is about building the shape correctly and understanding why it works. If only four or five strings ring clearly, that’s perfectly acceptable. Success comes from improving the shape, not forcing perfection.",
  estimatedMinutes: 35,
  skillIds: ["skill-chord-changes"],
  exercises: buildingFirstFullFExercises.map((exercise) => exercise.id),
  connectedSongs: [],
  recommendedSongs: [],
  checkpoint: "checkpoint-barre-accelerator-5",
  practiceJournal: [
    "Which string is still the most difficult?",
    "What change made the biggest improvement?",
    "Did relaxing help more than squeezing?",
    "How much easier does Mini F now feel?"
  ],
  reflectionPrompts: [
    "Which string is still the most difficult?",
    "What change made the biggest improvement?",
    "Did relaxing help more than squeezing?",
    "How much easier does Mini F now feel?"
  ],
  completed: false
});

buildingFirstFullFExercises.forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-barre-accelerator-5",
    instructions: exercise.instructionSteps.join(" "),
    skillIds: ["skill-chord-changes"],
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-barre-accelerator-5",
  lessonId: "lesson-barre-accelerator-5",
  title: "Building Your First Full F",
  purpose: "Confirm that the full F shape can be built with improving clarity, minimum pressure and sensible resets.",
  requirements: [
    "You can build the full F shape from memory",
    "At least four strings ring consistently",
    "You understand how to reduce pressure rather than increase it",
    "You know when to stop and reset instead of forcing the chord"
  ],
  passRule: "Pass if the full F shape can be built from memory, at least four strings ring consistently, pressure can be reduced, and tension is reset rather than forced.",
  completed: false
});

const enduranceWithoutTensionExercises = [
  {
    id: "exercise-barre-accelerator-6-relaxation-check",
    title: "Relaxation Check",
    purpose: "Begin every session without tension.",
    objective: "Prepare the hands and wrists before holding F.",
    instructionSteps: [
      "Shake both hands.",
      "Open and close the fingers.",
      "Roll the wrists.",
      "Take a slow breath before touching the guitar."
    ],
    durationMinutes: 3,
    tempo: "",
    passCriteria: "Hands feel loose and relaxed.",
    definitionOfDone: "Hands feel loose and relaxed.",
    commonMistakes: [],
    chordNames: []
  },
  {
    id: "exercise-barre-accelerator-6-ten-second-holds",
    title: "Ten Second Holds",
    purpose: "Develop relaxed endurance.",
    objective: "Hold full F briefly while preventing tension from increasing.",
    instructionSteps: [
      "Form a full F chord.",
      "Hold for ten seconds.",
      "Release completely.",
      "Rest for ten seconds.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Five relaxed repetitions.",
    definitionOfDone: "Five relaxed repetitions.",
    commonMistakes: [
      "Holding your breath",
      "Squeezing harder over time",
      "Forgetting to relax between attempts"
    ],
    coachTip: "Treat every release as part of the exercise. Recovery is where your muscles learn to relax.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-6-twenty-second-holds",
    title: "Twenty Second Holds",
    purpose: "Increase endurance gradually.",
    objective: "Extend hold time without sacrificing relaxation or chord quality.",
    instructionSteps: [
      "Form a full F chord.",
      "Hold for twenty seconds.",
      "Release completely.",
      "Rest before repeating.",
      "Shorten the hold if quality drops dramatically."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Complete three relaxed repetitions.",
    definitionOfDone: "Complete three relaxed repetitions.",
    commonMistakes: [],
    coachTip: "If quality drops dramatically after ten seconds, shorten the hold. Good repetitions are worth more than long, poor ones.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-6-pressure-reset",
    title: "Pressure Reset",
    purpose: "Break the habit of over-squeezing.",
    objective: "Return repeatedly to the minimum effective pressure.",
    instructionSteps: [
      "Form the F chord.",
      "Slowly reduce pressure until one string buzzes.",
      "Increase pressure just enough for the note to ring again.",
      "Repeat several times."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can consistently find the minimum effective pressure.",
    definitionOfDone: "You can consistently find the minimum effective pressure.",
    commonMistakes: [
      "Never releasing pressure",
      "Treating maximum force as the default"
    ],
    coachTip: "Professional players constantly use only the pressure they need—never more.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-6-barre-recovery",
    title: "Barre Recovery",
    purpose: "Develop endurance over multiple repetitions.",
    objective: "Recover fully between repeated full F holds.",
    instructionSteps: [
      "Hold F for ten seconds.",
      "Play one clean strum.",
      "Release completely.",
      "Repeat."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Ten relaxed repetitions.",
    definitionOfDone: "Ten relaxed repetitions.",
    commonMistakes: [],
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-6-quality-over-quantity",
    title: "Quality Over Quantity",
    purpose: "Focus on consistency instead of duration.",
    objective: "Recognise and improve the average quality of separate F attempts.",
    instructionSteps: [
      "Play five separate F chords.",
      "Score each one as Excellent, Good, or Needs Work.",
      "Compare the attempts.",
      "Aim to improve average quality rather than simply holding longer."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "You can recognise which attempts were your best.",
    definitionOfDone: "You can recognise which attempts were your best.",
    commonMistakes: [],
    coachTip: "Great practice comes from noticing differences, not simply repeating the same mistake.",
    chordNames: ["Full F major"]
  },
  {
    id: "exercise-barre-accelerator-6-finish-with-success",
    title: "Finish With Success",
    purpose: "End the lesson positively.",
    objective: "Choose and confidently play the F variation that sounds best today.",
    instructionSteps: [
      "Play Mini F.",
      "Play Four-string F.",
      "Play Full F.",
      "Choose the version that sounds best today.",
      "Play it confidently."
    ],
    durationMinutes: 5,
    tempo: "",
    passCriteria: "Finish the lesson feeling successful rather than fatigued.",
    definitionOfDone: "Finish the lesson feeling successful rather than fatigued.",
    commonMistakes: [],
    chordNames: ["Mini F", "Four-string F", "Full F major"]
  }
];

upsertAcademyItem("lessons", {
  id: "lesson-barre-accelerator-6",
  missionId: "mission-barre-chord-accelerator",
  lessonNumber: 6,
  title: "Endurance Without Tension",
  description: "Develop the ability to hold and repeat full F major comfortably while staying relaxed.",
  objectiveHeading: "What you'll learn",
  objective: "Develop the ability to hold and repeat full F major comfortably while staying relaxed.",
  whyThisLesson: "Most beginners think endurance comes from stronger fingers. In reality, endurance comes from eliminating unnecessary tension. Today you’ll learn to hold the chord longer by doing less work, not more.",
  coachNotes: "Your goal is not to survive the hold. Your goal is to stay relaxed throughout it. If your forearm starts burning or your wrist hurts, don’t push through it. Release, reset, and start again with better technique.",
  estimatedMinutes: 33,
  skillIds: ["skill-chord-changes"],
  exercises: enduranceWithoutTensionExercises.map((exercise) => exercise.id),
  connectedSongs: [],
  recommendedSongs: [],
  checkpoint: "checkpoint-barre-accelerator-6",
  practiceJournal: [
    "Did your hand tire or become tense?",
    "What helped you stay relaxed?",
    "Which version of F sounded best today?",
    "Did reducing pressure improve your sound?"
  ],
  reflectionPrompts: [
    "Did your hand tire or become tense?",
    "What helped you stay relaxed?",
    "Which version of F sounded best today?",
    "Did reducing pressure improve your sound?"
  ],
  completed: false
});

enduranceWithoutTensionExercises.forEach((exercise) => {
  upsertAcademyItem("exercises", {
    ...exercise,
    lessonId: "lesson-barre-accelerator-6",
    instructions: exercise.instructionSteps.join(" "),
    skillIds: ["skill-chord-changes"],
    mediaLinks: [],
    completed: false
  });
});

upsertAcademyItem("checkpoints", {
  id: "checkpoint-barre-accelerator-6",
  lessonId: "lesson-barre-accelerator-6",
  title: "Endurance Without Tension",
  purpose: "Confirm that full F endurance is developing through relaxation, efficient pressure and sensible recovery.",
  requirements: [
    "You can comfortably hold a full F for at least ten seconds",
    "You understand how to reduce unnecessary pressure",
    "Your hand remains relaxed between repetitions",
    "You can recognise the difference between muscle fatigue and poor technique"
  ],
  passRule: "Pass if full F can be held comfortably for at least ten seconds with controlled pressure, relaxed recovery and awareness of poor technique.",
  completed: false
});

const barreAcceleratorFinalLessons = [
  {
    lesson: {
      id: "lesson-barre-accelerator-7",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 7,
      title: "Smooth F Chord Changes",
      description: "Develop smooth transitions into and out of full F major while maintaining relaxed technique and steady rhythm.",
      objectiveHeading: "What you'll learn",
      objective: "Develop smooth transitions into and out of the full F major chord while maintaining relaxed technique and steady rhythm.",
      whyThisLesson: "Being able to hold an F chord is only half the challenge. Music requires you to move into and out of the chord naturally. Today’s lesson teaches efficient movement rather than speed.",
      coachNotes: "Do not rush the chord change. Instead, make every movement deliberate and economical. Smooth movement becomes fast movement over time.",
      estimatedMinutes: 35,
      skillIds: ["skill-chord-changes"],
      exercises: [],
      connectedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Use the F chord where appropriate while maintaining rhythm."
        },
        {
          title: "Wonderwall",
          artist: "Oasis",
          note: "Notice how efficient chord movement becomes increasingly important as songs become more rhythmically demanding."
        }
      ],
      recommendedSongs: [
        {
          title: "Stand By Me",
          artist: "Ben E. King",
          note: "Use the F chord where appropriate while maintaining rhythm."
        },
        {
          title: "Wonderwall",
          artist: "Oasis",
          note: "Notice how efficient chord movement becomes increasingly important as songs become more rhythmically demanding."
        }
      ],
      checkpoint: "checkpoint-barre-accelerator-7",
      practiceJournal: ["Which transition feels easiest?", "Which still needs work?", "Did you notice yourself squeezing during changes?", "What movement could become smaller?"],
      reflectionPrompts: ["Which transition feels easiest?", "Which still needs work?", "Did you notice yourself squeezing during changes?", "What movement could become smaller?"],
      completed: false
    },
    exercises: [
      ["finger-path-awareness", "Finger Path Awareness", 5, "", "Learn the shortest path into the F chord.", "Each finger follows a short, controlled path.", ["Begin with your hand completely relaxed.", "Build the F chord slowly.", "Watch how each finger travels.", "Lift every finger only high enough to clear the strings.", "Release completely.", "Repeat."], ["Fingers flying too high", "Looking only at the index finger", "Rushing into the chord"], "Think of every finger taking the shortest possible journey. Economy of motion applies just as much to barre chords as it does to open chords.", ["Full F major"]],
      ["c-to-f", "C to F", 5, "50 BPM", "Develop one of the most common chord changes.", "Five clean transitions without stopping.", ["Play C for four beats.", "Change to F.", "Hold for four beats.", "Return to C.", "Continue slowly."], ["Stopping the rhythm", "Squeezing harder during the change", "Lifting every finger unnecessarily"], "Don’t think about landing on F. Think about leaving C efficiently.", ["C", "Full F major"]],
      ["am-to-f", "Am to F", 5, "50 BPM", "Introduce another common transition.", "Smooth transitions with steady timing.", ["Play Am for four beats.", "Change to F for four beats.", "Keep every movement relaxed.", "Repeat."], [], "", ["Am", "Full F major"]],
      ["g-to-f", "G to F", 5, "50 BPM", "Develop confidence changing from a larger chord shape.", "Mostly clean changes.", ["Play G.", "Change to F.", "Focus on keeping the movement compact.", "Repeat slowly."], [], "", ["G", "Full F major"]],
      ["three-chord-progression", "Three-Chord Progression", 5, "55 BPM", "Combine multiple transitions.", "Several complete cycles without restarting.", ["Play C, Am and F.", "Use four beats for each chord.", "Repeat continuously."], [], "", ["C", "Am", "Full F major"]],
      ["recovery-practice", "Recovery Practice", 5, "55 BPM", "Develop confidence recovering from imperfect F chords.", "Five minutes of continuous rhythm.", ["If F buzzes, continue strumming.", "Correct it during the next bar.", "Never stop playing."], [], "Real musicians recover. They don’t restart.", ["Full F major"]],
      ["continuous-performance", "Continuous Performance", 5, "60 BPM", "Bring today’s work together.", "Complete five minutes without restarting.", ["Play G, C, Am and F.", "Repeat continuously.", "Focus on relaxation, smooth movement, steady rhythm and musical flow."], [], "", ["G", "C", "Am", "Full F major"]]
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-7",
      title: "Smooth F Chord Changes",
      purpose: "Confirm that movement into and out of F is becoming smooth, relaxed and musical.",
      requirements: ["You can move into F confidently", "You can leave F smoothly", "Your rhythm remains steady", "Your hand stays relaxed during transitions", "You recover naturally from imperfect chord changes"],
      passRule: "Pass if F changes remain relaxed and mostly steady, with natural recovery after imperfect attempts."
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-8",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 8,
      title: "Building B Minor",
      description: "Apply the barre chord techniques learned with F major to build a clean B minor chord.",
      objectiveHeading: "What you'll learn",
      objective: "Apply the barre chord techniques learned with F major to build a clean B minor chord.",
      whyThisLesson: "B minor is not a new skill—it is the same barre chord mechanics applied to a different fret and chord shape. The work you’ve already done on F major makes B minor much more approachable.",
      coachNotes: "If F major has taught you good technique, B minor should feel familiar rather than intimidating. Don’t think “new chord.” Think “same technique, different location.”",
      estimatedMinutes: 35,
      skillIds: ["skill-chord-changes"],
      exercises: [],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-8",
      practiceJournal: ["Did B minor feel easier than expected?", "Which part of F major helped most?", "Which string still needs work?"],
      reflectionPrompts: ["Did B minor feel easier than expected?", "Which part of F major helped most?", "Which string still needs work?"],
      completed: false
    },
    exercises: [
      ["learn-shape", "Learn the Shape", 5, "", "Become familiar with the B minor chord shape.", "Build B minor from memory.", ["Study the chord diagram.", "Build the shape slowly.", "Place one finger at a time.", "Do not rush."], ["Trying to memorise the entire shape at once", "Forgetting the index finger barre", "Squeezing too hard"], "You already know the mechanics. Trust what you’ve learned.", ["Bm"]],
      ["string-check", "String Check", 5, "", "Develop clean fretting.", "Most strings ring cleanly.", ["Build B minor.", "Pick every string individually.", "Correct only the string that buzzes."], [], "", ["Bm"]],
      ["f-to-bm-comparison", "F to Bm Comparison", 5, "", "Recognise the similarities.", "You can identify what feels the same.", ["Alternate between F major and B minor.", "Notice thumb position.", "Notice finger angle.", "Notice pressure and relaxation."], [], "Your technique should remain almost identical. Only the chord shape changes.", ["Full F major", "Bm"]],
      ["am-to-bm", "Am to Bm", 5, "50 BPM", "Develop practical transitions.", "Mostly clean transitions.", ["Play Am for four beats.", "Change to Bm for four beats.", "Repeat with relaxed movement."], [], "", ["Am", "Bm"]],
      ["g-to-bm", "G to Bm", 5, "50 BPM", "Build confidence moving into B minor.", "Mostly clean G to Bm transitions.", ["Play G for four beats.", "Change to Bm for four beats.", "Keep the movement compact.", "Repeat."], [], "", ["G", "Bm"]],
      ["progression-practice", "Progression Practice", 5, "55 BPM", "Use B minor in a repeating progression.", "Several complete cycles with relaxed movement.", ["Play G, D, Em and Bm.", "Repeat continuously.", "Focus on relaxed movement."], [], "", ["G", "D", "Em", "Bm"]],
      ["confidence-builder", "Confidence Builder", 5, "", "Recognise how much barre chord control has improved.", "Play every learned barre shape with controlled pressure.", ["Play Mini F.", "Play Four-string F.", "Play Full F.", "Play Bm.", "Notice how much your confidence has improved since Lesson 1."], [], "", ["Mini F", "Four-string F", "Full F major", "Bm"]]
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-8",
      title: "Building B Minor",
      purpose: "Confirm that B minor uses the same relaxed barre mechanics developed with F.",
      requirements: ["B minor can be built from memory", "Most notes ring clearly", "Technique remains relaxed", "Pressure stays controlled"],
      passRule: "Pass if B minor can be built from memory with mostly clear notes, relaxed technique and controlled pressure."
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-9",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 9,
      title: "Barre Chords in Music",
      description: "Use F major and B minor in simple musical progressions while maintaining rhythm and confidence.",
      objectiveHeading: "What you'll learn",
      objective: "Use F major and B minor in simple musical progressions while maintaining rhythm and confidence.",
      whyThisLesson: "Barre chords only become useful when they become part of real music. Today is about moving beyond isolated practice and integrating them into your playing.",
      coachNotes: "Your goal today is not perfect barre chords. Your goal is to keep making music.",
      estimatedMinutes: 35,
      skillIds: ["skill-chord-changes", "skill-rhythm", "skill-song-performance"],
      exercises: [],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-9",
      practiceJournal: ["Which barre chord feels stronger?", "Which progression sounded most musical?", "What still needs focused practice?", "Which songs are you now excited to learn?"],
      reflectionPrompts: ["Which barre chord feels stronger?", "Which progression sounded most musical?", "What still needs focused practice?", "Which songs are you now excited to learn?"],
      completed: false
    },
    exercises: [
      ["warm-up", "Warm Up", 5, "", "Reconnect with every barre shape while relaxing between attempts.", "All four shapes feel ready for musical practice.", ["Play Mini F.", "Play Four-string F.", "Play Full F.", "Play Bm.", "Relax between each attempt."], [], "", ["Mini F", "Four-string F", "Full F major", "Bm"]],
      ["four-chord-progression", "Four Chord Progression", 5, "55 BPM", "Use F in a complete open-chord progression.", "Several complete cycles with steady rhythm.", ["Play C, G, Am and F.", "Repeat continuously."], [], "", ["C", "G", "Am", "Full F major"]],
      ["b-minor-progression", "B Minor Progression", 5, "55 BPM", "Use B minor in a complete progression.", "Several complete cycles with steady rhythm.", ["Play G, D, Em and Bm.", "Repeat continuously."], [], "", ["G", "D", "Em", "Bm"]],
      ["mixed-progression", "Mixed Progression", 5, "60 BPM", "Move between progressions containing F and Bm.", "Both progressions continue with smooth movement.", ["Play C, Am, F and G.", "Then play G, D, Em and Bm.", "Focus on smooth movement."], [], "", ["C", "Am", "Full F major", "G", "D", "Em", "Bm"]],
      ["recovery-practice", "Recovery Practice", 5, "", "Recover naturally when a barre chord buzzes.", "Continue playing without restarting.", ["If a barre chord buzzes, keep strumming.", "Correct it naturally.", "Never restart."], [], "", ["Full F major", "Bm"]],
      ["free-play", "Free Play", 5, "", "Make music with the progression you enjoy most.", "Five minutes of relaxed musical exploration.", ["Play whichever progression felt most enjoyable.", "Experiment.", "Relax.", "Make music."], [], "", ["Full F major", "Bm"]],
      ["celebrate-progress", "Celebrate Progress", 5, "", "Recognise the progress made since Lesson 1.", "Every learned barre shape shows improved control.", ["Play a two-string barre.", "Play Mini F.", "Play Four-string F.", "Play Full F.", "Play Bm.", "Notice the difference and reflect on how far you’ve come."], [], "", ["Mini F", "Four-string F", "Full F major", "Bm"]]
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-9",
      title: "Barre Chord Accelerator",
      purpose: "Confirm that F major and B minor can now be used musically with relaxation and natural recovery.",
      requirements: ["F major is becoming reliable", "B minor feels achievable", "Chord changes continue improving", "You remain relaxed while playing", "You recover naturally from mistakes"],
      passRule: "Pass if F and Bm are becoming usable in music while relaxation, rhythm and natural recovery remain the priority.",
      moduleSummary: {
        title: "Barre Chord Accelerator Complete",
        message: "Congratulations. You’ve built the foundations for one of the most important techniques in rhythm guitar. Barre chords continue improving over months of regular practice, and you do not need perfection before using them in songs.",
        continuingPractice: "Revisit Lesson 5 (Building Your First Full F) and Lesson 6 (Endurance Without Tension) until full F major feels comfortable.",
        skillsDeveloped: ["Barre mechanics", "Finger angle", "Thumb support", "Pressure control", "Relaxation", "Mini F", "Four-String F", "Full F", "B Minor", "Barre chord transitions"],
        featuredSongsCompleted: []
      }
    }
  }
];

barreAcceleratorFinalLessons.forEach(({ lesson, exercises, checkpoint }) => {
  const exerciseObjects = exercises.map(([slug, title, durationMinutes, tempo, purpose, done, instructionSteps, commonMistakes, coachTip, chordNames]) => ({
    id: `exercise-${lesson.id.replace(/^lesson-/, "")}-${slug}`,
    lessonId: lesson.id,
    title,
    purpose,
    objective: purpose,
    instructions: instructionSteps.join(" "),
    instructionSteps,
    durationMinutes,
    tempo,
    passCriteria: done,
    definitionOfDone: done,
    commonMistakes,
    coachTip,
    chordNames,
    skillIds: lesson.skillIds,
    mediaLinks: [],
    completed: false
  }));
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exerciseObjects.map((exercise) => exercise.id)
  });
  exerciseObjects.forEach((exercise) => upsertAcademyItem("exercises", exercise));
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const barreAcceleratorLessonsFiveToSeven = [
  {
    lesson: {
      id: "lesson-barre-accelerator-5",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 5,
      title: "Playing F Without Fighting It",
      description: "Learn to play the Full F chord with less effort by improving efficiency instead of increasing strength.",
      objectiveHeading: "What you'll learn",
      objective: "Learn to play the Full F chord with less effort by improving efficiency instead of increasing strength.",
      whyThisLesson: "Many players assume the answer is squeezing harder. In reality, cleaner barre chords usually come from better positioning, better thumb placement and using only the pressure required.",
      coachNotes: "Most players use far more pressure than necessary. Learning the minimum pressure reduces fatigue and improves endurance.",
      estimatedMinutes: 25,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-5",
      practiceJournal: [
        "Which improved your chord the most: thumb position, finger angle, wrist angle, or less pressure?",
        "What should I remember for future practice?"
      ],
      reflectionPrompts: [
        "Which improved your chord the most: thumb position, finger angle, wrist angle, or less pressure?",
        "What should I remember for future practice?"
      ],
      ongoingPractice: {
        duration: "5 minutes daily",
        items: [
          "Two-string barre",
          "Full F",
          "Mini F"
        ]
      },
      completionMessage: "You’ve learned to play smarter, not harder.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-5-learn-full-shape",
        title: "Warm-up",
        purpose: "Prepare the hand without fatigue.",
        objective: "Complete the familiar barre warm-up while relaxing between every repetition.",
        instructionSteps: [
          "Play the two-string barre.",
          "Play Mini F.",
          "Hold one Full F.",
          "Relax your hand between every repetition.",
          "Stop before the hand feels tired."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Prepare the hand without fatigue.",
        definitionOfDone: "Prepare the hand without fatigue.",
        commonMistakes: [
          "Skipping the release between repetitions",
          "Trying to warm up by squeezing harder",
          "Starting the lesson already fatigued"
        ],
        chordNames: ["Mini F", "Full F major"]
      },
      {
        id: "exercise-barre-accelerator-5-finger-placement-check",
        title: "Find Minimum Pressure",
        purpose: "Discover how little pressure is actually required.",
        objective: "Find the lightest pressure that still lets the Full F chord ring.",
        instructionSteps: [
          "Build a Full F chord.",
          "Gradually reduce finger pressure until buzzing begins.",
          "Slowly increase pressure only until every note rings again.",
          "Release completely.",
          "Repeat ten times."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Discover how little pressure is actually required.",
        definitionOfDone: "Discover how little pressure is actually required.",
        commonMistakes: [
          "Keeping maximum pressure throughout the exercise",
          "Ignoring the first point where the chord becomes clear",
          "Treating pressure as the only solution"
        ],
        coachTip: "Most players use far more pressure than necessary. Learning the minimum pressure reduces fatigue and improves endurance.",
        chordNames: ["Full F major"]
      },
      {
        id: "exercise-barre-accelerator-5-build-release-repeat",
        title: "Small Adjustments",
        purpose: "Find the cleanest position using the least effort.",
        objective: "Experiment with one setup detail at a time instead of squeezing harder.",
        instructionSteps: [
          "Build a Full F chord.",
          "Without squeezing harder, experiment with thumb position.",
          "Experiment with elbow position.",
          "Experiment with slight finger rotation.",
          "Experiment with wrist angle.",
          "Change only one thing at a time.",
          "Notice which adjustment makes the chord cleaner with less effort."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Find the cleanest position using the least effort.",
        definitionOfDone: "Find the cleanest position using the least effort.",
        commonMistakes: [
          "Changing several things at once",
          "Adding pressure before testing position",
          "Ignoring thumb and wrist comfort"
        ],
        chordNames: ["Full F major"]
      },
      {
        id: "exercise-barre-accelerator-5-minimum-pressure",
        title: "Musical Application",
        purpose: "Stay in rhythm while improving consistency.",
        objective: "Use Full F repeatedly inside a progression without fighting every buzz.",
        instructionSteps: [
          "Play C.",
          "Play Full F.",
          "Play Am.",
          "Play Full F.",
          "Play G.",
          "Play Full F.",
          "Repeat eight times.",
          "Remain relaxed.",
          "If the F buzzes, continue playing and fix it on the next repetition."
        ],
        durationMinutes: 10,
        tempo: "",
        passCriteria: "Stay in rhythm while improving consistency.",
        definitionOfDone: "Stay in rhythm while improving consistency.",
        commonMistakes: [
          "Stopping every time F buzzes",
          "Losing the rhythm while checking the chord",
          "Trying to fix the same chord by crushing the neck"
        ],
        chordNames: ["C", "Full F major", "Am", "G"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-5",
      title: "Playing F Without Fighting It",
      purpose: "Confirm that Full F is becoming more efficient and less tense.",
      requirements: [
        "You can find the minimum pressure needed for Full F",
        "You can improve the chord by adjusting position instead of squeezing harder",
        "You can play C, F, Am, F, G, F with continuous rhythm",
        "You know which adjustment improved your chord the most"
      ],
      passRule: "Pass if Full F is playable with less effort and the musical application keeps moving.",
      completed: false
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-6",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 6,
      title: "Your Second Barre Chord — B Minor",
      description: "Learn the B minor shape and recognise that it uses the same principles as the Full F chord.",
      objectiveHeading: "What you'll learn",
      objective: "Learn the B minor shape and recognise that it uses the same principles as the Full F chord.",
      whyThisLesson: "Once you can play one barre chord, many others become much easier. Bm is one of the most common minor barre chords in rock music.",
      coachNotes: "Don’t think of Bm as a completely new chord. Think of it as another application of your barre technique.",
      estimatedMinutes: 30,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-6",
      practiceJournal: [
        "Does Bm feel easier or harder than F?",
        "Why?"
      ],
      reflectionPrompts: [
        "Does Bm feel easier or harder than F?",
        "Why?"
      ],
      ongoingPractice: {
        duration: "5 minutes daily",
        items: [
          "Full F",
          "Bm",
          "Mini F"
        ]
      },
      completionMessage: "You can now play two movable barre chords.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-6-relaxation-check",
        title: "Warm-up",
        purpose: "Prepare the hand with familiar barre shapes before adding Bm.",
        objective: "Reconnect with Mini F and Full F before building the new chord.",
        instructionSteps: [
          "Play Mini F for one minute.",
          "Play Full F for one minute.",
          "Perform five relaxed Full F holds.",
          "Release completely between each hold."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "The hand feels warm and relaxed before building Bm.",
        definitionOfDone: "The hand feels warm and relaxed before building Bm.",
        commonMistakes: [
          "Skipping the Full F holds",
          "Holding tension between repetitions",
          "Starting Bm before the hand is settled"
        ],
        chordNames: ["Mini F", "Full F major"]
      },
      {
        id: "exercise-barre-accelerator-6-ten-second-holds",
        title: "Build B Minor",
        purpose: "Construct the Bm chord one finger at a time.",
        objective: "Play one recognisable Bm chord.",
        instructionSteps: [
          "Study the Bm chord diagram.",
          "Construct the Bm chord one finger at a time.",
          "Check every string individually.",
          "Adjust position before increasing pressure.",
          "Release and rebuild as needed."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Play one recognisable Bm chord.",
        definitionOfDone: "Play one recognisable Bm chord.",
        commonMistakes: [
          "Treating Bm as completely unrelated to F",
          "Increasing pressure before adjusting position",
          "Trying to place every finger at once"
        ],
        coachTip: "Don’t think of Bm as a completely new chord. Think of it as another application of your barre technique.",
        chordNames: ["Bm"]
      },
      {
        id: "exercise-barre-accelerator-6-twenty-second-holds",
        title: "Hold and Reset",
        purpose: "Develop consistency without fatigue.",
        objective: "Build and release Bm repeatedly so the shape becomes familiar.",
        instructionSteps: [
          "Build Bm.",
          "Hold for five seconds.",
          "Release completely.",
          "Shake your hand.",
          "Repeat ten times."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Develop consistency without fatigue.",
        definitionOfDone: "Develop consistency without fatigue.",
        commonMistakes: [
          "Holding too long",
          "Forgetting to reset",
          "Letting fatigue decide the shape"
        ],
        chordNames: ["Bm"]
      },
      {
        id: "exercise-barre-accelerator-6-pressure-reset",
        title: "Bm Changes",
        purpose: "Practise moving into and out of Bm.",
        objective: "Complete twenty smooth transitions.",
        instructionSteps: [
          "Play G.",
          "Move to Bm.",
          "Return to G.",
          "Move to Bm again.",
          "Then play A.",
          "Move to Bm.",
          "Return to A.",
          "Move to Bm again.",
          "Move slowly."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Twenty smooth transitions.",
        definitionOfDone: "Twenty smooth transitions.",
        commonMistakes: [
          "Rushing the move into Bm",
          "Dragging tension from Bm back into open chords",
          "Stopping after every rough attempt"
        ],
        chordNames: ["G", "Bm", "A"]
      },
      {
        id: "exercise-barre-accelerator-6-barre-recovery",
        title: "First Progression",
        purpose: "Use Bm in a musical progression.",
        objective: "Finish every progression without stopping.",
        instructionSteps: [
          "Play G.",
          "Play Bm.",
          "Play A.",
          "Play G.",
          "Repeat ten times.",
          "Keep the rhythm steady.",
          "Ignore small mistakes."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Finish every progression without stopping.",
        definitionOfDone: "Finish every progression without stopping.",
        commonMistakes: [
          "Restarting after an imperfect Bm",
          "Letting the rhythm disappear",
          "Over-squeezing as the progression repeats"
        ],
        chordNames: ["G", "Bm", "A"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-6",
      title: "Your Second Barre Chord — B Minor",
      purpose: "Confirm that Bm is recognisable and uses the same relaxed mechanics as Full F.",
      requirements: [
        "You can build a recognisable Bm",
        "You can reset Bm without fatigue",
        "You can practise G to Bm and A to Bm changes",
        "You can play G, Bm, A, G without stopping",
        "You can compare how Bm feels against Full F"
      ],
      passRule: "Pass if Bm is recognisable and can be used in the first progression with steady rhythm.",
      completed: false
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-7",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 7,
      title: "Making Barre Chords Automatic",
      description: "Build confidence changing between open chords and barre chords without stopping the music.",
      objectiveHeading: "What you'll learn",
      objective: "Build confidence changing between open chords and barre chords without stopping the music.",
      whyThisLesson: "Real songs don’t wait for perfect chord changes. Today’s focus is maintaining rhythm while improving accuracy.",
      coachNotes: "Professional musicians don’t avoid mistakes. They recover so smoothly the audience often doesn’t notice.",
      estimatedMinutes: 30,
      skillIds: ["skill-chord-changes"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-7",
      practiceJournal: [
        "Which chord change still needs the most work?",
        "What should I spend an extra two minutes on during tomorrow’s practice?"
      ],
      reflectionPrompts: [
        "Which chord change still needs the most work?",
        "What should I spend an extra two minutes on during tomorrow’s practice?"
      ],
      ongoingPractice: {
        duration: "Five minutes daily",
        items: [
          "Full F",
          "Bm",
          "Random chord changes"
        ]
      },
      completionMessage: "Your barre chords are becoming part of your normal playing.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-7-finger-path-awareness",
        title: "Warm-up",
        purpose: "Reconnect with every barre shape needed today.",
        objective: "Play Mini F, Full F and Bm for one minute each.",
        instructionSteps: [
          "Play Mini F for one minute.",
          "Play Full F for one minute.",
          "Play Bm for one minute.",
          "Release completely between shapes."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Mini F, Full F and Bm feel ready for musical practice.",
        definitionOfDone: "Mini F, Full F and Bm feel ready for musical practice.",
        commonMistakes: [
          "Skipping the release between shapes",
          "Letting Bm create extra tension",
          "Treating the warm-up as a speed test"
        ],
        chordNames: ["Mini F", "Full F major", "Bm"]
      },
      {
        id: "exercise-barre-accelerator-7-c-to-f",
        title: "Random Changes",
        purpose: "Develop automatic movement.",
        objective: "Practise common open-to-barre chord pairs until the motion feels more natural.",
        instructionSteps: [
          "Practise C to Full F and Full F to C ten times.",
          "Practise G to Bm and Bm to G ten times.",
          "Practise Am to Full F and Full F to Am ten times.",
          "Practise A to Bm and Bm to A ten times.",
          "Move slowly and reset if tension appears."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Develop automatic movement.",
        definitionOfDone: "Develop automatic movement.",
        commonMistakes: [
          "Rushing the harder pair",
          "Only practising the easy direction",
          "Letting the hand fly too far away from the strings"
        ],
        chordNames: ["C", "Full F major", "G", "Bm", "Am", "A"]
      },
      {
        id: "exercise-barre-accelerator-7-am-to-f",
        title: "Rhythm First",
        purpose: "Maintain rhythm above all else.",
        objective: "Keep steady downstrokes through a progression containing Full F.",
        instructionSteps: [
          "Use steady downstrokes.",
          "Play C.",
          "Play Full F.",
          "Play Am.",
          "Play G.",
          "Continue for five minutes.",
          "Do not stop.",
          "If a chord is missed, recover on the next one."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Maintain rhythm above all else.",
        definitionOfDone: "Maintain rhythm above all else.",
        commonMistakes: [
          "Stopping to correct Full F",
          "Letting accuracy interrupt rhythm",
          "Restarting instead of recovering"
        ],
        coachTip: "Professional musicians don’t avoid mistakes. They recover so smoothly the audience often doesn’t notice.",
        chordNames: ["C", "Full F major", "Am", "G"]
      },
      {
        id: "exercise-barre-accelerator-7-g-to-f",
        title: "Mixed Progressions",
        purpose: "Finish every progression without stopping.",
        objective: "Play three mixed open-and-barre progressions with a consistent tempo.",
        instructionSteps: [
          "Play Progression 1 five times: C, Full F, Am, G.",
          "Play Progression 2 five times: G, Bm, A, G.",
          "Play Progression 3 five times: Am, Full F, C, G.",
          "Maintain a consistent tempo.",
          "Finish every progression without stopping."
        ],
        durationMinutes: 10,
        tempo: "",
        passCriteria: "Finish every progression without stopping.",
        definitionOfDone: "Finish every progression without stopping.",
        commonMistakes: [
          "Pausing before the barre chord",
          "Changing tempo between progressions",
          "Avoiding the transition that needs the most work"
        ],
        chordNames: ["C", "Full F major", "Am", "G", "Bm", "A"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-7",
      title: "Making Barre Chords Automatic",
      purpose: "Confirm that open-to-barre changes are becoming part of normal playing.",
      requirements: [
        "You can warm up Mini F, Full F and Bm",
        "You can practise C to F, G to Bm, Am to F, and A to Bm",
        "You can keep rhythm through C, F, Am and G",
        "You can finish the mixed progressions without stopping",
        "You know which chord change needs the most work tomorrow"
      ],
      passRule: "Pass if rhythm keeps moving through open-to-barre changes and recovery feels natural.",
      completed: false
    }
  }
];

barreAcceleratorLessonsFiveToSeven.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      coachTip: exercise.coachTip || "",
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id
  });
});

const barreAcceleratorLessonsEightAndNine = [
  {
    lesson: {
      id: "lesson-barre-accelerator-8",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 8,
      title: "Playing Through Mistakes",
      description: "Learn to keep playing even when a chord isn’t perfect. The objective is no longer perfect chords. The objective is keeping the music moving.",
      objectiveHeading: "What you'll learn",
      objective: "Learn to keep playing even when a chord isn’t perfect. The objective is no longer perfect chords. The objective is keeping the music moving.",
      whyThisLesson: "When learning barre chords, stopping every time something buzzes creates hesitation and breaks your rhythm. Good players recover quickly. Today’s lesson teaches that skill.",
      coachNotes: "If you stop every time something goes wrong, you’ll train yourself to hesitate. Recover instead.",
      estimatedMinutes: 30,
      skillIds: ["skill-chord-changes", "skill-rhythm"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-8",
      practiceJournal: [
        "During today’s lesson, what caused you to stop most often: changing into F, changing into Bm, rhythm, or looking at the fretboard?",
        "What should I spend two extra minutes on tomorrow?"
      ],
      reflectionPrompts: [
        "During today’s lesson, what caused you to stop most often: changing into F, changing into Bm, rhythm, or looking at the fretboard?",
        "What should I spend two extra minutes on tomorrow?"
      ],
      ongoingPractice: {
        duration: "Daily (5 minutes)",
        items: [
          "Full F",
          "Bm",
          "Random chord changes",
          "One progression played continuously without stopping"
        ]
      },
      completionMessage: "Music doesn’t require perfection. It requires momentum.",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-8-learn-shape",
        title: "Warm-up",
        purpose: "Loosen the hands before playing.",
        objective: "Play the main barre shapes with relaxed movement rather than perfect sound.",
        instructionSteps: [
          "Play Mini F for one minute.",
          "Play Full F for one minute.",
          "Play Bm for one minute.",
          "Focus on relaxed movement rather than perfect sound."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Loosen the hands before playing.",
        definitionOfDone: "Loosen the hands before playing.",
        commonMistakes: [
          "Turning the warm-up into a perfection test",
          "Holding tension between shapes",
          "Listening only for mistakes"
        ],
        chordNames: ["Mini F", "Full F major", "Bm"]
      },
      {
        id: "exercise-barre-accelerator-8-string-check",
        title: "Keep Strumming",
        purpose: "Maintain uninterrupted rhythm.",
        objective: "Keep the progression moving even if Full F buzzes.",
        instructionSteps: [
          "Play C.",
          "Play Full F.",
          "Play Am.",
          "Play G.",
          "Continue with steady downstrokes.",
          "If F buzzes, do not stop.",
          "Continue to G.",
          "Fix it next time around.",
          "Repeat for five minutes."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Maintain uninterrupted rhythm.",
        definitionOfDone: "Maintain uninterrupted rhythm.",
        commonMistakes: [
          "Stopping when Full F buzzes",
          "Trying to fix the chord during the beat",
          "Letting one rough chord break the progression"
        ],
        coachTip: "If you stop every time something goes wrong, you’ll train yourself to hesitate. Recover instead.",
        chordNames: ["C", "Full F major", "Am", "G"]
      },
      {
        id: "exercise-barre-accelerator-8-f-to-bm-comparison",
        title: "Down-Up Rhythm",
        purpose: "Keep both rhythm and chord changes flowing.",
        objective: "Use a simple down-up strumming pattern without letting tiny mistakes stop the music.",
        instructionSteps: [
          "Play C.",
          "Play Full F.",
          "Play Am.",
          "Play G.",
          "Use a simple down-up strumming pattern.",
          "Start slowly.",
          "Maintain even timing.",
          "Ignore tiny mistakes."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Keep both rhythm and chord changes flowing.",
        definitionOfDone: "Keep both rhythm and chord changes flowing.",
        commonMistakes: [
          "Stopping the strumming hand during Full F",
          "Speeding up the upstrokes",
          "Letting the chord hand control the rhythm hand"
        ],
        chordNames: ["C", "Full F major", "Am", "G"]
      },
      {
        id: "exercise-barre-accelerator-8-am-to-bm",
        title: "Mixed Barre Progressions",
        purpose: "Complete every progression without stopping.",
        objective: "Move through several open-and-barre progressions while preserving rhythm.",
        instructionSteps: [
          "Play Progression 1 five times: G, Bm, A, G.",
          "Play Progression 2 five times: Am, Full F, C, G.",
          "Play Progression 3 five times: C, Full F, G, Am.",
          "Keep the rhythm moving.",
          "Do not restart after mistakes."
        ],
        durationMinutes: 8,
        tempo: "",
        passCriteria: "Complete every progression without stopping.",
        definitionOfDone: "Complete every progression without stopping.",
        commonMistakes: [
          "Pausing before Bm",
          "Pausing before Full F",
          "Letting each progression feel like a separate drill"
        ],
        chordNames: ["G", "Bm", "A", "Am", "Full F major", "C"]
      },
      {
        id: "exercise-barre-accelerator-8-g-to-bm",
        title: "Play For Enjoyment",
        purpose: "Finish the lesson feeling musical rather than frustrated.",
        objective: "Choose a progression and play without analysing every mistake.",
        instructionSteps: [
          "Choose your favourite progression from today’s lesson.",
          "Play continuously for three minutes.",
          "Do not analyse mistakes.",
          "Simply enjoy playing."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Finish the lesson feeling musical rather than frustrated.",
        definitionOfDone: "Finish the lesson feeling musical rather than frustrated.",
        commonMistakes: [
          "Judging every buzz",
          "Forgetting to enjoy the sound",
          "Stopping before the three minutes are finished"
        ],
        chordNames: ["Full F major", "Bm", "C", "G", "A", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-8",
      title: "Playing Through Mistakes",
      purpose: "Confirm that you can keep the music moving even when barre chords are imperfect.",
      requirements: [
        "You can warm up Mini F, Full F and Bm with relaxed movement",
        "You can keep strumming when Full F buzzes",
        "You can use down-up rhythm without stopping",
        "You can complete mixed barre progressions without restarting",
        "You know what caused you to stop most often"
      ],
      passRule: "Pass if the rhythm keeps moving and mistakes no longer automatically stop the progression.",
      completed: false
    }
  },
  {
    lesson: {
      id: "lesson-barre-accelerator-9",
      missionId: "mission-barre-chord-accelerator",
      lessonNumber: 9,
      title: "Graduation – Using Barre Chords Naturally",
      description: "Use Full F and Bm naturally inside musical progressions without thinking about every movement. Today’s lesson is about confidence rather than learning something new.",
      objectiveHeading: "What you'll learn",
      objective: "Use Full F and Bm naturally inside musical progressions without thinking about every movement. Today’s lesson is about confidence rather than learning something new.",
      whyThisLesson: "Barre chords stop feeling difficult when they become part of your normal playing. Today’s lesson ties everything together.",
      coachNotes: "Experienced players don’t think about every finger. They recognise the shape and trust their muscle memory. That is what you’re beginning to develop.",
      estimatedMinutes: 30,
      skillIds: ["skill-chord-changes", "skill-rhythm", "skill-song-performance"],
      connectedSongs: [],
      recommendedSongs: [],
      checkpoint: "checkpoint-barre-accelerator-9",
      practiceJournal: [
        "I feel most confident with: Mini F, Full F, Bm, chord changes, or rhythm.",
        "I still want to improve:"
      ],
      reflectionPrompts: [
        "I feel most confident with: Mini F, Full F, Bm, chord changes, or rhythm.",
        "I still want to improve:"
      ],
      ongoingPractice: {
        duration: "Continue using these five-minute drills whenever you warm up",
        items: [
          "Full F",
          "Bm",
          "Random chord changes",
          "One favourite progression",
          "Barre chords improve through regular short practice rather than occasional long practice."
        ]
      },
      completionMessage: "Barre Chord Accelerator Complete",
      completed: false
    },
    exercises: [
      {
        id: "exercise-barre-accelerator-9-warm-up",
        title: "Warm-up",
        purpose: "Prepare both hands for continuous playing.",
        objective: "Move between Mini F, Full F and Bm slowly without rushing.",
        instructionSteps: [
          "Play Mini F.",
          "Play Full F.",
          "Play Bm.",
          "Repeat slowly.",
          "Do not rush."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Prepare both hands for continuous playing.",
        definitionOfDone: "Prepare both hands for continuous playing.",
        commonMistakes: [
          "Trying to prove the chords are perfect",
          "Rushing between shapes",
          "Skipping the release between repetitions"
        ],
        chordNames: ["Mini F", "Full F major", "Bm"]
      },
      {
        id: "exercise-barre-accelerator-9-four-chord-progression",
        title: "Favourite Progressions",
        purpose: "Play naturally rather than mechanically.",
        objective: "Run the familiar progressions with rhythm and confidence.",
        instructionSteps: [
          "Play Progression 1 five times: C, Full F, Am, G.",
          "Play Progression 2 five times: G, Bm, A, G.",
          "Play Progression 3 five times: Am, Full F, C, G.",
          "Maintain rhythm.",
          "Do not stop."
        ],
        durationMinutes: 10,
        tempo: "",
        passCriteria: "Play naturally rather than mechanically.",
        definitionOfDone: "Play naturally rather than mechanically.",
        commonMistakes: [
          "Thinking about every finger",
          "Pausing before the barre chords",
          "Restarting instead of recovering"
        ],
        chordNames: ["C", "Full F major", "Am", "G", "Bm", "A"]
      },
      {
        id: "exercise-barre-accelerator-9-b-minor-progression",
        title: "Barre Chord Challenge",
        purpose: "Increase confidence locating the shape.",
        objective: "Gradually rely more on feel than sight while moving into Full F.",
        instructionSteps: [
          "Without looking at your fretting hand, attempt Full F.",
          "Move to C.",
          "Move back to Full F.",
          "Move to Am.",
          "Repeat ten times.",
          "Looking occasionally is fine.",
          "The objective is gradually relying more on feel than sight."
        ],
        durationMinutes: 5,
        tempo: "",
        passCriteria: "Increase confidence locating the shape.",
        definitionOfDone: "Increase confidence locating the shape.",
        commonMistakes: [
          "Refusing to glance when needed",
          "Panicking if the first attempt misses",
          "Moving the whole hand farther than necessary"
        ],
        coachTip: "Experienced players don’t think about every finger. They recognise the shape and trust their muscle memory. That is what you’re beginning to develop.",
        chordNames: ["Full F major", "C", "Am"]
      },
      {
        id: "exercise-barre-accelerator-9-mixed-progression",
        title: "Play Like You’re Playing a Song",
        purpose: "Play continuously for seven minutes.",
        objective: "Choose any progression from Lessons 2–9 and treat it like music.",
        instructionSteps: [
          "Choose any progression from Lessons 2–9.",
          "Imagine you’re accompanying a singer.",
          "Focus on steady rhythm.",
          "Focus on relaxed movement.",
          "Focus on enjoying the music.",
          "Ignore small mistakes.",
          "Play continuously for seven minutes."
        ],
        durationMinutes: 7,
        tempo: "",
        passCriteria: "Play continuously for seven minutes.",
        definitionOfDone: "Play continuously for seven minutes.",
        commonMistakes: [
          "Turning the performance back into a technical drill",
          "Stopping after a rough barre chord",
          "Forgetting to listen to the music"
        ],
        chordNames: ["Full F major", "Mini F", "Bm", "C", "G", "A", "Am"]
      },
      {
        id: "exercise-barre-accelerator-9-recovery-practice",
        title: "Graduation Recording",
        purpose: "Complete your first recorded performance using both barre chords.",
        objective: "Record two short progressions and listen for improvement, not only mistakes.",
        instructionSteps: [
          "Record yourself playing C, Full F, Am, G.",
          "Record yourself playing G, Bm, A, G.",
          "Listen back.",
          "Notice what has improved since Lesson 1.",
          "Do not focus only on mistakes."
        ],
        durationMinutes: 3,
        tempo: "",
        passCriteria: "Complete your first recorded performance using both barre chords.",
        definitionOfDone: "Complete your first recorded performance using both barre chords.",
        commonMistakes: [
          "Avoiding recording because it feels exposed",
          "Listening only for flaws",
          "Missing the progress in your rhythm and recovery"
        ],
        chordNames: ["C", "Full F major", "Am", "G", "Bm", "A"]
      }
    ],
    checkpoint: {
      id: "checkpoint-barre-accelerator-9",
      title: "Graduation – Using Barre Chords Naturally",
      purpose: "Confirm that Full F and Bm are becoming part of your normal playing.",
      requirements: [
        "You can warm up Mini F, Full F and Bm",
        "You can play favourite progressions without stopping",
        "You can attempt Full F by feel more confidently",
        "You can play like you are accompanying a song",
        "You completed a short recording using both Full F and Bm"
      ],
      passRule: "Pass if Full F and Bm can be used naturally in progressions while rhythm and confidence remain the priority.",
      moduleSummary: {
        title: "🎉 Barre Chord Accelerator Complete",
        message: "Congratulations. You can now confidently use Mini F, Full F and B minor. More importantly, you’ve learned how to practise barre chords efficiently. Continue using the daily five-minute routine as part of your normal guitar practice.",
        continuingPractice: "Continue using Full F, Bm, random chord changes and one favourite progression as short regular warm-ups.",
        skillsDeveloped: ["Mini F", "Full F", "B minor", "Efficient barre practice", "Minimum pressure", "Recovery", "Rhythm through mistakes"],
        rewards: ["Completion badge", "100% progress", "Skill Builder marked complete"],
        featuredSongsCompleted: []
      },
      completed: false
    }
  }
];

barreAcceleratorLessonsEightAndNine.forEach(({ lesson, exercises, checkpoint }) => {
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exercises.map((exercise) => exercise.id)
  });
  exercises.forEach((exercise) => {
    upsertAcademyItem("exercises", {
      ...exercise,
      lessonId: lesson.id,
      instructions: exercise.instructionSteps.join(" "),
      coachTip: exercise.coachTip || "",
      skillIds: lesson.skillIds,
      mediaLinks: [],
      completed: false
    });
  });
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id
  });
});

const musicalStrummingLessons = [
  {
    lesson: {
      id: "lesson-musical-strumming-1",
      missionId: "mission-strumming-patterns",
      lessonNumber: 1,
      title: "Strumming Like a Song",
      description: "Make simple chord progressions sound musical through consistent movement and feel.",
      objectiveHeading: "What you'll learn",
      objective: "Understand that rhythm is more than keeping time. Learn to make simple chord progressions sound musical through consistent movement and feel.",
      whyThisLesson: "Many beginners can play the correct chords but still sound mechanical. Today you begin developing the natural flow that separates practising from making music.",
      coachNotes: "Imagine you’re accompanying a singer. Your job isn’t simply to count beats. Your job is to support the song.",
      estimatedMinutes: 30,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Reinforces continuous movement and a recognisable musical strumming feel." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Shows how simple chord movement can sound musical through steady phrasing." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Reinforces continuous movement and a recognisable musical strumming feel." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Shows how simple chord movement can sound musical through steady phrasing." }
      ],
      checkpoint: "checkpoint-musical-strumming-1",
      practiceJournal: ["Which chord interrupted the flow?", "Did you listen more than you watched?", "What sounded most musical today?"],
      reflectionPrompts: ["Which chord interrupted the flow?", "Did you listen more than you watched?", "What sounded most musical today?"],
      completed: false
    },
    exercises: [
      ["continuous-hand-motion", "Continuous Hand Motion", 5, "60 BPM", "Re-establish continuous strumming movement.", "One minute of uninterrupted movement.", ["Mute the strings.", "Keep your hand moving continuously.", "Count aloud."], []],
      ["soft-groove", "Soft Groove", 5, "60 BPM", "Develop smooth, relaxed movement without chasing speed.", "Play G with a soft, steady groove for one minute.", ["Play G.", "Focus only on smooth relaxed movement.", "Do not think about speed."], ["Strumming too hard", "Tensing the wrist"]],
      ["chord-flow", "Chord Flow", 5, "60 BPM", "Keep musical movement flowing across familiar chords.", "Complete several cycles without pauses.", ["Play G, C, D, Em and Am.", "Use four beats for each chord.", "Do not pause between chords."], [], ["G", "C", "D", "Em", "Am"]],
      ["listening-exercise", "Listening Exercise", 5, "60 BPM", "Separate listening for timing from listening for tone.", "Identify one timing detail and one tone detail.", ["Play the same progression twice.", "First, listen only to timing.", "Second, listen only to tone.", "Notice the difference."], [], ["G", "C", "D", "Em", "Am"]],
      ["dynamic-repeat", "Dynamic Repeat", 5, "60 BPM", "Use volume changes without disturbing musical flow.", "Move from quiet to natural to confident volume while timing stays steady.", ["Repeat the progression quietly.", "Repeat it naturally.", "Repeat it confidently.", "Keep the rhythm unchanged."], [], ["G", "C", "D", "Em", "Am"]],
      ["continuous-playing", "Continuous Playing", 5, "60 BPM", "Turn the lesson into uninterrupted music.", "Play continuously for five minutes and recover naturally from mistakes.", ["Play continuously for five minutes.", "Keep the hand moving.", "Recover naturally from mistakes."], [], ["G", "C", "D", "Em", "Am"]]
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-1",
      title: "Strumming Like a Song",
      purpose: "Confirm that continuous rhythm is beginning to sound smoother and more musical.",
      requirements: ["Rhythm remains steady", "Hand never stops", "Playing sounds smoother than Module 2"],
      passRule: "Pass if rhythm remains steady, the hand keeps moving and the progression sounds smoother and more musical."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-2",
      missionId: "mission-strumming-patterns",
      lessonNumber: 2,
      title: "Accents Create Groove",
      description: "Learn how emphasising different beats changes the feel of the music.",
      objectiveHeading: "What you'll learn",
      objective: "Learn how emphasising different beats changes the feel of the music.",
      whyThisLesson: "Great rhythm guitar isn’t about strumming harder. It’s about choosing where the music breathes.",
      coachNotes: "Imagine clapping along to a song. You naturally clap some beats more strongly than others. Today you’ll learn to do the same with your guitar.",
      estimatedMinutes: 35,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        { title: "Stand By Me", artist: "Ben E. King", note: "Its repeating groove makes intentional accents easy to hear." },
        { title: "Wonderwall", artist: "Oasis", note: "Demonstrates how accent choices give a familiar pattern its character." }
      ],
      recommendedSongs: [
        { title: "Stand By Me", artist: "Ben E. King", note: "Its repeating groove makes intentional accents easy to hear." },
        { title: "Wonderwall", artist: "Oasis", note: "Demonstrates how accent choices give a familiar pattern its character." }
      ],
      checkpoint: "checkpoint-musical-strumming-2",
      practiceJournal: ["Which accent pattern felt most natural?", "Did accents improve the musical feel?"],
      reflectionPrompts: ["Which accent pattern felt most natural?", "Did accents improve the musical feel?"],
      completed: false
    },
    exercises: [
      ["accent-beat-one", "Accent Beat One", "Emphasise beat one while every other stroke remains even.", "Keep the pulse steady while beat one sounds intentional."],
      ["accent-two-four", "Accent Beats Two and Four", "Emphasise beats two and four without rushing.", "Keep accents clear while timing remains unchanged."],
      ["compare-feels", "Compare Different Feels", "Compare beat-one accents with accents on beats two and four.", "Hear and describe how each pattern changes the groove."],
      ["g-c-accents", "G–C Accent Practice", "Apply intentional accents while changing between G and C.", "Maintain accents and steady rhythm through the chord change.", ["G", "C"]],
      ["g-c-d-progression", "G–C–D Progression", "Carry the accent pattern through a three-chord progression.", "Complete several cycles with consistent accents.", ["G", "C", "D"]],
      ["stand-by-me-study", "Stand By Me Accent Study", "Apply accents to a familiar repeating song progression.", "Keep the groove consistent while accents remain musical.", ["G", "Em", "C", "D"]],
      ["five-minute-groove", "Five Minute Groove Practice", "Sustain the preferred accent pattern in continuous playing.", "Complete five minutes with consistent rhythm and intentional accents.", ["G", "C", "D", "Em", "Am"]]
    ].map(([slug, title, purpose, done, chordNames = []]) => [
      slug,
      title,
      5,
      "60 BPM",
      purpose,
      done,
      ["Begin at 60 BPM.", "Keep every stroke consistent.", "Add the named accent without changing tempo.", "Prioritise consistency before volume."],
      [],
      chordNames
    ]),
    checkpoint: {
      id: "checkpoint-musical-strumming-2",
      title: "Accents Create Groove",
      purpose: "Confirm that accents can change the feel without changing the underlying rhythm.",
      requirements: ["Accents remain intentional", "Rhythm does not change", "Louder strums do not become rushed"],
      passRule: "Pass if accents remain intentional while the underlying rhythm stays steady and unhurried."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-3",
      missionId: "mission-strumming-patterns",
      lessonNumber: 3,
      title: "Relaxed Up-Down Strumming",
      description: "Develop effortless continuous strumming using relaxed wrist movement.",
      objectiveHeading: "What you'll learn",
      objective: "Develop effortless continuous strumming using relaxed wrist movement.",
      whyThisLesson: "Many players become tense when increasing strumming complexity. Today’s lesson teaches that relaxation produces better rhythm than effort.",
      coachNotes: "Your wrist should feel loose enough that someone could gently move your hand while you’re playing. If it feels rigid, you’re working too hard.",
      estimatedMinutes: 35,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Requires continuous relaxed motion beneath a recognisable pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Rewards light, effortless up-down movement and consistent feel." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Requires continuous relaxed motion beneath a recognisable pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Rewards light, effortless up-down movement and consistent feel." }
      ],
      checkpoint: "checkpoint-musical-strumming-3",
      practiceJournal: ["Did tension increase with speed?", "What helped you relax?", "Which exercise felt most natural?"],
      reflectionPrompts: ["Did tension increase with speed?", "What helped you relax?", "Which exercise felt most natural?"],
      completed: false
    },
    exercises: [
      ["air-strumming", "Air Strumming", "Develop loose up-down movement without touching the strings.", "One minute of continuous relaxed motion.", []],
      ["muted-up-down", "Muted Up-Down", "Add string contact while keeping the wrist loose.", "One minute of even muted up-down strokes.", []],
      ["up-down-g", "Up-Down on G", "Apply relaxed movement to a familiar chord.", "One minute of steady up-down strumming on G.", ["G"]],
      ["g-c", "G–C", "Keep continuous motion through a chord change.", "Several G–C changes without interrupting the hand.", ["G", "C"]],
      ["g-c-d", "G–C–D", "Extend relaxed movement across three chords.", "Several complete cycles with consistent rhythm.", ["G", "C", "D"]],
      ["five-chord-progression", "Five-Chord Progression", "Maintain relaxed movement across G, C, D, Em and Am.", "Complete several five-chord cycles without tension.", ["G", "C", "D", "Em", "Am"]],
      ["continuous-performance", "Five Minute Continuous Performance", "Turn relaxed up-down motion into continuous music.", "Complete five minutes without stopping or tightening the wrist.", ["G", "C", "D", "Em", "Am"]]
    ].map(([slug, title, purpose, done, chordNames]) => [
      slug,
      title,
      5,
      "60–70 BPM",
      purpose,
      done,
      ["Begin at 60 BPM.", "Keep the wrist and forearm relaxed.", "Maintain continuous up-down motion.", "Increase to 70 BPM only if the movement remains relaxed."],
      [],
      chordNames
    ]),
    checkpoint: {
      id: "checkpoint-musical-strumming-3",
      title: "Relaxed Up-Down Strumming",
      purpose: "Confirm that increased strumming complexity does not create tension or interrupt rhythm.",
      requirements: ["Wrist remains relaxed", "Hand moves continuously", "Rhythm stays consistent", "Chord changes no longer interrupt movement"],
      passRule: "Pass if the wrist remains relaxed, motion stays continuous and chord changes no longer interrupt the rhythm."
    }
  }
];

musicalStrummingLessons.forEach(({ lesson, exercises, checkpoint }) => {
  const exerciseObjects = exercises.map(([slug, title, durationMinutes, tempo, purpose, done, instructionSteps, commonMistakes, chordNames = []]) => ({
    id: `exercise-${lesson.id.replace(/^lesson-/, "")}-${slug}`,
    lessonId: lesson.id,
    title,
    purpose,
    objective: purpose,
    instructions: instructionSteps.join(" "),
    instructionSteps,
    durationMinutes,
    tempo,
    passCriteria: done,
    definitionOfDone: done,
    commonMistakes,
    chordNames,
    skillIds: lesson.skillIds,
    mediaLinks: [],
    completed: false
  }));
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exerciseObjects.map((exercise) => exercise.id)
  });
  exerciseObjects.forEach((exercise) => upsertAcademyItem("exercises", exercise));
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const musicalStrummingLessonsFourToSix = [
  {
    lesson: {
      id: "lesson-musical-strumming-4",
      missionId: "mission-strumming-patterns",
      lessonNumber: 4,
      title: "Playing With the Music",
      description: "Learn to listen while playing instead of focusing entirely on your hands.",
      objectiveHeading: "What you'll learn",
      objective: "Learn to listen while playing instead of focusing entirely on your hands.",
      whyThisLesson: "Many beginners stare at the fretboard so intensely they stop listening to what they’re actually playing. Today you’ll begin training your ears as much as your fingers.",
      coachNotes: "Your ears are your most important teacher. If something sounds wrong, believe your ears before your eyes.",
      estimatedMinutes: 30,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Free Fallin’", artist: "Tom Petty", note: "Encourages listening to musical flow rather than watching every movement." },
        { title: "Wonderwall", artist: "Oasis", note: "Develops active listening within a continuous, recognisable strumming texture." }
      ],
      recommendedSongs: [
        { title: "Free Fallin’", artist: "Tom Petty", note: "Encourages listening to musical flow rather than watching every movement." },
        { title: "Wonderwall", artist: "Oasis", note: "Develops active listening within a continuous, recognisable strumming texture." }
      ],
      checkpoint: "checkpoint-musical-strumming-4",
      practiceJournal: ["What did you notice when you stopped watching your hands?", "Which chord sounded the richest?", "What would you like to improve?"],
      reflectionPrompts: ["What did you notice when you stopped watching your hands?", "Which chord sounded the richest?", "What would you like to improve?"],
      completed: false
    },
    exercises: [
      ["listen-before-playing", "Listen Before Playing", "Develop active listening.", "You can comfortably anticipate each beat.", ["Listen to the metronome for one minute.", "Tap your foot.", "Do not touch the guitar."], [], "", []],
      ["one-chord-listening", "One Chord Listening", "Listen closely to tone, rhythm and consistency.", "Play G continuously with steady rhythm and an even tone.", ["Play G major continuously.", "Focus only on tone, rhythm and consistency.", "Ignore speed."], [], "", ["G"]],
      ["closed-eyes", "Closed Eyes", "Use hearing rather than vision to guide the playing.", "Complete one minute without opening your eyes.", ["Play G and C.", "Close your eyes once comfortable.", "Focus only on what you hear."], [], "Removing vision often improves listening surprisingly quickly.", ["G", "C"]],
      ["chord-flow", "Chord Flow", "Listen for smoothness across a complete progression.", "Complete several smooth cycles without stopping.", ["Play G, Em, C and D.", "Repeat continuously.", "Listen for smoothness rather than correctness."], [], "", ["G", "Em", "C", "D"]],
      ["dynamics", "Dynamics", "Hear how volume changes the emotion of a progression.", "Move through soft, medium and strong dynamics without changing tempo.", ["Repeat the G, Em, C and D progression.", "Play it softly.", "Play it at medium volume.", "Play it strongly.", "Notice how the emotion changes."], [], "", ["G", "Em", "C", "D"]],
      ["musical-performance", "Musical Performance", "Play as though accompanying a singer.", "Playing sounds relaxed and connected.", ["Play continuously.", "Imagine accompanying a singer.", "Listen to the complete musical flow."], [], "", ["G", "Em", "C", "D"]]
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-4",
      title: "Playing With the Music",
      purpose: "Confirm that active listening now guides steady, connected rhythm playing.",
      requirements: ["You listened throughout the exercise", "Rhythm stayed steady", "Playing felt more musical than mechanical"],
      passRule: "Pass if listening remains active, rhythm stays steady and the result feels more musical than mechanical."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-5",
      missionId: "mission-strumming-patterns",
      lessonNumber: 5,
      title: "Musical Dynamics",
      description: "Use dynamics intentionally to create expression.",
      objectiveHeading: "What you'll learn",
      objective: "Use dynamics intentionally to create expression.",
      whyThisLesson: "Music becomes interesting because it changes. Playing every strum at the same volume creates a flat performance. Learning dynamics is one of the quickest ways to sound more experienced.",
      coachNotes: "Imagine telling a story. If every sentence is spoken at exactly the same volume, people stop listening. Music works the same way.",
      estimatedMinutes: 30,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Uses changing intensity to shape sections while the strumming remains continuous." },
        { title: "Stand By Me", artist: "Ben E. King", note: "Provides a steady groove for practising deliberate dynamic changes." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Uses changing intensity to shape sections while the strumming remains continuous." },
        { title: "Stand By Me", artist: "Ben E. King", note: "Provides a steady groove for practising deliberate dynamic changes." }
      ],
      checkpoint: "checkpoint-musical-strumming-5",
      practiceJournal: ["Which dynamic felt most natural?", "Did changing volume affect rhythm?", "Which sounded most musical?"],
      reflectionPrompts: ["Which dynamic felt most natural?", "Did changing volume affect rhythm?", "Which sounded most musical?"],
      completed: false
    },
    exercises: [
      ["quiet-playing", "Quiet Playing", "Develop controlled quiet strumming without losing tone.", "Play one progression quietly while tone and rhythm remain clear.", ["Choose a familiar progression.", "Play it quietly.", "Maintain tone and steady timing."], ["Letting quiet playing become hesitant"], "", ["G", "C", "D", "Em"]],
      ["confident-playing", "Confident Playing", "Increase volume without becoming aggressive.", "Play the same progression confidently with clean tone and steady timing.", ["Play the same progression confidently.", "Keep the wrist relaxed.", "Avoid aggression."], ["Hitting harder instead of playing confidently"], "", ["G", "C", "D", "Em"]],
      ["build-release", "Build and Release", "Create a gradual dynamic rise and fall.", "Volume changes gradually while rhythm remains steady.", ["Begin quietly.", "Gradually become louder.", "Gradually become quieter.", "Repeat."], [], "", ["G", "C", "D", "Em"]],
      ["verse-chorus", "Verse and Chorus", "Use contrasting dynamics to shape song sections.", "Quiet verse and confident chorus sound clearly different without a tempo change.", ["Play a quiet verse.", "Play a confident chorus.", "Alternate the two sections."], [], "", ["G", "C", "D", "Em"]],
      ["dynamic-changes", "Dynamic Chord Changes", "Maintain intended dynamics while changing chords.", "Chord changes stay smooth and the selected dynamic remains consistent.", ["Choose a progression.", "Set a clear dynamic level.", "Maintain it through every chord change.", "Repeat at a different dynamic."], [], "", ["G", "C", "D", "Em", "Am"]],
      ["musical-performance", "Musical Performance", "Use dynamics naturally in continuous playing.", "Complete five minutes with intentional expression and steady rhythm.", ["Play continuously.", "Experiment with expression.", "Let dynamics support the musical phrase.", "Keep rhythm steady."], [], "", ["G", "C", "D", "Em", "Am"]]
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-5",
      title: "Musical Dynamics",
      purpose: "Confirm that dynamics can shape a performance without disturbing rhythm or tone.",
      requirements: ["Dynamic changes sound intentional", "Rhythm remains steady", "Tone stays clean"],
      passRule: "Pass if dynamic changes sound intentional while rhythm remains steady and tone stays clean."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-6",
      missionId: "mission-strumming-patterns",
      lessonNumber: 6,
      title: "Finding Your Groove",
      description: "Develop relaxed rhythm that feels natural rather than counted.",
      objectiveHeading: "What you'll learn",
      objective: "Develop relaxed rhythm that feels natural rather than counted.",
      whyThisLesson: "Great rhythm players eventually stop counting every beat. Instead, they feel the pulse internally. Today you’ll begin making that transition.",
      coachNotes: "If you constantly think “one-two-three-four,” your brain never relaxes. Eventually the pulse should feel automatic.",
      estimatedMinutes: 30,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Develops relaxed internal pulse within a continuous strumming pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Rewards natural groove, listening and unforced rhythmic movement." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Develops relaxed internal pulse within a continuous strumming pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Rewards natural groove, listening and unforced rhythmic movement." }
      ],
      checkpoint: "checkpoint-musical-strumming-6",
      practiceJournal: ["When did the rhythm begin to feel automatic?", "Did looking away help?", "Did you enjoy today’s playing more than earlier modules?"],
      reflectionPrompts: ["When did the rhythm begin to feel automatic?", "Did looking away help?", "Did you enjoy today’s playing more than earlier modules?"],
      completed: false
    },
    exercises: [
      ["foot-first", "Foot First", "Let the foot establish the pulse before the hands join.", "Foot keeps steady time while the hands follow.", ["Tap your foot continuously.", "Let the hands follow the foot.", "Keep the pulse relaxed."], [], "", []],
      ["relaxed-strumming", "Relaxed Strumming", "Let movement become more important than speed.", "One chord flows with loose, consistent movement.", ["Play one chord.", "Ignore speed.", "Focus only on relaxed movement."], [], "", ["G"]],
      ["groove-loop", "Groove Loop", "Use repetition to let the rhythm feel automatic.", "Complete several G, C, Em and D cycles without analysing mistakes.", ["Play G, C, Em and D.", "Repeat continuously.", "Do not analyse mistakes."], [], "", ["G", "C", "Em", "D"]],
      ["breathe", "Breathe", "Keep natural breathing connected to relaxed rhythm.", "Breathing remains natural throughout the progression.", ["Repeat the G, C, Em and D progression.", "Notice your breathing.", "Avoid holding your breath."], ["Holding the breath during difficult changes"], "", ["G", "C", "Em", "D"]],
      ["looking-up", "Looking Up", "Reduce visual dependence and listen instead.", "Play comfortably while looking away for increasing periods.", ["Play the progression.", "Look away from the guitar whenever comfortable.", "Listen instead of watching."], [], "", ["G", "C", "Em", "D"]],
      ["five-minute-performance", "Five Minute Performance", "Bring internal pulse, relaxation and recovery together.", "Complete five minutes without stopping.", ["Play continuously.", "Imagine performing for someone.", "Do not stop.", "Recover naturally."], [], "", ["G", "C", "Em", "D"]]
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-6",
      title: "Finding Your Groove",
      purpose: "Confirm that pulse and recovery are becoming natural rather than mechanically counted.",
      requirements: ["Playing feels relaxed", "Foot naturally keeps time", "Mistakes no longer interrupt rhythm", "Groove feels more natural than previous lessons"],
      passRule: "Pass if rhythm feels relaxed, the foot keeps time naturally, mistakes do not interrupt the flow and groove feels increasingly automatic."
    }
  }
];

musicalStrummingLessonsFourToSix.forEach(({ lesson, exercises, checkpoint }) => {
  const exerciseObjects = exercises.map(([slug, title, purpose, done, instructionSteps, commonMistakes, coachTip, chordNames]) => ({
    id: `exercise-${lesson.id.replace(/^lesson-/, "")}-${slug}`,
    lessonId: lesson.id,
    title,
    purpose,
    objective: purpose,
    instructions: instructionSteps.join(" "),
    instructionSteps,
    durationMinutes: 5,
    tempo: lesson.lessonNumber === 6 ? "65 BPM" : "60 BPM",
    passCriteria: done,
    definitionOfDone: done,
    commonMistakes,
    coachTip,
    chordNames,
    skillIds: lesson.skillIds,
    mediaLinks: [],
    completed: false
  }));
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exerciseObjects.map((exercise) => exercise.id)
  });
  exerciseObjects.forEach((exercise) => upsertAcademyItem("exercises", exercise));
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

const musicalStrummingLessonsSevenToNine = [
  {
    lesson: {
      id: "lesson-musical-strumming-7",
      missionId: "mission-strumming-patterns",
      lessonNumber: 7,
      title: "Playing Through Mistakes",
      description: "Develop the confidence to continue playing after mistakes without stopping the music.",
      objectiveHeading: "What you'll learn",
      objective: "Develop the confidence to continue playing after mistakes without stopping the music.",
      whyThisLesson: "The audience notices hesitation more than wrong notes. Learning to recover naturally is one of the biggest steps from practising to performing.",
      coachNotes: "Professional musicians make mistakes. The difference is that they keep going.",
      estimatedMinutes: 25,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Builds confidence recovering inside a continuous and recognisable strumming pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Encourages steady musical flow even when a chord change is imperfect." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Builds confidence recovering inside a continuous and recognisable strumming pattern." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Encourages steady musical flow even when a chord change is imperfect." }
      ],
      checkpoint: "checkpoint-musical-strumming-7",
      practiceJournal: ["Did you instinctively want to stop?", "What helped you continue?", "Did the mistake sound as noticeable as it felt?"],
      reflectionPrompts: ["Did you instinctively want to stop?", "What helped you continue?", "Did the mistake sound as noticeable as it felt?"],
      completed: false
    },
    exercises: [
      {
        slug: "deliberate-mistakes",
        title: "Deliberate Mistakes",
        durationMinutes: 5,
        tempo: "65 BPM",
        purpose: "Remove the fear of making mistakes.",
        instructions: ["Play a simple progression.", "Deliberately miss one chord.", "Recover immediately.", "Continue playing."],
        done: "Recover without restarting.",
        chords: ["G", "C", "D", "Em"]
      },
      {
        slug: "miss-and-recover",
        title: "Miss and Recover",
        durationMinutes: 5,
        tempo: "65 BPM",
        purpose: "Practise returning to the progression naturally after a late chord.",
        instructions: ["Play G, C, D and Em.", "Intentionally delay one chord.", "Keep the strumming hand moving.", "Recover naturally."],
        done: "Complete several cycles without restarting.",
        chords: ["G", "C", "D", "Em"]
      },
      {
        slug: "rhythm-first",
        title: "Rhythm First",
        durationMinutes: 5,
        tempo: "65 BPM",
        purpose: "Learn to protect the rhythm while the fretting hand catches up.",
        instructions: ["Choose a familiar progression.", "Keep the rhythm steady.", "Allow late chord changes to catch up naturally.", "Do not stop the strumming hand."],
        done: "Rhythm remains steady even when a chord arrives late.",
        chords: ["G", "C", "D", "Em"]
      },
      {
        slug: "song-recovery",
        title: "Song Recovery",
        durationMinutes: 5,
        tempo: "",
        purpose: "Apply natural recovery inside a complete song.",
        instructions: ["Play Wonderwall.", "If a mistake occurs, keep strumming.", "Rejoin naturally.", "Do not restart."],
        done: "Continue through mistakes without losing the musical flow.",
        chords: []
      },
      {
        slug: "continuous-performance",
        title: "Continuous Performance",
        durationMinutes: 5,
        tempo: "",
        purpose: "Build confidence through uninterrupted playing.",
        instructions: ["Choose a familiar progression or song.", "Play continuously for five minutes.", "Recover naturally from every mistake.", "Never restart."],
        done: "Play for five minutes without restarting.",
        chords: ["G", "C", "D", "Em", "Am"]
      }
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-7",
      title: "Playing Through Mistakes",
      purpose: "Confirm that mistakes no longer interrupt the musical flow.",
      requirements: ["You recover naturally", "Rhythm remains steady", "Mistakes no longer interrupt the music"],
      passRule: "Pass if you recover naturally, preserve the rhythm and continue playing after mistakes."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-8",
      missionId: "mission-strumming-patterns",
      lessonNumber: 8,
      title: "Playing with Confidence",
      description: "Develop confidence by focusing on musical communication instead of technical perfection.",
      objectiveHeading: "What you'll learn",
      objective: "Develop confidence by focusing on musical communication instead of technical perfection.",
      whyThisLesson: "Confident playing sounds better than cautious playing. Today you will focus on making music rather than avoiding mistakes.",
      coachNotes: "Your listener wants to hear music, not perfection. Relax. Commit to every strum.",
      estimatedMinutes: 30,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Rewards committed strumming and completing the performance without hesitation." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Develops confident phrasing within a relaxed, accessible progression." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Rewards committed strumming and completing the performance without hesitation." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Develops confident phrasing within a relaxed, accessible progression." }
      ],
      checkpoint: "checkpoint-musical-strumming-8",
      practiceJournal: ["Did you enjoy the performance?", "What felt natural?", "What still creates hesitation?"],
      reflectionPrompts: ["Did you enjoy the performance?", "What felt natural?", "What still creates hesitation?"],
      completed: false
    },
    exercises: [
      {
        slug: "confident-strumming",
        title: "Confident Strumming",
        durationMinutes: 5,
        tempo: "",
        purpose: "Replace hesitant playing with relaxed, committed movement.",
        instructions: ["Choose a familiar progression.", "Play confidently.", "Commit to every strum.", "Avoid hesitation."],
        done: "The progression sounds committed and relaxed rather than cautious.",
        chords: ["G", "C", "D", "Em", "Am"]
      },
      {
        slug: "looking-up",
        title: "Looking Up",
        durationMinutes: 5,
        tempo: "",
        purpose: "Reduce dependence on watching the fretboard.",
        instructions: ["Play a familiar progression.", "Look away from the fretboard whenever possible.", "Listen to the musical result.", "Keep the rhythm flowing."],
        done: "Play comfortably while looking away for increasing periods.",
        chords: ["G", "C", "D", "Em"]
      },
      {
        slug: "performance-mindset",
        title: "Performance Mindset",
        durationMinutes: 5,
        tempo: "",
        purpose: "Practise communicating music rather than monitoring every movement.",
        instructions: ["Imagine playing for a friend.", "Begin with a clear count-in.", "Continue naturally through mistakes.", "Finish the performance without restarting."],
        done: "Complete a short performance with natural musical flow.",
        chords: ["G", "C", "D", "Em", "Am"]
      },
      {
        slug: "dynamics",
        title: "Dynamics",
        durationMinutes: 5,
        tempo: "",
        purpose: "Use volume to shape a confident performance.",
        instructions: ["Play a quiet verse.", "Move into a confident chorus.", "Keep the tempo unchanged.", "Repeat the contrast."],
        done: "Verse and chorus have clear dynamic contrast while rhythm stays steady.",
        chords: ["G", "C", "D", "Em"]
      },
      {
        slug: "full-song",
        title: "Full Song",
        durationMinutes: 10,
        tempo: "",
        purpose: "Complete a song with confidence instead of chasing perfection.",
        instructions: ["Choose Wonderwall or Free Fallin’.", "Play from beginning to end.", "Commit to every strum.", "Do not restart."],
        done: "Complete the selected song without restarting.",
        chords: []
      }
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-8",
      title: "Playing with Confidence",
      purpose: "Confirm that musical commitment is replacing cautious, perfection-focused playing.",
      requirements: ["Playing feels relaxed", "Confidence has improved", "You complete the song without restarting"],
      passRule: "Pass if playing feels relaxed and confident and you complete a song without restarting."
    }
  },
  {
    lesson: {
      id: "lesson-musical-strumming-9",
      missionId: "mission-strumming-patterns",
      lessonNumber: 9,
      title: "Making Music",
      description: "Bring together everything learned throughout Module 3 in complete musical performances.",
      objectiveHeading: "What you'll learn",
      objective: "Bring together everything learned throughout Module 3 in complete musical performances.",
      whyThisLesson: "Exercises teach skills. Songs develop musicians. Today’s lesson is about enjoying the guitar rather than analysing every movement.",
      coachNotes: "For the first time in the Academy, your main objective is simply to make music. Trust the work you’ve already done.",
      estimatedMinutes: 45,
      skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
      connectedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Combines groove, dynamics and confidence in a complete musical performance." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Reinforces relaxed rhythm, smooth movement and musical phrasing." }
      ],
      recommendedSongs: [
        { title: "Wonderwall", artist: "Oasis", note: "Combines groove, dynamics and confidence in a complete musical performance." },
        { title: "Free Fallin’", artist: "Tom Petty", note: "Reinforces relaxed rhythm, smooth movement and musical phrasing." }
      ],
      checkpoint: "checkpoint-musical-strumming-9",
      practiceJournal: ["Which song felt strongest?", "Which skill improved most during Module 3?", "What still feels challenging?", "Which songs are you excited to learn next?"],
      reflectionPrompts: ["Which song felt strongest?", "Which skill improved most during Module 3?", "What still feels challenging?", "Which songs are you excited to learn next?"],
      completed: false
    },
    exercises: [
      {
        slug: "warm-up",
        title: "Warm Up",
        durationMinutes: 5,
        tempo: "",
        purpose: "Reconnect with the familiar chords and relaxed strumming used throughout the module.",
        instructions: ["Review G, C, D, Em and Am.", "Use relaxed strumming.", "Listen for a steady musical flow.", "Correct only obvious problems."],
        done: "All five chords feel comfortable within a relaxed progression.",
        chords: ["G", "C", "D", "Em", "Am"]
      },
      {
        slug: "wonderwall-performance",
        title: "Featured Song: Wonderwall",
        durationMinutes: 15,
        tempo: "",
        purpose: "Apply groove, dynamics and confidence to a complete song.",
        instructions: ["Play Wonderwall.", "Focus on groove.", "Use dynamics intentionally.", "Commit to the performance and keep going."],
        done: "Complete a musical performance with steady rhythm and confident recovery.",
        chords: []
      },
      {
        slug: "free-fallin-performance",
        title: "Featured Song: Free Fallin’",
        durationMinutes: 15,
        tempo: "",
        purpose: "Apply relaxed rhythm, smooth movement and phrasing to a complete song.",
        instructions: ["Play Free Fallin’.", "Keep the rhythm relaxed.", "Listen for smooth movement.", "Shape the performance with musical phrasing."],
        done: "Complete a relaxed performance with smooth rhythm and musical phrasing.",
        chords: []
      },
      {
        slug: "free-performance",
        title: "Free Performance",
        durationMinutes: 10,
        tempo: "",
        purpose: "Finish the module by making music without analysing every movement.",
        instructions: ["Choose any song you have learned so far.", "Play it from beginning to end.", "Recover naturally from mistakes.", "Enjoy the performance."],
        done: "Complete the chosen song from beginning to end and enjoy playing it.",
        chords: []
      }
    ],
    checkpoint: {
      id: "checkpoint-musical-strumming-9",
      title: "Module 3 Assessment",
      purpose: "Confirm that rhythm guitar playing is becoming musical, relaxed and confident.",
      requirements: [
        "Maintain consistent rhythm",
        "Use dynamics intentionally",
        "Recover naturally from mistakes",
        "Complete a full song without restarting",
        "Demonstrate relaxed strumming"
      ],
      passRule: "Pass if songs remain musical, rhythm stays steady, mistakes no longer stop the performance and playing feels enjoyable rather than stressful.",
      moduleAssessment: {
        title: "Module 3 Assessment",
        purpose: "Confirm that you can play rhythm guitar musically and confidently.",
        resultOptions: ["Pass", "Needs More Practice"],
        needsMorePracticeRecommendation: "Review exercises previously marked Needs More Practice. Module 4 remains available while you continue developing these skills."
      },
      moduleSummary: {
        title: "Module 3 Complete",
        message: "Congratulations. You have moved beyond simply playing chords. You are now developing the skills required to accompany songs with confidence and musicality.",
        preparingForNextModule: "Module 4 introduces more advanced chord vocabulary and expressive rhythm playing, giving you access to an even wider range of songs while continuing to build confidence and musicality.",
        skillsDeveloped: [
          "Musical rhythm",
          "Groove",
          "Dynamic playing",
          "Listening while playing",
          "Relaxed strumming",
          "Performance confidence",
          "Recovery after mistakes",
          "Playing complete songs"
        ],
        featuredSongsCompleted: ["Wonderwall", "Free Fallin’"]
      }
    }
  }
];

musicalStrummingLessonsSevenToNine.forEach(({ lesson, exercises, checkpoint }) => {
  const exerciseObjects = exercises.map((exercise) => ({
    id: `exercise-${lesson.id.replace(/^lesson-/, "")}-${exercise.slug}`,
    lessonId: lesson.id,
    title: exercise.title,
    purpose: exercise.purpose,
    objective: "",
    instructions: exercise.instructions.join(" "),
    instructionSteps: exercise.instructions,
    durationMinutes: exercise.durationMinutes,
    tempo: exercise.tempo,
    passCriteria: exercise.done,
    definitionOfDone: exercise.done,
    commonMistakes: [],
    chordNames: exercise.chords,
    skillIds: lesson.skillIds,
    mediaLinks: [],
    completed: false
  }));
  upsertAcademyItem("lessons", {
    ...lesson,
    exercises: exerciseObjects.map((exercise) => exercise.id)
  });
  exerciseObjects.forEach((exercise) => upsertAcademyItem("exercises", exercise));
  upsertAcademyItem("checkpoints", {
    ...checkpoint,
    lessonId: lesson.id,
    completed: false
  });
});

upsertAcademyItem("missions", {
  id: "mission-strumming-patterns",
  title: "Musical Strumming & Rhythm",
  subtitle: "Develop musical expression through relaxed, confident strumming.",
  dashboardSubtitle: "Make rhythm playing feel expressive and musical.",
  description: "Develop musical expression through dynamic strumming, accent patterns, phrasing, groove and active listening.",
  whyItMatters: "Musical rhythm is more than correct mechanics. This module turns steady strumming into expressive accompaniment.",
  estimatedSessions: "3-5 practice sessions",
  estimatedPracticeHours: "TBD",
  prerequisiteMissionIds: ["mission-rhythm-foundations"],
  connectedSongs: [
    { title: "Wonderwall", artist: "Oasis", explanation: "Develops recognisable musical strumming, accents and continuous movement." },
    { title: "Free Fallin’", artist: "Tom Petty", explanation: "Shows how simple harmony becomes musical through phrasing and feel." },
    { title: "Stand By Me", artist: "Ben E. King", explanation: "Provides a repeating groove for practising intentional accents." }
  ],
  featuredSongs: [
    { title: "Wonderwall", artist: "Oasis", explanation: "Develops recognisable musical strumming, accents and continuous movement." },
    { title: "Free Fallin’", artist: "Tom Petty", explanation: "Shows how simple harmony becomes musical through phrasing and feel." }
  ],
  skillsDeveloped: ["Dynamic strumming", "Accent patterns", "Musical phrasing", "Consistent groove", "Strumming confidence", "Listening while playing"],
  skillIds: ["skill-rhythm", "skill-strumming", "skill-timing", "skill-song-performance"],
  objectives: ["Strum with musical flow", "Use intentional accents", "Maintain a relaxed up-down motion", "Listen actively while playing", "Recover naturally from mistakes", "Complete songs with confidence"],
  successCriteria: ["Rhythm remains consistent", "Strumming sounds less mechanical", "Dynamics and accents feel intentional", "Mistakes no longer stop the performance", "A full song can be completed without restarting"],
  lessons: [...musicalStrummingLessons, ...musicalStrummingLessonsFourToSix, ...musicalStrummingLessonsSevenToNine].map(({ lesson }) => lesson.id),
  unlockNextModuleOnAssessment: true,
  moduleAssessment: {
    title: "Module 3 Assessment",
    purpose: "Confirm that you can play rhythm guitar musically and confidently.",
    resultOptions: ["Pass", "Needs More Practice"],
    needsMorePracticeRecommendation: "Review exercises previously marked Needs More Practice. Module 4 remains available while you continue developing these skills."
  },
  moduleSummary: {
    title: "Module 3 Complete",
    message: "Congratulations. You have moved beyond simply playing chords. You are now developing the skills required to accompany songs with confidence and musicality.",
    preparingForNextModule: "Module 4 introduces more advanced chord vocabulary and expressive rhythm playing, giving you access to an even wider range of songs while continuing to build confidence and musicality.",
    skillsDeveloped: [
      "Musical rhythm",
      "Groove",
      "Dynamic playing",
      "Listening while playing",
      "Relaxed strumming",
      "Performance confidence",
      "Recovery after mistakes",
      "Playing complete songs"
    ],
    featuredSongsCompleted: ["Wonderwall", "Free Fallin’"]
  },
  completed: false
});

const missionOneExerciseIds = missionOneLessonIds.flatMap((lessonId) => {
  const lesson = window.academyData.lessons.find((academyLesson) => academyLesson.id === lessonId);
  return lesson?.exercises || [];
});
window.academyData.skills
  .filter((skill) => skill.missionIds.includes("mission-open-chord-foundations"))
  .forEach((skill) => {
    skill.lessonIds = missionOneLessonIds;
    skill.exerciseIds = missionOneExerciseIds;
  });

function roadmapId(prefix, title) {
  return `${prefix}-${title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function upsertAcademyItem(collection, item) {
  const existingIndex = window.academyData[collection].findIndex((existingItem) => existingItem.id === item.id);
  if (existingIndex >= 0) {
    window.academyData[collection][existingIndex] = {
      ...window.academyData[collection][existingIndex],
      ...item
    };
    return;
  }
  window.academyData[collection].push(item);
}

function upsertChordDiagram(chord) {
  const existingIndex = window.academyData.chordDiagrams.findIndex((existingChord) => existingChord.name === chord.name);
  if (existingIndex >= 0) {
    window.academyData.chordDiagrams[existingIndex] = {
      ...window.academyData.chordDiagrams[existingIndex],
      ...chord
    };
    return;
  }
  window.academyData.chordDiagrams.push(chord);
}
