import teamBLogo from "../../../../shared/nz-team.png";
import playerPhoto from "../../assets/player-placeholder-theme1.png";

/** Sample data for Theme 5 bowler TournamentFS — bowling team (NZ / teamB). */
const bowlerTournamentFsSample = {
  player: {
    firstName: "MITCHELL",
    lastName: "SANTNER",
    role: "BOWLER",
    subtitle: "Tournament Career",
    photoUrl: playerPhoto,
    stats: [
      { label: "MATCHES", value: "4" },
      { label: "OVERS", value: "98.2" },
      { label: "WKTS", value: "14" },
      { label: "RUNS", value: "248" },
      { label: "AVG", value: "17.71" },
      { label: "ECON", value: "2.52" },
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

export default bowlerTournamentFsSample;
