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
      nextStep: "Read the module overview and begin Lesson 1.",
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
  prerequisiteMissionIds: []
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
