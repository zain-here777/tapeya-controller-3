import teamALogo from "../../../../shared/england-team.png";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for Theme 5 Current Partnership — England. */
const currentPartnershipFsSample = {
  tournament: "ICC WORLD TEST CHAMPIONSHIP",
  team: {
    code: "ENG",
    name: "ENGLAND",
    logoUrl: teamALogo,
    colorKey: "teamA",
  },
  partnership: {
    runs: 90,
    balls: 48,
  },
  batters: [
    {
      firstName: "JOE",
      lastName: "ROOT",
      runs: 62,
      balls: 30,
      onStrike: true,
      photoUrl: playerPhoto,
    },
    {
      firstName: "HARRY",
      lastName: "BROOK",
      runs: 28,
      balls: 18,
      onStrike: false,
      photoUrl: playerPhoto,
    },
  ],
};

export default currentPartnershipFsSample;
