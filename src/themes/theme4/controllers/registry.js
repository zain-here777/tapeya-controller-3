import AtStage from "./lower-third/AT_STAGE.jsx";
import Commentators from "./lower-third/COMMENTATORS.jsx";
import CurrentPartnership from "./lower-third/CURRENT_PARTNERSHIP.jsx";
import DecisionPending from "./lower-third/DECISION_PENDING.jsx";
import Default from "./lower-third/DEFAULT.jsx";
import DownloadTapeya from "./lower-third/DOWNLOAD_TAPEYA.jsx";
import Empty from "./lower-third/EMPTY.jsx";
import FiftyUp from "./lower-third/50_UP.jsx";
import FollowTapeya from "./lower-third/FOLLOW_TAPEYA.jsx";
import Four from "./lower-third/FOUR.jsx";
import FOW from "./lower-third/FOW.jsx";
import HundredUp from "./lower-third/100_UP.jsx";
import IntroLT from "./lower-third/INTRO_LT.jsx";
import Last12Balls from "./lower-third/LAST_12_BALLS.jsx";
import Last30Balls from "./lower-third/LAST_30_BALLS.jsx";
import LastWicket from "./lower-third/LAST_WICKET.jsx";
import MatchSummary from "./lower-third/MATCH_SUMMARY.jsx";
import MiniScorecard from "./lower-third/MINI_SCORECARD.jsx";
import NeedTarget from "./lower-third/NEED_TARGET.jsx";
import NoBall from "./lower-third/NO_BALL.jsx";
import NotOut from "./lower-third/NOT_OUT.jsx";
import Out from "./lower-third/OUT.jsx";
import PreviousOver from "./lower-third/PREVIOUS_OVER.jsx";
import Replay from "./lower-third/REPLAY.jsx";
import ResultLT from "./lower-third/RESULT_LT.jsx";
import RunRate from "./lower-third/RUN_RATE.jsx";
import Scorers from "./lower-third/SCORERS.jsx";
import Six from "./lower-third/SIX.jsx";
import ThisOver from "./lower-third/THIS_OVER.jsx";
import TossLT from "./lower-third/TOSS_LT.jsx";
import TournamentName from "./lower-third/TOURNAMENT_NAME.jsx";
import Umpires from "./lower-third/UMPIRES.jsx";
import Wide from "./lower-third/WIDE.jsx";
import WinPrediction from "./lower-third/WIN_PREDICTION.jsx";
import TourHitFifties from "./tour-hit/FIFTIES.jsx";
import TourHitFour from "./tour-hit/FOUR.jsx";
import TourHitHundreds from "./tour-hit/HUNDREDS.jsx";
import TourHitRuns from "./tour-hit/RUNS.jsx";
import TourHitSixes from "./tour-hit/SIXES.jsx";
import TourHitWickets from "./tour-hit/WICKETS.jsx";
import FstDecisionPending from "./full-screen-transition/DECISION_PENDING.jsx";
import FstFifty from "./full-screen-transition/FIFTY.jsx";
import FstFour from "./full-screen-transition/FOUR.jsx";
import FstHundred from "./full-screen-transition/HUNDRED.jsx";
import FstNoBall from "./full-screen-transition/NO_BALL.jsx";
import FstNotOut from "./full-screen-transition/NOT_OUT.jsx";
import FstOut from "./full-screen-transition/OUT.jsx";
import FstReplay from "./full-screen-transition/REPLAY.jsx";
import FstSix from "./full-screen-transition/SIX.jsx";
import FstWide from "./full-screen-transition/WIDE.jsx";
import InningsBreak from "./breaks/INNINGS_BREAK.jsx";
import LunchBreak from "./breaks/LUNCH_BREAK.jsx";
import RainStopped from "./breaks/RAIN_STOPPED.jsx";
import StrategicTimeout from "./breaks/STRATEGIC_TIMEOUT.jsx";
import TeaBreak from "./breaks/TEA_BREAK.jsx";
import HighestFours from "./tournaments/HIGHEST_FOURS.jsx";
import HighestRuns from "./tournaments/HIGHEST_RUNS.jsx";
import HighestSixes from "./tournaments/HIGHEST_SIXES.jsx";
import HighestWickets from "./tournaments/HIGHEST_WICKETS.jsx";
import PointsTable from "./tournaments/POINTS_TABLE.jsx";
import Worm from "./charts/WORM.jsx";
import Manhattan from "./charts/MANHATTAN.jsx";
import RunRateChart from "./charts/RUN_RATE_CHART.jsx";
import WagonWheel from "./charts/WAGON_WHEEL.jsx";
import ThisMatch from "./full-screen/THIS_MATCH.jsx";
import NextMatch from "./full-screen/NEXT_MATCH.jsx";
import Playing11 from "./full-screen/PLAYING_11.jsx";
import LastWicketFs from "./full-screen/LAST_WICKET.jsx";
import BattingSquad from "./full-screen/BATTING_SQUAD.jsx";
import BowlingSquad from "./full-screen/BOWLING_SQUAD.jsx";
import CurrentPartnershipFs from "./full-screen/CURRENT_PARTNERSHIP.jsx";
import PartnershipList from "./full-screen/PARTNERSHIP_LIST.jsx";
import NeedTargetFs from "./full-screen/NEED_TARGET.jsx";
import InningsFigure from "./full-screen/INNINGS_FIGURE.jsx";
import BattingSummary from "./full-screen/BATTING_SUMMARY.jsx";
import BowlingSummary from "./full-screen/BOWLING_SUMMARY.jsx";
import MatchSummaryFs from "./full-screen/MATCH_SUMMARY.jsx";
import TopBatter from "./full-screen/TOP_BATTER.jsx";
import TopBowler from "./full-screen/TOP_BOWLER.jsx";
import NameLT from "./player-stats/batsman/NAME_LT.jsx";
import MatchLT from "./player-stats/batsman/MATCH_LT.jsx";
import TournamentLT from "./player-stats/batsman/TOURNAMENT_LT.jsx";
import NameFS from "./player-stats/batsman/NAME_FS.jsx";
import MatchFS from "./player-stats/batsman/MATCH_FS.jsx";
import TournamentFS from "./player-stats/batsman/TOURNAMENT_FS.jsx";
import BowlerNameLT from "./player-stats/bowler/BOWLER_NAME_LT.jsx";
import BowlerMatchLT from "./player-stats/bowler/BOWLER_MATCH_LT.jsx";
import BowlerTournamentLT from "./player-stats/bowler/BOWLER_TOURNAMENT_LT.jsx";
import BowlerNameFS from "./player-stats/bowler/BOWLER_NAME_FS.jsx";
import BowlerMatchFS from "./player-stats/bowler/BOWLER_MATCH_FS.jsx";
import BowlerTournamentFS from "./player-stats/bowler/BOWLER_TOURNAMENT_FS.jsx";
import atStageSample from "../LowerThird/data/atStage.sample.js";
import commentatorsSample from "../LowerThird/data/commentators.sample.js";
import currentPartnershipSample from "../LowerThird/data/currentPartnership.sample.js";
import decisionPendingSample from "../LowerThird/data/decisionPending.sample.js";
import defaultSampleMatch from "../LowerThird/data/default.sample.js";
import downloadTapeyaSample from "../LowerThird/data/downloadTapeya.sample.js";
import fiftyUpSample from "../LowerThird/data/fiftyUp.sample.js";
import followTapeyaSample from "../LowerThird/data/followTapeya.sample.js";
import fourSample from "../LowerThird/data/four.sample.js";
import fowSample from "../LowerThird/data/fow.sample.js";
import hundredUpSample from "../LowerThird/data/hundredUp.sample.js";
import introLtSample from "../LowerThird/data/introLt.sample.js";
import last12BallsSample from "../LowerThird/data/last12Balls.sample.js";
import last30BallsSample from "../LowerThird/data/last30Balls.sample.js";
import lastWicketSample from "../LowerThird/data/lastWicket.sample.js";
import matchSummarySample from "../LowerThird/data/matchSummary.sample.js";
import miniScorecardSample from "../LowerThird/data/miniScorecard.sample.js";
import needTargetSample from "../LowerThird/data/needTarget.sample.js";
import noBallSample from "../LowerThird/data/noBall.sample.js";
import notOutSample from "../LowerThird/data/notOut.sample.js";
import outSample from "../LowerThird/data/out.sample.js";
import previousOverSample from "../LowerThird/data/previousOver.sample.js";
import replaySample from "../LowerThird/data/replay.sample.js";
import resultLtSample from "../LowerThird/data/resultLt.sample.js";
import runRateSample from "../LowerThird/data/runRate.sample.js";
import scorersSample from "../LowerThird/data/scorers.sample.js";
import sixSample from "../LowerThird/data/six.sample.js";
import thisOverSample from "../LowerThird/data/thisOver.sample.js";
import tossLtSample from "../LowerThird/data/tossLt.sample.js";
import tournamentNameSample from "../LowerThird/data/tournamentName.sample.js";
import umpiresSample from "../LowerThird/data/umpires.sample.js";
import wideSample from "../LowerThird/data/wide.sample.js";
import winPredictionSample from "../LowerThird/data/winPrediction.sample.js";
import tourHitFiftiesSample from "../TourHit/data/fifties.sample.js";
import tourHitFourSample from "../TourHit/data/four.sample.js";
import tourHitHundredsSample from "../TourHit/data/hundreds.sample.js";
import tourHitRunsSample from "../TourHit/data/runs.sample.js";
import tourHitSixesSample from "../TourHit/data/sixes.sample.js";
import tourHitWicketsSample from "../TourHit/data/wickets.sample.js";
import fstDecisionPendingSample from "../FullScreenTransition/data/decisionPending.sample.js";
import fstFiftySample from "../FullScreenTransition/data/fifty.sample.js";
import fstFourSample from "../FullScreenTransition/data/four.sample.js";
import fstHundredSample from "../FullScreenTransition/data/hundred.sample.js";
import fstNoBallSample from "../FullScreenTransition/data/noBall.sample.js";
import fstNotOutSample from "../FullScreenTransition/data/notOut.sample.js";
import fstOutSample from "../FullScreenTransition/data/out.sample.js";
import fstReplaySample from "../FullScreenTransition/data/replay.sample.js";
import fstSixSample from "../FullScreenTransition/data/six.sample.js";
import fstWideSample from "../FullScreenTransition/data/wide.sample.js";
import inningsBreakSample from "../Breaks/data/inningsBreak.sample.js";
import lunchBreakSample from "../Breaks/data/lunchBreak.sample.js";
import rainStoppedSample from "../Breaks/data/rainStopped.sample.js";
import strategicTimeoutSample from "../Breaks/data/strategicTimeout.sample.js";
import teaBreakSample from "../Breaks/data/teaBreak.sample.js";
import highestFoursSample from "../Tournaments/data/highestFours.sample.js";
import highestRunsSample from "../Tournaments/data/highestRuns.sample.js";
import highestSixesSample from "../Tournaments/data/highestSixes.sample.js";
import highestWicketsSample from "../Tournaments/data/highestWickets.sample.js";
import pointsTableSample from "../Tournaments/data/pointsTable.sample.js";
import wormSample from "../Charts/data/worm.sample.js";
import manhattanSample from "../Charts/data/manhattan.sample.js";
import chartRunRateSample from "../Charts/data/runRate.sample.js";
import wagonWheelSample from "../Charts/data/wagonWheel.sample.js";
import thisMatchSample from "../FullScreen/data/thisMatch.sample.js";
import nextMatchSample from "../FullScreen/data/nextMatch.sample.js";
import playing11Sample from "../FullScreen/data/playing11.sample.js";
import lastWicketFsSample from "../FullScreen/data/lastWicket.sample.js";
import battingSquadSample from "../FullScreen/data/battingSquad.sample.js";
import bowlingSquadSample from "../FullScreen/data/bowlingSquad.sample.js";
import currentPartnershipFsSample from "../FullScreen/data/currentPartnership.sample.js";
import partnershipListSample from "../FullScreen/data/partnershipList.sample.js";
import needTargetFsSample from "../FullScreen/data/needTarget.sample.js";
import inningsFigureSample from "../FullScreen/data/inningsFigure.sample.js";
import battingSummarySample from "../FullScreen/data/battingSummary.sample.js";
import bowlingSummarySample from "../FullScreen/data/bowlingSummary.sample.js";
import matchSummaryFsSample from "../FullScreen/data/matchSummary.sample.js";
import topBatterSample from "../FullScreen/data/topBatter.sample.js";
import topBowlerSample from "../FullScreen/data/topBowler.sample.js";
import nameLtSample from "../PlayerStats/data/nameLt.sample.js";
import matchLtSample from "../PlayerStats/data/matchLt.sample.js";
import tournamentLtSample from "../PlayerStats/data/tournamentLt.sample.js";
import nameFsSample from "../PlayerStats/data/nameFs.sample.js";
import matchFsSample from "../PlayerStats/data/matchFs.sample.js";
import tournamentFsSample from "../PlayerStats/data/tournamentFs.sample.js";
import bowlerNameLtSample from "../PlayerStats/data/bowlerNameLt.sample.js";
import bowlerMatchLtSample from "../PlayerStats/data/bowlerMatchLt.sample.js";
import bowlerTournamentLtSample from "../PlayerStats/data/bowlerTournamentLt.sample.js";
import bowlerNameFsSample from "../PlayerStats/data/bowlerNameFs.sample.js";
import bowlerMatchFsSample from "../PlayerStats/data/bowlerMatchFs.sample.js";
import bowlerTournamentFsSample from "../PlayerStats/data/bowlerTournamentFs.sample.js";

