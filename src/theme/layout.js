/** Layout tokens — single source of truth for the app (Vite / React). */
export const CONTROLLER_HEIGHT = 139;
export const BAR_HEIGHT = 139;
export { AVATAR_CONFIG_B, AVATAR_CONFIG_NONE } from "./avatarConfig.js";
export const BOWLER_PANEL_WIDTH_PERCENT = 42;
export const BOWLER_PANEL_MAX_WIDTH = 600;
export const EXPANDABLE_COLUMN_MIN_WIDTH = 118;
export const STAT_COLUMN_MIN_WIDTH = 175;
export const AVATAR_WIDTH_SM = 56;
export const AVATAR_WIDTH_MD = 84;
export const AVATAR_WIDTH_LG = 84;
export const AVATAR_HEIGHT_SM = 120;
export const DIVIDER_HEIGHT_RATIO = 0.58;

export const AVATAR_HEIGHT = BAR_HEIGHT;
export const DIVIDER_HEIGHT = Math.round(BAR_HEIGHT * DIVIDER_HEIGHT_RATIO);

export const AVATAR_SIZE = {
  sm: { width: AVATAR_WIDTH_SM, height: AVATAR_HEIGHT_SM },
  md: { width: AVATAR_WIDTH_MD, height: AVATAR_HEIGHT },
  lg: { width: AVATAR_WIDTH_LG, height: AVATAR_HEIGHT },
};

/** Tailwind v3 utility class names for column flex behaviour. */
export const COLUMN_LAYOUT_CLASS = {
  expandable: "col-expandable",
  stat: "col-stat",
  content: "col-content",
};
