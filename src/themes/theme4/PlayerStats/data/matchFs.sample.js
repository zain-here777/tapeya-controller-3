import teamALogo from "../../../../shared/england-team.png";
import playerPhoto from "../../../theme3/assets/player-placeholder-theme1.png";

/** Sample data for Theme 4 batsman MatchFS — batting team (ENG / teamA). */
const matchFsSample = {
  player: {
    firstName: "JOE",
    lastName: "ROOT",
    role: "BATSMAN",
    subtitle: "Match Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "RUNS", value: "72" },
      { label: "BALLS", value: "98" },
      { label: "DOTS", value: "54" },
      { label: "4S", value: "8" },
      { label: "6S", value: "1" },
      { label: "SR", value: "73.47" },
    ],
  },
  team: {
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
  },
};

export default matchFsSample;