export const LOWER_THIRD_PANEL_ROW_SIZE = 17;

const CONTROLLER_CATEGORIES = [
  "lower-third",
  "tour-hit",
  "full-screen-transition",
  "breaks",
  "full-screen",
  "tournaments",
  "charts",
  "player-stats",
];

const CONTROLLER_CATEGORY_LABELS = {
  "lower-third": "Lower Third",
  "tour-hit": "Tour-Hit",
  "full-screen-transition": "Full Screen Transition",
  breaks: "Breaks",
  "full-screen": "Full Screen",
  tournaments: "Tournaments",
  charts: "Charts",
  "player-stats": "Player Stats",
};

/** Subgroup labels for nested player-stats folders. */
export const PLAYER_STATS_GROUP_LABELS = {
  batsman: "Batsman",
  bowler: "Bowler",
};

/** @type {Array<{ id: string, label: string, component: import('react').ComponentType, getProps: () => Record<string, unknown> }>} */
const LOWER_THIRD_CONTROLLERS = [
  {
    id: "empty",
    label: "Empty",
    component: Empty,
    getProps: () => ({}),
  },
  {
    id: "default",
    label: "Default",
    component: Default,
    getProps: () => ({ match: defaultSampleMatch }),
  },
  {
    id: "mini-scorecard",
    label: "Mini ScoreCard",
    component: MiniScorecard,
    getProps: () => ({ match: miniScorecardSample }),
  },
  {
    id: "match-summary",
    label: "Match Summary",
    component: MatchSummary,
    getProps: () => ({ match: matchSummarySample }),
  },
  {
    id: "intro-lt",
    label: "Intro LT",
    component: IntroLT,
    getProps: () => ({ match: introLtSample }),
  },
  {
    id: "toss-lt",
    label: "Toss LT",
    component: TossLT,
    getProps: () => ({ match: tossLtSample }),
  },
  {
    id: "need-target",
    label: "Need/Target",
    component: NeedTarget,
    getProps: () => ({ match: needTargetSample }),
  },
  {
    id: "at-stage",
    label: "At Stage",
    component: AtStage,
    getProps: () => ({ match: atStageSample }),
  },
  {
    id: "run-rate",
    label: "Run Rate",
    component: RunRate,
    getProps: () => ({ match: runRateSample }),
  },
  {
    id: "this-over",
    label: "This Over",
    component: ThisOver,
    getProps: () => ({ match: thisOverSample }),
  },
  {
    id: "previous-over",
    label: "Previous Over",
    component: PreviousOver,
    getProps: () => ({ match: previousOverSample }),
  },
  {
    id: "fow",
    label: "FOW",
    component: FOW,
    getProps: () => ({ match: fowSample }),
  },
  {
    id: "last-wicket",
    label: "Last Wicket",
    component: LastWicket,
    getProps: () => ({ match: lastWicketSample }),
  },
  {
    id: "last-12-balls",
    label: "Last 12 Balls",
    component: Last12Balls,
    getProps: () => ({ match: last12BallsSample }),
  },
  {
    id: "last-30-balls",
    label: "Last 30 Balls",
    component: Last30Balls,
    getProps: () => ({ match: last30BallsSample }),
  },
  {
    id: "current-partnership",
    label: "Current Partnership",
    component: CurrentPartnership,
    getProps: () => ({ match: currentPartnershipSample }),
  },
  {
    id: "tournament-name",
    label: "Tournament Name",
    component: TournamentName,
    getProps: () => ({ match: tournamentNameSample }),
  },
  {
    id: "result-lt",
    label: "Result LT",
    component: ResultLT,
    getProps: () => ({ match: resultLtSample }),
  },
  {
    id: "win-prediction",
    label: "Win Prediction",
    component: WinPrediction,
    getProps: () => ({ match: winPredictionSample }),
  },
  {
    id: "four",
    label: "4",
    component: Four,
    getProps: () => ({ match: fourSample }),
  },
  {
    id: "six",
    label: "6",
    component: Six,
    getProps: () => ({ match: sixSample }),
  },
  {
    id: "wide",
    label: "Wide",
    component: Wide,
    getProps: () => ({ match: wideSample }),
  },
  {
    id: "no-ball",
    label: "No-Ball",
    component: NoBall,
    getProps: () => ({ match: noBallSample }),
  },
  {
    id: "not-out",
    label: "Not Out",
    component: NotOut,
    getProps: () => ({ match: notOutSample }),
  },
  {
    id: "out",
    label: "Out",
    component: Out,
    getProps: () => ({ match: outSample }),
  },
  {
    id: "50-up",
    label: "50 Up",
    component: FiftyUp,
    getProps: () => ({ match: fiftyUpSample }),
  },
  {
    id: "100-up",
    label: "100 Up",
    component: HundredUp,
    getProps: () => ({ match: hundredUpSample }),
  },
  {
    id: "replay",
    label: "Replay",
    component: Replay,
    getProps: () => ({ match: replaySample }),
  },
  {
    id: "decision-pending",
    label: "Decision Pending",
    component: DecisionPending,
    getProps: () => ({ match: decisionPendingSample }),
  },
  {
    id: "umpires",
    label: "Umpires",
    component: Umpires,
    getProps: () => ({ match: umpiresSample }),
  },
  {
    id: "scorers",
    label: "Scorers",
    component: Scorers,
    getProps: () => ({ match: scorersSample }),
  },
  {
    id: "commentators",
    label: "Commentators",
    component: Commentators,
    getProps: () => ({ match: commentatorsSample }),
  },
  {
    id: "follow-tapeya",
    label: "Follow Tapeya",
    component: FollowTapeya,
    getProps: () => ({ match: followTapeyaSample }),
  },
  {
    id: "download-tapeya",
    label: "Download Tapeya",
    component: DownloadTapeya,
    getProps: () => ({ match: downloadTapeyaSample }),
  },
];

