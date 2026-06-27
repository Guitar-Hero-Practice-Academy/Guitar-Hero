window.academyData = {
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
      subtitle: "Your first mission is to become confident with the essential open chords.",
      dashboardSubtitle: "Become fluent with open chords.",
      description: "Build clean chord changes, steady rhythm, and confidence with the most common beginner chords.",
      whyItMatters: "Open chords are the foundation of rhythm guitar. If you can change between them cleanly and keep steady timing, hundreds of songs become playable.",
      estimatedSessions: "7-10 practice sessions",
      nextStep: "Read the mission brief and begin Lesson 1.",
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
      whyThisLesson: "G, C, and D form one of the most useful open chord families. Getting comfortable with them unlocks a lot of rhythm guitar.",
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
      { title: "Expressive Playing", description: "Placeholder mission for bends, vibrato, slides, hammer-ons and pull-offs.", skillsDeveloped: ["Bends", "Vibrato", "Slides", "Hammer-ons", "Pull-offs"] },
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
    subtitle: missionDefinition.description || `Placeholder mission for ${missionDefinition.title}.`,
    dashboardSubtitle: missionDefinition.title,
    description: missionDefinition.description || `Placeholder mission for ${missionDefinition.title}.`,
    whyItMatters: missionDefinition.description || `Placeholder mission for ${missionDefinition.title}.`,
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
  { id: "lesson-open-chords-3", lessonNumber: 3, title: "G Major Mastery" },
  { id: "lesson-open-chords-4", lessonNumber: 4, title: "C Major Mastery" },
  { id: "lesson-open-chords-5", lessonNumber: 5, title: "D Major and Em Mastery" },
  { id: "lesson-open-chords-6", lessonNumber: 6, title: "Changing Chords Smoothly" },
  { id: "lesson-open-chords-7", lessonNumber: 7, title: "Rhythm and Timing" },
  { id: "lesson-open-chords-8", lessonNumber: 8, title: "Basic Strumming Patterns" },
  { id: "lesson-open-chords-9", lessonNumber: 9, title: "Playing Your First Songs" }
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
      title: "Mission Performance: Open Chord Foundations",
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
    missionContext: "Placeholder mission context.",
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
