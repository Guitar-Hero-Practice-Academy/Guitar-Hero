const storageKey = "guitar-room-songbook";
const academyUserId = "rob";
const initialRoute = {
  view: "home",
  ids: { missionId: null, lessonId: null, exerciseId: null, checkpointId: null }
};
if (location.hash) history.replaceState(null, "", `${location.pathname}${location.search}`);
registerServiceWorker();
const academyProgressService = createAcademyProgressService({
  supabase: createSupabaseClient(readSupabaseConfig()),
  userId: academyUserId,
  isOnline: () => state.isOnline
});
const state = {
  songs: loadSongs(),
  selectedId: null,
  selectedArtist: null,
  sidebarsCollapsed: localStorage.getItem("guitar-room-sidebars-collapsed") === "true",
  setupCollapsed: localStorage.getItem("guitar-room-setup-collapsed") === "true",
  editing: false,
  view: initialRoute.view,
  selectedMissionId: initialRoute.ids.missionId || getActiveMission() || null,
  selectedLessonId: initialRoute.ids.lessonId,
  selectedExerciseId: initialRoute.ids.exerciseId,
  selectedCheckpointId: initialRoute.ids.checkpointId,
  isOnline: navigator.onLine,
  academyProgressLoading: true,
  academyProgressSaving: 0,
  academyProgressError: "",
  progressTransferMessage: "",
  progressTransferError: false,
  exerciseNotesMessage: "",
  reflectionMessage: "",
  coachingSummaryMessage: "",
  timerExerciseId: null,
  timerRemainingSeconds: 0,
  timerRunning: false,
  timerInterval: null,
  timerComplete: false,
  exerciseNotesSaveTimer: null,
  metronomeExerciseId: null,
  metronomeBpm: null,
  metronomeRunning: false,
  metronomeInterval: null,
  metronomeAudioContext: null,
  metronomePulseOn: false,
  checkpointCriteria: new Map(),
  notesLessonFilter: null,
  chartSize: Number(localStorage.getItem("guitar-room-chart-size")) || 17
};

const els = {
  navHomeButton: document.getElementById("navHomeButton"),
  navDashboardButton: document.getElementById("navDashboardButton"),
  navNotesButton: document.getElementById("navNotesButton"),
  navChordLibraryButton: document.getElementById("navChordLibraryButton"),
  navSettingsButton: document.getElementById("navSettingsButton"),
  globalSyncStatus: document.getElementById("globalSyncStatus"),
  academyContinue: document.getElementById("academyContinue"),
  libraryOpen: document.getElementById("libraryOpen"),
  academyHomeButton: document.getElementById("academyHomeButton"),
  academyLibraryButton: document.getElementById("academyLibraryButton"),
  continueMissionButton: document.getElementById("continueMissionButton"),
  resumeLearningCard: document.getElementById("resumeLearningCard"),
  resumeLearningTitle: document.getElementById("resumeLearningTitle"),
  resumeLearningDescription: document.getElementById("resumeLearningDescription"),
  resumeLearningButton: document.getElementById("resumeLearningButton"),
  resetAcademyProgressButton: document.getElementById("resetAcademyProgressButton"),
  dashboardMissionTitle: document.getElementById("dashboardMissionTitle"),
  dashboardMissionDescription: document.getElementById("dashboardMissionDescription"),
  dashboardMissionProgress: document.getElementById("dashboardMissionProgress"),
  dashboardMissionProgressBar: document.getElementById("dashboardMissionProgressBar"),
  dashboardLessonsCompleted: document.getElementById("dashboardLessonsCompleted"),
  dashboardExercisesCompleted: document.getElementById("dashboardExercisesCompleted"),
  dashboardNextStep: document.getElementById("dashboardNextStep"),
  dashboardCurrentPhase: document.getElementById("dashboardCurrentPhase"),
  dashboardOverallProgress: document.getElementById("dashboardOverallProgress"),
  dashboardOverallProgressBar: document.getElementById("dashboardOverallProgressBar"),
  academyRoadmap: document.getElementById("academyRoadmap"),
  academyRoadmapBackButton: document.getElementById("academyRoadmapBackButton"),
  moduleLessonsTitle: document.getElementById("moduleLessonsTitle"),
  moduleLessonsSubtitle: document.getElementById("moduleLessonsSubtitle"),
  moduleLessonList: document.getElementById("moduleLessonList"),
  moduleOverviewButton: document.getElementById("moduleOverviewButton"),
  academySyncStatus: document.getElementById("academySyncStatus"),
  syncNowButton: document.getElementById("syncNowButton"),
  exportProgressButton: document.getElementById("exportProgressButton"),
  importProgressInput: document.getElementById("importProgressInput"),
  progressTransferStatus: document.getElementById("progressTransferStatus"),
  missionLibraryButton: document.getElementById("missionLibraryButton"),
  startLessonButton: document.getElementById("startLessonButton"),
  lessonLessonsButton: document.getElementById("lessonLessonsButton"),
  lessonMissionName: document.getElementById("lessonMissionName"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonMeta: document.getElementById("lessonMeta"),
  lessonWhyThisLesson: document.getElementById("lessonWhyThisLesson"),
  lessonObjectiveHeading: document.getElementById("lessonObjectiveHeading"),
  lessonObjective: document.getElementById("lessonObjective"),
  lessonExerciseProgress: document.getElementById("lessonExerciseProgress"),
  lessonExerciseProgressBar: document.getElementById("lessonExerciseProgressBar"),
  lessonExercises: document.getElementById("lessonExercises"),
  reflectionWork: document.getElementById("reflectionWork"),
  reflectionNotice: document.getElementById("reflectionNotice"),
  reflectionFocus: document.getElementById("reflectionFocus"),
  saveReflectionButton: document.getElementById("saveReflectionButton"),
  reflectionStatus: document.getElementById("reflectionStatus"),
  finishLessonButton: document.getElementById("finishLessonButton"),
  exerciseHomeButton: document.getElementById("exerciseHomeButton"),
  exerciseLessonName: document.getElementById("exerciseLessonName"),
  exerciseTitle: document.getElementById("exerciseTitle"),
  exerciseMeta: document.getElementById("exerciseMeta"),
  exerciseObjective: document.getElementById("exerciseObjective"),
  exerciseInstructions: document.getElementById("exerciseInstructions"),
  exercisePassCriteria: document.getElementById("exercisePassCriteria"),
  exerciseMistakesCard: document.getElementById("exerciseMistakesCard"),
  exerciseCommonMistakes: document.getElementById("exerciseCommonMistakes"),
  exerciseHeaderChords: document.getElementById("exerciseHeaderChords"),
  exerciseChordsCard: document.getElementById("exerciseChordsCard"),
  exerciseChordDiagrams: document.getElementById("exerciseChordDiagrams"),
  exerciseBackButton: document.getElementById("exerciseBackButton"),
  previousExerciseButton: document.getElementById("previousExerciseButton"),
  nextExerciseButton: document.getElementById("nextExerciseButton"),
  exerciseTimerDisplay: document.getElementById("exerciseTimerDisplay"),
  startTimerButton: document.getElementById("startTimerButton"),
  pauseTimerButton: document.getElementById("pauseTimerButton"),
  resetTimerButton: document.getElementById("resetTimerButton"),
  metronomeCard: document.getElementById("metronomeCard"),
  metronomeBpm: document.getElementById("metronomeBpm"),
  metronomePulse: document.getElementById("metronomePulse"),
  startMetronomeButton: document.getElementById("startMetronomeButton"),
  pauseMetronomeButton: document.getElementById("pauseMetronomeButton"),
  resetMetronomeButton: document.getElementById("resetMetronomeButton"),
  nailedItButton: document.getElementById("nailedItButton"),
  needsPracticeButton: document.getElementById("needsPracticeButton"),
  exercisePrimaryActionButton: document.getElementById("exercisePrimaryActionButton"),
  exerciseCompletionStatus: document.getElementById("exerciseCompletionStatus"),
  exerciseNotesInput: document.getElementById("exerciseNotesInput"),
  exerciseNotesStatus: document.getElementById("exerciseNotesStatus"),
  checkpointAssessmentCard: document.getElementById("checkpointAssessmentCard"),
  checkpointTitle: document.getElementById("checkpointTitle"),
  checkpointLessonTitle: document.getElementById("checkpointLessonTitle"),
  checkpointPurpose: document.getElementById("checkpointPurpose"),
  checkpointRequirements: document.getElementById("checkpointRequirements"),
  checkpointSuccessMessage: document.getElementById("checkpointSuccessMessage"),
  lessonSummaryCard: document.getElementById("lessonSummaryCard"),
  lessonSummaryStats: document.getElementById("lessonSummaryStats"),
  recommendedSongs: document.getElementById("recommendedSongs"),
  continueNextLessonButton: document.getElementById("continueNextLessonButton"),
  reviewExercisesButton: document.getElementById("reviewExercisesButton"),
  summaryNotesButton: document.getElementById("summaryNotesButton"),
  checkpointBackButton: document.getElementById("checkpointBackButton"),
  notesBackButton: document.getElementById("notesBackButton"),
  notesSubtitle: document.getElementById("notesSubtitle"),
  notesSearchInput: document.getElementById("notesSearchInput"),
  copyCoachingSummaryButton: document.getElementById("copyCoachingSummaryButton"),
  coachingSummaryStatus: document.getElementById("coachingSummaryStatus"),
  practiceNotesList: document.getElementById("practiceNotesList"),
  reviewBackButton: document.getElementById("reviewBackButton"),
  recommendedReviewList: document.getElementById("recommendedReviewList"),
  chordLibraryBackButton: document.getElementById("chordLibraryBackButton"),
  chordLibraryList: document.getElementById("chordLibraryList"),
  settingsBackButton: document.getElementById("settingsBackButton"),
  missionBriefTitle: document.getElementById("missionBriefTitle"),
  missionBriefSubtitle: document.getElementById("missionBriefSubtitle"),
  missionEstimatedCompletion: document.getElementById("missionEstimatedCompletion"),
  missionStatus: document.getElementById("missionStatus"),
  missionOverviewProgressBar: document.getElementById("missionOverviewProgressBar"),
  missionObjective: document.getElementById("missionObjective"),
  missionWhyItMatters: document.getElementById("missionWhyItMatters"),
  missionObjectives: document.getElementById("missionObjectives"),
  missionSkills: document.getElementById("missionSkills"),
  missionConnectedSongs: document.getElementById("missionConnectedSongs"),
  missionSuccessCriteria: document.getElementById("missionSuccessCriteria"),
  libraryHomeButton: document.getElementById("libraryHomeButton"),
  artistList: document.getElementById("artistList"),
  songList: document.getElementById("songList"),
  songSearch: document.getElementById("songSearch"),
  libraryArtist: document.getElementById("libraryArtist"),
  artistName: document.getElementById("artistName"),
  songTitle: document.getElementById("songTitle"),
  songMeta: document.getElementById("songMeta"),
  toneSettings: document.getElementById("toneSettings"),
  chordGrid: document.getElementById("chordGrid"),
  chartDisplay: document.getElementById("chartDisplay"),
  chartEditor: document.getElementById("chartEditor"),
  strumDisplay: document.getElementById("strumDisplay"),
  videoLink: document.getElementById("videoLink"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  setupToggle: document.getElementById("setupToggle"),
  editButton: document.getElementById("editButton"),
  saveButton: document.getElementById("saveButton"),
  cancelButton: document.getElementById("cancelButton"),
  newSongButton: document.getElementById("newSongButton"),
  exportButton: document.getElementById("exportButton"),
  importInput: document.getElementById("importInput"),
  fullscreenButton: document.getElementById("fullscreenButton"),
  fontDown: document.getElementById("fontDown"),
  fontUp: document.getElementById("fontUp")
};

state.selectedArtist = sortedArtists()[0] || null;
state.selectedId = sortedSongsForArtist(state.selectedArtist)[0]?.id || null;
ensureAcademySelection();
document.documentElement.style.setProperty("--chart-size", `${state.chartSize}px`);
document.body.classList.toggle("sidebars-collapsed", state.sidebarsCollapsed);
document.body.classList.toggle("setup-collapsed", state.setupCollapsed);
applyView();
render();
initializeAcademyProgress();

els.navHomeButton.addEventListener("click", () => setView("home"));
els.navDashboardButton.addEventListener("click", () => setView("academy"));
els.navNotesButton.addEventListener("click", () => {
  state.notesLessonFilter = null;
  setView("notes");
});
els.navChordLibraryButton.addEventListener("click", () => setView("chords"));
els.navSettingsButton.addEventListener("click", () => setView("settings"));
els.academyContinue.addEventListener("click", () => setView("academy"));
els.libraryOpen.addEventListener("click", () => setView("library"));
els.academyHomeButton?.addEventListener("click", () => setView("academy"));
els.academyLibraryButton?.addEventListener("click", () => setView("library"));
els.continueMissionButton.addEventListener("click", continueMission);
els.resumeLearningButton?.addEventListener("click", resumeLearning);
els.resetAcademyProgressButton.addEventListener("click", resetAcademyProgress);
els.exportProgressButton?.addEventListener("click", exportProgress);
els.importProgressInput?.addEventListener("change", importProgress);
els.academyRoadmap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mission-id]");
  if (!button || button.disabled) return;
  state.selectedMissionId = button.dataset.missionId;
  setActiveMission(state.selectedMissionId).then(() => render());
  setView("mission", state.selectedMissionId);
});
els.academyRoadmapBackButton.addEventListener("click", () => setView("academy"));
els.moduleOverviewButton.addEventListener("click", () => setView("mission", currentMission()?.id));
els.moduleLessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-id]");
  if (!button) return;
  setView("lesson", button.dataset.lessonId);
});
els.syncNowButton.addEventListener("click", syncPendingProgress);
els.missionLibraryButton?.addEventListener("click", () => setView("library"));
els.startLessonButton.addEventListener("click", () => setView("module-lessons", currentMission()?.id));
els.lessonLessonsButton.addEventListener("click", () => setView("module-lessons", currentMissionForLesson()?.id));
els.lessonExercises.addEventListener("click", (event) => {
  const button = event.target.closest("[data-exercise-id]");
  if (!button) return;
  state.selectedExerciseId = button.dataset.exerciseId;
  setView("exercise");
});
els.saveReflectionButton.addEventListener("click", saveCurrentLessonReflection);
els.exerciseHomeButton.addEventListener("click", () => setView("academy"));
els.exerciseBackButton.addEventListener("click", () => setView("lesson", currentLesson()?.id));
els.previousExerciseButton.addEventListener("click", goToPreviousExercise);
els.nextExerciseButton.addEventListener("click", goToNextExercise);
els.startTimerButton.addEventListener("click", startExerciseTimer);
els.pauseTimerButton.addEventListener("click", pauseExerciseTimer);
els.resetTimerButton.addEventListener("click", resetExerciseTimer);
els.startMetronomeButton.addEventListener("click", startMetronome);
els.pauseMetronomeButton.addEventListener("click", pauseMetronome);
els.resetMetronomeButton.addEventListener("click", resetMetronome);
els.nailedItButton.addEventListener("click", markCurrentExerciseNailed);
els.needsPracticeButton.addEventListener("click", markCurrentExerciseNeedsPractice);
els.exercisePrimaryActionButton.addEventListener("click", goToNextExercise);
els.exerciseNotesInput.addEventListener("input", queueExerciseNotesAutosave);
els.exerciseNotesInput.addEventListener("blur", saveCurrentExerciseNotes);
document.querySelector(".assessment-options").addEventListener("click", async (event) => {
  const button = event.target.closest("[data-assessment]");
  if (!button) return;
  const checkpoint = currentCheckpoint();
  if (!checkpoint) return;
  await saveCheckpointResult(checkpoint.id, button.dataset.assessment);
  if (button.dataset.assessment === "passed") await markLessonComplete(currentLesson()?.id);
  render();
});
els.checkpointBackButton.addEventListener("click", () => setView("lesson", currentLesson()?.id));
els.checkpointRequirements.addEventListener("change", (event) => {
  const input = event.target.closest("[data-checkpoint-criterion]");
  if (!input) return;
  toggleCheckpointCriterion(currentCheckpoint()?.id, input.dataset.checkpointCriterion, input.checked);
});
els.notesBackButton.addEventListener("click", () => {
  state.notesLessonFilter = null;
  setView("academy");
});
els.chordLibraryBackButton.addEventListener("click", () => setView("academy"));
els.settingsBackButton.addEventListener("click", () => setView("academy"));
els.libraryHomeButton.addEventListener("click", () => setView("home"));
els.notesSearchInput.addEventListener("input", renderPracticeNotesPage);
els.copyCoachingSummaryButton.addEventListener("click", copyCoachingSummary);
els.continueNextLessonButton.addEventListener("click", continueToNextLesson);
els.reviewExercisesButton.addEventListener("click", () => setView("review"));
els.reviewBackButton.addEventListener("click", () => setView("academy"));
els.recommendedReviewList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-review-exercise-id]");
  if (!button) return;
  setView("exercise", button.dataset.reviewExerciseId);
});
els.summaryNotesButton.addEventListener("click", () => {
  state.notesLessonFilter = currentLesson()?.id || null;
  setView("notes");
});
els.recommendedSongs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-song-id]");
  if (!button) return;
  state.selectedId = button.dataset.songId;
  setView("library");
});
window.addEventListener("hashchange", () => {
  const route = parseRoute();
  syncStateFromRoute(route);
  ensureAcademySelection();
  persistRouteProgress(route);
  applyView();
  render();
});
window.addEventListener("online", handleOnline);
window.addEventListener("offline", handleOffline);
els.songSearch.addEventListener("input", renderSongList);
els.sidebarToggle.addEventListener("click", toggleSidebars);
els.setupToggle.addEventListener("click", toggleSetup);
els.editButton?.addEventListener("click", startEditing);
els.cancelButton?.addEventListener("click", stopEditing);
els.saveButton?.addEventListener("click", saveChart);
els.newSongButton?.addEventListener("click", addSong);
els.exportButton?.addEventListener("click", exportSongs);
els.importInput?.addEventListener("change", importSongs);
els.fullscreenButton.addEventListener("click", toggleFullscreen);
els.fontDown.addEventListener("click", () => changeChartSize(-1));
els.fontUp.addEventListener("click", () => changeChartSize(1));