/**
 * Tour-Hit controllers — mini badge above a ThisOver main bar.
 * Each entry is isolated — own component, config, and sample data.
 */
const TOUR_HIT_CONTROLLERS = [
  {
    id: "four",
    label: "4's",
    component: TourHitFour,
    getProps: () => ({ match: tourHitFourSample }),
  },
  {
    id: "sixes",
    label: "6's",
    component: TourHitSixes,
    getProps: () => ({ match: tourHitSixesSample }),
  },
  {
    id: "fifties",
    label: "50's",
    component: TourHitFifties,
    getProps: () => ({ match: tourHitFiftiesSample }),
  },
  {
    id: "hundreds",
    label: "100's",
    component: TourHitHundreds,
    getProps: () => ({ match: tourHitHundredsSample }),
  },
  {
    id: "runs",
    label: "Run's",
    component: TourHitRuns,
    getProps: () => ({ match: tourHitRunsSample }),
  },
  {
    id: "wickets",
    label: "Wkt's",
    component: TourHitWickets,
    getProps: () => ({ match: tourHitWicketsSample }),
  },
];

/**
 * Full Screen Transition — scorecard strip + full-viewport action overlay.
 */
const FULL_SCREEN_TRANSITION_CONTROLLERS = [
  {
    id: "four",
    label: "Four",
    component: FstFour,
    getProps: () => ({ match: fstFourSample }),
  },
  {
    id: "six",
    label: "Six",
    component: FstSix,
    getProps: () => ({ match: fstSixSample }),
  },
  {
    id: "not-out",
    label: "Not Out",
    component: FstNotOut,
    getProps: () => ({ match: fstNotOutSample }),
  },
  {
    id: "out",
    label: "Out",
    component: FstOut,
    getProps: () => ({ match: fstOutSample }),
  },
  {
    id: "no-ball",
    label: "No-Ball",
    component: FstNoBall,
    getProps: () => ({ match: fstNoBallSample }),
  },
  {
    id: "wide",
    label: "Wide",
    component: FstWide,
    getProps: () => ({ match: fstWideSample }),
  },
  {
    id: "fifty",
    label: "50",
    component: FstFifty,
    getProps: () => ({ match: fstFiftySample }),
  },
  {
    id: "hundred",
    label: "100",
    component: FstHundred,
    getProps: () => ({ match: fstHundredSample }),
  },
  {
    id: "replay",
    label: "Replay",
    component: FstReplay,
    getProps: () => ({ match: fstReplaySample }),
  },
  {
    id: "decision-pending",
    label: "Decision Pending",
    component: FstDecisionPending,
    getProps: () => ({ match: fstDecisionPendingSample }),
  },
];

