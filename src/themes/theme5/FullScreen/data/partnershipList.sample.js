import teamALogo from "../../../../shared/england-team.png";

/** Sample data for Theme 5 Partnership List — England. */
const partnershipListSample = {
  tournament: "ICC WORLD TEST CHAMPIONSHIP",
  team: {
    code: "ENG",
    name: "ENGLAND",
    logoUrl: teamALogo,
    colorKey: "teamA",
  },
  partnerships: [
    {
      id: "p1",
      balls: 48,
      left: { name: "ROOT", runs: 62, balls: 30 },
      right: { name: "BROOK", runs: 28, balls: 18 },
    },
    {
      id: "p2",
      balls: 22,
      left: { name: "STOKES", runs: 18, balls: 14 },
      right: { name: "SMITH", runs: 12, balls: 8 },
    },
    {
      id: "p3",
      balls: 12,
      left: { name: "CRAWLEY", runs: 24, balls: 10 },
      right: { name: "DUCKETT", runs: 9, balls: 2 },
    },
  ],
  summary: {
    extras: 4,
    overs: "32.4",
    score: "157-2",
  },
};

export default partnershipListSample;
