import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../TCP-logo.webp";

/**
 * Sample match data for MatchScorecardB only.
 * Isolated from MatchScorecard — change freely without affecting other controllers.
 */
const sampleMatchB = {
  teamA: {
    code: "ALB",
    logoUrl: teamALogo,
    theme: "gold",
    runs: 9,
    wickets: 0,
    overs: "1.0",
    oversLimit: 20,
    inningsLabel: "P1",
  },

  teamB: {
    code: "KBU",
    name: "Khartoum Bulls",
    logoUrl: teamBLogo,
    theme: "gold",
  },

  batters: [
    {
      id: "b1",
      name: "SHAHAB",
      runs: 5,
      balls: 4,
      onStrike: true,
    },
    {
      id: "b2",
      name: "MUBASSH",
      runs: 4,
      balls: 2,
      onStrike: false,
    },
  ],

  stat: { label: "PARTNERSHIP", value: "9 (6)" },

  featuredPlayer: {
    id: "f1",
    name: "FAHEEM",
    role: "bowler",
    wickets: 0,
    runs: 9,
    overs: "1.0",
    overBalls: ["dot", "dot", 4, 1, "dot", 4],
  },
};

export default sampleMatchB;