const BREAK_CONTROLLERS = [
  {
    id: "innings-break",
    label: "Innings Break",
    component: InningsBreak,
    getProps: () => ({ match: inningsBreakSample }),
  },
  {
    id: "tea-break",
    label: "Tea Break",
    component: TeaBreak,
    getProps: () => ({ match: teaBreakSample }),
  },
  {
    id: "lunch-break",
    label: "Lunch Break",
    component: LunchBreak,
    getProps: () => ({ match: lunchBreakSample }),
  },
  {
    id: "rain-stopped",
    label: "Rain Stopped",
    component: RainStopped,
    getProps: () => ({ match: rainStoppedSample }),
  },
  {
    id: "strategic-timeout",
    label: "Strategic Timeout",
    component: StrategicTimeout,
    getProps: () => ({ match: strategicTimeoutSample }),
  },
];

const FULL_SCREEN_CONTROLLERS = [
  {
    id: "this-match",
    label: "This Match",
    component: ThisMatch,
    getProps: () => ({ match: thisMatchSample }),
  },
  {
    id: "next-match",
    label: "Next Match",
    component: NextMatch,
    getProps: () => ({ match: nextMatchSample }),
  },
  {
    id: "playing-11",
    label: "Playing 11",
    component: Playing11,
    getProps: () => ({ match: playing11Sample }),
  },
  {
    id: "last-wicket",
    label: "Last Wicket",
    component: LastWicketFs,
    getProps: () => ({ match: lastWicketFsSample }),
  },
  {
    id: "batting-squad",
    label: "Batting Squad",
    component: BattingSquad,
    getProps: () => ({ match: battingSquadSample }),
  },
  {
    id: "bowling-squad",
    label: "Bowling Squad",
    component: BowlingSquad,
    getProps: () => ({ match: bowlingSquadSample }),
  },
  {
    id: "current-partnership",
    label: "Current Partnership",
    component: CurrentPartnershipFs,
    getProps: () => ({ match: currentPartnershipFsSample }),
  },
  {
    id: "partnership-list",
    label: "Partnership List",
    component: PartnershipList,
    getProps: () => ({ match: partnershipListSample }),
  },
  {
    id: "need-target",
    label: "Need Target",
    component: NeedTargetFs,
    getProps: () => ({ match: needTargetFsSample }),
  },
  {
    id: "innings-figure",
    label: "Innings Figure",
    component: InningsFigure,
    getProps: () => ({ match: inningsFigureSample }),
  },
  {
    id: "batting-summary",
    label: "Batting Summary",
    component: BattingSummary,
    getProps: () => ({ match: battingSummarySample }),
  },
  {
    id: "bowling-summary",
    label: "Bowling Summary",
    component: BowlingSummary,
    getProps: () => ({ match: bowlingSummarySample }),
  },
  {
    id: "match-summary",
    label: "Match Summary",
    component: MatchSummaryFs,
    getProps: () => ({ match: matchSummaryFsSample }),
  },
  {
    id: "top-batter",
    label: "Top Batter",
    component: TopBatter,
    getProps: () => ({ match: topBatterSample }),
  },
  {
    id: "top-bowler",
    label: "Top Bowler",
    component: TopBowler,
    getProps: () => ({ match: topBowlerSample }),
  },
];

