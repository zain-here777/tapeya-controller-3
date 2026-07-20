import React from "react";

/**
 * Soft diagonal silk / fabric folds for Break page backgrounds.
 * Matches draped-cloth look: broad blurred light bands over dark valleys.
 */
export default function BreakFabricBackground() {
  return (
    <div className="break-fabric" aria-hidden="true">
      <div className="break-fabric-base" />
      <div className="break-silk-folds" />
      <div className="break-silk-crest break-silk-crest-a" />
      <div className="break-silk-crest break-silk-crest-b" />
      <div className="break-silk-crest break-silk-crest-c" />
      <div className="break-silk-valley" />
      <div className="break-silk-sheen" />
    </div>
  );
}
