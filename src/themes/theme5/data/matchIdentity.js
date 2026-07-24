import engLogo from "../../../shared/england-team.png";
import nzLogo from "../../../shared/nz-team.png";

/** Shared Theme 5 sample identity — England vs New Zealand (WTC). */

export const T4_TOURNAMENT = "ICC WORLD TEST CHAMPIONSHIP";
export const T4_VENUE = "LIVE FROM LORD'S CRICKET GROUND";

export const engTeam = {
  code: "ENG",
  name: "England",
  nameUpper: "ENGLAND",
  logoUrl: engLogo,
  theme: "gold",
  colorKey: "teamA",
};

export const nzTeam = {
  code: "NZ",
  name: "New Zealand",
  nameUpper: "NEW ZEALAND",
  logoUrl: nzLogo,
  theme: "gold",
  colorKey: "teamB",
};

/** Playing XI name lists (broadcast upper-case). */
export const ENG_XI = [
  "ZAK CRAWLEY",
  "BEN DUCKETT",
  "JOE ROOT",
  "HARRY BROOK",
  "BEN STOKES",
  "JAMIE SMITH",
  "CHRIS WOAKES",
  "JOFRA ARCHER",
  "MARK WOOD",
  "JACK LEACH",
  "JAMES ANDERSON",
];

export const NZ_XI = [
  "TOM LATHAM",
  "DEVON CONWAY",
  "KANE WILLIAMSON",
  "DARYL MITCHELL",
  "TOM BLUNDELL",
  "GLENN PHILLIPS",
  "MITCHELL SANTNER",
  "TIM SOUTHEE",
  "TRENT BOULT",
  "NEIL WAGNER",
  "KYLE JAMIESON",
];

/**
 * Team pair for break / identity panels (upper-case display names).
 * @param {{ teamA?: Object, teamB?: Object } & Object} [overrides]
 */
export function createIdentityMatch(overrides = {}) {
  const { teamA, teamB, ...rest } = overrides;
  return {
    tournament: T4_TOURNAMENT,
    venue: T4_VENUE,
    teamA: {
      code: engTeam.code,
      name: engTeam.nameUpper,
      logoUrl: engTeam.logoUrl,
      theme: "gold",
      colorKey: "teamA",
      ...teamA,
    },
    teamB: {
      code: nzTeam.code,
      name: nzTeam.nameUpper,
      logoUrl: nzTeam.logoUrl,
      theme: "gold",
      colorKey: "teamB",
      ...teamB,
    },
    ...rest,
  };
}

/**
 * Dual-team header block for chart samples (ENG top / NZ bottom).
 * @param {{ topAccent?: string, bottomAccent?: string }} [accents]
 */
export function createChartTeams({
  topAccent = "#0ea5e9",
  bottomAccent = "#f59e0b",
} = {}) {
  return {
    top: {
      code: engTeam.code,
      name: engTeam.nameUpper,
      logoUrl: engTeam.logoUrl,
      accent: topAccent,
    },
    bottom: {
      code: nzTeam.code,
      name: nzTeam.nameUpper,
      logoUrl: nzTeam.logoUrl,
      accent: bottomAccent,
    },
  };
}

/**
 * Live scorecard-style feed for Lower Third / FST / Tour-Hit samples.
 * @param {{ teamA?: Object, teamB?: Object } & Object} [overrides]
 */
export function createScorecardFeed(overrides = {}) {
  const { teamA, teamB, ...rest } = overrides;
  return {
    teamA: {
      ...engTeam,
      runs: 44,
      wickets: 0,
      overs: "6.4",
      oversLimit: 50,
      ...teamA,
    },
    teamB: {
      ...nzTeam,
      ...teamB,
    },
    batters: [
      {
        id: "b1",
        name: "Duckett",
        runs: 18,
        balls: 17,
        onStrike: false,
      },
      {
        id: "b2",
        name: "Bethell",
        runs: 17,
        balls: 23,
        onStrike: true,
      },
    ],
    stat: { label: "RR", value: "6.60" },
    featuredPlayer: {
      id: "f1",
      name: "Henry",
      wickets: 0,
      runs: 7,
      overs: "0.4",
      economy: "10.50",
      dotBalls: 3,
      overBalls: ["dot", "dot", "dot", 1, "5WD", "WD"],
    },
    ...rest,
  };
}
