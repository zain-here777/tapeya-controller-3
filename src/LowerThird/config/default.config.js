import { createLowerThirdConfig } from "./shared.config.js";

/**
 * Default — isolated config.
 * Only overrides that differ from {@link lowerThirdSharedConfig}.
 * Do not import other controller configs here.
 */
export const defaultConfig = createLowerThirdConfig({
  id: "default",
});