const CHARTS_CONTROLLERS = [
  {
    id: "worm",
    label: "Worm",
    component: Worm,
    getProps: () => ({ match: wormSample }),
  },
  {
    id: "manhattan",
    label: "Manhattan",
    component: Manhattan,
    getProps: () => ({ match: manhattanSample }),
  },
  {
    id: "run-rate-chart",
    label: "Run Rate Chart",
    component: RunRateChart,
    getProps: () => ({ match: chartRunRateSample }),
  },
  {
    id: "wagon-wheel",
    label: "Wagon Wheel",
    component: WagonWheel,
    getProps: () => ({ match: wagonWheelSample }),
  },
];

const TOURNAMENT_CONTROLLERS = [
  {
    id: "points-table",
    label: "Points Table",
    component: PointsTable,
    getProps: () => ({ match: pointsTableSample }),
  },
  {
    id: "highest-runs",
    label: "Highest Runs",
    component: HighestRuns,
    getProps: () => ({ match: highestRunsSample }),
  },
  {
    id: "highest-wickets",
    label: "Highest Wickets",
    component: HighestWickets,
    getProps: () => ({ match: highestWicketsSample }),
  },
  {
    id: "highest-sixes",
    label: "Highest Sixes",
    component: HighestSixes,
    getProps: () => ({ match: highestSixesSample }),
  },
  {
    id: "highest-fours",
    label: "Highest Fours",
    component: HighestFours,
    getProps: () => ({ match: highestFoursSample }),
  },
];

