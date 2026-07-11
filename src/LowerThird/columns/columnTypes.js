/**
 * Column definition shape used across all lower-third variants.
 *
 * @typedef {'expandable' | 'stat' | 'content'} ColumnLayout
 *
 * @typedef {Object} LowerThirdColumn
 * @property {string} key
 * @property {string} bg - Tailwind background class
 * @property {ColumnLayout} layout
 * @property {boolean} [dividerBefore]
 * @property {string} className
 * @property {import('react').ReactNode} content
 */

export const STAT_COLUMN_BG = "bg-black";

export const DEFAULT_COLUMN_CLASS = {
  team: "relative flex h-full min-w-0 items-center overflow-hidden ctrl-pl-20",
  batter: "relative flex h-full min-w-0 items-center overflow-visible",
  fow: "relative flex h-full min-w-0 items-center overflow-hidden",
  stat: `flex h-full shrink-0 items-center justify-center overflow-hidden ${STAT_COLUMN_BG} ctrl-px-12`,
};
