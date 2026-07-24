import { lazy } from "react";

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
import sampleMatch from "../LowerThird/data/matchScorecard.sample.js";
import sampleMatchB from "../LowerThird/data/matchScorecardB.sample.js";
import scorersSample from "../LowerThird/data/scorers.sample.js";
import sixSample from "../LowerThird/data/six.sample.js";
import thisOverSample from "../LowerThird/data/thisOver.sample.js";
import tossLtSample from "../LowerThird/data/tossLt.sample.js";
import tournamentNameSample from "../LowerThird/data/tournamentName.sample.js";
import tourHitFiftiesSample from "../TourHit/data/fifties.sample.js";
import tourHitFourSample from "../TourHit/data/four.sample.js";
import tourHitHundredsSample from "../TourHit/data/hundreds.sample.js";
import tourHitRunsSample from "../TourHit/data/runs.sample.js";
import tourHitSixesSample from "../TourHit/data/sixes.sample.js";
import tourHitWicketsSample from "../TourHit/data/wickets.sample.js";
import inningsBreakSample from "../Breaks/data/inningsBreak.sample.js";
import lunchBreakSample from "../Breaks/data/lunchBreak.sample.js";
import rainStoppedSample from "../Breaks/data/rainStopped.sample.js";
import strategicTimeoutSample from "../Breaks/data/strategicTimeout.sample.js";
import teaBreakSample from "../Breaks/data/teaBreak.sample.js";
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
import highestRunsSample from "../Tournaments/data/highestRuns.sample.js";
import highestWicketsSample from "../Tournaments/data/highestWickets.sample.js";
import highestSixesSample from "../Tournaments/data/highestSixes.sample.js";
import highestFoursSample from "../Tournaments/data/highestFours.sample.js";
import pointsTableSample from "../Tournaments/data/pointsTable.sample.js";
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
import wormSample from "../Charts/data/worm.sample.js";
import manhattanSample from "../Charts/data/manhattan.sample.js";
import runRateChartSample from "../Charts/data/runRate.sample.js";
import wagonWheelSample from "../Charts/data/wagonWheel.sample.js";
import umpiresSample from "../LowerThird/data/umpires.sample.js";
import wideSample from "../LowerThird/data/wide.sample.js";
import winPredictionSample from "../LowerThird/data/winPrediction.sample.js";

/**
 * Top-level GFX categories. Add a folder under `controllers/` when introducing a new category.
 * Most categories use flat UPPERCASE_WITH_UNDERSCORES JSX files. `player-stats` nests `batsman/` and `bowler/`.
 */
export const CONTROLLER_CATEGORIES = [
  "lower-third",
  "tour-hit",
  "breaks",
  "charts",
  "full-screen",
  "full-screen-transition",
  "player-stats",
  "tournaments",
];

/**
 * Control-panel row breaks for lower-third (matches operator board layout).
 * Row 1 ends at Tournament Name; row 2 ends at Download Tapeya.
 */
export const LOWER_THIRD_PANEL_ROW_SIZE = 17;

/** Human-readable labels for control-panel sections. */
export const CONTROLLER_CATEGORY_LABELS = {
  breaks: "Breaks",
  charts: "Charts",
  "full-screen": "Full Screen",
  "full-screen-transition": "Full Screen Transition",
  "lower-third": "Lower Third",
  "player-stats": "Player Stats",
  "tour-hit": "Tour-Hit",
  tournaments: "Tournaments",
};

/** Subgroup labels for nested player-stats folders. */
export const PLAYER_STATS_GROUP_LABELS = {
  batsman: "Batsman",
  bowler: "Bowler",
};

/**
 * Single source of truth for lower-third controllers.
 * Order matches the control-panel button sequence.
 * Each entry is isolated — own component, config, and sample data.
 */
