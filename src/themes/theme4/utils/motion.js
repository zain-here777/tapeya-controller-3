/**
 * Theme 4 broadcast motion helpers — Tailwind animation class strings.
 * Prefer these over ad-hoc animation classes for consistency.
 */

export const T4_MOTION = {
  fadeUp: "motion-safe:animate-t4-fade-up motion-reduce:animate-none",
  fadeIn: "motion-safe:animate-t4-fade-in motion-reduce:animate-none",
  scaleIn: "motion-safe:animate-t4-scale-in motion-reduce:animate-none",
  slideLeft: "motion-safe:animate-t4-slide-left motion-reduce:animate-none",
  slideRight: "motion-safe:animate-t4-slide-right motion-reduce:animate-none",
  riseSoft: "motion-safe:animate-t4-rise-soft motion-reduce:animate-none",
  softIn: "motion-safe:animate-soft-in motion-reduce:animate-none",
};

/**
 * Stagger delay for sequential reveals (broadcast-friendly pacing).
 * @param {number} index
 * @param {number} [baseMs=80]
 * @param {number} [stepMs=55]
 */
export function t4StaggerStyle(index = 0, baseMs = 80, stepMs = 55) {
  return { animationDelay: `${baseMs + index * stepMs}ms` };
}

/**
 * Join motion class with optional extras.
 * @param {keyof typeof T4_MOTION} kind
 * @param {string} [extra]
 */
export function t4Motion(kind, extra = "") {
  return [T4_MOTION[kind], extra].filter(Boolean).join(" ");
}
