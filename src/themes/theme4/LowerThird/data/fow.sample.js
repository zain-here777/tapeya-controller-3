import teamALogo from "../../../../shared/england-team.png";

/** Sample match data for the Theme 4 FOW (Fall of Wickets) controller only. */
const fowSample = {
  teamA: {
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
    runs: 112,
    wickets: 4,
    overs: "18.2",
    oversLimit: 50,
  },

  fowTitle: "Fall of Wickets",

  fallOfWickets: [
    { id: "w1", order: 1, score: 78, name: "Duckett" },
    { id: "w2", order: 2, score: 79, name: "Crawley" },
    { id: "w3", order: 3, score: 95, name: "Root" },
    { id: "w4", order: 4, score: 112, name: "Brook" },
  ],
};

export default fowSample;
