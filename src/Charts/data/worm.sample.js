import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../TCP-logo.webp";

/** Sample data for Worm / score comparison chart. */
const wormSample = {
  title: "SCORE COMPARISON",
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
  chart: {
    yMax: 160,
    yTicks: [0, 40, 80, 120, 160],
    xMax: 20,
    topSeries: [8, 18, 28, 42, 55, 68, 80, 95, 108, 120, 132, 145, 152, 152, 152, 152, 152, 152, 152, 152],
    bottomSeries: [6, 14, 24, 38, 50, 62, 78, 90, 102, 118, 130, 142, 155, 155, 155, 155, 155, 155, 155, 155],
    markerOver: 13,
    markerPointIndices: [12],
  },
  meta: {
    top: { total: "152/4", overs: "20.0", fours: 12, sixes: 4 },
    bottom: { total: "155/3", overs: "18.2", fours: 14, sixes: 5 },
  },
};

export default wormSample;
