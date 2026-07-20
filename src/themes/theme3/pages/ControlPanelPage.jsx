import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ThemeSelector from "../../../app/components/ThemeSelector.jsx";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../../../shared/controller/activeController.js";
import { buildOutputPath, readThemeFromSearch } from "../../../shared/utils/outputPath.js";
import { writeActiveTheme } from "../../activeTheme.js";
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
    <div className="flex flex-wrap gap-2">
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

/** Theme 3 control panel — fully self-contained within theme3. */
export default function Theme3ControlPanelPage() {
  const { themeId } = useTheme();
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState(() => readActiveController());

  useEffect(() => subscribeActiveController(setActive), []);

  useEffect(() => {
    const themeFromUrl = readThemeFromSearch(searchParams);
    if (themeFromUrl) writeActiveTheme(themeFromUrl);
  }, [searchParams]);

  const groups = useMemo(() => getControllersByCategory(), []);
  const rowSize = LOWER_THIRD_PANEL_ROW_SIZE;

  const outputPath = active
    ? buildOutputPath(active.category, active.id, themeId)
    : buildOutputPath("lower-third", "default", themeId);

  return (
    <BroadcastPageShell className="overflow-x-hidden overflow-y-auto">
      <header className="control-panel-header">
        <div>
          <p className="control-panel-eyebrow">Scorecard Controller</p>
          <h1 className="control-panel-title">Control Panel</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSelector />
          <Link to={outputPath} target="_blank" rel="noreferrer" className="panel-link-btn">
            Open output ↗
          </Link>
        </div>
      </header>

      <main className="control-panel-main">
        {groups.map(({ category, label, controllers, groups: subGroups }) => {
          const rows =
            category === "lower-third"
              ? chunkControllers(controllers, rowSize)
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
                <div className="flex flex-col gap-2">
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