const PLAYER_STATS_CONTROLLERS = [
  {
    id: "name-lt",
    label: "Name LT",
    group: "batsman",
    component: NameLT,
    getProps: () => ({ match: nameLtSample }),
  },
  {
    id: "match-lt",
    label: "Match LT",
    group: "batsman",
    component: MatchLT,
    getProps: () => ({ match: matchLtSample }),
  },
  {
    id: "tournament-lt",
    label: "Tournament LT",
    group: "batsman",
    component: TournamentLT,
    getProps: () => ({ match: tournamentLtSample }),
  },
  {
    id: "name-fs",
    label: "Name FS",
    group: "batsman",
    component: NameFS,
    getProps: () => ({ match: nameFsSample }),
  },
  {
    id: "match-fs",
    label: "Match FS",
    group: "batsman",
    component: MatchFS,
    getProps: () => ({ match: matchFsSample }),
  },
  {
    id: "tournament-fs",
    label: "Tournament FS",
    group: "batsman",
    component: TournamentFS,
    getProps: () => ({ match: tournamentFsSample }),
  },
  {
    id: "bowler-name-lt",
    label: "Name LT",
    group: "bowler",
    component: BowlerNameLT,
    getProps: () => ({ match: bowlerNameLtSample }),
  },
  {
    id: "bowler-match-lt",
    label: "Match LT",
    group: "bowler",
    component: BowlerMatchLT,
    getProps: () => ({ match: bowlerMatchLtSample }),
  },
  {
    id: "bowler-tournament-lt",
    label: "Tournament LT",
    group: "bowler",
    component: BowlerTournamentLT,
    getProps: () => ({ match: bowlerTournamentLtSample }),
  },
  {
    id: "bowler-name-fs",
    label: "Name FS",
    group: "bowler",
    component: BowlerNameFS,
    getProps: () => ({ match: bowlerNameFsSample }),
  },
  {
    id: "bowler-match-fs",
    label: "Match FS",
    group: "bowler",
    component: BowlerMatchFS,
    getProps: () => ({ match: bowlerMatchFsSample }),
  },
  {
    id: "bowler-tournament-fs",
    label: "Tournament FS",
    group: "bowler",
    component: BowlerTournamentFS,
    getProps: () => ({ match: bowlerTournamentFsSample }),
  },
];

