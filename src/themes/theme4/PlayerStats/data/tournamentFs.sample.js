import teamALogo from "../../../../shared/england-team.png";
import playerPhoto from "../../../theme3/assets/player-placeholder-theme1.png";

/** Sample data for Theme 4 batsman TournamentFS — batting team (ENG / teamA). */
const tournamentFsSample = {
  player: {
    firstName: "JOE",
    lastName: "ROOT",
    role: "BATSMAN",
    subtitle: "Tournament Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "MATCHES", value: "4" },
      { label: "RUNS", value: "312" },
      { label: "4S", value: "34" },
      { label: "6S", value: "2" },
      { label: "50S", value: "2" },
      { label: "100S", value: "1" },
      { label: "SR", value: "52.10" },
      { label: "AVG", value: "78.00" },
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

export default tournamentFsSample;
