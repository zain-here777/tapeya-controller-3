import { createCrossTabStore } from "../shared/sync/createCrossTabStore.js";
import { DEFAULT_THEME_ID } from "../shared/constants/themeIds.js";
import { resolveThemeId } from "./registry.js";

const themeStore = createCrossTabStore(
  "scorecard-active-theme",
  (value) => typeof value === "string" && value.length > 0
);

/** @returns {string} */
export function readActiveTheme() {
  return resolveThemeId(themeStore.read() ?? DEFAULT_THEME_ID);
}

/** @param {string} themeId */
export function writeActiveTheme(themeId) {
  const resolved = resolveThemeId(themeId);
  // Skip no-op writes so tabs do not fight each other with redundant events.
  if (themeStore.read() === resolved) return resolved;
  return themeStore.write(resolved);
}

/** @param {(themeId: string) => void} onChange */
export function subscribeActiveTheme(onChange) {
  return themeStore.subscribe((value) => {
    onChange(resolveThemeId(value ?? DEFAULT_THEME_ID));
  });
}

export { themeStore as activeThemeStore };
