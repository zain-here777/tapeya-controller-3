import playerPhoto from "../../assets/player-placeholder-theme1.png";
import { T4_TOURNAMENT, engTeam } from "../../data/matchIdentity.js";

/** Sample data for Theme 5 Batting Squad — England. */
const battingSquadSample = {
  tournament: T4_TOURNAMENT,
  team: {
    code: engTeam.code,
    name: engTeam.nameUpper,
    logoUrl: engTeam.logoUrl,
    colorKey: engTeam.colorKey,
  },
  players: [
    { name: "ZAK CRAWLEY", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "BEN DUCKETT", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "JOE ROOT", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "HARRY BROOK", role: "BATSMAN", photoUrl: playerPhoto },
    {
      name: "BEN STOKES",
      role: "ALL ROUNDER",
      photoUrl: playerPhoto,
      isCaptain: true,
    },
    {
      name: "JAMIE SMITH",
      role: "BATSMAN",
      photoUrl: playerPhoto,
      isWicketKeeper: true,
    },
    { name: "CHRIS WOAKES", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "JOFRA ARCHER", role: "BOWLER", photoUrl: playerPhoto },
    { name: "MARK WOOD", role: "BOWLER", photoUrl: playerPhoto },
    { name: "JACK LEACH", role: "BOWLER", photoUrl: playerPhoto },
    { name: "JAMES ANDERSON", role: "BOWLER", photoUrl: playerPhoto },
  ],
};

export default battingSquadSample;
