import playerPhoto from "../../assets/player-placeholder-theme1.png";
import { T4_TOURNAMENT, nzTeam } from "../../data/matchIdentity.js";

/** Sample data for Theme 5 Bowling Squad — New Zealand. */
const bowlingSquadSample = {
  tournament: T4_TOURNAMENT,
  team: {
    code: nzTeam.code,
    name: nzTeam.nameUpper,
    logoUrl: nzTeam.logoUrl,
    colorKey: nzTeam.colorKey,
  },
  players: [
    {
      name: "TOM LATHAM",
      role: "BATSMAN",
      photoUrl: playerPhoto,
      isCaptain: true,
    },
    { name: "DEVON CONWAY", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "KANE WILLIAMSON", role: "BATSMAN", photoUrl: playerPhoto },
    { name: "DARYL MITCHELL", role: "ALL ROUNDER", photoUrl: playerPhoto },
    {
      name: "TOM BLUNDELL",
      role: "BATSMAN",
      photoUrl: playerPhoto,
      isWicketKeeper: true,
    },
    { name: "GLENN PHILLIPS", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "MITCHELL SANTNER", role: "ALL ROUNDER", photoUrl: playerPhoto },
    { name: "TIM SOUTHEE", role: "BOWLER", photoUrl: playerPhoto },
    { name: "TRENT BOULT", role: "BOWLER", photoUrl: playerPhoto },
    { name: "NEIL WAGNER", role: "BOWLER", photoUrl: playerPhoto },
    { name: "KYLE JAMIESON", role: "BOWLER", photoUrl: playerPhoto },
  ],
};

export default bowlingSquadSample;
