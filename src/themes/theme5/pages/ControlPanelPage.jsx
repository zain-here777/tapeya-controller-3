import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "../../../app/components/ThemeSelector.jsx";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../../../shared/controller/activeController.js";
import { buildOutputPath } from "../../../shared/utils/outputPath.js";
import { useTheme } from "../../ThemeProvider.jsx";
import ControllerSelectButton from "../components/ControllerSelectButton.jsx";
import BroadcastPageShell from "../layouts/BroadcastPageShell.jsx";
import {
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "../controllers/registry.js";

function chunkControllers(controllers, rowSize) {
  if (!rowSize || rowSize <= 0) return [controllers];
  const rows = [];
  for (let i = 0; i < controllers.length; i += rowSize) {
    rows.push(controllers.slice(i, i + rowSize));
  }
  return rows;
}

function ControllerButtonRow({ controllers, active, onSelect }) {
  return (
    <div className="t5-panel-btn-row">
      {controllers.map((entry) => {
        const isActive =
          active?.category === entry.category && active?.id === entry.id;

        return (
          <ControllerSelectButton
            key={`${entry.category}/${entry.id}`}
            active={isActive}
            onClick={() => onSelect(entry.category, entry.id)}
          >
            {entry.label}
          </ControllerSelectButton>
        );
      })}
    </div>
  );
}

/** Theme 5 control panel — fully self-contained within theme5. */
export default function Theme5ControlPanelPage() {
  const { themeId } = useTheme();
  const [active, setActive] = useState(() => readActiveController());

  useEffect(() => subscribeActiveController(setActive), []);

  const groups = useMemo(() => getControllersByCategory(), []);
  const rowSize = LOWER_THIRD_PANEL_ROW_SIZE;

  const outputPath = active
    ? buildOutputPath(active.category, active.id, themeId)
    : buildOutputPath("lower-third", "default", themeId);

  return (
    <BroadcastPageShell className="t5-control-panel">
      <header className="t5-control-panel-header">
        <div>
          <p className="t5-control-panel-eyebrow">Scorecard Controller</p>
          <h1 className="t5-control-panel-title">Control Panel</h1>
        </div>
        <div className="t5-control-panel-actions">
          <ThemeSelector />
          <Link to={outputPath} target="_blank" rel="noreferrer" className="t5-panel-link-btn">
            Open output ↗
          </Link>
        </div>
      </header>

      <main className="t5-control-panel-main">
        {groups.map(({ category, label, controllers, groups: subGroups }) => {
          const rows =
            category === "lower-third"
              ? chunkControllers(controllers, rowSize)
              : [controllers];

          return (
            <section key={category} aria-labelledby={`t5-category-${category}`}>
              <h2 id={`t5-category-${category}`} className="t5-control-panel-section-title">
                {label}
              </h2>

              {controllers.length === 0 && !subGroups ? (
                <p className="t5-control-panel-empty">No controllers yet</p>
              ) : subGroups ? (
                <div className="t5-panel-subgroups">
                  {subGroups.map(({ group, label: groupLabel, controllers: groupControllers }) => (
                    <div key={`${category}-${group}`}>
                      <h3 className="t5-control-panel-subgroup-title">{groupLabel}</h3>
                      {groupControllers.length === 0 ? (
                        <p className="t5-control-panel-empty">No controllers yet</p>
                      ) : (
                        <ControllerButtonRow
                          controllers={groupControllers}
                          active={active}
                          onSelect={writeActiveController}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="t5-panel-rows">
                  {rows.map((row, rowIndex) => (
                    <ControllerButtonRow
                      key={`${category}-row-${rowIndex}`}
                      controllers={row}
                      active={active}
                      onSelect={writeActiveController}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </BroadcastPageShell>
  );
}
