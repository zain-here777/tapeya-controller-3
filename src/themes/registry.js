import { DEFAULT_THEME_ID, THEME_IDS } from "../shared/constants/themeIds.js";

/**
 * @typedef {import('./contract.js').ThemeModuleConfig} ThemeModule
 */

/**
 * @typedef {Object} ThemeDefinition
 * @property {string} id
 * @property {string} label
 * @property {string} description
 * @property {() => Promise<{ default: ThemeModule }>} loadModule
 */

/** @type {Record<string, ThemeDefinition>} */
export const themeRegistry = {
  [THEME_IDS.THEME_3]: {
    id: THEME_IDS.THEME_3,
    label: "Theme 3",
    description: "Original broadcast scorecard theme",
    loadModule: () => import("./theme3/index.js"),
  },
  [THEME_IDS.THEME_4]: {
    id: THEME_IDS.THEME_4,
    label: "Theme 4",
    description: "Next-generation isolated broadcast theme",
    loadModule: () => import("./theme4/index.js"),
  },
  [THEME_IDS.THEME_5]: {
    id: THEME_IDS.THEME_5,
    label: "Theme 5",
    description: "Isolated broadcast theme 5",
    loadModule: () => import("./theme5/index.js"),
  },
};

/** @type {ThemeDefinition[]} */
export const themeCatalog = Object.values(themeRegistry);

/** @type {Map<string, ThemeModule>} */
const moduleCache = new Map();

/** @type {Map<string, Promise<ThemeModule>>} */
const inflightLoads = new Map();

/** @type {Set<string>} */
const stylesLoaded = new Set();

/** @param {string} themeId */
export function getThemeDefinition(themeId) {
  return themeRegistry[themeId] ?? null;
}

/** @param {string} [themeId] */
export function resolveThemeId(themeId) {
  if (themeId && themeRegistry[themeId]) return themeId;
  return DEFAULT_THEME_ID;
}

/** @param {string} themeId */
export function getCachedThemeModule(themeId) {
  return moduleCache.get(resolveThemeId(themeId)) ?? null;
}

/**
 * Lazily load a theme module + styles. Results are cached so re-selecting a
 * theme is instant and concurrent callers share one in-flight promise.
 * @param {string} themeId
 * @returns {Promise<ThemeModule>}
 */
export async function loadThemeModule(themeId) {
  const resolvedId = resolveThemeId(themeId);
  const cached = moduleCache.get(resolvedId);
  if (cached) return cached;

  const inflight = inflightLoads.get(resolvedId);
  if (inflight) return inflight;

  const definition = getThemeDefinition(resolvedId);
  const loadPromise = (async () => {
    const module = await definition.loadModule();
    const themeModule = module.default;

    if (!stylesLoaded.has(resolvedId)) {
      await themeModule.loadStyles();
      stylesLoaded.add(resolvedId);
    }

    moduleCache.set(resolvedId, themeModule);
    return themeModule;
  })().finally(() => {
    inflightLoads.delete(resolvedId);
  });

  inflightLoads.set(resolvedId, loadPromise);
  return loadPromise;
}

/**
 * Warm theme chunks in the background after the active theme is ready.
 * Uses requestIdleCallback when available so first paint stays responsive.
 * @param {string} [activeThemeId]
 */
export function preloadThemesInIdle(activeThemeId) {
  const activeId = resolveThemeId(activeThemeId);
  const pendingIds = themeCatalog
    .map((theme) => theme.id)
    .filter((id) => id !== activeId && !moduleCache.has(id));

  if (pendingIds.length === 0) return;

  const preloadNext = (index = 0) => {
    if (index >= pendingIds.length) return;

    const run = () => {
      loadThemeModule(pendingIds[index])
        .catch(() => {
          /* preload is best-effort */
        })
        .finally(() => preloadNext(index + 1));
    };

    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(run, { timeout: 4000 });
    } else {
      setTimeout(run, 1200);
    }
  };

  preloadNext();
}