const LOWER_THIRD_CONTROLLERS = [
  {
    id: "empty",
    label: "Empty",
    component: lazy(() => import("./lower-third/EMPTY.jsx")),
    getProps: () => ({}),
  },
  {
    id: "default",
    label: "Default",
    component: lazy(() => import("./lower-third/DEFAULT.jsx")),
    getProps: () => ({ match: defaultSampleMatch }),
  },
  {
    id: "mini-scorecard",
    label: "Mini ScoreCard",
    component: lazy(() => import("./lower-third/MINI_SCORECARD.jsx")),
    getProps: () => ({ match: miniScorecardSample }),
  },
  {
    id: "match-summary",
    label: "Match Summary",
    component: lazy(() => import("./lower-third/MATCH_SUMMARY.jsx")),
    getProps: () => ({ match: matchSummarySample }),
  },
  {
    id: "intro-lt",
    label: "Intro LT",
    component: lazy(() => import("./lower-third/INTRO_LT.jsx")),
    getProps: () => ({ match: introLtSample }),
  },
  {
    id: "toss-lt",
    label: "Toss LT",
    component: lazy(() => import("./lower-third/TOSS_LT.jsx")),
    getProps: () => ({ match: tossLtSample }),
  },
  {
    id: "need-target",
    label: "Need/Target",
    component: lazy(() => import("./lower-third/NEED_TARGET.jsx")),
    getProps: () => ({ match: needTargetSample }),
  },
  {
    id: "at-stage",
    label: "At Stage",
    component: lazy(() => import("./lower-third/AT_STAGE.jsx")),
    getProps: () => ({ match: atStageSample }),
  },
  {
    id: "run-rate",
    label: "Run Rate",
    component: lazy(() => import("./lower-third/RUN_RATE.jsx")),
    getProps: () => ({ match: runRateSample }),
  },
  {
    id: "this-over",
    label: "This Over",
    component: lazy(() => import("./lower-third/THIS_OVER.jsx")),
    getProps: () => ({ match: thisOverSample }),
  },
  {
    id: "previous-over",
    label: "Previous Over",
    component: lazy(() => import("./lower-third/PREVIOUS_OVER.jsx")),
    getProps: () => ({ match: previousOverSample }),
  },
  {
    id: "fow",
    label: "FOW",
    component: lazy(() => import("./lower-third/FOW.jsx")),
    getProps: () => ({ match: fowSample }),
  },
  {
    id: "last-wicket",
    label: "Last Wicket",
    component: lazy(() => import("./lower-third/LAST_WICKET.jsx")),
    getProps: () => ({ match: lastWicketSample }),
  },
  {
    id: "last-12-balls",
    label: "Last 12 Balls",
    component: lazy(() => import("./lower-third/LAST_12_BALLS.jsx")),
    getProps: () => ({ match: last12BallsSample }),
  },
  {
    id: "last-30-balls",
    label: "Last 30 Balls",
    component: lazy(() => import("./lower-third/LAST_30_BALLS.jsx")),
    getProps: () => ({ match: last30BallsSample }),
  },
  {
    id: "current-partnership",
    label: "Current Partnership",
    component: lazy(() => import("./lower-third/CURRENT_PARTNERSHIP.jsx")),
    getProps: () => ({ match: currentPartnershipSample }),
  },
  {
    id: "tournament-name",
    label: "Tournament Name",
    component: lazy(() => import("./lower-third/TOURNAMENT_NAME.jsx")),
    getProps: () => ({ match: tournamentNameSample }),
  },
  {
    id: "result-lt",
    label: "Result LT",
    component: lazy(() => import("./lower-third/RESULT_LT.jsx")),
    getProps: () => ({ match: resultLtSample }),
  },
  {
    id: "win-prediction",
    label: "Win Prediction",
    component: lazy(() => import("./lower-third/WIN_PREDICTION.jsx")),
    getProps: () => ({ match: winPredictionSample }),
  },
  {
    id: "four",
    label: "4",
    component: lazy(() => import("./lower-third/FOUR.jsx")),
    getProps: () => ({ match: fourSample }),
  },
  {
    id: "six",
    label: "6",
    component: lazy(() => import("./lower-third/SIX.jsx")),
    getProps: () => ({ match: sixSample }),
  },
  {
    id: "wide",
    label: "Wide",
    component: lazy(() => import("./lower-third/WIDE.jsx")),
    getProps: () => ({ match: wideSample }),
  },
  {
    id: "no-ball",
    label: "No-Ball",
    component: lazy(() => import("./lower-third/NO_BALL.jsx")),
    getProps: () => ({ match: noBallSample }),
  },
  {
    id: "not-out",
    label: "Not Out",
    component: lazy(() => import("./lower-third/NOT_OUT.jsx")),
    getProps: () => ({ match: notOutSample }),
  },
  {
    id: "out",
    label: "Out",
    component: lazy(() => import("./lower-third/OUT.jsx")),
    getProps: () => ({ match: outSample }),
  },
  {
    id: "50-up",
    label: "50 Up",
    component: lazy(() => import("./lower-third/50_UP.jsx")),
    getProps: () => ({ match: fiftyUpSample }),
  },
  {
    id: "100-up",
    label: "100 Up",
    component: lazy(() => import("./lower-third/100_UP.jsx")),
    getProps: () => ({ match: hundredUpSample }),
  },
  {
    id: "replay",
    label: "Replay",
    component: lazy(() => import("./lower-third/REPLAY.jsx")),
    getProps: () => ({ match: replaySample }),
  },
  {
    id: "decision-pending",
    label: "Decision Pending",
    component: lazy(() => import("./lower-third/DECISION_PENDING.jsx")),
    getProps: () => ({ match: decisionPendingSample }),
  },
  {
    id: "umpires",
    label: "Umpires",
    component: lazy(() => import("./lower-third/UMPIRES.jsx")),
    getProps: () => ({ match: umpiresSample }),
  },
  {
    id: "scorers",
    label: "Scorers",
    component: lazy(() => import("./lower-third/SCORERS.jsx")),
    getProps: () => ({ match: scorersSample }),
  },
  {
    id: "commentators",
    label: "Commentators",
    component: lazy(() => import("./lower-third/COMMENTATORS.jsx")),
    getProps: () => ({ match: commentatorsSample }),
  },
  {
    id: "follow-tapeya",
    label: "Follow Tapeya",
    component: lazy(() => import("./lower-third/FOLLOW_TAPEYA.jsx")),
    getProps: () => ({ match: followTapeyaSample }),
  },
  {
    id: "download-tapeya",
    label: "Download Tapeya",
    component: lazy(() => import("./lower-third/DOWNLOAD_TAPEYA.jsx")),
    getProps: () => ({ match: downloadTapeyaSample }),
  },
  {
    id: "match-scorecard",
    label: "Match Scorecard",
    component: lazy(() => import("./lower-third/MATCH_SCORECARD.jsx")),
    getProps: () => ({ match: sampleMatch }),
  },
  {
    id: "match-scorecard-b",
    label: "Match Scorecard B",
    component: lazy(() => import("./lower-third/MATCH_SCORECARD_B.jsx")),
    getProps: () => ({ match: sampleMatchB }),
  },
];

