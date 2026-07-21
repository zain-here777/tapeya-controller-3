/**
 * Theme-agnostic broadcast match payload contract.
 * Both themes accept the same `match` prop shape from the scoring feed / API.
 *
 * @typedef {Object} MatchTeam
 * @property {string} [code] - Three-letter team code (e.g. "ALB")
 * @property {string} [name] - Full team name
 * @property {string} [logoUrl] - Crest / logo image URL
 * @property {"gold"|"red"|"batsman"|"bowler"} [theme] - Crest / panel palette hint
 * @property {number} [runs]
 * @property {number} [wickets]
 * @property {string} [overs] - e.g. "12.4"
 * @property {number|string} [oversLimit] - e.g. 20
 * @property {string} [inningsLabel] - e.g. "P1"
 * @property {string} [phaseLabel] - e.g. "Powerplay 1"
 * @property {string} [colorKey] - Key into theme team color map (e.g. "teamA")
 *
 * @typedef {Object} MatchBatter
 * @property {string} id
 * @property {string} name
 * @property {string} [photoUrl]
 * @property {number} [runs]
 * @property {number} [balls]
 * @property {boolean} [onStrike]
 *
 * @typedef {Object} MatchStat
 * @property {string} label - e.g. "PARTNERSHIP"
 * @property {string} value - e.g. "42 (28)"
 * @property {string} [sublabel]
 *
 * @typedef {Object} MatchBowler
 * @property {string} id
 * @property {string} name
 * @property {string} [photoUrl]
 * @property {number} [wickets]
 * @property {number} [runs]
 * @property {string} [overs]
 * @property {Array<string|number|null>} [overBalls] - Current over, up to 6 balls
 * @property {number} [lastOverRuns] - Runs scored in the previous over
 * @property {string|number} [economy]
 * @property {number|string} [dotBalls]
 *
 * @typedef {Object} MatchFallOfWicket
 * @property {string} [id]
 * @property {number} order - Wicket number (1 → "1st")
 * @property {string} [label] - Optional ordinal override (e.g. "1st")
 * @property {number|string} score - Team score when the wicket fell
 * @property {string} name - Dismissed batsman
 *
 * @typedef {Object} MatchData
 * @property {MatchTeam} teamA - Batting side (left columns)
 * @property {MatchTeam} teamB - Bowling side (right panel crest)
 * @property {MatchBatter[]} [batters] - At-crease batters (1–2 typical)
 * @property {MatchFallOfWicket[]} [fallOfWickets] - FOW middle panel; replaces batters when set
 * @property {MatchStat} [stat] - Single active stat slot (Partnership, CRR, etc.)
 * @property {MatchStat[]} [stats] - Multiple stat slots; takes precedence over `stat`
 * @property {MatchBowler} [featuredPlayer] - Current bowler
 * @property {string} [phaseLabel] - Phase under center score (Theme 4 Default)
 * @property {MatchStat} [runRateStat] - Run-rate line (Theme 4 Default)
 */

export {};
