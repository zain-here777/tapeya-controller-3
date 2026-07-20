/** @param {Record<string, unknown>} target @param {Record<string, unknown>} source */
function mergeObjects(target, source) {
  const result = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      typeof result[key] === "object" &&
      result[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = mergeObjects(result[key], value);
    } else if (value !== undefined) {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Deep-merge config objects (safe for nested column rules).
 * @param {Record<string, unknown>} base
 * @param {Record<string, unknown>} [override]
 */
export function mergeConfig(base, override = {}) {
  return mergeObjects(base, override);
}
