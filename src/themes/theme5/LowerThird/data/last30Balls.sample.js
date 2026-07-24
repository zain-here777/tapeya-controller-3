import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample match data for the Theme 5 Last30Balls controller only — no CRR/stat slot. */
const last30BallsSample = {
  teamA: {
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
    runs: 44,
    wickets: 0,
    overs: "6.4",
    oversLimit: 50,
  },

  teamB: {
    code: "NZ",
    name: "New Zealand",
    logoUrl: teamBLogo,
    theme: "gold",
    colorKey: "teamB",
  },

  batters: [
    {
      id: "b1",
      name: "Duckett",
      runs: 18,
      balls: 17,
      onStrike: false,
    },
    {
      id: "b2",
      name: "Bethell",
      runs: 17,
      balls: 23,
      onStrike: true,
    },
  ],

  last30Balls: {
    titleLine1: "LAST 30",
    titleLine2: "BALLS",
    stats: [
      { label: "DOTS", value: 1 },
      { label: "FOURS", value: 1 },
      { label: "SIXES", value: 1 },
      { label: "WICKETS", value: 1 },
      { label: "RUNS", value: 72 },
    ],
  },
};

export default last30BallsSample;
