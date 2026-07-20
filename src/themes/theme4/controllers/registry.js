import Default from "./lower-third/DEFAULT.jsx";
import Empty from "./lower-third/EMPTY.jsx";
import defaultSampleMatch from "../LowerThird/data/default.sample.js";

export const LOWER_THIRD_PANEL_ROW_SIZE = 6;

const CONTROLLER_CATEGORIES = ["lower-third"];

const CONTROLLER_CATEGORY_LABELS = {
  "lower-third": "Lower Third",
};

/** @type {Array<{ id: string, label: string, component: import('react').ComponentType, getProps: () => Record<string, unknown> }>} */
const LOWER_THIRD_CONTROLLERS = [
  {
    id: "empty",
    label: "Empty",
    component: Empty,
    getProps: () => ({}),
  },
  {
    id: "default",
    label: "Default",
    component: Default,
    getProps: () => ({ match: defaultSampleMatch }),
  },
];

/** @type {Record<string, Record<string, import('react').ComponentType>>} */
export const controllerRegistry = {
  "lower-third": Object.fromEntries(
    LOWER_THIRD_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
};

/** @type {Array<{ category: string, id: string, label: string, getProps: () => Record<string, unknown> }>} */
export const controllerCatalog = LOWER_THIRD_CONTROLLERS.map(({ id, label, getProps }) => ({
  category: "lower-third",
  id,
  label,
  getProps,
}));

/** @param {string} category @param {string} id */
export function getController(category, id) {
  return controllerRegistry[category]?.[id] ?? null;
}

/** @param {string} category @param {string} id */
export function getControllerEntry(category, id) {
  return (
    controllerCatalog.find((entry) => entry.category === category && entry.id === id) ?? null
  );
}

export function getControllersByCategory() {
  return CONTROLLER_CATEGORIES.map((category) => ({
    category,
    label: CONTROLLER_CATEGORY_LABELS[category] ?? category,
    controllers: controllerCatalog.filter((entry) => entry.category === category),
    groups: null,
  }));
}

/** @param {string} category @param {string} id */
export function controllerOutputPath(category, id) {
  return `/output/${category}/${id}`;
}
