import {
  T4_TOURNAMENT,
  createIdentityMatch,
} from "../../data/matchIdentity.js";

/** Sample data for Theme 4 Match Summary — England vs New Zealand. */
const matchSummaryFsSample = {
  ...createIdentityMatch({
    teamA: {
      theme: "batsman",
      score: "153-2",
      overs: "32.4",
      batters: [
        { name: "ROOT", runs: 62, balls: 78, onStrike: true },
        { name: "BROOK", runs: 28, balls: 34, onStrike: false },
        { name: "DUCKETT", runs: 31, balls: 22, onStrike: false },
      ],
      bowlers: [
        { name: "ANDERSON", wickets: 2, runs: 28, overs: "12.0" },
        { name: "ARCHER", wickets: 1, runs: 34, overs: "10.0" },
      ],
    },
    teamB: {
      theme: "bowler",
      score: "111-3",
      overs: "28.0",
      batters: [
        { name: "WILLIAMSON", runs: 44, balls: 68, onStrike: true },
        { name: "MITCHELL", runs: 18, balls: 26, onStrike: false },
        { name: "LATHAM", runs: 22, balls: 31, onStrike: false },
      ],
      bowlers: [
        { name: "BOULT", wickets: 1, runs: 38, overs: "10.0" },
        { name: "SOUTHEE", wickets: 1, runs: 41, overs: "9.0" },
      ],
    },
  }),
  title: "MATCH SUMMARY",
  tournament: T4_TOURNAMENT,
  result: "ENGLAND LEAD BY 42 RUNS",
};

export default matchSummaryFsSample;
