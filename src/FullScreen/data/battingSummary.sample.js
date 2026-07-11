import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";

/** Sample data for the full-screen BattingSummary controller only. */
const battingSummarySample = {
  tournament: "LAHORE SUMMER CUP",
  team: {
    code: "ISU",
    name: "ISLAMABAD UNITED",
    logoUrl: teamALogo,
  },
  batters: [
    { name: "RIZWAN", howOut: "NOT OUT", runs: 72, balls: 3, onStrike: true },
    { name: "KHAN", howOut: "CAUGHT", runs: 0, balls: 1, onStrike: false },
    { name: "SHAH", howOut: "NOT OUT", runs: 0, balls: 1, onStrike: true },
    { name: "HALES", howOut: "BOWLED", runs: 18, balls: 12, onStrike: false },
    { name: "INGRAM", howOut: "LBW", runs: 9, balls: 7, onStrike: false },
    { name: "ASHRAF", howOut: "CAUGHT", runs: 4, balls: 5, onStrike: false },
    { name: "ALI", howOut: "RUN OUT", runs: 2, balls: 3, onStrike: false },
    { name: "STIRLING", howOut: "CAUGHT", runs: 11, balls: 8, onStrike: false },
    { name: "SHADAB", howOut: "BOWLED", runs: 6, balls: 4, onStrike: false },
    { name: "NASEEM", howOut: "NOT OUT", runs: 1, balls: 2, onStrike: false },
    { name: "WASIM", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
  ],
  summary: {
    extras: 1,
    overs: "0.5",
    score: "73-1",
  },
};

export default battingSummarySample;
