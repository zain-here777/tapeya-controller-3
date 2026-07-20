import {
  createTeamColumn,
  createBatterColumn,
  createFowColumn,
  createStatColumn,
} from "./builders/index.js";
import { STAT_COLUMN_BG } from "./columnTypes.js";

/**
 * Build left-side columns from match data + per-variant column config.
 * Pass `match.stat` (single) or `match.stats` (array) — Partnership, CRR, To Win, Balls, etc.
 * When `match.fallOfWickets` is set, it replaces the at-crease batters middle section.
 */
export function buildScorecardColumns(match, columnConfig = {}) {
  const {
    playerBg = "bg-panel-player",
    statBg = STAT_COLUMN_BG,
    teamColumn = {},
    batterColumn = {},
    fowColumn = {},
    statColumn = {},
  } = columnConfig;

  const columns = [
    createTeamColumn({
      team: match.teamA,
      bg: playerBg,
      ...teamColumn,
    }),
  ];

  if (match.fallOfWickets?.length) {
    columns.push(
      createFowColumn({
        wickets: match.fallOfWickets,
        bg: playerBg,
        ...fowColumn,
      })
    );
  } else {
    (match.batters || []).forEach((batter) => {
      columns.push(
        createBatterColumn({
          batter,
          bg: playerBg,
          ...batterColumn,
        })
      );
    });
  }

  const stats = match.stats?.length
    ? match.stats
    : match.stat
      ? [match.stat]
      : [];

  stats.forEach((stat, index) => {
    columns.push(
      createStatColumn({
        stat,
        bg: statBg,
        dividerBefore: index > 0,
        ...statColumn,
      })
    );
  });

  return columns;
}
