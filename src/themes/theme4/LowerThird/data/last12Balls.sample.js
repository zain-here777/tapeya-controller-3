import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample match data for the Theme 4 Last12Balls controller only. */
const last12BallsSample = {
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

  last12Balls: {
    title: "LAST 12 BALLS",
    runs: 73,
    balls: [4, 6, 2, "WD", "W", "dot", 1, 4, "dot", 6, 1, "dot"],
  },
};

export default last12BallsSample;
