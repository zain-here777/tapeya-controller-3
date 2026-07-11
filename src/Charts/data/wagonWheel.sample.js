import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../TCP-logo.webp";

/** Sample data for Wagon Wheel chart. */
const wagonWheelSample = {
  title: "WAGON WHEEL",
  tournament: "LAHORE SUMMER CUP",
  teams: {
    top: {
      code: "ISU",
      name: "ISLAMABAD UNITED",
      logoUrl: teamALogo,
      accent: "#c40038",
    },
    bottom: {
      code: "SLT",
      name: "MULTAN SULTANS",
      logoUrl: teamBLogo,
      accent: "#e0c05a",
    },
  },
  player: {
    name: "MOHAMMAD RIZWAN",
    teamName: "ISLAMABAD UNITED",
    role: "BATSMAN",
  },
  shots: [
    { angle: -20, dist: 0.55, runs: 1 },
    { angle: 35, dist: 0.7, runs: 4 },
    { angle: -80, dist: 0.45, runs: 2 },
    { angle: 110, dist: 0.85, runs: 6 },
    { angle: 15, dist: 0.5, runs: 1 },
    { angle: -140, dist: 0.75, runs: 4 },
    { angle: 60, dist: 0.4, runs: 3 },
    { angle: -45, dist: 0.9, runs: 6 },
    { angle: 160, dist: 0.6, runs: 1 },
    { angle: -100, dist: 0.65, runs: 2 },
  ],
};

export default wagonWheelSample;
