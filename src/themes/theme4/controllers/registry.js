import AtStage from "./lower-third/AT_STAGE.jsx";
import CurrentPartnership from "./lower-third/CURRENT_PARTNERSHIP.jsx";
import Default from "./lower-third/DEFAULT.jsx";
import Empty from "./lower-third/EMPTY.jsx";
import Four from "./lower-third/FOUR.jsx";
import FOW from "./lower-third/FOW.jsx";
import IntroLT from "./lower-third/INTRO_LT.jsx";
import Last12Balls from "./lower-third/LAST_12_BALLS.jsx";
import Last30Balls from "./lower-third/LAST_30_BALLS.jsx";
import LastWicket from "./lower-third/LAST_WICKET.jsx";
import MatchSummary from "./lower-third/MATCH_SUMMARY.jsx";
import MiniScorecard from "./lower-third/MINI_SCORECARD.jsx";
import NeedTarget from "./lower-third/NEED_TARGET.jsx";
import PreviousOver from "./lower-third/PREVIOUS_OVER.jsx";
import ResultLT from "./lower-third/RESULT_LT.jsx";
import RunRate from "./lower-third/RUN_RATE.jsx";
import ThisOver from "./lower-third/THIS_OVER.jsx";
import TossLT from "./lower-third/TOSS_LT.jsx";
import TournamentName from "./lower-third/TOURNAMENT_NAME.jsx";
import WinPrediction from "./lower-third/WIN_PREDICTION.jsx";
import atStageSample from "../LowerThird/data/atStage.sample.js";
import currentPartnershipSample from "../LowerThird/data/currentPartnership.sample.js";
import defaultSampleMatch from "../LowerThird/data/default.sample.js";
import fourSample from "../LowerThird/data/four.sample.js";
import fowSample from "../LowerThird/data/fow.sample.js";
import introLtSample from "../LowerThird/data/introLt.sample.js";
import last12BallsSample from "../LowerThird/data/last12Balls.sample.js";
import last30BallsSample from "../LowerThird/data/last30Balls.sample.js";
import lastWicketSample from "../LowerThird/data/lastWicket.sample.js";
import matchSummarySample from "../LowerThird/data/matchSummary.sample.js";
import miniScorecardSample from "../LowerThird/data/miniScorecard.sample.js";
import needTargetSample from "../LowerThird/data/needTarget.sample.js";
import previousOverSample from "../LowerThird/data/previousOver.sample.js";
import resultLtSample from "../LowerThird/data/resultLt.sample.js";
import runRateSample from "../LowerThird/data/runRate.sample.js";
import thisOverSample from "../LowerThird/data/thisOver.sample.js";
import tossLtSample from "../LowerThird/data/tossLt.sample.js";
import tournamentNameSample from "../LowerThird/data/tournamentName.sample.js";
import winPredictionSample from "../LowerThird/data/winPrediction.sample.js";

export const LOWER_THIRD_PANEL_ROW_SIZE = 6;

const CONTROLLER_CATEGORIES = ["lower-third"];

const CONTROLLER_CATEGORY_LABELS = {
  "lower-third": "Lower Third",
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
    id: "win-prediction",
    label: "Win Prediction",
    component: WinPrediction,
    getProps: () => ({ match: winPredictionSample }),
  },
  {
    id: "four",
    label: "Four",
    component: Four,
    getProps: () => ({ match: fourSample }),
  },
  {
    id: "mini-scorecard",
    label: "Mini Scorecard",
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
    id: "tournament-name",
    label: "Tournament Name",
    component: TournamentName,
    getProps: () => ({ match: tournamentNameSample }),
  },
  {
    id: "toss-lt",
    label: "Toss LT",
    component: TossLT,
    getProps: () => ({ match: tossLtSample }),
  },
  {
    id: "result-lt",
    label: "Result LT",
    component: ResultLT,
    getProps: () => ({ match: resultLtSample }),
  },
];

/** @type {Record<string, Record<string, import('react').ComponentType>>} */
export const controllerRegistry = {
  "lower-third": Object.fromEntries(
    LOWER_THIRD_CONTROLLERS.map(({ id, component }) => [id, component])
  ),
};

/** @type {Array<{ category: string, id: string, label: string, getProps: () => Record<string, unknown> }>} */
export const controllerCatalog = LOWER_THIRD_CONTROLLERS.map(({ id, label, getProps }) => ({
  category: "lower-third",
  id,
  label,
  getProps,
}));

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
  return CONTROLLER_CATEGORIES.map((category) => ({
    category,
    label: CONTROLLER_CATEGORY_LABELS[category] ?? category,
    controllers: controllerCatalog.filter((entry) => entry.category === category),
    groups: null,
  }));
}

/** @param {string} category @param {string} id */
export function controllerOutputPath(category, id) {
  return `/output/${category}/${id}`;
}
