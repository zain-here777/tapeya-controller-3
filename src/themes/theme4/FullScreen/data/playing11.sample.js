import {
  ENG_XI,
  NZ_XI,
  T4_TOURNAMENT,
  createIdentityMatch,
} from "../../data/matchIdentity.js";

/** Sample data for Theme 4 Playing XI full-screen controller. */
const playing11Sample = {
  ...createIdentityMatch({
    teamA: {
      theme: "batsman",
      players: ENG_XI,
    },
    teamB: {
      theme: "bowler",
      players: NZ_XI,
    },
  }),
  title: "PLAYING XI",
  tournament: T4_TOURNAMENT,
};

export default playing11Sample;