function setView(view, id = null) {
  if (state.view === "exercise" && view !== "exercise") {
    saveCurrentExerciseNotes({ silent: true });
  }
  if (view !== "exercise") {
    pauseExerciseTimer();
    pauseMetronome();
  }
  state.view = view;
  updateSelectionForView(view, id);
  ensureAcademySelection();
  persistRouteProgress({ view, ids: { missionId: ["module-lessons", "mission"].includes(view) ? selectedIdForView(view) : null, lessonId: view === "lesson" ? selectedIdForView("lesson") : null, exerciseId: view === "exercise" ? selectedIdForView("exercise") : null, checkpointId: view === "checkpoint" ? selectedIdForView("checkpoint") : null } });
  location.hash = routeHashForView(view, id);
  applyView();
  render();
}

function applyView() {
  document.body.classList.toggle("view-home", state.view === "home");
  document.body.classList.toggle("view-academy", state.view === "academy");
  document.body.classList.toggle("view-academy-roadmap", state.view === "academy-roadmap");
  document.body.classList.toggle("view-module-lessons", state.view === "module-lessons");
  document.body.classList.toggle("view-mission", state.view === "mission");
  document.body.classList.toggle("view-lesson", state.view === "lesson");
  document.body.classList.toggle("view-exercise", state.view === "exercise");
  document.body.classList.toggle("view-checkpoint", state.view === "checkpoint");
  document.body.classList.toggle("view-notes", state.view === "notes");
  document.body.classList.toggle("view-review", state.view === "review");
  document.body.classList.toggle("view-chords", state.view === "chords");
  document.body.classList.toggle("view-settings", state.view === "settings");
  document.body.classList.toggle("view-library", state.view === "library");
  document.querySelectorAll(".top-nav-actions button").forEach((button) => button.classList.remove("active"));
  const activeButton = {
    academy: els.navDashboardButton,
    "academy-roadmap": els.navDashboardButton,
    "module-lessons": els.navDashboardButton,
    mission: els.navDashboardButton,
    lesson: els.navDashboardButton,
    exercise: els.navDashboardButton,
    checkpoint: els.navDashboardButton,
    review: els.navDashboardButton,
    notes: els.navNotesButton,
    chords: els.navChordLibraryButton,
    settings: els.navSettingsButton
  }[state.view];
  activeButton?.classList.add("active");
}

function loadSongs() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (Array.isArray(saved) && saved.length) {
      const savedById = new Map(saved.map((song) => [song.id, song]));
      const songsById = new Map();
      (window.initialSongs || []).forEach((bundledSong) => {
        const savedSong = savedById.get(bundledSong.id);
        const bundledRevision = Number(bundledSong.contentRevision || 0);
        const savedRevision = Number(savedSong?.contentRevision || 0);
        const song = savedSong && savedRevision >= bundledRevision
          ? { ...structuredClone(bundledSong), ...savedSong }
          : structuredClone(bundledSong);
        songsById.set(song.id, song);
        savedById.delete(song.id);
      });
      savedById.forEach((song) => songsById.set(song.id, song));
      const cleanedSongs = removePlaceholderSongs(Array.from(songsById.values()));
      if (cleanedSongs.length !== songsById.size) {
        localStorage.setItem(storageKey, JSON.stringify(cleanedSongs, null, 2));
      }
      return cleanedSongs;
    }
  } catch {
    localStorage.removeItem(storageKey);
  }
  return removePlaceholderSongs(structuredClone(window.initialSongs || []));
}

function persistSongs() {
  localStorage.setItem(storageKey, JSON.stringify(state.songs, null, 2));
}

function removePlaceholderSongs(songs) {
  return songs.filter((song) => !(song?.artist === "Artist" && song?.title === "New Song"));
}

function readSupabaseConfig() {
  const env = window.__GUITAR_HERO_ENV__ || {};
  return {
    url: env.VITE_SUPABASE_URL || "",
    anonKey: env.VITE_SUPABASE_ANON_KEY || ""
  };
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.warn("Offline cache setup failed.", error);
    });
  });
}

function createSupabaseClient({ url, anonKey }) {
  const configured = Boolean(url && anonKey);
  const baseUrl = String(url || "").replace(/\/+$/, "");

  return {
    configured,
    setupMessage: "Supabase progress sync is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env, then rebuild the single-file app.",
    async request(path, options = {}) {
      if (!configured) throw new Error(this.setupMessage);
      const response = await fetch(`${baseUrl}/rest/v1/${path}`, {
        method: options.method || "GET",
        headers: {
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
          "Content-Type": "application/json",
          ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : undefined
      });
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `Supabase request failed: ${response.status}`);
      }
      if (response.status === 204) return null;
      const text = await response.text();
      return text ? JSON.parse(text) : null;
    }
  };
}

function createAcademyProgressService({ supabase, userId, isOnline }) {
  const resumeLocationKey = "__resume_learning";
  const journalDataKey = "__journal_data";
  const reviewExerciseIdsKey = "__review_exercise_ids";
  const exerciseNotesKey = "__exercise_notes";
  const lessonReflectionsKey = "__lesson_reflections";
  const completedLessonIdsKey = "__completed_lesson_ids";
  const progress = emptyProgress();
  let pendingChanges = false;

  function snapshot() {
    return {
      activeMissionId: progress.activeMissionId,
      completedExerciseIds: new Set(progress.completedExerciseIds),
      checkpointResults: new Map(progress.checkpointResults),
      journalData: new Map(progress.journalData),
      reviewExerciseIds: new Set(progress.reviewExerciseIds),
      exerciseNotes: new Map(progress.exerciseNotes),
      lessonReflections: new Map(progress.lessonReflections),
      completedLessonIds: new Set(progress.completedLessonIds),
      currentLocation: progress.currentLocation ? { ...progress.currentLocation } : null,
      updatedAt: progress.updatedAt
    };
  }

  function applyRow(row) {
    const checkpointResults = row?.checkpoint_results || {};
    progress.activeMissionId = row?.active_mission_id || null;
    progress.completedExerciseIds = new Set(Array.isArray(row?.completed_exercise_ids) ? row.completed_exercise_ids : []);
    progress.currentLocation = checkpointResults[resumeLocationKey] || null;
    progress.journalData = new Map(Object.entries(checkpointResults[journalDataKey] || {}));
    progress.reviewExerciseIds = new Set(Array.isArray(checkpointResults[reviewExerciseIdsKey]) ? checkpointResults[reviewExerciseIdsKey] : []);
    progress.exerciseNotes = new Map(Object.entries(checkpointResults[exerciseNotesKey] || {}));
    progress.lessonReflections = new Map(Object.entries(checkpointResults[lessonReflectionsKey] || {}));
    progress.completedLessonIds = new Set(Array.isArray(checkpointResults[completedLessonIdsKey]) ? checkpointResults[completedLessonIdsKey] : []);
    const internalKeys = [resumeLocationKey, journalDataKey, reviewExerciseIdsKey, exerciseNotesKey, lessonReflectionsKey, completedLessonIdsKey];
    const entries = Object.entries(checkpointResults).filter(([key]) => !internalKeys.includes(key));
    progress.checkpointResults = new Map(entries);
    progress.updatedAt = row?.updated_at || null;
  }

  function checkpointResultsPayload() {
    const payload = Object.fromEntries(progress.checkpointResults);
    if (progress.currentLocation) payload[resumeLocationKey] = progress.currentLocation;
    if (progress.journalData.size) payload[journalDataKey] = Object.fromEntries(progress.journalData);
    if (progress.reviewExerciseIds.size) payload[reviewExerciseIdsKey] = Array.from(progress.reviewExerciseIds);
    if (progress.exerciseNotes.size) payload[exerciseNotesKey] = Object.fromEntries(progress.exerciseNotes);
    if (progress.lessonReflections.size) payload[lessonReflectionsKey] = Object.fromEntries(progress.lessonReflections);
    if (progress.completedLessonIds.size) payload[completedLessonIdsKey] = Array.from(progress.completedLessonIds);
    return payload;
  }

  function applyImportedProgress(importedProgress) {
    progress.activeMissionId = importedProgress.activeMissionId || null;
    progress.completedExerciseIds = new Set(importedProgress.completedExerciseIds || []);
    progress.checkpointResults = new Map(Object.entries(importedProgress.checkpointResults || {}));
    progress.journalData = new Map(Object.entries(importedProgress.journalData || {}));
    progress.reviewExerciseIds = new Set(importedProgress.reviewExerciseIds || []);
    progress.exerciseNotes = new Map(Object.entries(importedProgress.exerciseNotes || {}));
    progress.lessonReflections = new Map(Object.entries(importedProgress.lessonReflections || {}));
    progress.completedLessonIds = new Set(importedProgress.completedLessonIds || []);
    progress.currentLocation = importedProgress.currentLocation ? { ...importedProgress.currentLocation } : null;
    progress.updatedAt = new Date().toISOString();
  }

  async function load() {
    if (!supabase.configured) {
      return { configured: false, progress: snapshot(), error: supabase.setupMessage };
    }
    if (!isOnline()) {
      return { configured: true, progress: snapshot(), error: "" };
    }
    const rows = await supabase.request(`academy_progress?user_id=eq.${encodeURIComponent(userId)}&select=*&limit=1`);
    const row = Array.isArray(rows) ? rows[0] : null;
    if (row) applyRow(row);
    if (!row) await save();
    pendingChanges = false;
    return { configured: true, progress: snapshot(), error: "" };
  }

  async function save() {
    if (!supabase.configured) throw new Error(supabase.setupMessage);
    const rows = await supabase.request("academy_progress?on_conflict=user_id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: {
        user_id: userId,
        active_mission_id: progress.activeMissionId,
        completed_exercise_ids: Array.from(progress.completedExerciseIds),
        checkpoint_results: checkpointResultsPayload(),
        updated_at: new Date().toISOString()
      }
    });
    const row = Array.isArray(rows) ? rows[0] : rows;
    if (row) applyRow(row);
    pendingChanges = false;
  }

  async function persistOrQueue() {
    if (!supabase.configured) throw new Error(supabase.setupMessage);
    if (!isOnline()) {
      pendingChanges = true;
      return snapshot();
    }
    try {
      await save();
      return snapshot();
    } catch (error) {
      pendingChanges = true;
      throw error;
    }
  }

  return {
    configured: supabase.configured,
    setupMessage: supabase.setupMessage,
    async load() {
      return load();
    },
    getProgress() {
      return snapshot();
    },
    hasPendingChanges() {
      return pendingChanges;
    },
    getActiveMission() {
      return progress.activeMissionId;
    },
    async setActiveMission(missionId) {
      progress.activeMissionId = missionId || null;
      return persistOrQueue();
    },
    async saveCurrentLocation(location) {
      progress.activeMissionId = location?.missionId || progress.activeMissionId;
      progress.currentLocation = location ? { ...location } : null;
      return persistOrQueue();
    },
    async markExerciseComplete(exerciseId) {
      progress.completedExerciseIds.add(exerciseId);
      progress.reviewExerciseIds.delete(exerciseId);
      return persistOrQueue();
    },
    async unmarkExerciseComplete(exerciseId) {
      progress.completedExerciseIds.delete(exerciseId);
      return persistOrQueue();
    },
    getCompletedExercises() {
      return new Set(progress.completedExerciseIds);
    },
    async markExerciseForReview(exerciseId) {
      progress.completedExerciseIds.delete(exerciseId);
      progress.reviewExerciseIds.add(exerciseId);
      return persistOrQueue();
    },
    async clearExerciseReview(exerciseId) {
      progress.reviewExerciseIds.delete(exerciseId);
      return persistOrQueue();
    },
    getReviewExercises() {
      return new Set(progress.reviewExerciseIds);
    },
    async saveExerciseNote(exerciseId, note) {
      const trimmed = String(note || "").trim();
      if (trimmed) progress.exerciseNotes.set(exerciseId, trimmed);
      else progress.exerciseNotes.delete(exerciseId);
      return persistOrQueue();
    },
    async saveLessonReflection(lessonId, reflection) {
      progress.lessonReflections.set(lessonId, reflection || {});
      return persistOrQueue();
    },
    async markLessonComplete(lessonId) {
      if (!lessonId) return snapshot();
      progress.completedLessonIds.add(lessonId);
      return persistOrQueue();
    },
    async saveCheckpointResult(checkpointId, result) {
      progress.checkpointResults.set(checkpointId, result);
      return persistOrQueue();
    },
    getCheckpointResult(checkpointId) {
      return progress.checkpointResults.get(checkpointId) || null;
    },
    async resetProgress() {
      progress.activeMissionId = null;
      progress.completedExerciseIds.clear();
      progress.checkpointResults.clear();
      progress.journalData.clear();
      progress.reviewExerciseIds.clear();
      progress.exerciseNotes.clear();
      progress.lessonReflections.clear();
      progress.completedLessonIds.clear();
      progress.currentLocation = null;
      return persistOrQueue();
    },
    async importProgress(importedProgress) {
      applyImportedProgress(importedProgress);
      return persistOrQueue();
    },
    async syncPendingChanges() {
      if (!pendingChanges) return snapshot();
      await save();
      return snapshot();
    }
  };
}

