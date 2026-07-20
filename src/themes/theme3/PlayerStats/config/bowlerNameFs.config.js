import { createPlayerStatsConfig } from "./shared.config.js";

/** Shared panel props for bowler full-screen player stats. */
export const bowlerFsPanelProps = {
  panelBg: "bg-bowler-panel",
  logoBg: "bg-bowler-panel",
  statBlockBg: "bg-bowler-panel",
  pageClassName: "name-fs-page--bowler",
};

/** Bowler NameFS config. */
export const bowlerNameFsConfig = createPlayerStatsConfig({
  id: "bowler-name-fs",
  role: "bowler",
});
