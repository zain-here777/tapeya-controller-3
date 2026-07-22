import teamBLogo from "../../../../shared/nz-team.png";

/** Sample data for Theme 4 Bowling Summary — New Zealand. */
const bowlingSummarySample = {
  tournament: "ICC WORLD TEST CHAMPIONSHIP",
  team: {
    code: "NZ",
    name: "NEW ZEALAND",
    logoUrl: teamBLogo,
    colorKey: "teamB",
  },
  bowlers: [
    { name: "BOULT", overs: "10.0", dots: 42, runs: 38, wickets: 1, eco: "3.8" },
    { name: "SOUTHEE", overs: "9.0", dots: 36, runs: 41, wickets: 1, eco: "4.5" },
    {
      name: "JAMIESON",
      overs: "7.0",
      dots: 28,
      runs: 32,
      wickets: 0,
      eco: "4.5",
    },
    { name: "WAGNER", overs: "4.4", dots: 16, runs: 22, wickets: 0, eco: "4.7" },
    { name: "SANTNER", overs: "2.0", dots: 8, runs: 12, wickets: 0, eco: "6.0" },
  ],
  fallOfWickets: "1-48, 2-79",
  summary: {
    extras: 8,
    overs: "32.4",
    score: "153-2",
  },
};

export default bowlingSummarySample;
