/**
 * Action plate colors — Theme 5 FST + Lower Third actions.
 * Saturated / broadcast-primary hues (Out = red, Four = blue, etc.).
 */
export const T4_ACTION_PLATE = {
  four: "#1565d8",
  six: "#7c3aed",
  "not-out": "#16a34a",
  out: "#e60000",
  "no-ball": "#f5c400",
  wide: "#f59e0b",
  fifty: "#eab308",
  hundred: "#fbbf24",
  replay: "#0284c7",
  "decision-pending": "#ea580c",
};

export const T4_ACTION_INK = "#0f2744";

/** Map controller / config ids onto T4_ACTION_PLATE keys. */
const ACTION_ID_ALIASES = {
  four: "four",
  six: "six",
  out: "out",
  "not-out": "not-out",
  notOut: "not-out",
  "no-ball": "no-ball",
  noBall: "no-ball",
  wide: "wide",
  fifty: "fifty",
  "50": "fifty",
  "50-up": "fifty",
  fiftyUp: "fifty",
  hundred: "hundred",
  "100": "hundred",
  "100-up": "hundred",
  hundredUp: "hundred",
  replay: "replay",
  "decision-pending": "decision-pending",
  decisionPending: "decision-pending",
};

/**
 * @param {string} [idOrKey]
 * @returns {keyof typeof T4_ACTION_PLATE}
 */
export function resolveActionPlateKey(idOrKey) {
  if (!idOrKey) return "four";
  return ACTION_ID_ALIASES[idOrKey] ?? idOrKey;
}

/**
 * @param {string} [idOrKey]
 * @returns {string}
 */
export function resolveActionPlateColor(idOrKey) {
  const key = resolveActionPlateKey(idOrKey);
  return T4_ACTION_PLATE[key] ?? T4_ACTION_PLATE.four;
}
