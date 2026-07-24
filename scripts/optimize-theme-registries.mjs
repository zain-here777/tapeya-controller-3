#!/usr/bin/env node
/**
 * Convert theme controller registries from eager imports to React.lazy().
 * Safe to re-run: skips files that already use lazy(() => import(...)).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const themes = ["theme3", "theme4", "theme5"];

const LOOKUP_MARKER = "controllerEntryByKey";

const OPTIMIZED_LOOKUPS = `/** @type {Map<string, (typeof controllerCatalog)[number]>} */
const controllerEntryByKey = new Map(
  controllerCatalog.map((entry) => [\`\${entry.category}/\${entry.id}\`, entry])
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

/** @param {string} category @param {string} id */
export function getController(category, id) {
  return controllerRegistry[category]?.[id] ?? null;
}

/** @param {string} category @param {string} id */
export function getControllerEntry(category, id) {
  return controllerEntryByKey.get(\`\${category}/\${id}\`) ?? null;
}

export function getControllersByCategory() {
  if (!controllersByCategoryCache) {
    controllersByCategoryCache = buildControllersByCategory();
  }
  return controllersByCategoryCache;
}
`;

for (const themeId of themes) {
  const filePath = path.join(ROOT, "src/themes", themeId, "controllers/registry.js");
  let content = fs.readFileSync(filePath, "utf8");

  const importRe = /^import\s+(\w+)\s+from\s+"(\.\/[^"]+\.jsx)";\s*$/gm;
  /** @type {Array<{ name: string, spec: string }>} */
  const componentImports = [];
  let match;
  while ((match = importRe.exec(content)) !== null) {
    componentImports.push({ name: match[1], spec: match[2] });
  }

  if (componentImports.length > 0) {
    content = content.replace(importRe, "");

    if (!/import\s*\{[^}]*\blazy\b[^}]*\}\s*from\s*["']react["']/.test(content)) {
      content = `import { lazy } from "react";\n${content}`;
    }

    // Longest names first so MatchScorecard does not eat MatchScorecardB.
    componentImports.sort((a, b) => b.name.length - a.name.length);
    for (const { name, spec } of componentImports) {
      const componentRe = new RegExp(`component:\\s*${name}\\b`, "g");
      content = content.replace(
        componentRe,
        `component: lazy(() => import("${spec}"))`
      );
    }

    content = content.replace(/\n{3,}/g, "\n\n");
    console.log(`${themeId}: converted ${componentImports.length} controllers to lazy()`);
  } else if (content.includes("lazy(() => import(")) {
    console.log(`${themeId}: controllers already lazy`);
  } else {
    console.log(`${themeId}: no controller imports found`);
  }

  if (!content.includes(LOOKUP_MARKER)) {
    const start = content.indexOf("/** @param {string} category @param {string} id */\nexport function getController");
    const end = content.indexOf("/** @param {string} category @param {string} id */\nexport function controllerOutputPath");

    if (start === -1 || end === -1) {
      console.warn(`${themeId}: could not locate lookup helpers to optimize`);
    } else {
      content = `${content.slice(0, start)}${OPTIMIZED_LOOKUPS}\n${content.slice(end)}`;
      console.log(`${themeId}: optimized catalog lookups`);
    }
  }

  fs.writeFileSync(filePath, content, "utf8");
}
