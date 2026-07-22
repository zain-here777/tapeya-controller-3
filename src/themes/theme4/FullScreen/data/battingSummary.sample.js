import teamALogo from "../../../../shared/england-team.png";

/** Sample data for Theme 4 Batting Summary — England. */
const battingSummarySample = {
  tournament: "ICC WORLD TEST CHAMPIONSHIP",
  team: {
    code: "ENG",
    name: "ENGLAND",
    logoUrl: teamALogo,
    colorKey: "teamA",
  },
  batters: [
    { name: "CRAWLEY", howOut: "CAUGHT", runs: 24, balls: 18, onStrike: false },
    { name: "DUCKETT", howOut: "LBW", runs: 31, balls: 22, onStrike: false },
    { name: "ROOT", howOut: "NOT OUT", runs: 62, balls: 78, onStrike: true },
    { name: "BROOK", howOut: "NOT OUT", runs: 28, balls: 34, onStrike: false },
    { name: "STOKES", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "SMITH", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "WOAKES", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "ARCHER", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "WOOD", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "LEACH", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
    { name: "ANDERSON", howOut: "DNB", runs: 0, balls: 0, onStrike: false },
  ],
  summary: {
    extras: 8,
    overs: "32.4",
    score: "153-2",
  },
};

export default battingSummarySample;