/**
 * Tour-Hit controllers — Mini Scorecard badge above a ThisOver main bar.
 * Each entry is isolated — own component, config, and sample data.
 */
const TOUR_HIT_CONTROLLERS = [
  {
    id: "four",
    label: "4's",
    component: lazy(() => import("./tour-hit/FOUR.jsx")),
    getProps: () => ({ match: tourHitFourSample }),
  },
  {
    id: "sixes",
    label: "6's",
    component: lazy(() => import("./tour-hit/SIXES.jsx")),
    getProps: () => ({ match: tourHitSixesSample }),
  },
  {
    id: "fifties",
    label: "50's",
    component: lazy(() => import("./tour-hit/FIFTIES.jsx")),
    getProps: () => ({ match: tourHitFiftiesSample }),
  },
  {
    id: "hundreds",
    label: "100's",
    component: lazy(() => import("./tour-hit/HUNDREDS.jsx")),
    getProps: () => ({ match: tourHitHundredsSample }),
  },
  {
    id: "runs",
    label: "Run's",
    component: lazy(() => import("./tour-hit/RUNS.jsx")),
    getProps: () => ({ match: tourHitRunsSample }),
  },
  {
    id: "wickets",
    label: "Wkt's",
    component: lazy(() => import("./tour-hit/WICKETS.jsx")),
    getProps: () => ({ match: tourHitWicketsSample }),
  },
];

/**
 * Break controllers — full-page centered graphics.
 * Each entry is isolated — own component, config, and sample data.
 */
const BREAK_CONTROLLERS = [
  {
    id: "innings-break",
    label: "Innings Break",
    component: lazy(() => import("./breaks/INNINGS_BREAK.jsx")),
    getProps: () => ({ match: inningsBreakSample }),
  },
  {
    id: "tea-break",
    label: "Tea Break",
    component: lazy(() => import("./breaks/TEA_BREAK.jsx")),
    getProps: () => ({ match: teaBreakSample }),
  },
  {
    id: "lunch-break",
    label: "Lunch Break",
    component: lazy(() => import("./breaks/LUNCH_BREAK.jsx")),
    getProps: () => ({ match: lunchBreakSample }),
  },
  {
    id: "rain-stopped",
    label: "Rain Stopped",
    component: lazy(() => import("./breaks/RAIN_STOPPED.jsx")),
    getProps: () => ({ match: rainStoppedSample }),
  },
  {
    id: "strategic-timeout",
    label: "Strategic Timeout",
    component: lazy(() => import("./breaks/STRATEGIC_TIMEOUT.jsx")),
    getProps: () => ({ match: strategicTimeoutSample }),
  },
];

