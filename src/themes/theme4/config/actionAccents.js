/**
 * Soft plate colors shared by Theme 4 Full Screen Transition + Lower Third actions.
 * Light plates with dark navy ink (ECB chapter / dock language).
 */
export const T4_ACTION_PLATE = {
  four: "#98b9d9",
  six: "#c4b5fd",
  "not-out": "#86efac",
  out: "#fca5a5",
  "no-ball": "#fcd34d",
  wide: "#fde68a",
  fifty: "#fde047",
  hundred: "#fef08a",
  replay: "#7dd3fc",
  "decision-pending": "#fdba74",
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
