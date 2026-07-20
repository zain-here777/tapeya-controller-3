const defaultTheme = require("tailwindcss/defaultTheme");
const layout = require("./src/themes/theme3/theme/layout.constants.cjs");

/** Convert rem/em theme tokens to px (16px root). Percentages and unitless values are kept. */
const toPx = (value) => {
  if (typeof value !== "string") return value;
  if (value.endsWith("rem") || value.endsWith("em")) {
    return `${parseFloat(value) * 16}px`;
  }
  return value;
};

const mapThemeValues = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value)) {
        const [size, options] = value;
        if (options && typeof options === "object") {
          return [
            key,
            [
              toPx(size),
              Object.fromEntries(
                Object.entries(options).map(([optionKey, optionValue]) => [
                  optionKey,
                  typeof optionValue === "string" ? toPx(optionValue) : optionValue,
                ])
              ),
            ],
          ];
        }
        return [key, toPx(size)];
      }
      return [key, toPx(value)];
    })
  );

const dividerHeight = Math.round(layout.BAR_HEIGHT * layout.DIVIDER_HEIGHT_RATIO);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    spacing: mapThemeValues(defaultTheme.spacing),
    fontSize: mapThemeValues(defaultTheme.fontSize),
    letterSpacing: mapThemeValues(defaultTheme.letterSpacing),
    borderRadius: mapThemeValues(defaultTheme.borderRadius),
    extend: {
      colors: {
        panel: {
          player: "#2e0a1a",
          stat: "#000000",
        },
        divider: "rgb(205 205 205 / 33%)",
        broadcast: {
          surface: "#0a0812",
          boundary: "#3dcc4a",
          six: "#7c3aed",
          wicket: "#dc2626",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        controller: ['"Saira"', "sans-serif"],
        score: ['"Saira Condensed"', "sans-serif"],
      },
      height: {
        controller: `${layout.CONTROLLER_HEIGHT}px`,
        bar: `${layout.BAR_HEIGHT}px`,
        divider: `${dividerHeight}px`,
        "avatar-sm": `${layout.AVATAR_HEIGHT_SM}px`,
        "avatar-md": `${layout.BAR_HEIGHT}px`,
        "avatar-lg": `${layout.BAR_HEIGHT}px`,
      },
      width: {
        "avatar-sm": `${layout.AVATAR_WIDTH_SM}px`,
        "avatar-md": `${layout.AVATAR_WIDTH_MD}px`,
        "avatar-lg": `${layout.AVATAR_WIDTH_LG}px`,
      },
      minWidth: {
        "col-expand": `${layout.EXPANDABLE_COLUMN_MIN_WIDTH}px`,
        "col-stat": `${layout.STAT_COLUMN_MIN_WIDTH}px`,
      },
      backgroundImage: {
        "bowler-panel":
          "linear-gradient(to right, #9c0028, #b80032, #c40038)",
      },
      keyframes: {
        scorePop: {
          "0%": { transform: "scale(1.18)", opacity: "0.4" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        actionTextShadow: {
          "0%": {
            transform: "translateY(0)",
            textShadow:
              "0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b",
          },
          "20%": {
            transform: "translateY(-1em)",
            textShadow:
              "0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b, 0 -0.25em 0 #fefc4b",
          },
          "40%": {
            transform: "translateY(0.5em)",
            textShadow:
              "0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd, 0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b",
          },
          "60%": {
            transform: "translateY(-0.25em)",
            textShadow:
              "0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd, 0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b",
          },
          "80%": {
            transform: "translateY(0)",
            textShadow:
              "0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b",
          },
        },
        chartWormDraw: {
          to: { strokeDashoffset: "0" },
        },
        chartBarGrow: {
          "0%": { transform: "scaleY(0.001)" },
          "100%": { transform: "scaleY(1)" },
        },
        chartFadeUp: {
          "0%": { transform: "translateY(22px) scale(0.99)", opacity: "0" },
          "100%": { transform: "none", opacity: "1" },
        },
        chartGrowW: {
          "0%": { width: "0%" },
          "100%": { width: "var(--chart-bar-w, 100%)" },
        },
      },
      animation: {
        "score-pop": "scorePop 320ms cubic-bezier(0.22,1,0.36,1)",
        shine: "shine 6s ease-in-out infinite",
        "action-text-shadow":
          "actionTextShadow 1.5s ease-in-out infinite",
        "chart-worm":
          "chartWormDraw 1.1s cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        "chart-bar-grow":
          "chartBarGrow 0.7s cubic-bezier(0.2, 0.9, 0.2, 1) both",
        "chart-fade-up":
          "chartFadeUp 0.6s cubic-bezier(0.18, 0.9, 0.2, 1) both",
        "chart-grow-w":
          "chartGrowW 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
