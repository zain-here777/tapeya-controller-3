import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  readActiveTheme,
  subscribeActiveTheme,
  writeActiveTheme,
} from "./activeTheme.js";
import { loadThemeModule, themeCatalog } from "./registry.js";

/**
 * @typedef {import('./registry.js').ThemeModule} ThemeModule
 */

const ThemeContext = createContext(null);

/** @returns {{ themeId: string, setThemeId: (id: string) => void, themeModule: ThemeModule|null, themeCatalog: typeof themeCatalog, loading: boolean }} */
export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return value;
}

/** Optional hook — returns null when used outside provider (e.g. tests). */
export function useThemeOptional() {
  return useContext(ThemeContext);
}

/**
 * Provides active theme state and lazily loads the theme module + styles.
 * Sets `data-theme` on `<html>` for CSS scoping.
 */
export default function ThemeProvider({ children, initialThemeId }) {
  const [themeId, setThemeIdState] = useState(
    () => initialThemeId ?? readActiveTheme()
  );
  const [themeModule, setThemeModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => subscribeActiveTheme(setThemeIdState), []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeId;

    let cancelled = false;
    setThemeModule(null);
    setLoading(true);

    loadThemeModule(themeId)
      .then((module) => {
        if (!cancelled) {
          setThemeModule(module);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(`[ThemeProvider] Failed to load theme "${themeId}"`, error);
        if (!cancelled) {
          setThemeModule(null);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [themeId]);

  const setThemeId = (nextThemeId) => {
    writeActiveTheme(nextThemeId);
    setThemeIdState(nextThemeId);
  };

  const value = useMemo(
    () => ({
      themeId,
      setThemeId,
      themeModule,
      themeCatalog,
      loading,
    }),
    [themeId, themeModule, loading]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
