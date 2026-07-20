/**
 * Generic localStorage + custom-event sync for cross-tab state.
 * Theme-agnostic utility — used by theme selection and other app-level state.
 *
 * @template T
 * @param {string} storageKey
 * @param {(value: unknown) => value is T} [validate]
 */
export function createCrossTabStore(storageKey, validate) {
  /** @returns {T|null} */
  function read() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (validate && !validate(parsed)) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  /** @param {T} value */
  function write(value) {
    localStorage.setItem(storageKey, JSON.stringify(value));
    window.dispatchEvent(
      new CustomEvent(`${storageKey}:change`, { detail: value })
    );
    return value;
  }

  /**
   * @param {(value: T|null) => void} onChange
   * @returns {() => void}
   */
  function subscribe(onChange) {
    const handleStorage = (event) => {
      if (event.key === storageKey) {
        onChange(read());
      }
    };

    const handleLocal = (event) => {
      onChange(event.detail ?? read());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(`${storageKey}:change`, handleLocal);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(`${storageKey}:change`, handleLocal);
    };
  }

  return { read, write, subscribe, storageKey };
}
