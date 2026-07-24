/**
 * Build broadcast bar CSS variables from Theme 5 team hex colors.
 *
 * @param {string} primaryHex
 * @param {string} [secondaryHex]
 */
export function teamBroadcastPalette(primaryHex, secondaryHex) {
  const primary = normalizeHex(primaryHex);
  const secondary = normalizeHex(secondaryHex || primaryHex);
  const mid = mixHex(primary, secondary, 0.5);
  const highlight = mixHex(mid, "#ffffff", 0.22);
  const deep = mixHex(primary, "#000000", 0.18);
  const wingDepth = mixHex(secondary, primary, 0.72);

  return {
    "--t5-broadcast-team-a": primary,
    "--t5-broadcast-team-b": secondary,
    "--t5-broadcast-team-mid": mid,
    "--t5-broadcast-team-deep": deep,
    "--t5-broadcast-highlight": highlight,
    "--t5-broadcast-accent": secondary,
    "--t5-broadcast-text": "#ffffff",
    "--t5-broadcast-text-solid": "#ffffff",
    "--t5-broadcast-text-depth": wingDepth,
  };
}

/**
 * Broadcast palette from an action plate — vivid hue-forward (dark edges, saturated core).
 *
 * @param {string} plateHex
 * @param {string} [inkHex]
 */
export function actionPlateBroadcastPalette(plateHex, _inkHex = "#0f2744") {
  const plate = normalizeHex(plateHex);
  const deep = mixHex(plate, "#000000", 0.62);
  const base = mixHex(plate, "#000000", 0.42);
  const mid = mixHex(plate, "#000000", 0.18);
  const accent = plate;
  const vivid = mixHex(plate, "#ffffff", 0.14);
  const highlight = mixHex(plate, "#ffffff", 0.38);
  const textDepth = mixHex(plate, "#000000", 0.72);
  const diagonalDark = mixHex(plate, "#000000", 0.58);
  const diagonalLight = mixHex(plate, "#ffffff", 0.2);
  const diagonalDarkAlt = mixHex(plate, "#000000", 0.38);
  const diagonalLightAlt = plate;
  const diagonalDarkDeep = mixHex(plate, "#000000", 0.72);
  const diagonalLightDeep = mixHex(plate, "#ffffff", 0.32);

  return {
    "--t5-broadcast-team-a": base,
    "--t5-broadcast-team-b": mid,
    "--t5-broadcast-team-mid": mid,
    "--t5-broadcast-team-deep": deep,
    "--t5-broadcast-highlight": highlight,
    "--t5-broadcast-accent": accent,
    "--t5-broadcast-vivid": vivid,
    "--t5-broadcast-diagonal-a": diagonalDark,
    "--t5-broadcast-diagonal-b": diagonalLight,
    "--t5-broadcast-diagonal-a-alt": diagonalDarkAlt,
    "--t5-broadcast-diagonal-b-alt": diagonalLightAlt,
    "--t5-broadcast-diagonal-a-deep": diagonalDarkDeep,
    "--t5-broadcast-diagonal-b-deep": diagonalLightDeep,
    "--t5-broadcast-text": "#ffffff",
    "--t5-broadcast-text-solid": "#ffffff",
    "--t5-broadcast-text-depth": textDepth,
  };
}

function normalizeHex(hex) {
  if (!hex || typeof hex !== "string") return "#070E35";
  const value = hex.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(value)) return value;
  return "#070E35";
}

function mixHex(a, b, ratio) {
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const t = Math.min(1, Math.max(0, ratio));
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${[r, g, bl].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}
