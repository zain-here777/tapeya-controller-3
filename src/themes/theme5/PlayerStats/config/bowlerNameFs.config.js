import { createPlayerStatsConfig } from "./shared.config.js";

/** Shared visual props for Theme 5 bowler full-screen player stats. */
export const bowlerFsPanelProps = {
  variant: "bowler",
};

export const bowlerNameFsConfig = createPlayerStatsConfig({
  id: "bowler-name-fs",
  role: "bowler",
  defaultTeamColorKey: "teamB",
});
