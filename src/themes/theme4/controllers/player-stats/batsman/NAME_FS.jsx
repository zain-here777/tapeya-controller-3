import React from "react";
import NameFSCore from "../../../PlayerStats/core/NameFSCore.jsx";
import { nameFsConfig } from "../../../PlayerStats/config/nameFs.config.js";

/** Theme 4 batsman Name FS. */
export default function NameFS({ match, config }) {
  return (
    <NameFSCore match={match} baseConfig={nameFsConfig} config={config} />
  );
}
