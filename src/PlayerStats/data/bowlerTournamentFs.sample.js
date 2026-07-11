import teamALogo from "../../WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import playerPhoto from "../../player-placeholder-theme1.png";

/** Sample data for the bowler TournamentFS controller only. */
const bowlerTournamentFsSample = {
  player: {
    firstName: "ABBAS",
    lastName: "AFRIDI",
    role: "BOWLER",
    subtitle: "Tournament Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "MATCHES", value: "0" },
      { label: "OVERS", value: "0" },
      { label: "WKTS", value: "0" },
      { label: "RUNS", value: "0" },
      { label: "AVG", value: "—" },
      { label: "ECON", value: "—" },
    ],
  },
  team: {
    code: "SLT",
    name: "SLT",
    logoUrl: teamALogo,
    theme: "gold",
  },
};

export default bowlerTournamentFsSample;
