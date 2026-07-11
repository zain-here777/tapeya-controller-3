import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ControllerSelectButton from "../components/ControllerSelectButton.jsx";
import {
  controllerOutputPath,
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "../controllers/registry.js";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../controllers/activeController.js";
import BroadcastPageShell from "../layouts/BroadcastPageShell.jsx";

/** Split controllers into fixed panel rows (lower-third board layout). */
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
    <div className="flex flex-nowrap gap-2">
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

/**
 * Operator control panel — buttons grouped by controller category.
 * Selection syncs to the output page (same or another browser tab).
 */
export default function ControlPanelPage() {
  const groups = getControllersByCategory();
  const [active, setActive] = useState(() => readActiveController());

  useEffect(() => subscribeActiveController(setActive), []);

  const outputPath = active
    ? controllerOutputPath(active.category, active.id)
    : "/output";

  return (
    <BroadcastPageShell className="overflow-x-hidden overflow-y-auto">
      <header className="control-panel-header">
        <div>
          <p className="control-panel-eyebrow">Scorecard Controller</p>
          <h1 className="control-panel-title">Control Panel</h1>
        </div>
        <Link to={outputPath} target="_blank" rel="noreferrer" className="panel-link-btn">
          Open output ↗
        </Link>
      </header>

      <main className="control-panel-main">
        {groups.map(({ category, label, controllers, groups: subGroups }) => {
          const rows =
            category === "lower-third"
              ? chunkControllers(controllers, LOWER_THIRD_PANEL_ROW_SIZE)
              : [controllers];

          return (
            <section key={category} aria-labelledby={`category-${category}`}>
              <h2 id={`category-${category}`} className="control-panel-section-title">
                {label}
              </h2>

              {controllers.length === 0 && !subGroups ? (
                <p className="control-panel-empty">No controllers yet</p>
              ) : subGroups ? (
                <div className="flex flex-col gap-4">
                  {subGroups.map(({ group, label: groupLabel, controllers: groupControllers }) => (
                    <div key={`${category}-${group}`}>
                      <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                        {groupLabel}
                      </h3>
                      {groupControllers.length === 0 ? (
                        <p className="control-panel-empty">No controllers yet</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <ControllerButtonRow
                            controllers={groupControllers}
                            active={active}
                            onSelect={writeActiveController}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2 overflow-x-auto">
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
