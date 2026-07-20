import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../assets/TCP-logo.webp";

/** Sample match data for the Last30Balls controller only — no CRR/stat slot. */
const last30BallsSample = {
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
