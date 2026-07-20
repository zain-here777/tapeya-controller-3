#!/usr/bin/env node

/**
 * Scaffold a new isolated broadcast theme from the Theme 4 starter template.
 *
 * Usage:
 *   npm run create-theme -- 5
 *   npm run create-theme -- --number 5 --label "Theme 5" --description "Custom theme"
 *   node scripts/create-theme.mjs 5
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const THEMES_DIR = path.join(ROOT, "src", "themes");
const TEMPLATE_THEME_ID = "theme4";

/** @param {string[]} argv */
function parseArgs(argv) {
  const positional = [];
  let number = null;
  let label = null;
  let description = null;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--number" || arg === "-n") {
      number = Number(argv[++i]);
      continue;
    }

    if (arg === "--label" || arg === "-l") {
      label = argv[++i];
      continue;
    }

    if (arg === "--description" || arg === "-d") {
      description = argv[++i];
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      return { help: true };
    }

    if (!arg.startsWith("-")) {
      positional.push(arg);
    }
  }

  if (number === null && positional[0]) {
    number = Number(positional[0]);
  }

  return { number, label, description };
}

function printHelp() {
  console.log(`
Create a new isolated theme scaffold.

Usage:
  npm run create-theme -- <number>
  npm run create-theme -- --number 5 --label "Theme 5"

Options:
  -n, --number <n>         Theme number (required). Creates theme<n>, e.g. theme5.
  -l, --label <text>       Display label shown in the theme dropdown.
  -d, --description <text> Short description for the theme registry.
  -h, --help               Show this help.

What it does:
  1. Copies src/themes/theme4/ → src/themes/theme<n>/ (starter scaffold)
  2. Rewrites IDs, CSS prefixes, and component names for the new theme
  3. Registers the theme in src/shared/constants/themeIds.js
  4. Registers the theme in src/themes/registry.js

After running:
  npm run dev
  Select the new theme from the control panel dropdown.
`);
}

/** @param {string} dir */
function walkFiles(dir) {
  /** @type {string[]} */
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

/** @param {string} src @param {string} dest */
function copyDirectory(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

/**
 * @param {string} content
 * @param {number} num
 */
function applyThemeReplacements(content, num) {
  const themeId = `theme${num}`;
  const cssPrefix = `t${num}`;
  const configName = `theme${num}Config`;
  const pascal = `Theme${num}`;
  const label = `Theme ${num}`;
  const cssFile = `${themeId}.css`;

  const replacements = [
    [`theme4Config`, configName],
    [`theme4.css`, cssFile],
    [`[data-theme="theme4"]`, `[data-theme="${themeId}"]`],
    [`Theme4ControlPanelPage`, `${pascal}ControlPanelPage`],
    [`Theme4OutputPage`, `${pascal}OutputPage`],
    [`Theme4`, pascal],
    [`Theme 4`, label],
    [`--t4-`, `--${cssPrefix}-`],
    [`.t4-`, `.${cssPrefix}-`],
    [`t4-`, `${cssPrefix}-`],
    [`theme4`, themeId],
  ];

  let next = content;
  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }

  return next;
}

/** @param {string} filePath @param {number} num */
function rewriteFile(filePath, num) {
  const ext = path.extname(filePath);

  if (![".js", ".jsx", ".css", ".md"].includes(ext)) {
    return;
  }

  const original = fs.readFileSync(filePath, "utf8");
  const updated = applyThemeReplacements(original, num);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

/** @param {string} dir @param {number} num */
function rewriteTree(dir, num) {
  for (const file of walkFiles(dir)) {
    rewriteFile(file, num);
  }
}

/** @param {number} num @param {string} label @param {string} description */
function updateThemeIds(num) {
  const filePath = path.join(ROOT, "src", "shared", "constants", "themeIds.js");
  const themeId = `theme${num}`;
  const constName = `THEME_${num}`;
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes(`${constName}:`) || content.includes(`"${themeId}"`)) {
    throw new Error(`Theme "${themeId}" is already registered in themeIds.js`);
  }

  if (!content.includes("/** Default theme")) {
    throw new Error("Failed to update themeIds.js — unexpected file format");
  }

  content = content.replace(
    /(\};)\n\n(\/\*\* Default theme)/,
    `  ${constName}: "${themeId}",\n$1\n\n$2`
  );

  if (!content.includes(`${constName}:`)) {
    throw new Error("Failed to update themeIds.js — registration did not apply");
  }

  fs.writeFileSync(filePath, content, "utf8");
}