/** @type {Record<string, Record<string, import('react').ComponentType>>} */
export const controllerRegistry = {
  "lower-third": Object.fromEntries(
    LOWER_THIRD_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "tour-hit": Object.fromEntries(
    TOUR_HIT_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "full-screen-transition": Object.fromEntries(
    FULL_SCREEN_TRANSITION_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  breaks: Object.fromEntries(
    BREAK_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "full-screen": Object.fromEntries(
    FULL_SCREEN_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  tournaments: Object.fromEntries(
    TOURNAMENT_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  charts: Object.fromEntries(
    CHARTS_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "player-stats": Object.fromEntries(
    PLAYER_STATS_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
};

/** @type {Array<{ category: string, id: string, label: string, getProps: () => Record<string, unknown> }>} */
export const controllerCatalog = [
  ...LOWER_THIRD_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "lower-third",
    id,
    label,
    getProps,
  })),
  ...TOUR_HIT_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "tour-hit",
    id,
    label,
    getProps,
  })),
  ...FULL_SCREEN_TRANSITION_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "full-screen-transition",
    id,
    label,
    getProps,
  })),
  ...BREAK_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "breaks",
    id,
    label,
    getProps,
  })),
  ...FULL_SCREEN_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "full-screen",
    id,
    label,
    getProps,
  })),
  ...TOURNAMENT_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "tournaments",
    id,
    label,
    getProps,
  })),
  ...CHARTS_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "charts",
    id,
    label,
    getProps,
  })),
  ...PLAYER_STATS_CONTROLLERS.map(({ id, label, group, getProps }) => ({
    category: "player-stats",
    id,
    label,
    group,
    getProps,
  })),
];

/** @param {string} category @param {string} id */
export function getController(category, id) {
  return controllerRegistry[category]?.[id] ?? null;
}

/** @param {string} category @param {string} id */
export function getControllerEntry(category, id) {
  return (
    controllerCatalog.find((entry) => entry.category === category && entry.id === id) ?? null
  );
}

export function getControllersByCategory() {
  return CONTROLLER_CATEGORIES.map((category) => {
    const controllers = controllerCatalog.filter(
      (entry) => entry.category === category
    );

    const groups =
      category === "player-stats"
        ? ["batsman", "bowler"].map((group) => ({
            group,
            label: PLAYER_STATS_GROUP_LABELS[group] ?? group,
            controllers: controllers.filter((entry) => entry.group === group),
          }))
        : null;

    return {
      category,
      label: CONTROLLER_CATEGORY_LABELS[category] ?? category,
      controllers,
      groups,
    };
  });
}

/** @param {string} category @param {string} id */
export function controllerOutputPath(category, id) {
  return `/output/${category}/${id}`;
}
