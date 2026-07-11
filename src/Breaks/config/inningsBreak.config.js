import { createBreakConfig } from "./shared.config.js";

/**
 * InningsBreak — isolated config.
 * Full-page break graphic; status pill label only differs per break type.
 */
export const inningsBreakConfig = createBreakConfig({
  id: "innings-break",
  statusLabel: "INNINGS BREAK",
});
