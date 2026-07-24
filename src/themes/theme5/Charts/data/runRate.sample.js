import {
  T4_TOURNAMENT,
  createChartTeams,
} from "../../data/matchIdentity.js";

/** Sample data for Theme 5 Run Rate chart. */
const chartRunRateSample = {
  title: "RUN RATE GRAPH",
  tournament: T4_TOURNAMENT,
  teams: createChartTeams(),
  chart: {
    yMax: 50,
    yTicks: [0, 10, 20, 30, 40, 50],
    yLabel: "RUN RATE",
    xLabel: "OVERS",
    buckets: [
      { label: "1-4", top: 32, bottom: 28 },
      { label: "5-8", top: 38, bottom: 41 },
      { label: "9-12", top: 29, bottom: 35 },
      { label: "13-16", top: 44, bottom: 39 },
      { label: "17-20", top: 36, bottom: 42 },
    ],
    topWicketBadge: null,
  },
  summary: {
    top: { name: "ENGLAND", score: "152/4" },
    bottom: { name: "NEW ZEALAND", score: "155/3" },
  },
};

export default chartRunRateSample;
