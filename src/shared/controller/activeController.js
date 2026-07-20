const STORAGE_KEY = "scorecard-active-controller";

/**
 * @typedef {{ category: string, id: string }} ActiveController
 */

/** @returns {ActiveController|null} */
export function readActiveController() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.category && parsed?.id) return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

/** @param {string} category @param {string} id */
export function writeActiveController(category, id) {
  const next = { category, id };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("controller-selection", { detail: next }));
  return next;
}

/**
 * Subscribe to active-controller changes (same tab + other tabs).
 * @param {(value: ActiveController|null) => void} onChange
 * @returns {() => void} unsubscribe
 */
export function subscribeActiveController(onChange) {
  const handleStorage = (event) => {
    if (event.key === STORAGE_KEY) {
      onChange(readActiveController());
    }
  };
  const handleLocal = (event) => {
    onChange(event.detail ?? readActiveController());
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("controller-selection", handleLocal);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("controller-selection", handleLocal);
  };
}

export { STORAGE_KEY as ACTIVE_CONTROLLER_STORAGE_KEY };