/**
 * Full Screen Transition controllers — Default scorecard + centered action overlay.
 * Each entry is isolated — own component, config, and sample data.
 */
const FULL_SCREEN_TRANSITION_CONTROLLERS = [
  {
    id: "four",
    label: "Four",
    component: lazy(() => import("./full-screen-transition/FOUR.jsx")),
    getProps: () => ({ match: fstFourSample }),
  },
  {
    id: "six",
    label: "Six",
    component: lazy(() => import("./full-screen-transition/SIX.jsx")),
    getProps: () => ({ match: fstSixSample }),
  },
  {
    id: "not-out",
    label: "Not Out",
    component: lazy(() => import("./full-screen-transition/NOT_OUT.jsx")),
    getProps: () => ({ match: fstNotOutSample }),
  },
  {
    id: "out",
    label: "Out",
    component: lazy(() => import("./full-screen-transition/OUT.jsx")),
    getProps: () => ({ match: fstOutSample }),
  },
  {
    id: "no-ball",
    label: "No-Ball",
    component: lazy(() => import("./full-screen-transition/NO_BALL.jsx")),
    getProps: () => ({ match: fstNoBallSample }),
  },
  {
    id: "wide",
    label: "Wide",
    component: lazy(() => import("./full-screen-transition/WIDE.jsx")),
    getProps: () => ({ match: fstWideSample }),
  },
  {
    id: "fifty",
    label: "50",
    component: lazy(() => import("./full-screen-transition/FIFTY.jsx")),
    getProps: () => ({ match: fstFiftySample }),
  },
  {
    id: "hundred",
    label: "100",
    component: lazy(() => import("./full-screen-transition/HUNDRED.jsx")),
    getProps: () => ({ match: fstHundredSample }),
  },
  {
    id: "replay",
    label: "Replay",
    component: lazy(() => import("./full-screen-transition/REPLAY.jsx")),
    getProps: () => ({ match: fstReplaySample }),
  },
  {
    id: "decision-pending",
    label: "Decision Pending",
    component: lazy(() => import("./full-screen-transition/DECISION_PENDING.jsx")),
    getProps: () => ({ match: fstDecisionPendingSample }),
  },
];

/**
 * Player Stats controllers — nested under batsman/ or bowler/.
 * Each entry includes `group` for control-panel subsections.
 */
const PLAYER_STATS_CONTROLLERS = [
  {
    id: "name-lt",
    label: "Name LT",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/NAME_LT.jsx")),
    getProps: () => ({ match: nameLtSample }),
  },
  {
    id: "match-lt",
    label: "Match LT",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/MATCH_LT.jsx")),
    getProps: () => ({ match: matchLtSample }),
  },
  {
    id: "tournament-lt",
    label: "Tournament LT",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/TOURNAMENT_LT.jsx")),
    getProps: () => ({ match: tournamentLtSample }),
  },
  {
    id: "name-fs",
    label: "Name FS",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/NAME_FS.jsx")),
    getProps: () => ({ match: nameFsSample }),
  },
  {
    id: "match-fs",
    label: "Match FS",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/MATCH_FS.jsx")),
    getProps: () => ({ match: matchFsSample }),
  },
  {
    id: "tournament-fs",
    label: "Tournament FS",
    group: "batsman",
    component: lazy(() => import("./player-stats/batsman/TOURNAMENT_FS.jsx")),
    getProps: () => ({ match: tournamentFsSample }),
  },
  {
    id: "bowler-name-lt",
    label: "Name LT",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_NAME_LT.jsx")),
    getProps: () => ({ match: bowlerNameLtSample }),
  },
  {
    id: "bowler-match-lt",
    label: "Match LT",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_MATCH_LT.jsx")),
    getProps: () => ({ match: bowlerMatchLtSample }),
  },
  {
    id: "bowler-tournament-lt",
    label: "Tournament LT",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_TOURNAMENT_LT.jsx")),
    getProps: () => ({ match: bowlerTournamentLtSample }),
  },
  {
    id: "bowler-name-fs",
    label: "Name FS",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_NAME_FS.jsx")),
    getProps: () => ({ match: bowlerNameFsSample }),
  },
  {
    id: "bowler-match-fs",
    label: "Match FS",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_MATCH_FS.jsx")),
    getProps: () => ({ match: bowlerMatchFsSample }),
  },
  {
    id: "bowler-tournament-fs",
    label: "Tournament FS",
    group: "bowler",
    component: lazy(() => import("./player-stats/bowler/BOWLER_TOURNAMENT_FS.jsx")),
    getProps: () => ({ match: bowlerTournamentFsSample }),
  },
];