function emptyProgress() {
  return {
    activeMissionId: null,
    completedExerciseIds: new Set(),
    checkpointResults: new Map(),
    journalData: new Map(),
    reviewExerciseIds: new Set(),
    exerciseNotes: new Map(),
    lessonReflections: new Map(),
    completedLessonIds: new Set(),
    currentLocation: null,
    updatedAt: null
  };
}

async function initializeAcademyProgress() {
  state.academyProgressLoading = true;
  state.academyProgressError = "";
  render();
  try {
    const result = await academyProgressService.load();
    state.academyProgressError = result.error || "";
    if (result.progress.activeMissionId) {
      state.selectedMissionId = result.progress.activeMissionId;
      state.selectedLessonId = null;
      state.selectedExerciseId = null;
      state.selectedCheckpointId = null;
    }
    if (result.progress.currentLocation && Object.values(initialRoute.ids).some(Boolean)) {
      state.selectedMissionId = result.progress.currentLocation.missionId || state.selectedMissionId;
      state.selectedLessonId = result.progress.currentLocation.lessonId || null;
      state.selectedExerciseId = result.progress.currentLocation.exerciseId || null;
      state.selectedCheckpointId = null;
    }
    if (!result.progress.activeMissionId) await setActiveMission(state.selectedMissionId);
  } catch (error) {
    state.academyProgressError = progressErrorMessage(error);
  } finally {
    state.academyProgressLoading = false;
    ensureAcademySelection();
    render();
  }
}

function progressErrorMessage(error) {
  return error instanceof Error ? error.message : String(error || "Progress sync failed.");
}

function setProgressError(error) {
  state.academyProgressError = progressErrorMessage(error);
  state.academyProgressLoading = false;
}

async function runProgressSave(operation) {
  state.academyProgressSaving += 1;
  render();
  try {
    const result = await operation();
    state.academyProgressError = "";
    return result;
  } catch (error) {
    setProgressError(error);
    return null;
  } finally {
    state.academyProgressSaving = Math.max(0, state.academyProgressSaving - 1);
    render();
  }
}

function getProgress() {
  return academyProgressService.getProgress();
}

function hasPendingProgressChanges() {
  return academyProgressService.hasPendingChanges();
}

async function markExerciseComplete(exerciseId) {
  return runProgressSave(() => academyProgressService.markExerciseComplete(exerciseId));
}

async function unmarkExerciseComplete(exerciseId) {
  return runProgressSave(() => academyProgressService.unmarkExerciseComplete(exerciseId));
}

function getCompletedExercises() {
  return academyProgressService.getCompletedExercises();
}

async function markExerciseForReview(exerciseId) {
  return runProgressSave(() => academyProgressService.markExerciseForReview(exerciseId));
}

function getReviewExercises() {
  return academyProgressService.getReviewExercises();
}

async function saveExerciseNote(exerciseId, note) {
  return runProgressSave(() => academyProgressService.saveExerciseNote(exerciseId, note));
}

async function saveLessonReflection(lessonId, reflection) {
  return runProgressSave(() => academyProgressService.saveLessonReflection(lessonId, reflection));
}

async function markLessonComplete(lessonId) {
  return runProgressSave(() => academyProgressService.markLessonComplete(lessonId));
}

async function saveCheckpointResult(checkpointId, result) {
  return runProgressSave(() => academyProgressService.saveCheckpointResult(checkpointId, result));
}

function getCheckpointResult(checkpointId) {
  return academyProgressService.getCheckpointResult(checkpointId);
}

function getActiveMission() {
  return academyProgressService.getActiveMission();
}

async function setActiveMission(missionId) {
  if (!academyProgressService.configured) return;
  return runProgressSave(() => academyProgressService.setActiveMission(missionId));
}

async function importProgressSnapshot(progressSnapshot) {
  if (!academyProgressService.configured) return null;
  return runProgressSave(() => academyProgressService.importProgress(progressSnapshot));
}

async function syncPendingProgress() {
  if (!academyProgressService.configured || !state.isOnline || !hasPendingProgressChanges()) return;
  await runProgressSave(() => academyProgressService.syncPendingChanges());
}

function handleOnline() {
  state.isOnline = true;
  render();
  syncPendingProgress();
}

function handleOffline() {
  state.isOnline = false;
  render();
}

function saveActiveMissionSelection() {
  setActiveMission(state.selectedMissionId).then(() => render());
}

async function saveCurrentLearningLocation() {
  const location = currentLearningLocation();
  if (!location) return null;
  return runProgressSave(() => academyProgressService.saveCurrentLocation(location));
}

function persistRouteProgress(route) {
  if (route.view === "exercise" || route.ids?.exerciseId) {
    saveCurrentLearningLocation().then(() => render());
    return;
  }
  if (Object.values(route.ids || {}).some(Boolean)) saveActiveMissionSelection();
}

async function resetAcademyProgress() {
  await runProgressSave(() => academyProgressService.resetProgress());
  state.selectedMissionId = null;
  state.selectedLessonId = null;
  state.selectedExerciseId = null;
  state.selectedCheckpointId = null;
  showProgressTransferMessage("Progress reset.", false);
  ensureAcademySelection();
  state.view = "academy";
  location.hash = "academy";
  applyView();
  render();
}

