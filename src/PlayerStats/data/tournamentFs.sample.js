import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import playerPhoto from "../../player-placeholder-theme1.png";

/** Sample data for the TournamentFS batsman controller only. */
const tournamentFsSample = {
  player: {
    firstName: "ALEX",
    lastName: "HALES",
    role: "ALL ROUNDER",
    subtitle: "Tournament Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "MATCHES", value: "0" },
      { label: "RUNS", value: "0" },
      { label: "4S", value: "0" },
      { label: "6S", value: "0" },
      { label: "50S", value: "0" },
      { label: "100S", value: "0" },
      { label: "SR", value: "—" },
      { label: "AVG", value: "—" },
    ],
  },
  team: {
    code: "ISU",
    name: "Islamabad United",
    logoUrl: teamALogo,
    theme: "gold",
  },
};

export default tournamentFsSample;
