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
};

/** @type {ThemeDefinition[]} */
export const themeCatalog = Object.values(themeRegistry);

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
export async function loadThemeModule(themeId) {
  const definition = getThemeDefinition(resolveThemeId(themeId));
  const module = await definition.loadModule();
  const themeModule = module.default;

  await themeModule.loadStyles();

  return themeModule;
}
