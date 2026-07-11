import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../TCP-logo.webp";

/** Sample data for the full-screen MatchSummary controller only. */
const matchSummaryFsSample = {
  title: "MATCH SUMMARY",
  tournament: "LAHORE SUMMER CUP",
  result: "TIE",
  teamA: {
    code: "ISU",
    name: "ISLAMABAD UNITED",
    logoUrl: teamALogo,
    theme: "batsman",
    score: "73-1",
    overs: "0.5",
    batters: [
      { name: "RIZWAN", runs: 72, balls: 3, onStrike: true },
      { name: "KHAN", runs: 0, balls: 1, onStrike: false },
      { name: "SHAH", runs: 0, balls: 1, onStrike: false },
    ],
    bowlers: [{ name: "NAWAZ", wickets: 1, runs: 73, overs: "0.5" }],
  },
  teamB: {
    code: "SLT",
    name: "MULTAN SULTANS",
    logoUrl: teamBLogo,
    theme: "bowler",
    score: "12-0",
    overs: "0.1",
    batters: [
      { name: "NAWAZ", runs: 12, balls: 1, onStrike: true },
      { name: "AHMED", runs: 0, balls: 0, onStrike: false },
    ],
    bowlers: [{ name: "RIZWAN", wickets: 0, runs: 12, overs: "0.1" }],
  },
};

export default matchSummaryFsSample;