function exportProgress() {
  try {
    const progress = serializeProgressForExport();
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `guitar-progress-${todayIsoDate()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showProgressTransferMessage("Progress exported.", false);
  } catch (error) {
    showProgressTransferMessage(progressErrorMessage(error), true);
  }
}

async function importProgress(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    const progressSnapshot = validateImportedProgress(imported);
    const result = await importProgressSnapshot(progressSnapshot);
    if (!result) throw new Error(state.academyProgressError || "Progress import failed.");
    state.selectedMissionId = progressSnapshot.currentLocation?.missionId || progressSnapshot.activeMissionId || state.selectedMissionId;
    state.selectedLessonId = progressSnapshot.currentLocation?.lessonId || null;
    state.selectedExerciseId = progressSnapshot.currentLocation?.exerciseId || null;
    state.selectedCheckpointId = progressSnapshot.currentLocation?.checkpointId || null;
    ensureAcademySelection();
    showProgressTransferMessage(state.isOnline ? "Progress imported and synced." : "Progress imported. Sync will finish when online.", false);
  } catch (error) {
    showProgressTransferMessage(progressErrorMessage(error), true);
  } finally {
    event.target.value = "";
    render();
  }
}

function serializeProgressForExport() {
  const progress = getProgress();
  return {
    app: "Guitar Hero",
    type: "practice-academy-progress",
    version: 1,
    exportedAt: new Date().toISOString(),
    userId: academyUserId,
    activeMissionId: progress.activeMissionId,
    currentLocation: progress.currentLocation,
    currentMissionId: progress.currentLocation?.missionId || progress.activeMissionId || null,
    currentLessonId: progress.currentLocation?.lessonId || null,
    currentExerciseId: progress.currentLocation?.exerciseId || null,
    completedExerciseIds: Array.from(progress.completedExerciseIds),
    reviewExerciseIds: Array.from(progress.reviewExerciseIds || []),
    exerciseNotes: Object.fromEntries(progress.exerciseNotes || new Map()),
    lessonReflections: Object.fromEntries(progress.lessonReflections || new Map()),
    completedLessonIds: Array.from(progress.completedLessonIds || []),
    checkpointResults: Object.fromEntries(progress.checkpointResults),
    journalData: Object.fromEntries(progress.journalData || new Map())
  };
}

function validateImportedProgress(imported) {
  if (!imported || typeof imported !== "object") throw new Error("Progress file is not valid JSON.");
  const activeMissionId = nullableString(imported.activeMissionId ?? imported.currentMissionId, "activeMissionId");
  const currentLocation = validateCurrentLocation(imported.currentLocation, imported);
  const completedExerciseIds = validateStringArray(imported.completedExerciseIds, "completedExerciseIds");
  const reviewExerciseIds = validateStringArray(imported.reviewExerciseIds || [], "reviewExerciseIds");
  const exerciseNotes = validatePlainObject(imported.exerciseNotes || {}, "exerciseNotes");
  const lessonReflections = validatePlainObject(imported.lessonReflections || {}, "lessonReflections");
  const completedLessonIds = validateStringArray(imported.completedLessonIds || [], "completedLessonIds");
  const checkpointResults = validatePlainObject(imported.checkpointResults || {}, "checkpointResults");
  const journalData = validatePlainObject(imported.journalData || {}, "journalData");
  return {
    activeMissionId: currentLocation?.missionId || activeMissionId,
    currentLocation,
    completedExerciseIds,
    reviewExerciseIds,
    exerciseNotes,
    lessonReflections,
    completedLessonIds,
    checkpointResults,
    journalData
  };
}

function validateCurrentLocation(location, imported) {
  const source = location && typeof location === "object"
    ? location
    : {
        missionId: imported.currentMissionId || imported.activeMissionId || null,
        lessonId: imported.currentLessonId || null,
        exerciseId: imported.currentExerciseId || null,
        phaseId: imported.currentPhaseId || null
      };
  const missionId = nullableString(source.missionId, "currentLocation.missionId");
  const lessonId = nullableString(source.lessonId, "currentLocation.lessonId");
  const exerciseId = nullableString(source.exerciseId, "currentLocation.exerciseId");
  const checkpointId = nullableString(source.checkpointId, "currentLocation.checkpointId");
  const phaseId = nullableString(source.phaseId, "currentLocation.phaseId");
  if (!missionId && !lessonId && !exerciseId && !checkpointId && !phaseId) return null;
  return { phaseId, missionId, lessonId, exerciseId, checkpointId };
}

function validateStringArray(value, fieldName) {
  if (!Array.isArray(value)) throw new Error(`${fieldName} must be an array.`);
  value.forEach((item) => {
    if (typeof item !== "string") throw new Error(`${fieldName} must contain only strings.`);
  });
  return value;
}

function validatePlainObject(value, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`${fieldName} must be an object.`);
  return value;
}

function nullableString(value, fieldName) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value !== "string") throw new Error(`${fieldName} must be a string.`);
  return value;
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function showProgressTransferMessage(message, isError) {
  state.progressTransferMessage = message;
  state.progressTransferError = isError;
  renderProgressTransferStatus();
}

function currentSong() {
  return state.songs.find((song) => song.id === state.selectedId) || state.songs[0];
}

function render() {
  renderSidebarToggle();
  renderSetupToggle();
  renderAcademySyncStatus();
  renderProgressTransferStatus();
  renderResumeLearning();
  renderAcademyDashboard();
  renderModuleLessons();
  renderMissionBrief();
  renderLesson();
  renderExerciseDetail();
  renderCheckpoint();
  renderRecommendedReviewPage();
  renderPracticeNotesPage();
  renderChordLibraryPage();
  renderArtistList();
  renderSongList();
  renderSong();
}

function continueMission() {
  setView("module-lessons", activeMission()?.id);
}

function resumeLearning() {
  const target = resumeExerciseTarget();
  if (!target) return;
  setView("exercise", target.id);
}

function renderResumeLearning() {
  if (!els.resumeLearningCard) return;
  const target = resumeExerciseTarget();
  els.resumeLearningCard.classList.remove("hidden");
  if (!target) {
    els.resumeLearningTitle.textContent = "No saved exercise yet";
    els.resumeLearningDescription.textContent = "Start the current module when you are ready.";
    els.resumeLearningButton.disabled = true;
    return;
  }
  const lesson = academyLessonsById().get(target.lessonId);
  const mission = academyById("missions").get(lesson?.missionId) || activeMission();
  els.resumeLearningTitle.textContent = target.title;
  els.resumeLearningDescription.textContent = `${moduleLabel(mission)} · ${lesson?.title || "Current lesson"}`;
  els.resumeLearningButton.disabled = false;
}

function renderAcademySyncStatus() {
  if (!els.academySyncStatus) return;
  const configured = academyProgressService.configured;
  const saving = state.academyProgressSaving > 0;
  const pending = hasPendingProgressChanges();
  const progressUnavailable = !configured || state.academyProgressLoading || saving;
  els.resetAcademyProgressButton.disabled = !configured || state.academyProgressLoading || saving;
  if (els.exportProgressButton) els.exportProgressButton.disabled = state.academyProgressLoading || saving;
  if (els.importProgressInput) els.importProgressInput.disabled = !configured || state.academyProgressLoading || saving;
  els.nailedItButton.disabled = !configured || state.academyProgressLoading || saving;
  els.needsPracticeButton.disabled = !configured || state.academyProgressLoading || saving;
  els.syncNowButton.classList.toggle("hidden", !pending);
  els.syncNowButton.disabled = !state.isOnline || progressUnavailable;
  document.querySelectorAll("[data-assessment]").forEach((button) => {
    button.disabled = !configured || state.academyProgressLoading || saving;
  });
  els.academySyncStatus.classList.toggle("error", !configured || Boolean(state.academyProgressError));
  els.academySyncStatus.classList.toggle("ready", configured && state.isOnline && !pending && !state.academyProgressLoading && !saving && !state.academyProgressError);
  els.globalSyncStatus.classList.toggle("error", !configured || Boolean(state.academyProgressError));
  els.globalSyncStatus.classList.toggle("ready", configured && state.isOnline && !pending && !state.academyProgressLoading && !saving && !state.academyProgressError);
  if (state.academyProgressLoading) {
    els.academySyncStatus.textContent = configured ? "Saving..." : "Error syncing";
    els.globalSyncStatus.textContent = configured ? "Saving..." : "Sync error";
    return;
  }
  if (saving) {
    els.academySyncStatus.textContent = "Saving...";
    els.globalSyncStatus.textContent = "Saving...";
    return;
  }
  if (!state.isOnline) {
    els.academySyncStatus.textContent = pending ? "Offline · Unsynced changes" : "Offline";
    els.globalSyncStatus.textContent = pending ? "Unsynced" : "Offline";
    return;
  }
  if (pending) {
    els.academySyncStatus.textContent = "Unsynced changes";
    els.globalSyncStatus.textContent = "Unsynced";
    return;
  }
  if (state.academyProgressError) {
    els.academySyncStatus.textContent = "Sync error";
    els.academySyncStatus.title = state.academyProgressError;
    els.globalSyncStatus.textContent = "Sync error";
    els.globalSyncStatus.title = state.academyProgressError;
    return;
  }
  els.academySyncStatus.title = "";
  els.globalSyncStatus.title = "";
  if (!configured) {
    els.academySyncStatus.textContent = "Sync error";
    els.academySyncStatus.title = academyProgressService.setupMessage;
    els.globalSyncStatus.textContent = "Sync error";
    els.globalSyncStatus.title = academyProgressService.setupMessage;
    return;
  }
  const progress = getProgress();
  els.academySyncStatus.textContent = progress.updatedAt
    ? `Online / Synced · Last synced ${formatLastSynced(progress.updatedAt)}`
    : "Online / Synced";
  els.globalSyncStatus.textContent = "Synced";
}

function formatLastSynced(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recently";
  return date.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

function renderProgressTransferStatus() {
  if (!els.progressTransferStatus) return;
  els.progressTransferStatus.textContent = state.progressTransferMessage;
  els.progressTransferStatus.classList.toggle("complete", Boolean(state.progressTransferMessage) && !state.progressTransferError);
  els.progressTransferStatus.classList.toggle("error", state.progressTransferError);
}

function parseRoute() {
  const [view = "home", id = null] = location.hash.replace(/^#/, "").split("/");
  const validViews = ["academy", "academy-roadmap", "module-lessons", "mission", "lesson", "exercise", "checkpoint", "review", "library", "notes", "chords", "settings"];
  const routeView = validViews.includes(view) ? view : "home";
  return {
    view: routeView,
    ids: {
      missionId: ["module-lessons", "mission"].includes(routeView) ? id : null,
      lessonId: routeView === "lesson" ? id : null,
      exerciseId: routeView === "exercise" ? id : null,
      checkpointId: routeView === "checkpoint" ? id : null
    }
  };
}

function syncStateFromRoute(route) {
  state.view = route.view;
  if (route.ids.missionId) {
    state.selectedMissionId = route.ids.missionId;
    state.selectedLessonId = null;
    state.selectedExerciseId = null;
    state.selectedCheckpointId = null;
  }
  if (route.ids.lessonId) {
    state.selectedLessonId = route.ids.lessonId;
    state.selectedExerciseId = null;
    state.selectedCheckpointId = null;
  }
  if (route.ids.exerciseId) state.selectedExerciseId = route.ids.exerciseId;
  if (route.ids.checkpointId) state.selectedCheckpointId = route.ids.checkpointId;
}

function updateSelectionForView(view, id) {
  if (["module-lessons", "mission"].includes(view)) {
    state.selectedMissionId = id || state.selectedMissionId;
    state.selectedLessonId = null;
    state.selectedExerciseId = null;
    state.selectedCheckpointId = null;
  }
  if (view === "lesson") {
    state.selectedLessonId = id || state.selectedLessonId;
    state.selectedExerciseId = null;
    state.selectedCheckpointId = null;
  }
  if (view === "exercise") state.selectedExerciseId = id || state.selectedExerciseId;
  if (view === "checkpoint") state.selectedCheckpointId = id || state.selectedCheckpointId;
}

function routeHashForView(view, id) {
  if (view === "home") return "";
  const selectedId = id || selectedIdForView(view);
  return selectedId && ["module-lessons", "mission", "lesson", "exercise", "checkpoint"].includes(view)
    ? `${view}/${selectedId}`
    : view;
}

function selectedIdForView(view) {
  if (view === "module-lessons") return currentMission()?.id;
  if (view === "mission") return currentMission()?.id;
  if (view === "lesson") return currentLesson()?.id;
  if (view === "exercise") return currentExercise()?.id;
  if (view === "checkpoint") return currentCheckpoint()?.id;
  return null;
}

function academyItems(collection) {
  return window.academyData?.[collection] || [];
}

function academyById(collection) {
  return new Map(academyItems(collection).map((item) => [item.id, item]));
}

function missionOrder() {
  const missionsById = academyById("missions");
  const ordered = [];
  academyItems("phases")
    .slice()
    .sort((a, b) => Number(a.phaseNumber || 999) - Number(b.phaseNumber || 999))
    .forEach((phase) => {
      (phase.missions || []).forEach((missionId) => {
        const mission = missionsById.get(missionId);
        if (mission) ordered.push(mission);
      });
    });
  academyItems("missions").forEach((mission) => {
    if (!ordered.some((orderedMission) => orderedMission.id === mission.id)) ordered.push(mission);
  });
  return ordered;
}

function activeMission() {
  const missionsById = academyById("missions");
  return missionsById.get(state.selectedMissionId)
    || missionsById.get(getActiveMission())
    || missionOrder().find((mission) => isMissionUnlocked(mission) && !isMissionComplete(mission))
    || missionOrder()[0]
    || null;
}

function ensureAcademySelection() {
  const missionsById = academyById("missions");
  const lessonsById = academyById("lessons");
  const exercisesById = academyById("exercises");
  const checkpointsById = academyById("checkpoints");

  if (state.selectedLessonId && lessonsById.has(state.selectedLessonId)) {
    const lesson = lessonsById.get(state.selectedLessonId);
    state.selectedMissionId = lesson.missionId || state.selectedMissionId;
  }

  if (state.selectedExerciseId && exercisesById.has(state.selectedExerciseId)) {
    const exercise = exercisesById.get(state.selectedExerciseId);
    state.selectedLessonId = exercise.lessonId || state.selectedLessonId;
    state.selectedMissionId = currentMissionForLesson()?.id || state.selectedMissionId;
  } else {
    state.selectedExerciseId = firstExerciseForLesson(currentLesson())?.id || null;
  }

  if (state.selectedCheckpointId && checkpointsById.has(state.selectedCheckpointId)) {
    const checkpoint = checkpointsById.get(state.selectedCheckpointId);
    state.selectedLessonId = checkpoint.lessonId || state.selectedLessonId;
    state.selectedMissionId = currentMissionForLesson()?.id || state.selectedMissionId;
  }

  if (!missionsById.has(state.selectedMissionId)) state.selectedMissionId = activeMission()?.id || null;
  if (!lessonsById.has(state.selectedLessonId)) state.selectedLessonId = firstLessonForMission(currentMission())?.id || null;
  if (!exercisesById.has(state.selectedExerciseId)) state.selectedExerciseId = firstExerciseForLesson(currentLesson())?.id || null;
  if (!checkpointsById.has(state.selectedCheckpointId)) state.selectedCheckpointId = currentLesson()?.checkpoint || null;
}

function currentMission() {
  return academyById("missions").get(state.selectedMissionId) || activeMission();
}

function currentPhaseForMission(mission = currentMission()) {
  return academyById("phases").get(mission?.phaseId) || academyItems("phases").find((phase) => (phase.missions || []).includes(mission?.id)) || null;
}

function academySkillsById() {
  return academyById("skills");
}

function academyLessonsById() {
  return academyById("lessons");
}

function academyExercisesById() {
  return academyById("exercises");
}

function academyCheckpointsById() {
  return academyById("checkpoints");
}

function currentLesson() {
  return academyLessonsById().get(state.selectedLessonId) || firstLessonForMission(currentMission());
}

function currentMissionForLesson() {
  const lesson = currentLesson();
  return academyLessonsById().has(lesson?.id)
    ? academyById("missions").get(lesson.missionId) || currentMission()
    : currentMission();
}

function currentCheckpoint() {
  return academyCheckpointsById().get(state.selectedCheckpointId) || academyCheckpointsById().get(currentLesson()?.checkpoint) || null;
}

function currentExercise() {
  return academyExercisesById().get(state.selectedExerciseId) || firstExerciseForLesson(currentLesson());
}

function currentLearningLocation() {
  const mission = currentMissionForLesson();
  const phase = currentPhaseForMission(mission);
  const lesson = currentLesson();
  const exercise = currentExercise();
  if (!mission || !lesson || !exercise) return null;
  return {
    phaseId: phase?.id || null,
    missionId: mission.id,
    lessonId: lesson.id,
    exerciseId: exercise.id
  };
}

function firstLessonForMission(mission) {
  if (!mission) return null;
  const lessonsById = academyLessonsById();
  return (mission.lessons || []).map((lessonId) => lessonsById.get(lessonId)).find(Boolean) || null;
}

function firstExerciseForLesson(lesson) {
  if (!lesson) return null;
  const exercisesById = academyExercisesById();
  return (lesson.exercises || []).map((exerciseId) => exercisesById.get(exerciseId)).find(Boolean) || null;
}

function resumeExerciseTarget() {
  const progress = getProgress();
  const location = progress.currentLocation;
  if (!location?.exerciseId) return null;
  const exercisesById = academyExercisesById();
  const savedExercise = exercisesById.get(location.exerciseId);
  if (!savedExercise) return null;
  if (!progress.completedExerciseIds.has(savedExercise.id)) return savedExercise;
  return nextUnfinishedExercise(location, progress.completedExerciseIds) || savedExercise;
}

function nextUnfinishedExercise(location, completedExerciseIds) {
  const mission = academyById("missions").get(location.missionId) || currentMission();
  const lessonsById = academyLessonsById();
  const exercisesById = academyExercisesById();
  let foundCurrent = false;
  for (const lessonId of mission?.lessons || []) {
    const lesson = lessonsById.get(lessonId);
    for (const exerciseId of lesson?.exercises || []) {
      if (exerciseId === location.exerciseId) foundCurrent = true;
      if (foundCurrent && !completedExerciseIds.has(exerciseId)) return exercisesById.get(exerciseId) || null;
    }
  }
  for (const lessonId of mission?.lessons || []) {
    const lesson = lessonsById.get(lessonId);
    const unfinishedId = (lesson?.exercises || []).find((exerciseId) => !completedExerciseIds.has(exerciseId));
    if (unfinishedId) return exercisesById.get(unfinishedId) || null;
  }
  return null;
}

function renderAcademyDashboard() {
  const mission = activeMission();
  if (!mission) return;
  state.selectedMissionId = state.selectedMissionId || mission.id;
  const progress = missionProgress(mission);
  const phase = currentPhaseForMission(mission);
  els.dashboardMissionTitle.textContent = moduleLabel(mission);
  els.dashboardMissionDescription.textContent = mission.description;
  els.dashboardMissionProgress.textContent = `${progress.percent}%`;
  els.dashboardMissionProgressBar.style.width = `${progress.percent}%`;
  els.dashboardLessonsCompleted.textContent = `${progress.completedLessons} / ${progress.totalLessons}`;
  els.dashboardExercisesCompleted.textContent = `${progress.completed} / ${progress.total}`;
  els.dashboardNextStep.textContent = recommendedReviewText(mission, progress);
  renderAcademyRoadmap();
}

function missionProgress(mission) {
  const progress = getProgress();
  const lessonIds = mission?.lessons || [];
  const lessons = lessonIds
    .map((lessonId) => academyLessonsById().get(lessonId))
    .filter(Boolean);
  const lessonExercises = lessons.flatMap((lesson) => lesson.exercises || []);
  const completed = lessonExercises.filter((exerciseId) => progress.completedExerciseIds.has(exerciseId)).length;
  const total = lessonExercises.length;
  const completedLessons = lessons.filter((lesson) =>
    (lesson.exercises || []).length && (lesson.exercises || []).every((exerciseId) => progress.completedExerciseIds.has(exerciseId))
  ).length;
  return {
    completed,
    total,
    completedLessons,
    totalLessons: lessons.length,
    reviewExerciseIds: new Set(progress.reviewExerciseIds),
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function moduleLabel(mission) {
  if (!mission) return "Current Module";
  const number = missionOrder().findIndex((item) => item.id === mission.id) + 1;
  return number > 0 ? `Module ${number}: ${mission.title}` : mission.title;
}

function recommendedReviewText(mission, progress) {
  const reviewTitles = Array.from(progress.reviewExerciseIds || [])
    .map((exerciseId) => academyExercisesById().get(exerciseId))
    .filter((exercise) => exercise && currentMissionForExercise(exercise)?.id === mission?.id)
    .slice(0, 3)
    .map((exercise) => exercise.title);
  if (reviewTitles.length) return `Review: ${reviewTitles.join(", ")}.`;
  if (!progress.completed) return mission.nextStep || "Read the module brief and begin Lesson 1.";
  const resumeTarget = resumeExerciseTarget();
  if (resumeTarget) return `Review ${resumeTarget.title} next.`;
  if (progress.percent >= 100) return "Review the checkpoint criteria and keep the module fresh.";
  return mission.nextStep || "Review the next unfinished exercise.";
}

function currentMissionForExercise(exercise) {
  const lesson = academyLessonsById().get(exercise?.lessonId);
  return academyById("missions").get(lesson?.missionId) || null;
}

function academyProgress() {
  const missions = missionOrder();
  const completed = missions.filter((mission) => isMissionComplete(mission)).length;
  const total = missions.length;
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function isMissionComplete(mission) {
  if (!mission) return false;
  return Boolean(mission.completed || missionProgress(mission).percent === 100);
}

function isMissionUnlocked(mission) {
  if (!mission) return false;
  return (mission.prerequisiteMissionIds || []).every((missionId) => {
    const prerequisite = academyById("missions").get(missionId);
    return prerequisite ? isMissionComplete(prerequisite) : false;
  });
}

function prerequisiteText(mission) {
  return (mission?.prerequisiteMissionIds || [])
    .map((missionId) => academyById("missions").get(missionId)?.title || missionId)
    .join(", ");
}

function renderAcademyRoadmap() {
  if (!els.academyRoadmap) return;
  els.academyRoadmap.innerHTML = academyItems("phases")
    .slice()
    .sort((a, b) => Number(a.phaseNumber || 999) - Number(b.phaseNumber || 999))
    .map((phase) => renderRoadmapPhase(phase))
    .join("");
}

function renderRoadmapPhase(phase) {
  const missionsById = academyById("missions");
  const missions = (phase.missions || [])
    .map((missionId) => missionsById.get(missionId))
    .filter(Boolean);
  const completedCount = missions.filter((mission) => isMissionComplete(mission)).length;
  return `
    <section class="roadmap-phase">
      <div class="roadmap-phase-head">
        <span>${escapeHtml(phase.title)}</span>
        <span>${completedCount} / ${missions.length}</span>
      </div>
      <div class="roadmap-missions">
        ${missions.map((mission) => renderRoadmapMission(mission)).join("")}
      </div>
    </section>
  `;
}

function renderRoadmapMission(mission) {
  const unlocked = isMissionUnlocked(mission);
  const complete = isMissionComplete(mission);
  const active = mission.id === activeMission()?.id;
  const status = complete
    ? "Complete"
    : unlocked
      ? "Available"
      : `Requires ${prerequisiteText(mission)}`;
  return `
    <button
      type="button"
      class="roadmap-mission${active ? " active" : ""}${!unlocked ? " locked" : ""}"
      data-mission-id="${escapeHtml(mission.id)}"
      ${unlocked ? "" : "disabled"}
    >
      <strong>${escapeHtml(moduleLabel(mission))}</strong>
      <span>${escapeHtml(status)}</span>
    </button>
  `;
}

function renderModuleLessons() {
  if (!els.moduleLessonList) return;
  const mission = currentMission();
  if (!mission) return;
  const lessonsById = academyLessonsById();
  const progress = getProgress();
  const lessons = (mission.lessons || [])
    .map((lessonId) => lessonsById.get(lessonId))
    .filter(Boolean)
    .sort((a, b) => Number(a.lessonNumber || 999) - Number(b.lessonNumber || 999));

  els.moduleLessonsTitle.textContent = moduleLabel(mission);
  els.moduleLessonsSubtitle.textContent = "Choose a lesson or review the module overview.";
  els.moduleLessonList.innerHTML = lessons.map((lesson) => renderModuleLessonCard(lesson, progress)).join("");
}

function renderModuleLessonCard(lesson, progress) {
  const exerciseIds = lesson.exercises || [];
  const completed = exerciseIds.filter((exerciseId) => progress.completedExerciseIds.has(exerciseId)).length;
  const total = exerciseIds.length;
  const checkpointResult = lesson.checkpoint ? progress.checkpointResults.get(lesson.checkpoint) : "";
  const complete = checkpointResult === "passed" || (total > 0 && completed === total);
  const status = complete
    ? "Complete"
    : completed
      ? `${completed} / ${total} exercises`
      : "Not started";
  return `
    <button type="button" class="exercise-card lesson-select-card${complete ? " complete" : " pending"}" data-lesson-id="${escapeHtml(lesson.id)}">
      <div>
        <strong>Lesson ${escapeHtml(String(lesson.lessonNumber || ""))}: ${escapeHtml(lesson.title)}</strong>
        <p>${escapeHtml(lesson.description || lesson.objective || "")}</p>
      </div>
      <div class="exercise-meta-row">
        <span>${escapeHtml(status)}</span>
        <span>${escapeHtml(String(lesson.estimatedMinutes || 0))} min</span>
      </div>
    </button>
  `;
}

function renderMissionBrief() {
  const mission = currentMission();
  if (!mission) return;
  const progress = missionProgress(mission);
  const skillsById = academySkillsById();
  const skills = (mission.skillIds || [])
    .map((skillId) => skillsById.get(skillId))
    .filter(Boolean);
  const skillNames = skills.length
    ? skills.map((skill) => skill.title)
    : mission.skillsDeveloped || [];

  els.missionBriefTitle.textContent = moduleLabel(mission);
  els.missionBriefSubtitle.textContent = mission.subtitle || "";
  els.missionEstimatedCompletion.textContent = mission.estimatedPracticeHours || mission.estimatedSessions || "TBD";
  els.missionStatus.textContent = `${progress.percent}% complete`;
  els.missionOverviewProgressBar.style.width = `${progress.percent}%`;
  els.missionObjective.textContent = mission.description;
  els.missionWhyItMatters.textContent = mission.whyItMatters;
  els.startLessonButton.textContent = "View Lessons";
  els.missionObjectives.innerHTML = renderListItems(mission.objectives);
  els.missionSkills.innerHTML = renderSkillChips(skillNames);
  els.missionConnectedSongs.innerHTML = renderConnectedSongCards(mission.connectedSongs);
  els.missionSuccessCriteria.innerHTML = renderListItems(mission.successCriteria);
}

function renderLesson() {
  const mission = currentMissionForLesson();
  const lesson = currentLesson();
  if (!mission || !lesson) return;
  const exercisesById = academyExercisesById();
  const exercises = (lesson.exercises || [])
    .map((exerciseId) => exercisesById.get(exerciseId))
    .filter(Boolean);
  const progress = getProgress();

  els.lessonMissionName.textContent = moduleLabel(mission);
  els.lessonTitle.textContent = lesson.title;
  els.lessonMeta.textContent = `Lesson ${lesson.lessonNumber} · Estimated time: ${lesson.estimatedMinutes} minutes`;
  els.lessonWhyThisLesson.textContent = lesson.whyThisLesson;
  els.lessonObjectiveHeading.textContent = lesson.objectiveHeading || "Lesson Objective";
  els.lessonObjective.textContent = lesson.objective || lesson.description || "";
  const completedCount = exercises.filter((exercise) => progress.completedExerciseIds.has(exercise.id)).length;
  const progressPercent = exercises.length ? Math.round((completedCount / exercises.length) * 100) : 0;
  els.lessonExerciseProgress.textContent = `${completedCount} / ${exercises.length}`;
  els.lessonExerciseProgressBar.style.width = `${progressPercent}%`;
  els.lessonExercises.innerHTML = exercises
    .map((exercise) => renderExerciseCard(exercise))
    .join("");
  renderLessonReflection(lesson);
}

function renderLessonReflection(lesson = currentLesson()) {
  if (!lesson || !els.reflectionWork) return;
  const reflection = getProgress().lessonReflections.get(lesson.id) || {};
  els.reflectionWork.value = reflection.work || "";
  els.reflectionNotice.value = reflection.notice || "";
  els.reflectionFocus.value = reflection.focus || "";
  els.reflectionStatus.textContent = state.reflectionMessage;
  els.reflectionStatus.classList.toggle("complete", Boolean(state.reflectionMessage));
}

function renderExerciseDetail() {
  const mission = currentMissionForLesson();
  const lesson = currentLesson();
  const exercise = currentExercise();
  if (!mission || !lesson || !exercise) return;
  const steps = exerciseInstructionSteps(exercise);
  const exerciseIndex = (lesson.exercises || []).indexOf(exercise.id);
  const isLastExercise = exerciseIndex === (lesson.exercises || []).length - 1;
  const isFirstExercise = exerciseIndex <= 0;
  const progress = getProgress();
  const completed = progress.completedExerciseIds.has(exercise.id);
  const needsReview = progress.reviewExerciseIds?.has(exercise.id);
  const nextActionLabel = isLastExercise ? "Go to Checkpoint" : "Next Exercise";
  const commonMistakes = exercise.commonMistakes || [];
  const chordDiagrams = chordDiagramsForExercise(exercise);
  const useHeaderChords = chordDiagrams.length > 0 && chordDiagrams.length <= 4;
  const bpm = exerciseBpm(exercise);

  els.exerciseLessonName.textContent = `${mission.title} · ${lesson.title}`;
  els.exerciseTitle.textContent = exercise.title;
  els.exerciseMeta.textContent = [
    `Related lesson: ${lesson.title}`,
    `Duration: ${exercise.durationMinutes} minutes`,
    exercise.tempo ? `Tempo: ${exercise.tempo}` : ""
  ].filter(Boolean).join(" · ");
  els.exerciseObjective.textContent = exercise.purpose
    ? `${exercise.purpose} ${exercise.objective}`
    : exercise.objective;
  els.exerciseInstructions.innerHTML = steps
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");
  els.exercisePassCriteria.textContent = exercise.definitionOfDone && exercise.definitionOfDone !== exercise.passCriteria
    ? `${exercise.passCriteria} Definition of Done: ${exercise.definitionOfDone}`
    : exercise.passCriteria;
  els.exerciseMistakesCard.classList.toggle("hidden", !commonMistakes.length);
  els.exerciseCommonMistakes.innerHTML = renderListItems(commonMistakes);
  els.exerciseHeaderChords.classList.toggle("hidden", !useHeaderChords);
  els.exerciseHeaderChords.innerHTML = useHeaderChords
    ? chordDiagrams.map((chord) => renderExerciseChordDiagram(chord, "compact")).join("")
    : "";
  els.exerciseChordsCard.classList.toggle("hidden", !chordDiagrams.length || useHeaderChords);
  els.exerciseChordDiagrams.innerHTML = !useHeaderChords
    ? chordDiagrams.map((chord) => renderExerciseChordDiagram(chord)).join("")
    : "";
  els.metronomeCard.classList.toggle("hidden", !bpm);
  els.metronomeBpm.textContent = bpm ? `${bpm} BPM` : "-- BPM";
  els.nailedItButton.classList.toggle("complete-action", completed);
  els.needsPracticeButton.classList.toggle("review-action", needsReview);
  els.exercisePrimaryActionButton.textContent = nextActionLabel;
  els.exercisePrimaryActionButton.disabled = !completed && !needsReview;
  els.exerciseCompletionStatus.textContent = completed
    ? "Marked: Nailed It."
    : needsReview
      ? "Marked for Recommended Review."
      : "Choose Nailed It or Needs More Practice when you finish.";
  els.exerciseCompletionStatus.classList.toggle("complete", completed);
  els.exerciseCompletionStatus.classList.toggle("review", needsReview && !completed);
  const savedNote = getProgress().exerciseNotes.get(exercise.id) || "";
  els.exerciseNotesInput.value = savedNote;
  els.exerciseNotesStatus.textContent = state.exerciseNotesMessage;
  els.exerciseNotesStatus.classList.toggle("complete", Boolean(state.exerciseNotesMessage));
  els.previousExerciseButton.classList.toggle("hidden", isFirstExercise);
  els.previousExerciseButton.disabled = isFirstExercise;
  els.nextExerciseButton.textContent = nextActionLabel;
  els.nextExerciseButton.disabled = false;
  syncTimerToExercise(exercise);
  syncMetronomeToExercise(exercise);
  renderTimerDisplay();
  renderMetronomeDisplay();
}

function exerciseBpm(exercise) {
  const match = String(exercise?.tempo || "").match(/(\d{2,3})\s*BPM/i);
  return match ? Number(match[1]) : null;
}

function chordDiagramsForExercise(exercise) {
  const chordNames = exercise.chordNames?.length ? exercise.chordNames : inferredExerciseChordNames(exercise);
  const diagramsByName = new Map((window.academyData?.chordDiagrams || []).map((chord) => [chord.name, chord]));
  return chordNames.map((name) => diagramsByName.get(name)).filter(Boolean);
}

function inferredExerciseChordNames(exercise) {
  const text = [
    exercise.title,
    exercise.objective,
    exercise.instructions,
    ...(exercise.instructionSteps || [])
  ].join(" ");
  return (window.academyData?.chordDiagrams || [])
    .map((chord) => chord.name)
    .filter((name) => new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(text));
}

function renderExerciseChordDiagram(chord, variant = "") {
  const strings = ["E", "A", "D", "G", "B", "e"];
  const frets = chord.frets || [];
  const fingers = chord.fingers || [];
  const numericFrets = frets.filter((fret) => Number.isFinite(Number(fret))).map(Number);
  const minFret = chord.startFret || Math.max(1, Math.min(...numericFrets.filter((fret) => fret > 0), 1));
  const displayedFrets = numericFrets.map((fret) => fret > 0 ? fret - minFret + 1 : fret);
  const maxFret = Math.max(3, ...displayedFrets);
  const width = 104;
  const height = 142;
  const left = 18;
  const top = 28;
  const stringGap = 13;
  const fretGap = 18;
  const stringLines = strings.map((_, index) => {
    const x = left + index * stringGap;
    return `<line x1="${x}" y1="${top}" x2="${x}" y2="${top + maxFret * fretGap}" />`;
  }).join("");
  const fretLines = Array.from({ length: maxFret + 1 }, (_, index) => {
    const y = top + index * fretGap;
    return `<line x1="${left}" y1="${y}" x2="${left + 5 * stringGap}" y2="${y}" class="${index === 0 ? "nut" : ""}" />`;
  }).join("");
  const markers = frets.map((fret, index) => {
    const x = left + index * stringGap;
    if (fret === "x") return `<text x="${x}" y="18" class="string-state">x</text>`;
    if (Number(fret) === 0) return `<text x="${x}" y="18" class="string-state">o</text>`;
    const displayedFret = Number(fret) - minFret + 1;
    const y = top + (displayedFret - 0.5) * fretGap;
    const finger = fingers[index] || "";
    return `<g><circle cx="${x}" cy="${y}" r="5.2" /><text x="${x}" y="${height - 20}" class="finger">${escapeHtml(finger)}</text></g>`;
  }).join("");
  const stringLabels = strings.map((stringName, index) => {
    const x = left + index * stringGap;
    return `<text x="${x}" y="${height - 5}" class="string-label">${stringName}</text>`;
  }).join("");
  return `
    <div class="exercise-chord-card${variant ? ` ${escapeHtml(variant)}` : ""}">
      <strong>${escapeHtml(chord.name)}</strong>
      ${minFret > 1 ? `<span class="chord-fret-label">${escapeHtml(String(minFret))}fr</span>` : ""}
      <svg class="exercise-chord-diagram" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(chord.name)} chord diagram">
        <g class="fretboard">${stringLines}${fretLines}${markers}${stringLabels}</g>
      </svg>
      ${chord.barre ? `<small>${escapeHtml(chord.barre)} barre</small>` : ""}
    </div>
  `;
}

function renderChordLibraryPage() {
  if (!els.chordLibraryList) return;
  const chords = window.academyData?.chordDiagrams || [];
  const groups = new Map();
  chords.forEach((chord) => {
    const group = chord.group || "Other";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(chord);
  });
  els.chordLibraryList.innerHTML = Array.from(groups.entries()).map(([group, groupChords]) => `
    <section class="chord-library-group">
      <div>
        <h2>${escapeHtml(group)}</h2>
        <p>${escapeHtml(chordLibraryDescription(group))}</p>
      </div>
      <div class="exercise-chord-grid library-grid">
        ${groupChords.map((chord) => renderExerciseChordDiagram(chord)).join("")}
      </div>
    </section>
  `).join("");
}

function chordLibraryDescription(group) {
  const descriptions = {
    "Open Major": "Core open major shapes for beginner rhythm guitar.",
    "Open Minor": "Essential minor sounds for open-position songs.",
    "Open 7th": "Useful dominant seventh chords for blues, folk, and classic rock.",
    "Barre Chords": "Movable shapes to revisit once open chords feel comfortable."
  };
  return descriptions[group] || "Reference shapes for practice.";
}

function exerciseInstructionSteps(exercise) {
  if (Array.isArray(exercise.instructionSteps) && exercise.instructionSteps.length) {
    return exercise.instructionSteps;
  }
  return String(exercise.instructions || "")
    .split(/(?<=\.)\s+/)
    .map((step) => step.trim())
    .filter(Boolean);
}

function goToNextExercise() {
  const lesson = currentLesson();
  const exercise = currentExercise();
  if (!lesson?.exercises?.length || !exercise) return;
  saveCurrentExerciseNotes({ silent: true });
  const index = lesson.exercises.indexOf(exercise.id);
  if (index >= lesson.exercises.length - 1) {
    setView("checkpoint", lesson.checkpoint);
    return;
  }
  state.selectedExerciseId = lesson.exercises[index + 1];
  setView("exercise", state.selectedExerciseId);
}

function goToPreviousExercise() {
  const lesson = currentLesson();
  const exercise = currentExercise();
  if (!lesson?.exercises?.length || !exercise) return;
  const index = lesson.exercises.indexOf(exercise.id);
  if (index <= 0) return;
  state.selectedExerciseId = lesson.exercises[index - 1];
  setView("exercise", state.selectedExerciseId);
}

async function markCurrentExerciseNailed() {
  const exercise = currentExercise();
  if (!exercise) return;
  await saveCurrentExerciseNotes({ silent: true });
  await markExerciseComplete(exercise.id);
  render();
}

async function markCurrentExerciseNeedsPractice() {
  const exercise = currentExercise();
  if (!exercise) return;
  await saveCurrentExerciseNotes({ silent: true });
  await markExerciseForReview(exercise.id);
  render();
}

function queueExerciseNotesAutosave() {
  if (state.exerciseNotesSaveTimer) window.clearTimeout(state.exerciseNotesSaveTimer);
  state.exerciseNotesMessage = "Saving...";
  els.exerciseNotesStatus.textContent = state.exerciseNotesMessage;
  state.exerciseNotesSaveTimer = window.setTimeout(() => {
    saveCurrentExerciseNotes();
  }, 650);
}

async function saveCurrentExerciseNotes(options = {}) {
  const exercise = currentExercise();
  if (!exercise) return;
  if (state.exerciseNotesSaveTimer) {
    window.clearTimeout(state.exerciseNotesSaveTimer);
    state.exerciseNotesSaveTimer = null;
  }
  await saveExerciseNote(exercise.id, els.exerciseNotesInput.value);
  state.exerciseNotesMessage = "Saved";
  if (!options.silent) render();
}

async function saveCurrentLessonReflection() {
  const lesson = currentLesson();
  if (!lesson) return;
  await saveLessonReflection(lesson.id, {
    work: els.reflectionWork.value,
    notice: els.reflectionNotice.value,
    focus: els.reflectionFocus.value
  });
  state.reflectionMessage = "Reflection saved.";
  render();
}

function continueToNextLesson() {
  const nextLesson = nextLessonAfter(currentLesson());
  if (nextLesson) setView("lesson", nextLesson.id);
  else setView("academy-roadmap");
}

function openFirstReviewExercise() {
  const lesson = currentLesson();
  const reviewId = (lesson?.exercises || []).find((exerciseId) => getProgress().reviewExerciseIds.has(exerciseId));
  if (reviewId) setView("exercise", reviewId);
}

function renderRecommendedReviewPage() {
  if (!els.recommendedReviewList) return;
  const reviewIds = Array.from(getProgress().reviewExerciseIds || []);
  const rows = reviewIds
    .map((exerciseId) => {
      const exercise = academyExercisesById().get(exerciseId);
      const lesson = academyLessonsById().get(exercise?.lessonId);
      const mission = academyById("missions").get(lesson?.missionId);
      return { exercise, lesson, mission };
    })
    .filter((item) => item.exercise && item.lesson && item.mission);

  if (!rows.length) {
    els.recommendedReviewList.innerHTML = `
      <div class="empty-state">
        <strong>No review exercises right now.</strong>
        <p>Anything marked Needs More Practice will appear here.</p>
      </div>
    `;
    return;
  }

  els.recommendedReviewList.innerHTML = rows.map(({ exercise, lesson, mission }) => `
    <article class="exercise-card review-item">
      <div>
        <strong>${escapeHtml(exercise.title)}</strong>
        <p>${escapeHtml(moduleLabel(mission))} · Lesson ${escapeHtml(String(lesson.lessonNumber || ""))}: ${escapeHtml(lesson.title)}</p>
        <p>${escapeHtml(exercise.objective || "")}</p>
      </div>
      <button type="button" data-review-exercise-id="${escapeHtml(exercise.id)}">Open</button>
    </article>
  `).join("");
}

function nextLessonAfter(lesson) {
  const mission = currentMissionForLesson();
  const lessonIds = mission?.lessons || [];
  const index = lessonIds.indexOf(lesson?.id);
  return index >= 0 ? academyLessonsById().get(lessonIds[index + 1]) || null : null;
}

function syncTimerToExercise(exercise) {
  if (state.timerExerciseId === exercise.id) return;
  pauseExerciseTimer();
  state.timerExerciseId = exercise.id;
  state.timerRemainingSeconds = Math.max(0, Number(exercise.durationMinutes || 0) * 60);
  state.timerComplete = false;
}

function startExerciseTimer() {
  const exercise = currentExercise();
  if (!exercise) return;
  syncTimerToExercise(exercise);
  if (state.timerRemainingSeconds <= 0) {
    state.timerRemainingSeconds = Math.max(0, Number(exercise.durationMinutes || 0) * 60);
  }
  state.timerComplete = false;
  if (state.timerRunning || state.timerRemainingSeconds <= 0) {
    renderTimerDisplay();
    return;
  }
  state.timerRunning = true;
  state.timerInterval = window.setInterval(() => {
    state.timerRemainingSeconds = Math.max(0, state.timerRemainingSeconds - 1);
    renderTimerDisplay();
    if (state.timerRemainingSeconds <= 0) {
      pauseExerciseTimer();
      state.timerComplete = true;
      playTimerCompleteSound();
      renderTimerDisplay();
    }
  }, 1000);
  renderTimerDisplay();
}

function pauseExerciseTimer() {
  if (state.timerInterval) window.clearInterval(state.timerInterval);
  state.timerInterval = null;
  state.timerRunning = false;
  renderTimerDisplay();
}

function resetExerciseTimer() {
  const exercise = currentExercise();
  pauseExerciseTimer();
  state.timerExerciseId = exercise?.id || null;
  state.timerRemainingSeconds = Math.max(0, Number(exercise?.durationMinutes || 0) * 60);
  state.timerComplete = false;
  renderTimerDisplay();
}

function renderTimerDisplay() {
  if (!els.exerciseTimerDisplay) return;
  els.exerciseTimerDisplay.textContent = state.timerComplete ? "Done" : formatTimerSeconds(state.timerRemainingSeconds);
  els.exerciseTimerDisplay.classList.toggle("timer-complete", state.timerComplete);
  els.startTimerButton.textContent = state.timerRunning ? "Running" : "Start Timer";
  els.pauseTimerButton.disabled = !state.timerRunning;
}

function playTimerCompleteSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  [660, 880, 1100].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + index * 0.12;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.35, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.11);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.12);
  });
}

function formatTimerSeconds(totalSeconds) {
  const safeSeconds = Math.max(0, Number(totalSeconds || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function syncMetronomeToExercise(exercise) {
  const bpm = exerciseBpm(exercise);
  if (state.metronomeExerciseId === exercise.id && state.metronomeBpm === bpm) return;
  pauseMetronome();
  state.metronomeExerciseId = exercise.id;
  state.metronomeBpm = bpm;
  state.metronomePulseOn = false;
}

function startMetronome() {
  const exercise = currentExercise();
  if (!exercise) return;
  syncMetronomeToExercise(exercise);
  if (!state.metronomeBpm || state.metronomeRunning) {
    renderMetronomeDisplay();
    return;
  }
  state.metronomeRunning = true;
  clickMetronome();
  state.metronomeInterval = window.setInterval(clickMetronome, Math.round(60000 / state.metronomeBpm));
  renderMetronomeDisplay();
}

function pauseMetronome() {
  if (state.metronomeInterval) window.clearInterval(state.metronomeInterval);
  state.metronomeInterval = null;
  state.metronomeRunning = false;
  renderMetronomeDisplay();
}

function resetMetronome() {
  pauseMetronome();
  const exercise = currentExercise();
  state.metronomeExerciseId = exercise?.id || null;
  state.metronomeBpm = exerciseBpm(exercise);
  state.metronomePulseOn = false;
  renderMetronomeDisplay();
}

function clickMetronome() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || !state.metronomeBpm) return;
  state.metronomeAudioContext = state.metronomeAudioContext || new AudioContextClass();
  const context = state.metronomeAudioContext;
  if (context.state === "suspended") context.resume();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(880, context.currentTime);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.22, context.currentTime + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.055);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 0.06);
  state.metronomePulseOn = !state.metronomePulseOn;
  renderMetronomeDisplay();
}

function renderMetronomeDisplay() {
  if (!els.metronomePulse) return;
  const hasBpm = Boolean(state.metronomeBpm);
  els.startMetronomeButton.textContent = state.metronomeRunning ? "Running" : "Start";
  els.startMetronomeButton.disabled = !hasBpm;
  els.pauseMetronomeButton.disabled = !state.metronomeRunning;
  els.resetMetronomeButton.disabled = !hasBpm;
  els.metronomePulse.classList.toggle("pulse", state.metronomePulseOn);
}

function renderCheckpoint() {
  const lesson = currentLesson();
  const checkpoint = currentCheckpoint();
  if (!lesson || !checkpoint) return;
  const progress = getProgress();
  const summary = lessonSummary(lesson);
  const moduleSummary = checkpoint.moduleSummary || null;

  els.checkpointTitle.textContent = checkpoint.title;
  els.checkpointLessonTitle.textContent = `Related lesson: ${lesson.title}`;
  els.checkpointPurpose.textContent = checkpoint.purpose || "";
  const checkedCriteria = state.checkpointCriteria.get(checkpoint.id) || new Set();
  els.checkpointRequirements.innerHTML = (checkpoint.requirements || []).map((requirement, index) => `
    <li>
      <label class="tick-row">
        <input type="checkbox" data-checkpoint-criterion="${index}" ${checkedCriteria.has(String(index)) ? "checked" : ""}>
        <span>${escapeHtml(requirement)}</span>
      </label>
    </li>
  `).join("");
  const assessment = getCheckpointResult(checkpoint.id);
  document.querySelectorAll("[data-assessment]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.assessment === assessment);
  });
  els.checkpointSuccessMessage.textContent = assessment === "passed"
    ? moduleSummary
      ? `${moduleSummary.title}. ${moduleSummary.message}`
      : "Lesson complete. Summary is ready below."
    : assessment === "not-yet"
      ? moduleSummary
        ? "Needs more practice. Review exercises marked Needs More Practice, then return to this assessment."
        : "Not yet. Review exercises marked Needs More Practice, then try again."
      : "";
  els.checkpointSuccessMessage.classList.toggle("complete", assessment === "passed");
  els.checkpointSuccessMessage.classList.toggle("review", assessment === "not-yet");
  els.checkpointAssessmentCard.classList.toggle("hidden", assessment === "passed");
  els.lessonSummaryCard.classList.toggle("hidden", assessment !== "passed");
  els.lessonSummaryStats.innerHTML = `
    <div><span>Exercises Completed</span><strong>${summary.completed} / ${summary.total}</strong></div>
    <div><span>Needs More Practice</span><strong>${summary.reviewCount}</strong></div>
    <div><span>Notes Count</span><strong>${summary.notesCount}</strong></div>
    <div><span>Reflection Saved</span><strong>${summary.reflectionSaved ? "Yes" : "No"}</strong></div>
    ${moduleSummary ? `
      <div><span>Featured Songs Completed</span><strong>${summary.featuredSongsCompleted} / ${summary.featuredSongsTotal}</strong></div>
      <div><span>Skills Developed</span><strong>${moduleSummary.skillsDeveloped.length}</strong></div>
      <div class="wide-stat"><span>Skills</span><strong>${moduleSummary.skillsDeveloped.map(escapeHtml).join(", ")}</strong></div>
      <div class="wide-stat"><span>Preparing for Module 2</span><strong>${escapeHtml(moduleSummary.preparingForNextModule)}</strong></div>
    ` : ""}
  `;
  els.recommendedSongs.innerHTML = renderRecommendedSongs(recommendedSongsForLesson(lesson));
  els.continueNextLessonButton.textContent = moduleSummary ? "Continue to Module 2" : "Continue to next lesson";
  els.continueNextLessonButton.disabled = !nextLessonAfter(lesson) && !moduleSummary;
  els.reviewExercisesButton.disabled = !summary.reviewCount;
}

function toggleCheckpointCriterion(checkpointId, criterionId, checked) {
  if (!checkpointId) return;
  const set = state.checkpointCriteria.get(checkpointId) || new Set();
  if (checked) set.add(String(criterionId));
  else set.delete(String(criterionId));
  state.checkpointCriteria.set(checkpointId, set);
}

function lessonSummary(lesson) {
  const progress = getProgress();
  const exerciseIds = lesson.exercises || [];
  const completed = exerciseIds.filter((exerciseId) => progress.completedExerciseIds.has(exerciseId)).length;
  const reviewCount = exerciseIds.filter((exerciseId) => progress.reviewExerciseIds.has(exerciseId)).length;
  const notesCount = exerciseIds.filter((exerciseId) => String(progress.exerciseNotes.get(exerciseId) || "").trim()).length;
  const featuredSongIds = exerciseIds.filter((exerciseId) => academyExercisesById().get(exerciseId)?.title?.startsWith("Featured Song:"));
  const featuredSongsCompleted = featuredSongIds.filter((exerciseId) => progress.completedExerciseIds.has(exerciseId)).length;
  const reflection = progress.lessonReflections.get(lesson.id) || {};
  const reflectionSaved = Object.values(reflection).some((value) => String(value || "").trim());
  return { total: exerciseIds.length, completed, reviewCount, notesCount, reflectionSaved, featuredSongsCompleted, featuredSongsTotal: featuredSongIds.length };
}

function recommendedSongsForLesson(lesson) {
  const lessonChordNames = new Set((lesson.exercises || [])
    .map((exerciseId) => academyExercisesById().get(exerciseId))
    .filter(Boolean)
    .flatMap((exercise) => exercise.chordNames || inferredExerciseChordNames(exercise)));
  const recommendations = lessonChordNames.size ? state.songs
    .map((song) => {
      const songChords = new Set((song.chords || []).map((chord) => chord.name));
      const matches = Array.from(lessonChordNames).filter((name) => songChords.has(name));
      return { song, matches };
    })
    .filter((item) => item.matches.length)
    .sort((a, b) => b.matches.length - a.matches.length)
    .slice(0, 5)
    .map(({ song, matches }) => ({
      title: song.title,
      artist: song.artist,
      songId: song.id,
      note: matches.length >= Math.min(2, lessonChordNames.size)
        ? `Recommended because it uses ${matches.join(" and ")}`
        : `Partial fit — rhythm may be harder; includes ${matches.join(" and ")}`
    })) : [];

  (lesson.recommendedSongs || []).forEach((suggestion) => {
    const existingIndex = recommendations.findIndex((item) => sameSong(item, suggestion));
    if (existingIndex >= 0) {
      recommendations[existingIndex].note = suggestion.note
        ? `${recommendations[existingIndex].note}. ${suggestion.note}`
        : recommendations[existingIndex].note;
      return;
    }

    const librarySong = state.songs.find((song) => sameSong(song, suggestion));
    recommendations.push({
      title: librarySong?.title || suggestion.title,
      artist: librarySong?.artist || suggestion.artist,
      songId: librarySong?.id || "",
      note: librarySong
        ? suggestion.note || "Recommended from this lesson."
        : `Suggested future addition — ${suggestion.note || "not in the song library yet."}`
    });
  });

  return recommendations;
}

function sameSong(song, candidate) {
  return String(song.title || "").toLowerCase() === String(candidate.title || "").toLowerCase()
    && String(song.artist || "").toLowerCase() === String(candidate.artist || "").toLowerCase();
}

function renderRecommendedSongs(recommendations) {
  if (!recommendations.length) return `<div class="connected-song-card"><strong>No song matches yet</strong><span>Add more song chord data to improve recommendations.</span></div>`;
  return recommendations.map((item) => `
    <div class="connected-song-card">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.artist)} · ${escapeHtml(item.note)}</span>
      ${item.songId ? `<button type="button" data-song-id="${escapeHtml(item.songId)}">Open song</button>` : ""}
    </div>
  `).join("");
}

function renderPracticeNotesPage() {
  if (!els.practiceNotesList) return;
  const query = String(els.notesSearchInput?.value || "").trim().toLowerCase();
  const progress = getProgress();
  const noteRows = [];
  const filteredLesson = state.notesLessonFilter ? academyLessonsById().get(state.notesLessonFilter) : null;
  els.notesSubtitle.textContent = filteredLesson
    ? `Notes for Lesson ${filteredLesson.lessonNumber}: ${filteredLesson.title}.`
    : "Exercise notes and lesson reflections.";
  missionOrder().forEach((mission) => {
    (mission.lessons || []).forEach((lessonId) => {
      const lesson = academyLessonsById().get(lessonId);
      if (!lesson) return;
      if (state.notesLessonFilter && lesson.id !== state.notesLessonFilter) return;
      const reflection = progress.lessonReflections.get(lesson.id);
      const reflectionText = reflection ? Object.entries(reflection)
        .filter(([, value]) => String(value || "").trim())
        .map(([key, value]) => `${reflectionPromptLabel(key)}: ${value}`)
        .join("\n") : "";
      const exerciseNotes = (lesson.exercises || [])
        .map((exerciseId) => ({ exercise: academyExercisesById().get(exerciseId), note: progress.exerciseNotes.get(exerciseId) }))
        .filter((item) => item.exercise && String(item.note || "").trim());
      if (!reflectionText && !exerciseNotes.length) return;
      const searchable = [mission.title, lesson.title, reflectionText, ...exerciseNotes.flatMap((item) => [item.exercise.title, item.note])].join(" ").toLowerCase();
      if (query && !searchable.includes(query)) return;
      noteRows.push({ mission, lesson, reflectionText, exerciseNotes });
    });
  });
  els.coachingSummaryStatus.textContent = state.coachingSummaryMessage;
  els.coachingSummaryStatus.classList.toggle("complete", Boolean(state.coachingSummaryMessage));
  els.practiceNotesList.innerHTML = noteRows.length
    ? noteRows.map(renderPracticeNoteGroup).join("")
    : `<div class="connected-song-card"><strong>No notes yet</strong><span>Save notes from an exercise or lesson reflection.</span></div>`;
}

function renderPracticeNoteGroup(group) {
  return `
    <article class="notes-group">
      <p class="eyebrow">${escapeHtml(moduleLabel(group.mission))}</p>
      <h3>${escapeHtml(group.lesson.title)}</h3>
      ${group.reflectionText ? `<pre>${escapeHtml(group.reflectionText)}</pre>` : ""}
      ${group.exerciseNotes.map(({ exercise, note }) => `
        <div class="note-entry">
          <strong>${escapeHtml(exercise.title)}</strong>
          <p>${escapeHtml(note)}</p>
        </div>
      `).join("")}
    </article>
  `;
}

function reflectionPromptLabel(key) {
  return {
    easiest: "What felt easiest?",
    work: "What needs more work?",
    notice: "What did I notice?",
    focus: "What should I focus on next time?"
  }[key] || key;
}

async function copyCoachingSummary() {
  const markdown = coachingSummaryMarkdown();
  try {
    await navigator.clipboard.writeText(markdown);
    state.coachingSummaryMessage = "Coaching summary copied.";
  } catch {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `guitar-coaching-summary-${todayIsoDate()}.md`;
    link.click();
    URL.revokeObjectURL(url);
    state.coachingSummaryMessage = "Coaching summary downloaded.";
  }
  renderPracticeNotesPage();
}

function coachingSummaryMarkdown() {
  const progress = getProgress();
  const mission = activeMission();
  const lesson = currentLesson();
  const completedExercises = Array.from(progress.completedExerciseIds).map((id) => academyExercisesById().get(id)).filter(Boolean);
  const reviewExercises = Array.from(progress.reviewExerciseIds).map((id) => academyExercisesById().get(id)).filter(Boolean);
  const notes = Array.from(progress.exerciseNotes.entries()).map(([id, note]) => ({ exercise: academyExercisesById().get(id), note })).filter((item) => item.exercise);
  const reflections = Array.from(progress.lessonReflections.entries()).map(([id, reflection]) => ({ lesson: academyLessonsById().get(id), reflection })).filter((item) => item.lesson);
  const checkpointResults = Array.from(progress.checkpointResults.entries()).map(([id, result]) => ({ checkpoint: academyCheckpointsById().get(id), result })).filter((item) => item.checkpoint);
  return [
    "# Guitar Hero Coaching Summary",
    "",
    `Current module: ${moduleLabel(mission)}`,
    `Current lesson: ${lesson?.title || "None selected"}`,
    "",
    "## Completed Exercises",
    completedExercises.length ? completedExercises.map((exercise) => `- ${exercise.title}`).join("\n") : "- None yet",
    "",
    "## Exercises Needing Review",
    reviewExercises.length ? reviewExercises.map((exercise) => `- ${exercise.title}`).join("\n") : "- None",
    "",
    "## Exercise Notes",
    notes.length ? notes.map(({ exercise, note }) => `### ${exercise.title}\n${note}`).join("\n\n") : "- None",
    "",
    "## Lesson Reflections",
    reflections.length ? reflections.map(({ lesson, reflection }) => `### ${lesson.title}\n${Object.entries(reflection).map(([key, value]) => `- ${reflectionPromptLabel(key)} ${value || ""}`).join("\n")}`).join("\n\n") : "- None",
    "",
    "## Checkpoint Results",
    checkpointResults.length ? checkpointResults.map(({ checkpoint, result }) => `- ${checkpoint.title}: ${result}`).join("\n") : "- None"
  ].join("\n");
}

