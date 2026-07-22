import {
  T4_TOURNAMENT,
  createChartTeams,
} from "../../data/matchIdentity.js";

/** Sample data for Theme 4 Wagon Wheel chart. */
const wagonWheelSample = {
  title: "WAGON WHEEL",
  tournament: T4_TOURNAMENT,
  teams: createChartTeams(),
  player: {
    name: "JOE ROOT",
    teamName: "ENGLAND",
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
