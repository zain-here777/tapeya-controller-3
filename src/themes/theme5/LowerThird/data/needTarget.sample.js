import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample match data for the Theme 5 NeedTarget controller only. */
const needTargetSample = {
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

  stats: [
    { label: "TO WIN", value: "112" },
    { label: "BALLS", value: "84" },
  ],

  featuredPlayer: {
    id: "f1",
    name: "Henry",
    wickets: 0,
    runs: 7,
    overs: "0.4",
    economy: "10.50",
    dotBalls: 3,
    overBalls: ["dot", "dot", "dot", 1, "5WD", "WD"],
  },
};

export default needTargetSample;
