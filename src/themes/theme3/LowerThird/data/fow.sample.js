import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";

/** Sample match data for the FOW (Fall of Wickets) controller only. */
const fowSample = {
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

  fallOfWickets: [
    { id: "w1", order: 1, score: 78, name: "Ahmad" },
    { id: "w2", order: 2, score: 79, name: "Ali" },
    { id: "w3", order: 3, score: 95, name: "Hassan" },
    { id: "w4", order: 4, score: 112, name: "Omar" },
  ],
};

export default fowSample;
