import teamBLogo from "../../TCP-logo.webp";
import playerPhoto from "../../player-placeholder-theme1.png";

/** Sample data for the BowlingSquad full-screen controller only. */
const bowlingSquadSample = {
  tournament: "LAHORE SUMMER CUP",
  team: {
    code: "MS",
    name: "MULTAN SULTANS",
    logoUrl: teamBLogo,
  },
  players: [
    { name: "ABBAS AFRIDI", role: "BOWLER", photoUrl: playerPhoto },
    { name: "AGHA SALMAN", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "DAVID MILLER", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "IFTIKHAR AHMED", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "IHSANULLAH", role: "BOWLER", photoUrl: playerPhoto },
    { name: "MOHAMMAD NAWAZ", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "MOHAMMAD WASIM", role: "BOWLER", photoUrl: playerPhoto },
    { name: "MUZZAMMIL MUMTAZ", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "SAMEEN GUL", role: "BOWLER", photoUrl: playerPhoto },
    { name: "TAYYAB TAHIR", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "USMAN QADIR", role: "BOWLER", photoUrl: playerPhoto },
  ],
};

export default bowlingSquadSample;
