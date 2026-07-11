/**
 * Shared lower-third shell — core, columns, and shared config helpers only.
 * Controllers live in src/controllers/ and must stay isolated from each other.
 */

export { default as LowerThirdBar } from "./core/LowerThirdBar.jsx";
export { default as LowerThirdController } from "./core/LowerThirdController.jsx";
export { default as ScorecardLowerThird } from "./core/ScorecardLowerThird.jsx";
export { default as Divider } from "./core/Divider.jsx";
export { default as PlayerAvatar } from "./core/PlayerAvatar.jsx";

export { buildScorecardColumns } from "./columns/buildColumns.js";
export {
  createTeamColumn,
  createBatterColumn,
  createStatColumn,
} from "./columns/builders/index.js";
export { default as BowlerPanel } from "./columns/BowlerPanel.jsx";
export { DEFAULT_COLUMN_CLASS } from "./columns/columnTypes.js";

export {
  lowerThirdSharedConfig,
  createLowerThirdConfig,
} from "./config/shared.config.js";
export { mergeControllerConfig } from "./config/mergeControllerConfig.js";