/**
 * Tournament controllers — full-screen tournament boards.
 */
const TOURNAMENT_CONTROLLERS = [
  {
    id: "points-table",
    label: "Points Table",
    component: lazy(() => import("./tournaments/POINTS_TABLE.jsx")),
    getProps: () => ({ match: pointsTableSample }),
  },
  {
    id: "highest-runs",
    label: "Highest Runs",
    component: lazy(() => import("./tournaments/HIGHEST_RUNS.jsx")),
    getProps: () => ({ match: highestRunsSample }),
  },
  {
    id: "highest-wickets",
    label: "Highest Wickets",
    component: lazy(() => import("./tournaments/HIGHEST_WICKETS.jsx")),
    getProps: () => ({ match: highestWicketsSample }),
  },
  {
    id: "highest-sixes",
    label: "Highest Sixes",
    component: lazy(() => import("./tournaments/HIGHEST_SIXES.jsx")),
    getProps: () => ({ match: highestSixesSample }),
  },
  {
    id: "highest-fours",
    label: "Highest Fours",
    component: lazy(() => import("./tournaments/HIGHEST_FOURS.jsx")),
    getProps: () => ({ match: highestFoursSample }),
  },
];

/**
 * Charts controllers — full-screen match analytics graphics.
 */
const CHARTS_CONTROLLERS = [
  {
    id: "worm",
    label: "Worm",
    component: lazy(() => import("./charts/WORM.jsx")),
    getProps: () => ({ match: wormSample }),
  },
  {
    id: "manhattan",
    label: "Manhattan",
    component: lazy(() => import("./charts/MANHATTAN.jsx")),
    getProps: () => ({ match: manhattanSample }),
  },
  {
    id: "run-rate-chart",
    label: "Run Rate Chart",
    component: lazy(() => import("./charts/RUN_RATE_CHART.jsx")),
    getProps: () => ({ match: runRateChartSample }),
  },
  {
    id: "wagon-wheel",
    label: "Wagon Wheel",
    component: lazy(() => import("./charts/WAGON_WHEEL.jsx")),
    getProps: () => ({ match: wagonWheelSample }),
  },
];

/**
 * Full Screen controllers — full-page matchup / event graphics.
 */
