import { createActionBannerConfig } from "./actionBanner.shared.js";

/** 100 Up — same broadcast action banner as Four. */
export const hundredUpConfig = createActionBannerConfig({
  id: "100-up",
  fallbackLabel: "100 Up",
  accentKey: "hundred",
  showConfetti: true,
});
