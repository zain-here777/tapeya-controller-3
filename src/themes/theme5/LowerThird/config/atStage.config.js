import { createLowerThirdConfig } from "./shared.config.js";

/**
 * AtStage — isolated config.
 * Same Default shell; right panel shows At This Stage comparison.
 */
export const atStageConfig = createLowerThirdConfig({
  id: "at-stage",
  defaultBattingColorKey: "teamA",
  defaultBowlingColorKey: "teamB",
});
