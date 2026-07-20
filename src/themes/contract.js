/**
 * Formal theme module contract.
 * Every theme MUST implement this interface — no cross-theme imports allowed.
 */

/**
 * @typedef {Object} ControllerEntry
 * @property {string} category
 * @property {string} id
 * @property {string} label
 * @property {string} [group]
 * @property {() => Record<string, unknown>} getProps
 */

/**
 * @typedef {Object} ControllerCategoryGroup
 * @property {string} category
 * @property {string} label
 * @property {ControllerEntry[]} controllers
 * @property {Array<{ group: string, label: string, controllers: ControllerEntry[] }>|null} [groups]
 */

/**
 * @typedef {Object} ThemeModuleConfig
 * @property {string} id
 * @property {string} label
 * @property {() => Promise<unknown>} loadStyles
 * @property {import('react').ComponentType} ControlPanelPage
 * @property {import('react').ComponentType} OutputPage
 * @property {(category: string, id: string) => import('react').ComponentType|null} getController
 * @property {(category: string, id: string) => ControllerEntry|null} getControllerEntry
 * @property {() => ControllerCategoryGroup[]} getControllersByCategory
 * @property {(category: string, id: string) => string} controllerOutputPath
 * @property {import('react').ComponentType<{ category: string, id: string }>} ControllerHost
 * @property {ControllerEntry[]} controllerCatalog
 * @property {number} [LOWER_THIRD_PANEL_ROW_SIZE]
 */

/** @type {(keyof ThemeModuleConfig)[]} */
const REQUIRED_EXPORTS = [
  "id",
  "label",
  "loadStyles",
  "ControlPanelPage",
  "OutputPage",
  "getController",
  "getControllerEntry",
  "getControllersByCategory",
  "controllerOutputPath",
  "ControllerHost",
  "controllerCatalog",
];

/**
 * Validates and returns a theme module. Throws if the contract is incomplete.
 * @param {ThemeModuleConfig} config
 * @returns {ThemeModuleConfig}
 */
export function createThemeModule(config) {
  for (const key of REQUIRED_EXPORTS) {
    if (config[key] === undefined || config[key] === null) {
      throw new Error(
        `[ThemeContract] Theme "${config.id ?? "unknown"}" is missing required export: ${key}`
      );
    }
  }

  if (typeof config.loadStyles !== "function") {
    throw new Error(`[ThemeContract] Theme "${config.id}" loadStyles must be a function`);
  }

  return Object.freeze({ ...config });
}
