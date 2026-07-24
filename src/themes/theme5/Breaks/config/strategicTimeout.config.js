import { createBreakConfig } from "./shared.config.js";

export const strategicTimeoutConfig = createBreakConfig({
  id: "strategic-timeout",
  statusLabel: "STRATEGIC TIMEOUT",
  showTimer: true,
  timerSeconds: 300,
});
