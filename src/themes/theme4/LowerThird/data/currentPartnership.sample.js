import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample match data for the Theme 4 CurrentPartnership controller only — no CRR/stat slot. */
const currentPartnershipSample = {
  teamA: {
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
    runs: 44,
    wickets: 0,
    overs: "6.4",
    oversLimit: 50,
  },

  teamB: {
    code: "NZ",
    name: "New Zealand",
    logoUrl: teamBLogo,
    theme: "gold",
    colorKey: "teamB",
  },

  batters: [
    {
      id: "b1",
      name: "Duckett",
      runs: 18,
      balls: 17,
      onStrike: false,
    },
    {
      id: "b2",
      name: "Bethell",
      runs: 17,
      balls: 23,
      onStrike: true,
    },
  ],

  currentPartnership: {
    titleLine1: "CURRENT",
    titleLine2: "PARTNERSHIP",
    stats: [
      { label: "RUNS", value: 35 },
      { label: "BALLS", value: 40 },
    ],
  },
};

export default currentPartnershipSample;
