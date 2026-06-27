const storageKey = "guitar-room-songbook";
const academyUserIdKey = "guitar-hero-academy-user-id";
const legacyAcademyMigrationKey = "guitar-hero-academy-rob-migration-complete";
const legacyAcademyUserId = "rob";
const academyUserProfile = getAcademyUserProfile();
const academyUserId = academyUserProfile.userId;
const initialRoute = parseRoute();
registerServiceWorker();
const academyProgressService = createAcademyProgressService({
  supabase: createSupabaseClient(readSupabaseConfig()),
  userId: academyUserId,
  legacyUserId: academyUserProfile.needsLegacyMigration ? legacyAcademyUserId : null,
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
  chartSize: Number(localStorage.getItem("guitar-room-chart-size")) || 17
};

const els = {
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
  dashboardMissionSubtitle: document.getElementById("dashboardMissionSubtitle"),
  dashboardMissionTitle: document.getElementById("dashboardMissionTitle"),
  dashboardMissionDescription: document.getElementById("dashboardMissionDescription"),
  dashboardMissionProgress: document.getElementById("dashboardMissionProgress"),
  dashboardMissionProgressBar: document.getElementById("dashboardMissionProgressBar"),
  dashboardMissionStatus: document.getElementById("dashboardMissionStatus"),
  dashboardMissionEstimate: document.getElementById("dashboardMissionEstimate"),
  dashboardNextStep: document.getElementById("dashboardNextStep"),
  dashboardCurrentPhase: document.getElementById("dashboardCurrentPhase"),
  dashboardOverallProgress: document.getElementById("dashboardOverallProgress"),
  dashboardOverallProgressBar: document.getElementById("dashboardOverallProgressBar"),
  academyRoadmap: document.getElementById("academyRoadmap"),
  academySyncStatus: document.getElementById("academySyncStatus"),
  syncNowButton: document.getElementById("syncNowButton"),
  exportProgressButton: document.getElementById("exportProgressButton"),
  importProgressInput: document.getElementById("importProgressInput"),
  progressTransferStatus: document.getElementById("progressTransferStatus"),
  missionBackButton: document.getElementById("missionBackButton"),
  missionLibraryButton: document.getElementById("missionLibraryButton"),
  missionSecondaryBackButton: document.getElementById("missionSecondaryBackButton"),
  startLessonButton: document.getElementById("startLessonButton"),
  lessonMissionName: document.getElementById("lessonMissionName"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonMeta: document.getElementById("lessonMeta"),
  lessonWhyThisLesson: document.getElementById("lessonWhyThisLesson"),
  lessonObjectiveHeading: document.getElementById("lessonObjectiveHeading"),
  lessonObjective: document.getElementById("lessonObjective"),
  lessonExerciseProgress: document.getElementById("lessonExerciseProgress"),
  lessonExerciseProgressBar: document.getElementById("lessonExerciseProgressBar"),
  lessonExercises: document.getElementById("lessonExercises"),
  lessonCheckpointTitle: document.getElementById("lessonCheckpointTitle"),
  lessonCheckpointRequirements: document.getElementById("lessonCheckpointRequirements"),
  lessonBackButton: document.getElementById("lessonBackButton"),
  finishLessonButton: document.getElementById("finishLessonButton"),
  startCheckpointButton: document.getElementById("startCheckpointButton"),
  exerciseLessonName: document.getElementById("exerciseLessonName"),
  exerciseTitle: document.getElementById("exerciseTitle"),
  exerciseMeta: document.getElementById("exerciseMeta"),
  exerciseObjective: document.getElementById("exerciseObjective"),
  exerciseInstructions: document.getElementById("exerciseInstructions"),
  exercisePassCriteria: document.getElementById("exercisePassCriteria"),
  exerciseBackButton: document.getElementById("exerciseBackButton"),
  nextExerciseButton: document.getElementById("nextExerciseButton"),
  startTimerButton: document.getElementById("startTimerButton"),
  markExerciseCompleteButton: document.getElementById("markExerciseCompleteButton"),
  exerciseCompletionStatus: document.getElementById("exerciseCompletionStatus"),
  checkpointTitle: document.getElementById("checkpointTitle"),
  checkpointLessonTitle: document.getElementById("checkpointLessonTitle"),
  checkpointPurpose: document.getElementById("checkpointPurpose"),
  checkpointRequirements: document.getElementById("checkpointRequirements"),
  checkpointSuccessMessage: document.getElementById("checkpointSuccessMessage"),
  checkpointBackButton: document.getElementById("checkpointBackButton"),
  checkpointDashboardButton: document.getElementById("checkpointDashboardButton"),
  missionBriefTitle: document.getElementById("missionBriefTitle"),
  missionBriefSubtitle: document.getElementById("missionBriefSubtitle"),
  missionEstimatedCompletion: document.getElementById("missionEstimatedCompletion"),
  missionStatus: document.getElementById("missionStatus"),
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

els.academyContinue.addEventListener("click", () => setView("academy"));
els.libraryOpen.addEventListener("click", () => setView("library"));
els.academyHomeButton.addEventListener("click", () => setView("home"));
els.academyLibraryButton.addEventListener("click", () => setView("library"));
els.continueMissionButton.addEventListener("click", continueMission);
els.resumeLearningButton.addEventListener("click", resumeLearning);
els.resetAcademyProgressButton.addEventListener("click", resetAcademyProgress);
els.exportProgressButton.addEventListener("click", exportProgress);
els.importProgressInput.addEventListener("change", importProgress);
els.academyRoadmap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mission-id]");
  if (!button || button.disabled) return;
  state.selectedMissionId = button.dataset.missionId;
  setActiveMission(state.selectedMissionId).then(() => render());
  setView("mission", state.selectedMissionId);
});
els.syncNowButton.addEventListener("click", syncPendingProgress);
els.missionBackButton.addEventListener("click", () => setView("academy"));
els.missionLibraryButton.addEventListener("click", () => setView("library"));
els.missionSecondaryBackButton.addEventListener("click", () => setView("academy"));
els.startLessonButton.addEventListener("click", () => setView("lesson", firstLessonForMission(currentMission())?.id));
els.lessonBackButton.addEventListener("click", () => setView("mission", currentMissionForLesson()?.id));
els.startCheckpointButton.addEventListener("click", () => setView("checkpoint", currentCheckpoint()?.id));
els.lessonExercises.addEventListener("click", (event) => {
  const button = event.target.closest("[data-exercise-id]");
  if (!button) return;
  state.selectedExerciseId = button.dataset.exerciseId;
  setView("exercise");
});
els.exerciseBackButton.addEventListener("click", () => setView("lesson", currentLesson()?.id));
els.nextExerciseButton.addEventListener("click", goToNextExercise);
els.startTimerButton.addEventListener("click", () => setView("exercise"));
els.markExerciseCompleteButton.addEventListener("click", markCurrentExerciseComplete);
document.querySelector(".assessment-options").addEventListener("click", async (event) => {
  const button = event.target.closest("[data-assessment]");
  if (!button) return;
  const checkpoint = currentCheckpoint();
  if (!checkpoint) return;
  await saveCheckpointResult(checkpoint.id, button.dataset.assessment);
  render();
});
els.checkpointBackButton.addEventListener("click", () => setView("lesson", currentLesson()?.id));
els.checkpointDashboardButton.addEventListener("click", () => setView("academy"));
els.libraryHomeButton.addEventListener("click", () => setView("home"));
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
  state.view = view;
  updateSelectionForView(view, id);
  ensureAcademySelection();
  persistRouteProgress({ view, ids: { missionId: view === "mission" ? selectedIdForView("mission") : null, lessonId: view === "lesson" ? selectedIdForView("lesson") : null, exerciseId: view === "exercise" ? selectedIdForView("exercise") : null, checkpointId: view === "checkpoint" ? selectedIdForView("checkpoint") : null } });
  location.hash = routeHashForView(view, id);
  applyView();
  render();
}

