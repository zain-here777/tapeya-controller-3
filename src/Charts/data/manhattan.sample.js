import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import teamBLogo from "../../TCP-logo.webp";

/** Sample data for Manhattan chart. */
const manhattanSample = {
  title: "MANHATTAN",
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
    yMax: 50,
    yTicks: [0, 10, 20, 30, 40, 50],
    yLabel: "RUNS PER OVER",
    xLabel: "OVERS",
    buckets: [
      { label: "1-4", top: 32, bottom: 28 },
      { label: "5-8", top: 38, bottom: 41 },
      { label: "9-12", top: 29, bottom: 35 },
      { label: "13-16", top: 44, bottom: 39 },
      { label: "17-20", top: 36, bottom: 42 },
    ],
    topWicketBadge: { bucketIndex: 1, value: 2 },
  },
  summary: {
    top: { name: "ISLAMABAD UNITED", score: "152/4" },
    bottom: { name: "MULTAN SULTANS", score: "155/3" },
  },
};

export default manhattanSample;