/** @param {number} num @param {string} label @param {string} description */
function updateRegistry(num, label, description) {
  const filePath = path.join(ROOT, "src", "themes", "registry.js");
  const themeId = `theme${num}`;
  const constName = `THEME_${num}`;
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes(`[THEME_IDS.${constName}]`) || content.includes(`./${themeId}/index.js`)) {
    throw new Error(`Theme "${themeId}" is already registered in registry.js`);
  }

  const entry = `  [THEME_IDS.${constName}]: {
    id: THEME_IDS.${constName},
    label: "${label}",
    description: "${description}",
    loadModule: () => import("./${themeId}/index.js"),
  },`;

  const closingBrace = "};";
  const catalogComment = "/** @type {ThemeDefinition[]} */";
  const anchor = `${closingBrace}\n\n${catalogComment}`;

  if (!content.includes(anchor)) {
    throw new Error("Failed to update registry.js — unexpected file format");
  }

  content = content.replace(anchor, `${entry}\n${closingBrace}\n\n${catalogComment}`);

  if (!content.includes(`./${themeId}/index.js`)) {
    throw new Error("Failed to update registry.js — registration did not apply");
  }

  fs.writeFileSync(filePath, content, "utf8");
}

/** @param {string} themeDir @param {number} num */
function renameStylesheet(themeDir, num) {
  const from = path.join(themeDir, "styles", `${TEMPLATE_THEME_ID}.css`);
  const to = path.join(themeDir, "styles", `theme${num}.css`);

  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const { number, label: labelArg, description: descriptionArg } = args;

  if (!Number.isInteger(number) || number < 1) {
    console.error("Error: Provide a valid theme number.\n");
    printHelp();
    process.exit(1);
  }

  const themeId = `theme${number}`;
  const templateDir = path.join(THEMES_DIR, TEMPLATE_THEME_ID);
  const targetDir = path.join(THEMES_DIR, themeId);
  const label = labelArg ?? `Theme ${number}`;
  const description = descriptionArg ?? `Isolated broadcast theme ${number}`;

  if (!fs.existsSync(templateDir)) {
    console.error(`Error: Template theme not found at ${templateDir}`);
    process.exit(1);
  }

  if (fs.existsSync(targetDir)) {
    console.error(`Error: Theme already exists at src/themes/${themeId}/`);
    process.exit(1);
  }

  if (number <= 4) {
    console.error(
      `Error: theme${number} already exists in the project. Choose the next number (e.g. 5).`
    );
    process.exit(1);
  }

  console.log(`Creating ${themeId} from ${TEMPLATE_THEME_ID} template...`);

  copyDirectory(templateDir, targetDir);
  rewriteTree(targetDir, number);
  renameStylesheet(targetDir, number);
  updateThemeIds(number);
  updateRegistry(number, label, description);

  console.log(`
✓ Theme scaffold created: src/themes/${themeId}/

✓ Registered in:
  - src/shared/constants/themeIds.js  (THEME_${number})
  - src/themes/registry.js

Next steps:
  1. Customize tokens:  src/themes/${themeId}/config/theme.config.js
  2. Customize styles:  src/themes/${themeId}/styles/${themeId}.css
  3. Add controllers:   src/themes/${themeId}/controllers/
  4. Run:               npm run dev
  5. Select "${label}" from the theme dropdown

Isolation rules:
  - Keep all code inside src/themes/${themeId}/
  - Only import from src/shared/ for theme-agnostic utilities
  - Never import from other theme folders
`);
}

main();
