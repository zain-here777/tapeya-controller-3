# Match Scorecard Controller (Lower Third)

Broadcast-style cricket lower-third scorecards built with React, Vite, and **Tailwind CSS v3**. Controllers scale proportionally on smaller viewports and accept live match data via a single `match` prop.

## Run it

```bash
npm install
npm run dev
```

Two pages:

| Route | Purpose |
|-------|---------|
| `/` | Control panel — buttons grouped by category |
| `/output` | Controller output (open in a second tab / OBS) |

Click a controller button on the panel; the output page updates live (including across tabs). Deep links also work: `/output/lower-third/default`.

## Structure

```
src/controllers/              Isolated controllers — one PascalCase JSX per category folder
  lower-third/
    Empty.jsx
    Default.jsx
    MatchScorecard.jsx
    MatchScorecardB.jsx
  registry.js                 Single catalog + lookup (category → id → component)
  activeController.js         Cross-tab selection sync (panel ↔ output)
  ControllerHost.jsx          Renders a controller from a button selection

src/pages/
  ControlPanelPage.jsx        `/` — categorized controller buttons
  OutputPage.jsx              `/output` — full-screen controller output

src/LowerThird/               Shared lower-third shell only (not per-controller)
  config/
    shared.config.js          Shared defaults — createLowerThirdConfig()
    default.config.js         Isolated Default overrides
    matchScorecard.config.js  Isolated MatchScorecard overrides
    matchScorecardB.config.js Isolated MatchScorecardB overrides
  data/                       Isolated sample feeds per controller
  core/                       LowerThirdBar, ScorecardLowerThird, PlayerAvatar
  columns/                    Column builders
  components/                 BatterCard, FeaturedPlayerCard, …
```

## Isolation rules

Each controller is fully isolated:

1. `controllers/<category>/<Name>.jsx` — JSX entry only (no nested folders)
2. `LowerThird/config/<name>.config.js` — `createLowerThirdConfig({ …overrides })`
3. `LowerThird/data/<name>.sample.js` — own demo feed (never re-export another controller's)
4. Register once in `controllers/registry.js` (`LOWER_THIRD_CONTROLLERS`)

Controllers must **not** import each other's config or sample data. Shared look comes from `shared.config.js` only.

## Data-driven

Pass a `match` object into any controller:

```jsx
import { MatchScorecard } from "./controllers";
import sampleMatch from "./LowerThird/data/matchScorecard.sample.js";

<MatchScorecard match={liveMatch ?? sampleMatch} />
```

See `src/LowerThird/data/match.types.js` for the full shape.

## Tailwind v3

- Theme tokens live in `tailwind.config.js` (`broadcast-surface`, panel colors, column widths)
- Shared UI classes in `src/index.css` under `@layer components` (control panel, output toolbar)
- Lower-third layout/scaling CSS stays in `index.css` where CSS variables are required

## Variants

| Control panel button | Output |
|-------|-------------|
| Empty | Clears output |
| Default | Full bar with CRR stat |
| Match Scorecard | Avatars contained inside the bar |
| Match Scorecard B | Player heads pop above the bar |

Override config at runtime: `<MatchScorecard match={m} config={{ bowlerPanelWidthPercent: 22 }} />`
