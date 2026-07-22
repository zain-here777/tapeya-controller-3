import teamALogo from "../../../../shared/england-team.png";
import playerPhoto from "../../../theme3/assets/player-placeholder-theme1.png";

/** Sample data for Theme 4 Last Wicket — batting team (ENG). */
const lastWicketFsSample = {
  tournament: "ICC WORLD TEST CHAMPIONSHIP",
  player: {
    name: "ROOT",
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
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
  },
};

export default lastWicketFsSample;
