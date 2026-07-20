import React from "react";
import { useTheme } from "../../themes/ThemeProvider.jsx";

/** Theme-agnostic theme selector — styling comes from active theme CSS. */
export default function ThemeSelector({ className = "" }) {
  const { themeId, setThemeId, themeCatalog } = useTheme();

  return (
    <label className={`app-theme-selector ${className}`.trim()}>
      <span className="app-theme-selector-label">Theme</span>
      <select
        value={themeId}
        onChange={(event) => setThemeId(event.target.value)}
        className="app-theme-selector-input"
        aria-label="Select broadcast theme"
      >
        {themeCatalog.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
    </label>
  );
}