const FULL_SCREEN_CONTROLLERS = [
  {
    id: "this-match",
    label: "This Match",
    component: lazy(() => import("./full-screen/THIS_MATCH.jsx")),
    getProps: () => ({ match: thisMatchSample }),
  },
  {
    id: "next-match",
    label: "Next Match",
    component: lazy(() => import("./full-screen/NEXT_MATCH.jsx")),
    getProps: () => ({ match: nextMatchSample }),
  },
  {
    id: "playing-11",
    label: "Playing 11",
    component: lazy(() => import("./full-screen/PLAYING_11.jsx")),
    getProps: () => ({ match: playing11Sample }),
  },
  {
    id: "last-wicket",
    label: "Last Wicket",
    component: lazy(() => import("./full-screen/LAST_WICKET.jsx")),
    getProps: () => ({ match: lastWicketFsSample }),
  },
  {
    id: "batting-squad",
    label: "Batting Squad",
    component: lazy(() => import("./full-screen/BATTING_SQUAD.jsx")),
    getProps: () => ({ match: battingSquadSample }),
  },
  {
    id: "bowling-squad",
    label: "Bowling Squad",
    component: lazy(() => import("./full-screen/BOWLING_SQUAD.jsx")),
    getProps: () => ({ match: bowlingSquadSample }),
  },
  {
    id: "current-partnership",
    label: "Current Partnership",
    component: lazy(() => import("./full-screen/CURRENT_PARTNERSHIP.jsx")),
    getProps: () => ({ match: currentPartnershipFsSample }),
  },
  {
    id: "partnership-list",
    label: "Partnership List",
    component: lazy(() => import("./full-screen/PARTNERSHIP_LIST.jsx")),
    getProps: () => ({ match: partnershipListSample }),
  },
  {
    id: "need-target",
    label: "Need Target",
    component: lazy(() => import("./full-screen/NEED_TARGET.jsx")),
    getProps: () => ({ match: needTargetFsSample }),
  },
  {
    id: "innings-figure",
    label: "Innings Figure",
    component: lazy(() => import("./full-screen/INNINGS_FIGURE.jsx")),
    getProps: () => ({ match: inningsFigureSample }),
  },
  {
    id: "batting-summary",
    label: "Batting Summary",
    component: lazy(() => import("./full-screen/BATTING_SUMMARY.jsx")),
    getProps: () => ({ match: battingSummarySample }),
  },
  {
    id: "bowling-summary",
    label: "Bowling Summary",
    component: lazy(() => import("./full-screen/BOWLING_SUMMARY.jsx")),
    getProps: () => ({ match: bowlingSummarySample }),
  },
  {
    id: "match-summary",
    label: "Match Summary",
    component: lazy(() => import("./full-screen/MATCH_SUMMARY.jsx")),
    getProps: () => ({ match: matchSummaryFsSample }),
  },
  {
    id: "top-batter",
    label: "Top Batter",
    component: lazy(() => import("./full-screen/TOP_BATTER.jsx")),
    getProps: () => ({ match: topBatterSample }),
  },
  {
    id: "top-bowler",
    label: "Top Bowler",
    component: lazy(() => import("./full-screen/TOP_BOWLER.jsx")),
    getProps: () => ({ match: topBowlerSample }),
  },
];

/** @type {Record<string, Record<string, React.ComponentType>>} */
export const controllerRegistry = {
  "lower-third": Object.fromEntries(
    LOWER_THIRD_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "tour-hit": Object.fromEntries(
    TOUR_HIT_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  breaks: Object.fromEntries(
    BREAK_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  charts: Object.fromEntries(
    CHARTS_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "full-screen": Object.fromEntries(
    FULL_SCREEN_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  "full-screen-transition": Object.fromEntries(
    FULL_SCREEN_TRANSITION_CONTROLLERS.map(({ id, component }) => [
      id,
      component,
    ])
  ),
  "player-stats": Object.fromEntries(
    PLAYER_STATS_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
  tournaments: Object.fromEntries(
    TOURNAMENT_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
};

/** @type {import("./registry.js").ControllerEntry[]} */
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
  ...BREAK_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "breaks",
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
  ...FULL_SCREEN_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "full-screen",
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
  ...PLAYER_STATS_CONTROLLERS.map(({ id, label, group, getProps }) => ({
    category: "player-stats",
    id,
    label,
    group,
    getProps,
  })),
  ...TOURNAMENT_CONTROLLERS.map(({ id, label, getProps }) => ({
    category: "tournaments",
    id,
    label,
    getProps,
  })),
];

/** @type {Map<string, (typeof controllerCatalog)[number]>} */
const controllerEntryByKey = new Map(
  controllerCatalog.map((entry) => [`${entry.category}/${entry.id}`, entry])
);

/** @type {ReturnType<typeof buildControllersByCategory>|null} */
let controllersByCategoryCache = null;

function buildControllersByCategory() {
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

/**
 * Resolve a controller component for dynamic rendering.
 * @param {string} category
 * @param {string} id
 */
export function getController(category, id) {
  return controllerRegistry[category]?.[id] ?? null;
}

/** @param {string} category @param {string} id */
export function getControllerEntry(category, id) {
  return controllerEntryByKey.get(`${category}/${id}`) ?? null;
}

/** Controllers grouped by category (includes empty categories for the panel). */
export function getControllersByCategory() {
  if (!controllersByCategoryCache) {
    controllersByCategoryCache = buildControllersByCategory();
  }
  return controllersByCategoryCache;
}

/** Output URL for a catalog entry. */
export function controllerOutputPath(category, id) {
  return `/output/${category}/${id}`;
}

/**
 * @typedef {Object} ControllerEntry
 * @property {string} category
 * @property {string} id
 * @property {string} label
 * @property {string} [group] - Nested group for player-stats (batsman|bowler)
 * @property {() => Record<string, unknown>} getProps
 */
