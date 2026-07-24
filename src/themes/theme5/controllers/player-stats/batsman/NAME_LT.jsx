import React from "react";
import NameLTCore from "../../../PlayerStats/core/NameLTCore.jsx";
import { nameLtConfig } from "../../../PlayerStats/config/nameLt.config.js";

/** Theme 5 batsman Name LT. */
export default function NameLT({ match, config }) {
  return (
    <NameLTCore match={match} baseConfig={nameLtConfig} config={config} />
  );
}
