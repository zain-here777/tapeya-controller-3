import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../assets/TCP-logo.webp";

/** Sample match data for the AtStage controller only — no CRR/stat slot. */
const atStageSample = {
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

  atStage: {
    titleLine1: "AT THIS",
    titleLine2: "STAGE",
    showLeadingDivider: true,
    showTrailingDivider: true,
    teams: [
      {
        id: "stage-a",
        code: "SOK",
        runs: 105,
        wickets: 0,
        overs: "4.5",
      },
      {
        id: "stage-b",
        code: "FCM",
        runs: 96,
        wickets: 3,
        overs: "4.5",
      },
    ],
  },
};

export default atStageSample;
