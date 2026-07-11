import teamBLogo from "../../TCP-logo.webp";

/** Sample data for the full-screen BowlingSummary controller only. */
const bowlingSummarySample = {
  tournament: "LAHORE SUMMER CUP",
  team: {
    code: "MS",
    name: "MULTAN SULTANS",
    logoUrl: teamBLogo,
  },
  bowlers: [
    { name: "NAWAZ", overs: "0.5", dots: 2, runs: 73, wickets: 1, eco: "87.6" },
    { name: "AFRIDI", overs: "4.0", dots: 8, runs: 28, wickets: 2, eco: "7.0" },
    {
      name: "IHSANULLAH",
      overs: "4.0",
      dots: 10,
      runs: 22,
      wickets: 1,
      eco: "5.5",
    },
    { name: "WASIM", overs: "3.0", dots: 6, runs: 19, wickets: 1, eco: "6.3" },
    { name: "QADIR", overs: "2.0", dots: 4, runs: 15, wickets: 0, eco: "7.5" },
    { name: "GUL", overs: "1.0", dots: 2, runs: 8, wickets: 0, eco: "8.0" },
  ],
  fallOfWickets: "1-73",
  summary: {
    extras: 1,
    overs: "0.5",
    score: "73-1",
  },
};

export default bowlingSummarySample;
