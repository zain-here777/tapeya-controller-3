import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  readActiveTheme,
  subscribeActiveTheme,
  writeActiveTheme,
} from "./activeTheme.js";
import {
  getCachedThemeModule,
  getThemeDefinition,
  loadThemeModule,
  preloadThemesInIdle,
  resolveThemeId,
  themeCatalog,
} from "./registry.js";
import { readThemeFromSearch } from "../shared/utils/outputPath.js";

/**
 * Resolve the theme for this document once on startup.
 * Deep-link `?theme=` seeds the shared store only here — pages must not
 * keep re-applying the URL or they will fight the control-panel dropdown.
 * @param {string} [initialThemeId]
 */
function resolveStartupThemeId(initialThemeId) {
  if (initialThemeId) return resolveThemeId(initialThemeId);

  const fromUrl = readThemeFromSearch(window.location.search);
  if (fromUrl && getThemeDefinition(fromUrl)) {
    writeActiveTheme(fromUrl);
    return resolveThemeId(fromUrl);
  }

  return readActiveTheme();
}

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
 * Cached themes resolve synchronously to avoid loading flashes on switch-back.
 */
export default function ThemeProvider({ children, initialThemeId }) {
  const [themeId, setThemeIdState] = useState(() =>
    resolveStartupThemeId(initialThemeId)
  );
  const [themeModule, setThemeModule] = useState(() =>
    getCachedThemeModule(themeId)
  );
  const [loading, setLoading] = useState(() => !getCachedThemeModule(themeId));

  useEffect(() => subscribeActiveTheme(setThemeIdState), []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeId;

    const cached = getCachedThemeModule(themeId);
    if (cached) {
      setThemeModule(cached);
      setLoading(false);
      preloadThemesInIdle(themeId);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    loadThemeModule(themeId)
      .then((module) => {
        if (!cancelled) {
          setThemeModule(module);
          setLoading(false);
          preloadThemesInIdle(themeId);
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

  const setThemeId = useCallback((nextThemeId) => {
    writeActiveTheme(nextThemeId);
    setThemeIdState(nextThemeId);
  }, []);

  const value = useMemo(
    () => ({
      themeId,
      setThemeId,
      themeModule,
      themeCatalog,
      loading,
    }),
    [themeId, setThemeId, themeModule, loading]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
