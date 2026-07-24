import {
  ENG_XI,
  NZ_XI,
  T4_TOURNAMENT,
  engTeam,
  nzTeam,
} from "../../data/matchIdentity.js";

/**
 * Sample data for Theme 5 Playing11 full-screen controller only.
 * Shape matches Theme 3 Playing11 (title + tournament + teamA/teamB + players).
 */
const playing11Sample = {
  title: "PLAYING XI",
  tournament: T4_TOURNAMENT,
  teamA: {
    code: engTeam.code,
    name: engTeam.nameUpper,
    logoUrl: engTeam.logoUrl,
    theme: "batsman",
    colorKey: engTeam.colorKey,
    players: [...ENG_XI],
  },
  teamB: {
    code: nzTeam.code,
    name: nzTeam.nameUpper,
    logoUrl: nzTeam.logoUrl,
    theme: "bowler",
    colorKey: nzTeam.colorKey,
    players: [...NZ_XI],
  },
};

export default playing11Sample;
