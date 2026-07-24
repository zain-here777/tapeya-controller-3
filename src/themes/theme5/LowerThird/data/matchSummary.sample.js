import teamALogo from "../../../../shared/england-team.png";
import teamBLogo from "../../../../shared/nz-team.png";

/** Sample data for the Theme 5 MatchSummary controller only. */
const matchSummarySample = {
  title: "MATCH SUMMARY",
  teamA: {
    code: "ENG",
    name: "England",
    logoUrl: teamALogo,
    theme: "gold",
    colorKey: "teamA",
    runs: 73,
    wickets: 1,
    overs: "0.5",
  },
  teamB: {
    code: "NZ",
    name: "New Zealand",
    logoUrl: teamBLogo,
    theme: "gold",
    colorKey: "teamB",
    runs: 12,
    wickets: 0,
    overs: "0.1",
  },
};

export default matchSummarySample;
