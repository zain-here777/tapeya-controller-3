import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../assets/TCP-logo.webp";

/** Sample match data for the WinPrediction controller only — no CRR/stat slot. */
const winPredictionSample = {
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

  winPrediction: {
    titleLine1: "WIN",
    titleLine2: "PREDICTION",
    titleAlign: "center",
    showLeadingDivider: true,
    showTrailingDivider: true,
    stats: [
      { label: "ALB", value: "65%" },
      { label: "KBU", value: "35%" },
    ],
  },
};

export default winPredictionSample;
