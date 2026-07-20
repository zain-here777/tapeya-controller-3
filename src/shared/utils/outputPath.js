/** Build output URL with theme query param for cross-tab deep linking. */
export function buildOutputPath(category, id, themeId) {
  const base = `/output/${category}/${id}`;
  if (!themeId) return base;
  return `${base}?theme=${encodeURIComponent(themeId)}`;
}

/** @param {URLSearchParams|string|null|undefined} search */
export function readThemeFromSearch(search) {
  const params =
    typeof search === "string"
      ? new URLSearchParams(search)
      : search instanceof URLSearchParams
        ? search
        : null;

  return params?.get("theme") ?? null;
}
