import { AVATAR_WIDTH_LG, BAR_HEIGHT } from "./layout.js";

/**
 * Avatar pop-out settings (MatchScorecardB and other variants).
 *
 * @typedef {Object} AvatarConfig
 * @property {number} pop - Extra space above the bar for heads (px)
 * @property {number} scale - Image scale from bottom edge (1 = fit inside bar)
 * @property {number} width - Avatar slot width (px)
 * @property {number} offsetX - Horizontal nudge in px (+ = right, − = left)
 * @property {number} gap - Space between avatar slot and name text (px)
 * @property {number} padStart - Equal inset from column start / divider (px)
 * @property {number} padEnd - Equal inset from column end / divider (px)
 */

/** Avatars fully inside the bar. */
export const AVATAR_CONFIG_NONE = {
  pop: 0,
  scale: 1,
  width: AVATAR_WIDTH_LG,
  offsetX: 0,
  gap: 26,
  padStart: 16,
  padEnd: 16,
};

/** Default pop-out look for MatchScorecardB — tweak these values to adjust. */
export const AVATAR_CONFIG_B = {
  pop: 62,
  scale: 1.28,
  width: AVATAR_WIDTH_LG,
  offsetX: 0,
  gap: 26,
  padStart: 16,
  padEnd: 16,
};

/** @param {Partial<AvatarConfig> | number | undefined} input */
export function resolveAvatarConfig(input) {
  if (typeof input === "number") {
    return { ...AVATAR_CONFIG_NONE, pop: input };
  }
  if (!input || typeof input !== "object") {
    return { ...AVATAR_CONFIG_NONE };
  }
  return { ...AVATAR_CONFIG_NONE, ...input };
}

/** @param {AvatarConfig} avatar */
export function avatarCssVars(avatar) {
  const slotMarginX = Math.max(0, (avatar.scale - 1) * avatar.width * 0.22);

  return {
    "--avatar-pop": `${avatar.pop}px`,
    "--avatar-scale": String(avatar.scale),
    "--avatar-width": `${avatar.width}px`,
    "--avatar-offset-x": `${avatar.offsetX}px`,
    "--avatar-gap": `${avatar.gap}px`,
    "--avatar-pad-start": `${avatar.padStart}px`,
    "--avatar-pad-end": `${avatar.padEnd}px`,
    "--avatar-slot-margin-x": `${slotMarginX}px`,
    "--avatar-bar-height": `${BAR_HEIGHT}px`,
  };
}

/** Shell height including headroom above the bar. */
export function avatarShellHeight(avatar, showAvatars = true) {
  if (!showAvatars) {
    return BAR_HEIGHT;
  }
  return BAR_HEIGHT + avatar.pop;
}

export function hasAvatarPop(avatar) {
  return avatar.pop > 0 || avatar.scale > 1;
}
