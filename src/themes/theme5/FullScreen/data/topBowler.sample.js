import playerPhoto from "../../assets/player-placeholder-theme1.png";
import { T4_TOURNAMENT } from "../../data/matchIdentity.js";

/** Sample data for Theme 5 Top Bowler — England / New Zealand. */
const topBowlerSample = {
  title: "TOP BOWLER",
  tournament: T4_TOURNAMENT,
  entries: [
    { rank: 1, name: "JAMES ANDERSON", value: "2", photoUrl: playerPhoto },
    { rank: 2, name: "TRENT BOULT", value: "1" },
    { rank: 3, name: "TIM SOUTHEE", value: "1" },
    { rank: 4, name: "JOFRA ARCHER", value: "1" },
  ],
};

export default topBowlerSample;
