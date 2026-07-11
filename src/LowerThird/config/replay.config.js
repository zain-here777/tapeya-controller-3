import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Replay — isolated config.
 * Same action-banner UI as Four; do not import other controller configs.
 */
export const replayConfig = createLowerThirdConfig({
  id: "replay",
});
