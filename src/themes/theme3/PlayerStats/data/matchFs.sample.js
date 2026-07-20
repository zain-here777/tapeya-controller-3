import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for the MatchFS batsman controller only. */
const matchFsSample = {
  player: {
    firstName: "ALEX",
    lastName: "HALES",
    role: "ALL ROUNDER",
    subtitle: "Match Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "RUNS", value: "0" },
      { label: "BALLS", value: "0" },
      { label: "DOTS", value: "0" },
      { label: "4S", value: "0" },
      { label: "6S", value: "0" },
      { label: "SR", value: "—" },
    ],
  },
  team: {
    code: "ISU",
    name: "Islamabad United",
    logoUrl: teamALogo,
    theme: "gold",
  },
};

export default matchFsSample;
