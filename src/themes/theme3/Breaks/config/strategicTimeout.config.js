import { createBreakConfig } from "./shared.config.js";

/** StrategicTimeout — isolated config. */
export const strategicTimeoutConfig = createBreakConfig({
  id: "strategic-timeout",
  statusLabel: "STRATEGIC TIMEOUT",
  showTimer: true,
  timerSeconds: 300,
});
