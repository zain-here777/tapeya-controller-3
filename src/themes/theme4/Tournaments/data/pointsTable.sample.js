import { T4_TOURNAMENT } from "../../data/matchIdentity.js";

/** Sample data for Theme 4 PointsTable — WTC, ENG / NZ lead. */
const pointsTableSample = {
  title: "POINTS TABLE",
  tournament: T4_TOURNAMENT,
  columns: ["PLD", "WON", "LOST", "NR", "PTS", "NRR"],
  footer: "TOP 4 TEAMS QUALIFY FOR PLAYOFFS",
  teams: [
    {
      rank: 1,
      name: "ENGLAND",
      pld: "1",
      won: "1",
      lost: "0",
      nr: "0",
      pts: "2",
      nrr: "+15.600",
    },
    {
      rank: 2,
      name: "NEW ZEALAND",
      pld: "1",
      won: "0",
      lost: "1",
      nr: "0",
      pts: "0",
      nrr: "-15.600",
    },
    {
      rank: 3,
      name: "AUSTRALIA",
      pld: "0",
      won: "0",
      lost: "0",
      nr: "0",
      pts: "0",
      nrr: "—",
    },
    {
      rank: 4,
      name: "INDIA",
      pld: "0",
      won: "0",
      lost: "0",
      nr: "0",
      pts: "0",
      nrr: "—",
    },
    {
      rank: 5,
      name: "SOUTH AFRICA",
      pld: "0",
      won: "0",
      lost: "0",
      nr: "0",
      pts: "0",
      nrr: "—",
    },
    {
      rank: 6,
      name: "PAKISTAN",
      pld: "0",
      won: "0",
      lost: "0",
      nr: "0",
      pts: "0",
      nrr: "—",
    },
  ],
};

export default pointsTableSample;
