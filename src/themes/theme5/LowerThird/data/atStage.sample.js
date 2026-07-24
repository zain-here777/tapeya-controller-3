import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample match data for the Theme 5 AtStage controller only. */
const atStageSample = {
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

  stat: { label: "RR", value: "6.60" },

  atStage: {
    titleLine1: "AT THIS",
    titleLine2: "STAGE",
    teams: [
      {
        id: "stage-a",
        code: "ENG",
        runs: 105,
        wickets: 0,
        overs: "4.5",
      },
      {
        id: "stage-b",
        code: "NZ",
        runs: 96,
        wickets: 3,
        overs: "4.5",
      },
    ],
  },
};

export default atStageSample;
