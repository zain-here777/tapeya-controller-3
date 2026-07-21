import AtStage from "./lower-third/AT_STAGE.jsx";
import Default from "./lower-third/DEFAULT.jsx";
import Empty from "./lower-third/EMPTY.jsx";
import IntroLT from "./lower-third/INTRO_LT.jsx";
import MatchSummary from "./lower-third/MATCH_SUMMARY.jsx";
import MiniScorecard from "./lower-third/MINI_SCORECARD.jsx";
import NeedTarget from "./lower-third/NEED_TARGET.jsx";
import ResultLT from "./lower-third/RESULT_LT.jsx";
import RunRate from "./lower-third/RUN_RATE.jsx";
import TossLT from "./lower-third/TOSS_LT.jsx";
import atStageSample from "../LowerThird/data/atStage.sample.js";
import defaultSampleMatch from "../LowerThird/data/default.sample.js";
import introLtSample from "../LowerThird/data/introLt.sample.js";
import matchSummarySample from "../LowerThird/data/matchSummary.sample.js";
import miniScorecardSample from "../LowerThird/data/miniScorecard.sample.js";
import needTargetSample from "../LowerThird/data/needTarget.sample.js";
import resultLtSample from "../LowerThird/data/resultLt.sample.js";
import runRateSample from "../LowerThird/data/runRate.sample.js";
import tossLtSample from "../LowerThird/data/tossLt.sample.js";

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
