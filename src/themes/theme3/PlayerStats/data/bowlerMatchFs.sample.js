import teamALogo from "../../assets/WEi7017UYyxaPHl88WBGfECTm6Yf1TjLmD5n8lSY.jpg";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for the bowler MatchFS controller only. */
const bowlerMatchFsSample = {
  player: {
    firstName: "ABBAS",
    lastName: "AFRIDI",
    role: "BOWLER",
    subtitle: "Match Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "OVERS", value: "0.8" },
      { label: "WKTS", value: "1" },
      { label: "RUNS", value: "73" },
      { label: "DOTS", value: "2" },
      { label: "EXTRAS", value: "1" },
      { label: "ECON", value: "87.60" },
    ],
  },
  team: {
    code: "SLT",
    name: "SLT",
    logoUrl: teamALogo,
    theme: "gold",
  },
};

export default bowlerMatchFsSample;
