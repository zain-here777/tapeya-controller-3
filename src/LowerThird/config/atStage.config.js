import { createLowerThirdConfig } from "./shared.config.js";

/**
 * AtStage — isolated config.
 * Same layout defaults as Default; do not import other controller configs.
 */
export const atStageConfig = createLowerThirdConfig({
  id: "at-stage",
});
