import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for the full-screen LastWicket controller only. */
const lastWicketFsSample = {
  tournament: "LAHORE SUMMER CUP",
  player: {
    name: "KHAN",
    howOut: "CAUGHT",
    photoUrl: playerPhoto,
    stats: [
      { label: "RUNS", value: "0" },
      { label: "BALLS", value: "1" },
      { label: "FOURS", value: "0" },
      { label: "SIXES", value: "0" },
      { label: "S - RATE", value: "—" },
    ],
  },
  team: {
    code: "ISU",
    name: "Islamabad United",
    logoUrl: teamALogo,
    theme: "gold",
  },
};

export default lastWicketFsSample;