function applyView() {
  document.body.classList.toggle("view-home", state.view === "home");
  document.body.classList.toggle("view-academy", state.view === "academy");
  document.body.classList.toggle("view-mission", state.view === "mission");
  document.body.classList.toggle("view-lesson", state.view === "lesson");
  document.body.classList.toggle("view-exercise", state.view === "exercise");
  document.body.classList.toggle("view-checkpoint", state.view === "checkpoint");
  document.body.classList.toggle("view-library", state.view === "library");
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

function getAcademyUserProfile() {
  let userId = localStorage.getItem(academyUserIdKey);
  if (!userId) {
    userId = generateUuid();
    localStorage.setItem(academyUserIdKey, userId);
  }
  return {
    userId,
    needsLegacyMigration: localStorage.getItem(legacyAcademyMigrationKey) !== "true"
  };
}

function generateUuid() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const value = Math.random() * 16 | 0;
    const nibble = char === "x" ? value : (value & 0x3) | 0x8;
    return nibble.toString(16);
  });
}

function markLegacyAcademyMigrationComplete() {
  localStorage.setItem(legacyAcademyMigrationKey, "true");
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

function createAcademyProgressService({ supabase, userId, legacyUserId, isOnline }) {
  const resumeLocationKey = "__resume_learning";
  const journalDataKey = "__journal_data";
  const progress = emptyProgress();
  let pendingChanges = false;

  function snapshot() {
    return {
      activeMissionId: progress.activeMissionId,
      completedExerciseIds: new Set(progress.completedExerciseIds),
      checkpointResults: new Map(progress.checkpointResults),
      journalData: new Map(progress.journalData),
      currentLocation: progress.currentLocation ? { ...progress.currentLocation } : null
    };
  }

  function applyRow(row) {
    const checkpointResults = row?.checkpoint_results || {};
    progress.activeMissionId = row?.active_mission_id || null;
    progress.completedExerciseIds = new Set(Array.isArray(row?.completed_exercise_ids) ? row.completed_exercise_ids : []);
    progress.currentLocation = checkpointResults[resumeLocationKey] || null;
    progress.journalData = new Map(Object.entries(checkpointResults[journalDataKey] || {}));
    const entries = Object.entries(checkpointResults).filter(([key]) => ![resumeLocationKey, journalDataKey].includes(key));
    progress.checkpointResults = new Map(entries);
  }

  function checkpointResultsPayload() {
    const payload = Object.fromEntries(progress.checkpointResults);
    if (progress.currentLocation) payload[resumeLocationKey] = progress.currentLocation;
    if (progress.journalData.size) payload[journalDataKey] = Object.fromEntries(progress.journalData);
    return payload;
  }

  function applyImportedProgress(importedProgress) {
    progress.activeMissionId = importedProgress.activeMissionId || null;
    progress.completedExerciseIds = new Set(importedProgress.completedExerciseIds || []);
    progress.checkpointResults = new Map(Object.entries(importedProgress.checkpointResults || {}));
    progress.journalData = new Map(Object.entries(importedProgress.journalData || {}));
    progress.currentLocation = importedProgress.currentLocation ? { ...importedProgress.currentLocation } : null;
  }

  async function load() {
    if (!supabase.configured) {
      return { configured: false, progress: snapshot(), error: supabase.setupMessage, legacyMigrationComplete: false };
    }
    if (!isOnline()) {
      return { configured: true, progress: snapshot(), error: "", legacyMigrationComplete: false };
    }
    const rows = await supabase.request(`academy_progress?user_id=eq.${encodeURIComponent(userId)}&select=*&limit=1`);
    const row = Array.isArray(rows) ? rows[0] : null;
    let legacyMigrationComplete = false;
    if (row) {
      applyRow(row);
      legacyMigrationComplete = Boolean(legacyUserId);
    }
    if (!row && legacyUserId && legacyUserId !== userId) {
      const legacyRows = await supabase.request(`academy_progress?user_id=eq.${encodeURIComponent(legacyUserId)}&select=*&limit=1`);
      const legacyRow = Array.isArray(legacyRows) ? legacyRows[0] : null;
      if (legacyRow) applyRow(legacyRow);
      await save();
      legacyMigrationComplete = true;
    }
    if (!row && !legacyMigrationComplete) await save();
    pendingChanges = false;
    return { configured: true, progress: snapshot(), error: "", legacyMigrationComplete };
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
      return persistOrQueue();
    },
    async unmarkExerciseComplete(exerciseId) {
      progress.completedExerciseIds.delete(exerciseId);
      return persistOrQueue();
    },
    getCompletedExercises() {
      return new Set(progress.completedExerciseIds);
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
    currentLocation: null
  };
}

async function initializeAcademyProgress() {
  state.academyProgressLoading = true;
  state.academyProgressError = "";
  render();
  try {
    const result = await academyProgressService.load();
    state.academyProgressError = result.error || "";
    if (result.legacyMigrationComplete) markLegacyAcademyMigrationComplete();
    if (result.progress.activeMissionId && !Object.values(initialRoute.ids).some(Boolean)) {
      state.selectedMissionId = result.progress.activeMissionId;
      state.selectedLessonId = null;
      state.selectedExerciseId = null;
      state.selectedCheckpointId = null;
    }
    if (result.progress.currentLocation && !Object.values(initialRoute.ids).some(Boolean)) {
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
    checkpointResults: Object.fromEntries(progress.checkpointResults),
    journalData: Object.fromEntries(progress.journalData || new Map())
  };
}

function validateImportedProgress(imported) {
  if (!imported || typeof imported !== "object") throw new Error("Progress file is not valid JSON.");
  const activeMissionId = nullableString(imported.activeMissionId ?? imported.currentMissionId, "activeMissionId");
  const currentLocation = validateCurrentLocation(imported.currentLocation, imported);
  const completedExerciseIds = validateStringArray(imported.completedExerciseIds, "completedExerciseIds");
  const checkpointResults = validatePlainObject(imported.checkpointResults || {}, "checkpointResults");
  const journalData = validatePlainObject(imported.journalData || {}, "journalData");
  return {
    activeMissionId: currentLocation?.missionId || activeMissionId,
    currentLocation,
    completedExerciseIds,
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
  renderMissionBrief();
  renderLesson();
  renderExerciseDetail();
  renderCheckpoint();
  renderArtistList();
  renderSongList();
  renderSong();
}

function continueMission() {
  const target = resumeExerciseTarget();
  if (target) {
    setView("exercise", target.id);
    return;
  }
  setView("mission", activeMission()?.id);
}

function resumeLearning() {
  const target = resumeExerciseTarget();
  if (!target) return;
  setView("exercise", target.id);
}

function renderResumeLearning() {
  const target = resumeExerciseTarget();
  els.resumeLearningCard.classList.toggle("hidden", !target);
  if (!target) return;
  const lesson = academyLessonsById().get(target.lessonId);
  const mission = academyById("missions").get(lesson?.missionId) || activeMission();
  els.resumeLearningTitle.textContent = target.title;
  els.resumeLearningDescription.textContent = `${mission?.title || "Current mission"} · ${lesson?.title || "Current lesson"}`;
}

function renderAcademySyncStatus() {
  if (!els.academySyncStatus) return;
  const configured = academyProgressService.configured;
  const saving = state.academyProgressSaving > 0;
  const pending = hasPendingProgressChanges();
  const progressUnavailable = !configured || state.academyProgressLoading || saving;
  els.resetAcademyProgressButton.disabled = !configured || state.academyProgressLoading || saving;
  els.exportProgressButton.disabled = state.academyProgressLoading || saving;
  els.importProgressInput.disabled = !configured || state.academyProgressLoading || saving;
  els.markExerciseCompleteButton.disabled = !configured || state.academyProgressLoading || saving;
  els.syncNowButton.classList.toggle("hidden", !pending);
  els.syncNowButton.disabled = !state.isOnline || progressUnavailable;
  document.querySelectorAll("[data-assessment]").forEach((button) => {
    button.disabled = !configured || state.academyProgressLoading || saving;
  });
  els.academySyncStatus.classList.toggle("error", !configured || Boolean(state.academyProgressError));
  els.academySyncStatus.classList.toggle("ready", configured && state.isOnline && !pending && !state.academyProgressLoading && !saving && !state.academyProgressError);
  if (state.academyProgressLoading) {
    els.academySyncStatus.textContent = configured ? "Saving..." : "Error syncing";
    return;
  }
  if (saving) {
    els.academySyncStatus.textContent = "Saving...";
    return;
  }
  if (!state.isOnline) {
    els.academySyncStatus.textContent = pending ? "Offline · Unsynced changes" : "Offline";
    return;
  }
  if (pending) {
    els.academySyncStatus.textContent = "Unsynced changes";
    return;
  }
  if (state.academyProgressError) {
    els.academySyncStatus.textContent = "Sync error";
    els.academySyncStatus.title = state.academyProgressError;
    return;
  }
  els.academySyncStatus.title = "";
  if (!configured) {
    els.academySyncStatus.textContent = "Sync error";
    els.academySyncStatus.title = academyProgressService.setupMessage;
    return;
  }
  els.academySyncStatus.textContent = "Online / Synced";
}

function renderProgressTransferStatus() {
  if (!els.progressTransferStatus) return;
  els.progressTransferStatus.textContent = state.progressTransferMessage;
  els.progressTransferStatus.classList.toggle("complete", Boolean(state.progressTransferMessage) && !state.progressTransferError);
  els.progressTransferStatus.classList.toggle("error", state.progressTransferError);
}

function parseRoute() {
  const [view = "home", id = null] = location.hash.replace(/^#/, "").split("/");
  const validViews = ["academy", "mission", "lesson", "exercise", "checkpoint", "library"];
  const routeView = validViews.includes(view) ? view : "home";
  return {
    view: routeView,
    ids: {
      missionId: routeView === "mission" ? id : null,
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
  if (view === "mission") {
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
  return selectedId && ["mission", "lesson", "exercise", "checkpoint"].includes(view)
    ? `${view}/${selectedId}`
    : view;
}

function selectedIdForView(view) {
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
  const overall = academyProgress();
  els.dashboardMissionSubtitle.textContent = `Current mission: ${mission.dashboardSubtitle || mission.title}`;
  els.dashboardMissionTitle.textContent = mission.title;
  els.dashboardMissionDescription.textContent = mission.description;
  els.dashboardCurrentPhase.textContent = phase?.title || "No phase selected";
  els.dashboardOverallProgress.textContent = `${overall.percent}%`;
  els.dashboardOverallProgressBar.style.width = `${overall.percent}%`;
  els.dashboardMissionProgress.textContent = `${progress.percent}%`;
  els.dashboardMissionProgressBar.style.width = `${progress.percent}%`;
  els.dashboardMissionStatus.textContent = `Status: ${isMissionComplete(mission) ? "Completed" : progress.completed ? "In progress" : "Not started"}`;
  els.dashboardMissionEstimate.textContent = mission.estimatedPracticeHours
    ? `Estimated practice: ${mission.estimatedPracticeHours}`
    : `Estimated completion: ${mission.estimatedSessions || "TBD"}`;
  els.dashboardNextStep.textContent = mission.nextStep || "";
  renderAcademyRoadmap();
}

function missionProgress(mission) {
  const progress = getProgress();
  const lessonIds = mission?.lessons || [];
  const lessonExercises = lessonIds
    .map((lessonId) => academyLessonsById().get(lessonId))
    .filter(Boolean)
    .flatMap((lesson) => lesson.exercises || []);
  const completed = lessonExercises.filter((exerciseId) => progress.completedExerciseIds.has(exerciseId)).length;
  const total = lessonExercises.length;
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
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
      ? "Unlocked"
      : `Locked: requires ${prerequisiteText(mission)}`;
  return `
    <button
      type="button"
      class="roadmap-mission${active ? " active" : ""}${!unlocked ? " locked" : ""}"
      data-mission-id="${escapeHtml(mission.id)}"
      ${unlocked ? "" : "disabled"}
    >
      <strong>${escapeHtml(mission.title)}</strong>
      <span>${escapeHtml(status)}</span>
    </button>
  `;
}

function renderMissionBrief() {
  const mission = currentMission();
  if (!mission) return;
  const skillsById = academySkillsById();
  const skills = (mission.skillIds || [])
    .map((skillId) => skillsById.get(skillId))
    .filter(Boolean);
  const skillNames = skills.length
    ? skills.map((skill) => skill.title)
    : mission.skillsDeveloped || [];

  els.missionBriefTitle.textContent = mission.title;
  els.missionBriefSubtitle.textContent = mission.subtitle || "";
  els.missionEstimatedCompletion.textContent = mission.estimatedPracticeHours || mission.estimatedSessions || "TBD";
  els.missionStatus.textContent = mission.completed ? "Completed" : "Not started";
  els.missionObjective.textContent = mission.description;
  els.missionWhyItMatters.textContent = mission.whyItMatters;
  els.startLessonButton.textContent = firstLessonForMission(mission)?.lessonNumber
    ? `Start Lesson ${firstLessonForMission(mission).lessonNumber}`
    : "Start Lesson";
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
  const checkpoint = academyCheckpointsById().get(lesson.checkpoint);
  const exercises = (lesson.exercises || [])
    .map((exerciseId) => exercisesById.get(exerciseId))
    .filter(Boolean);
  const progress = getProgress();

  els.lessonMissionName.textContent = `Mission: ${mission.title}`;
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
  els.lessonCheckpointTitle.textContent = checkpoint?.title || "";
  els.lessonCheckpointRequirements.innerHTML = renderListItems(checkpoint?.requirements);
  els.startCheckpointButton.disabled = !checkpoint;
}

function renderExerciseDetail() {
  const mission = currentMissionForLesson();
  const lesson = currentLesson();
  const exercise = currentExercise();
  if (!mission || !lesson || !exercise) return;
  const steps = exerciseInstructionSteps(exercise);
  const exerciseIndex = (lesson.exercises || []).indexOf(exercise.id);
  const isLastExercise = exerciseIndex === (lesson.exercises || []).length - 1;
  const progress = getProgress();

  els.exerciseLessonName.textContent = `${mission.title} · ${lesson.title}`;
  els.exerciseTitle.textContent = exercise.title;
  els.exerciseMeta.textContent = [
    `Related lesson: ${lesson.title}`,
    `Duration: ${exercise.durationMinutes} minutes`,
    exercise.tempo ? `Tempo: ${exercise.tempo}` : ""
  ].filter(Boolean).join(" · ");
  els.exerciseObjective.textContent = exercise.objective;
  els.exerciseInstructions.innerHTML = steps
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");
  els.exercisePassCriteria.textContent = exercise.passCriteria;
  const completed = progress.completedExerciseIds.has(exercise.id);
  els.markExerciseCompleteButton.textContent = completed ? "Completed" : "Mark Complete";
  els.markExerciseCompleteButton.classList.toggle("complete-action", completed);
  els.exerciseCompletionStatus.textContent = completed ? "Exercise complete for this session." : "Not complete yet.";
  els.exerciseCompletionStatus.classList.toggle("complete", completed);
  els.nextExerciseButton.disabled = isLastExercise;
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
  const index = lesson.exercises.indexOf(exercise.id);
  const nextIndex = Math.min(index + 1, lesson.exercises.length - 1);
  state.selectedExerciseId = lesson.exercises[nextIndex];
  setView("exercise", state.selectedExerciseId);
  renderExerciseDetail();
}

async function markCurrentExerciseComplete() {
  const exercise = currentExercise();
  if (!exercise) return;
  await markExerciseComplete(exercise.id);
  render();
}

function renderCheckpoint() {
  const lesson = currentLesson();
  const checkpoint = currentCheckpoint();
  if (!lesson || !checkpoint) return;

  els.checkpointTitle.textContent = checkpoint.title;
  els.checkpointLessonTitle.textContent = `Related lesson: ${lesson.title}`;
  els.checkpointPurpose.textContent = checkpoint.purpose || "";
  els.checkpointRequirements.innerHTML = renderListItems(checkpoint.requirements);
  const assessment = getCheckpointResult(checkpoint.id);
  document.querySelectorAll("[data-assessment]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.assessment === assessment);
  });
  els.checkpointSuccessMessage.textContent = assessment === "passed"
    ? "Checkpoint passed. You are ready to continue."
    : "";
  els.checkpointSuccessMessage.classList.toggle("complete", assessment === "passed");
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
  els.chartDisplay.innerHTML = `${renderChartImage(song)}${formatChart(song.chart || "")}${renderSourceImages(song)}`;
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
