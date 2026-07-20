/** Sample match data for theme 4 Default controller only. */
const defaultSampleMatch = {
  teamA: {
    code: "ALB",
    theme: "gold",
    runs: 9,
    wickets: 0,
    overs: "1.0",
    oversLimit: 20,
    inningsLabel: "P1",
  },

  teamB: {
    code: "KBU",
    name: "Khartoum Bulls",
    theme: "gold",
  },

  batters: [
    {
      id: "b1",
      name: "SHAHAB",
      runs: 5,
      balls: 4,
      onStrike: true,
    },
    {
      id: "b2",
      name: "MUBASSH",
      runs: 4,
      balls: 2,
      onStrike: false,
    },
  ],

  stat: { label: "CRR", value: "9.00" },

  featuredPlayer: {
    id: "f1",
    name: "FAHEEM",
    wickets: 0,
    runs: 9,
    overs: "1.0",
    overBalls: ["dot", "dot", 4, 1, "dot", 4],
  },
};

export default defaultSampleMatch;
