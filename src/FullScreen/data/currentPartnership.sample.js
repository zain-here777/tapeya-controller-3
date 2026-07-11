import playerPhoto from "../../player-placeholder-theme1.png";

/** Sample data for the full-screen CurrentPartnership controller only. */
const currentPartnershipFsSample = {
  tournament: "LAHORE SUMMER CUP",
  team: {
    code: "ISU",
    name: "ISLAMABAD UNITED",
  },
  partnership: {
    runs: 0,
    balls: 1,
  },
  batters: [
    {
      firstName: "NASEEM",
      lastName: "SHAH",
      runs: 0,
      balls: 1,
      onStrike: true,
      photoUrl: playerPhoto,
    },
    {
      firstName: "MOHAMMAD",
      lastName: "RIZWAN",
      runs: 72,
      balls: 3,
      onStrike: true,
      photoUrl: playerPhoto,
    },
  ],
};

export default currentPartnershipFsSample;