function renderListItems(items = []) {
  return (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSkillChips(skills = []) {
  return (skills || [])
    .map((skill) => `<span class="skill-chip">${escapeHtml(typeof skill === "string" ? skill : skill.title)}</span>`)
    .join("");
}

function renderConnectedSongCards(songs = []) {
  return (songs || [])
    .map((song) => `
      <div class="connected-song-card">
        <strong>${escapeHtml(song.title)}</strong>
        <span>${escapeHtml(song.artist)}</span>
      </div>
    `)
    .join("");
}

function renderExerciseCard(exercise) {
  const completed = getProgress().completedExerciseIds.has(exercise.id);
  return `
    <article class="exercise-card${completed ? " complete" : ""}">
      <div>
        <h3>${escapeHtml(exercise.title)}</h3>
        <p>${escapeHtml(exercise.objective)}</p>
      </div>
      <div class="exercise-meta">
        <span>Duration: ${escapeHtml(String(exercise.durationMinutes))} min</span>
        ${exercise.tempo ? `<span>Tempo: ${escapeHtml(exercise.tempo)}</span>` : ""}
        <span class="${completed ? "complete-pill" : ""}">${completed ? "Complete" : "Not complete"}</span>
      </div>
      <div class="pass-criteria">
        <strong>Pass criteria</strong>
        <span>${escapeHtml(exercise.passCriteria)}</span>
      </div>
      <button type="button" data-exercise-id="${escapeHtml(exercise.id)}">Open Exercise</button>
    </article>
  `;
}

function renderSidebarToggle() {
  const collapsed = state.sidebarsCollapsed;
  els.sidebarToggle.textContent = collapsed ? "»" : "«";
  els.sidebarToggle.title = collapsed ? "Show sidebars" : "Hide sidebars";
  els.sidebarToggle.setAttribute("aria-label", collapsed ? "Show sidebars" : "Hide sidebars");
  els.sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
}

function toggleSidebars() {
  state.sidebarsCollapsed = !state.sidebarsCollapsed;
  localStorage.setItem("guitar-room-sidebars-collapsed", String(state.sidebarsCollapsed));
  document.body.classList.toggle("sidebars-collapsed", state.sidebarsCollapsed);
  renderSidebarToggle();
}

function renderSetupToggle() {
  const collapsed = state.setupCollapsed;
  els.setupToggle.textContent = collapsed ? "Show setup" : "Hide setup";
  els.setupToggle.title = collapsed ? "Show amp setup and chords" : "Hide amp setup and chords";
  els.setupToggle.setAttribute("aria-label", collapsed ? "Show amp setup and chords" : "Hide amp setup and chords");
  els.setupToggle.setAttribute("aria-expanded", String(!collapsed));
}

function toggleSetup() {
  state.setupCollapsed = !state.setupCollapsed;
  localStorage.setItem("guitar-room-setup-collapsed", String(state.setupCollapsed));
  document.body.classList.toggle("setup-collapsed", state.setupCollapsed);
  renderSetupToggle();
}

function sortedArtists() {
  return [...new Set(state.songs.map((song) => song.artist).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));
}

function sortedSongsForArtist(artist) {
  return state.songs
    .filter((song) => song.artist === artist)
    .sort((a, b) =>
      Number(a.albumYear || 9999) - Number(b.albumYear || 9999)
      || String(a.album || "").localeCompare(String(b.album || ""))
      || Number(a.albumOrder || 999) - Number(b.albumOrder || 999)
      || a.title.localeCompare(b.title)
    );
}

function renderArtistList() {
  els.artistList.innerHTML = "";
  sortedArtists().forEach((artist) => {
    const button = document.createElement("button");
    button.className = `artist-card${artist === state.selectedArtist ? " active" : ""}`;
    button.textContent = artist;
    button.addEventListener("click", () => {
      state.selectedArtist = artist;
      state.selectedId = sortedSongsForArtist(artist)[0]?.id || null;
      state.editing = false;
      els.songSearch.value = "";
      render();
    });
    els.artistList.append(button);
  });
}

function renderSongList() {
  const query = els.songSearch.value.trim().toLowerCase();
  els.songList.innerHTML = "";
  els.libraryArtist.textContent = state.selectedArtist || "Songs";

  const songs = sortedSongsForArtist(state.selectedArtist)
    .filter((song) => `${song.title} ${song.album || ""}`.toLowerCase().includes(query));
  const albums = new Map();
  songs.forEach((song) => {
    const key = `${song.albumYear || 9999}-${song.album || "Other"}`;
    if (!albums.has(key)) albums.set(key, []);
    albums.get(key).push(song);
  });

  albums.forEach((albumSongs) => {
    const firstSong = albumSongs[0];
    const group = document.createElement("section");
    group.className = "album-group";
    group.innerHTML = `
      <div class="album-heading">
        <strong>${escapeHtml(firstSong.album || "Other")}</strong>
        ${firstSong.albumYear ? `<span>${escapeHtml(String(firstSong.albumYear))}</span>` : ""}
      </div>
    `;
    albumSongs.forEach((song) => {
      const button = document.createElement("button");
      button.className = `song-card${song.id === state.selectedId ? " active" : ""}`;
      button.innerHTML = `<strong>${escapeHtml(song.title)}</strong><span>Track ${escapeHtml(String(song.albumOrder || "-"))}</span>`;
      button.addEventListener("click", () => {
        state.selectedId = song.id;
        state.editing = false;
        render();
      });
      group.append(button);
    });
    els.songList.append(group);
  });
}

function renderSong() {
  const song = currentSong();
  if (!song) return;

  els.artistName.textContent = song.artist;
  els.songTitle.textContent = song.title;
  els.songMeta.innerHTML = [
    ["Difficulty", song.difficulty],
    ["Album", song.album],
    ["Tuning", song.tuning],
    ["Capo", song.capo],
    ["Key", song.key],
    ["BPM", song.bpm]
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<span>${label}: ${escapeHtml(String(value))}</span>`)
    .join("");

  els.videoLink.href = song.videoUrl || "#";
  els.videoLink.classList.toggle("hidden", !song.videoUrl);
  renderToneSettings(song);
  renderChords(song);
  renderChart(song);
  renderStrumming(song);
}

function renderToneSettings(song) {
  const tone = song.tone;
  const acousticTone = song.acousticTone || defaultAcousticTone(song);
  if (!tone) {
    els.toneSettings.innerHTML = `
      <div class="tone-row">
        <div class="tone-row-label">Electric</div>
        <div class="tone-empty">Use a clean starting tone and adjust to the room.</div>
      </div>
      ${renderAcousticToneRow(acousticTone, song)}
    `;
    return;
  }

  els.toneSettings.innerHTML = `
    <div class="tone-row">
      <div class="tone-row-label">Electric</div>
      ${renderElectricToneGroups(tone)}
    </div>
    ${renderAcousticToneRow(acousticTone, song)}
  `;
}

function renderAcousticToneRow(acousticTone, song) {
  return `
    <div class="tone-row acoustic-row">
      <div class="tone-row-label">Acoustic</div>
      <div class="tone-group guitar"><strong>Guitar</strong><span>${escapeHtml(acousticTone.guitar)}</span></div>
      <div class="tone-group"><strong>Amp / DI</strong><span>${escapeHtml(acousticTone.amp || "Plugged in: clean channel · SD-1 off")}</span></div>
      <div class="tone-group"><strong>EQ / Room</strong><span>${escapeHtml(acousticTone.eq)}</span></div>
      <div class="tone-group sd1"><strong>Capo</strong><span>${escapeHtml(acousticTone.capo || song.capo || "None")}</span></div>
      <div class="tone-group tone-note"><strong>Play</strong><span>${escapeHtml(`${acousticTone.shape} · ${acousticTone.note}`)}</span></div>
    </div>
  `;
}

function renderElectricToneGroups(tone) {
  const ampValues = tone.channel === "Normal"
    ? `Volume ${tone.volume} · Bright ${tone.bright}`
    : `Drive ${tone.drive} · Master ${tone.master} · Bright ${tone.bright}`;
  const sd1Values = tone.sd1.on
    ? `On · Level ${tone.sd1.level} · Tone ${tone.sd1.tone} · Drive ${tone.sd1.drive}`
    : "Off";
  const guitar = tone.guitar || {
    pickup: "Bridge",
    neckVolume: "8",
    bridgeVolume: "9",
    neckTone: "7",
    bridgeTone: "8"
  };
  const pickup = guitar.pickup.toLowerCase();
  const guitarValues = pickup === "bridge"
    ? `Bridge pickup · Volume ${guitar.bridgeVolume} · Tone ${guitar.bridgeTone}`
    : pickup === "neck"
      ? `Neck pickup · Volume ${guitar.neckVolume} · Tone ${guitar.neckTone}`
      : `Middle position · Neck V ${guitar.neckVolume} / T ${guitar.neckTone} · Bridge V ${guitar.bridgeVolume} / T ${guitar.bridgeTone}`;

  return `
    <div class="tone-group guitar"><strong>Les Paul</strong><span>${escapeHtml(guitarValues)}</span></div>
    <div class="tone-group"><strong>Amp</strong><span>${escapeHtml(tone.channel)} channel · ${escapeHtml(ampValues)}</span></div>
    <div class="tone-group"><strong>EQ / Space</strong><span>T ${escapeHtml(tone.treble)} · M ${escapeHtml(tone.middle)} · B ${escapeHtml(tone.bass)} · Rev ${escapeHtml(tone.reverb)} · Pres ${escapeHtml(tone.presence)}</span></div>
    <div class="tone-group sd1"><strong>SD-1</strong><span>${escapeHtml(sd1Values)}</span></div>
    <div class="tone-group tone-note"><strong>Play</strong><span>${escapeHtml(tone.note)}</span></div>
  `;
}

function defaultAcousticTone(song) {
  return {
    guitar: "Steel-string acoustic · fresh-ish phosphor bronze",
    shape: "Unplugged recreation · open chords first · light bass notes",
    eq: "Natural room · cut boom · let high strings chime",
    capo: song.capo || "None",
    note: "Medium pick or fingers; relax the attack and let the rhythm breathe."
  };
}

function renderChords(song) {
  els.chordGrid.innerHTML = "";
  (song.chords || []).forEach((chord) => {
    const card = document.createElement("div");
    card.className = "chord-card";
    card.innerHTML = `<div class="chord-name">${escapeHtml(chord.name)}</div>${drawChord(chord)}`;
    els.chordGrid.append(card);
  });
}

function drawChord(chord) {
  const frets = chord.frets.split("");
  const playable = frets.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > 0);
  const minFret = playable.length ? Math.min(...playable) : 1;
  const maxFret = playable.length ? Math.max(...playable) : 4;
  const baseFret = maxFret > 4 ? minFret : 1;
  const rows = 4;
  const x = (stringIndex) => 12 + stringIndex * 10;
  const y = (rowIndex) => 22 + rowIndex * 13;
  const dots = frets
    .map((value, stringIndex) => {
      const fret = Number(value);
      if (!Number.isFinite(fret) || fret <= 0) return "";
      const row = fret - baseFret + 1;
      if (row < 1 || row > rows) return "";
      return `<circle cx="${x(stringIndex)}" cy="${y(row) - 6.5}" r="3.8"></circle>`;
    })
    .join("");
  const markers = frets
    .map((value, stringIndex) => {
      if (value.toLowerCase() === "x") return `<text x="${x(stringIndex)}" y="10">x</text>`;
      if (value === "0") return `<text x="${x(stringIndex)}" y="10">o</text>`;
      return "";
    })
    .join("");
  const strings = Array.from({ length: 6 }, (_, index) => `<line x1="${x(index)}" y1="18" x2="${x(index)}" y2="70"></line>`).join("");
  const fretsSvg = Array.from({ length: rows + 1 }, (_, index) => `<line x1="12" y1="${18 + index * 13}" x2="62" y2="${18 + index * 13}"></line>`).join("");
  const baseLabel = baseFret > 1 ? `<text x="69" y="32" text-anchor="start">${baseFret}fr</text>` : "";
  const fingers = chord.fingers ? `<text x="37" y="88" class="fingers">${escapeHtml(chord.fingers)}</text>` : "";

  return `<svg class="chord-diagram" viewBox="0 0 78 96" role="img" aria-label="${escapeHtml(chord.name)} chord">
    <g fill="none" stroke="#222" stroke-width="1.4">${strings}${fretsSvg}</g>
    <g fill="#222" text-anchor="middle" font-size="9" font-family="system-ui, sans-serif">${markers}${baseLabel}${fingers}</g>
    <g fill="#1e6f5c">${dots}</g>
  </svg>`;
}

function renderChart(song) {
  els.chartDisplay.innerHTML = `${renderChartImage(song)}${renderSourceImages(song)}${formatChart(song.chart || "")}`;
  if (els.chartEditor) els.chartEditor.value = song.chart || "";
  els.chartDisplay.classList.toggle("hidden", state.editing);
  els.chartEditor?.classList.toggle("hidden", !state.editing);
  els.editButton?.classList.toggle("hidden", state.editing);
  els.saveButton?.classList.toggle("hidden", !state.editing);
  els.cancelButton?.classList.toggle("hidden", !state.editing);
}

function renderChartImage(song) {
  if (!song.introImage) return "";
  const alt = `${song.title} intro tab`;
  return `<figure class="chart-image"><img src="${escapeHtml(resolveAssetPath(song.introImage))}" alt="${escapeHtml(alt)}"><figcaption>${escapeHtml(song.introCaption || "Intro")}</figcaption></figure>`;
}

function renderSourceImages(song) {
  if (!Array.isArray(song.sourceImages)) return "";
  return song.sourceImages
    .map((image, index) => {
      const src = typeof image === "string" ? image : image.src;
      const caption = typeof image === "string" ? `Chart ${index + 1}` : image.caption;
      return `<figure class="chart-image"><img src="${escapeHtml(resolveAssetPath(src))}" alt="${escapeHtml(`${song.title} chart ${index + 1}`)}"><figcaption>${escapeHtml(caption || `Chart ${index + 1}`)}</figcaption></figure>`;
    })
    .join("");
}

function resolveAssetPath(src) {
  if (/^(?:https?:|data:|blob:)/i.test(src)) return src;
  return src.replace(/^\.?\/?app\//, "").replace(/^\/+/, "");
}

function formatChart(chart) {
  return String(chart)
    .split("\n")
    .map((line) => {
      const image = line.match(/^\[\[image:([^|\]]+)(?:\|([^\]]+))?\]\]$/);
      if (!image) return escapeHtml(line);
      const [, src, caption] = image;
      return `<figure class="chart-image inline-riff"><img src="${escapeHtml(resolveAssetPath(src))}" alt="${escapeHtml(caption || "Guitar riff")}">${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
    })
    .join("\n")
    .replace(/^\[(.+?)\]$/gm, '<span class="section-label">[$1]</span>');
}

function renderStrumming(song) {
  els.strumDisplay.innerHTML = "";
  (song.strumming || []).forEach((pattern) => {
    const card = document.createElement("section");
    card.className = "strum-card";
    card.innerHTML = `
      <div class="strum-title">${escapeHtml(pattern.name)}<span>${escapeHtml(String(pattern.bpm || song.bpm || ""))} bpm</span></div>
      <div class="beat-grid">${renderBeats(pattern)}</div>
      ${pattern.chordRun ? `<div class="chord-run">${escapeHtml(pattern.chordRun)}</div>` : ""}
      ${pattern.note ? `<p class="strum-note">${escapeHtml(pattern.note)}</p>` : ""}
    `;
    els.strumDisplay.append(card);
  });
}

function renderBeats(pattern) {
  const counts = pattern.beats.length === 8
    ? ["1", "&", "2", "&", "3", "&", "4", "&"]
    : ["1", "&", "2", "&", "3", "&", "4", "&", "5", "&", "6", "&", "7", "&", "8", "&"];
  const accents = new Set(pattern.accents || []);
  return pattern.beats
    .map((beat, index) => {
      const symbol = beat === "D" ? "↓" : beat === "U" ? "↑" : "";
      return `<div class="beat"><div class="stroke ${accents.has(index) ? "accent" : ""}">${symbol}</div><div class="count">${counts[index] || ""}</div></div>`;
    })
    .join("");
}

function startEditing() {
  state.editing = true;
  renderSong();
  els.chartEditor?.focus();
}

function stopEditing() {
  state.editing = false;
  renderSong();
}

function saveChart() {
  const song = currentSong();
  if (!els.chartEditor) return;
  song.chart = els.chartEditor.value;
  persistSongs();
  stopEditing();
}

function addSong() {
  const id = `song-${Date.now()}`;
  state.songs.push({
    id,
    title: "New Song",
    artist: "Artist",
    album: "Other",
    albumYear: new Date().getFullYear(),
    albumOrder: 1,
    difficulty: "",
    tuning: "E A D G B E",
    key: "",
    bpm: "",
    videoUrl: "",
    chords: [],
    strumming: [],
    chart: "[Intro]\n\n[Verse]\n\n[Chorus]\n\n[Ending]"
  });
  state.selectedId = id;
  state.selectedArtist = "Artist";
  state.editing = true;
  persistSongs();
  render();
}

function exportSongs() {
  const blob = new Blob([JSON.stringify(state.songs, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "guitar-room-songbook.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importSongs(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const imported = JSON.parse(await file.text());
  if (!Array.isArray(imported)) return;
  state.songs = imported;
  state.selectedArtist = sortedArtists()[0] || null;
  state.selectedId = sortedSongsForArtist(state.selectedArtist)[0]?.id || null;
  state.editing = false;
  persistSongs();
  render();
  event.target.value = "";
}

async function toggleFullscreen() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await document.documentElement.requestFullscreen();
  }
}

function changeChartSize(delta) {
  state.chartSize = Math.max(13, Math.min(28, state.chartSize + delta));
  localStorage.setItem("guitar-room-chart-size", String(state.chartSize));
  document.documentElement.style.setProperty("--chart-size", `${state.chartSize}px`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
