import { createFullScreenConfig } from "./shared.config.js";

/**
 * NextMatch — full-screen upcoming matchup graphic.
 * Same UI shell as ThisMatch / InningsBreak.
 */
export const nextMatchConfig = createFullScreenConfig({
  id: "next-match",
  statusLabel: "NEXT MATCH",
});
