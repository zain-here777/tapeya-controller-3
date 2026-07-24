import teamBLogo from "../../../../shared/nz-team.png";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for Theme 5 bowler MatchFS — bowling team (NZ / teamB). */
const bowlerMatchFsSample = {
  player: {
    firstName: "MITCHELL",
    lastName: "SANTNER",
    role: "BOWLER",
    subtitle: "Match Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "OVERS", value: "12.0" },
      { label: "WKTS", value: "2" },
      { label: "RUNS", value: "34" },
      { label: "DOTS", value: "48" },
      { label: "EXTRAS", value: "2" },
      { label: "ECON", value: "2.83" },
    ],
  },
  team: {
    code: "NZ",
    name: "New Zealand",
    logoUrl: teamBLogo,
    theme: "gold",
    colorKey: "teamB",
  },
};

export default bowlerMatchFsSample;
