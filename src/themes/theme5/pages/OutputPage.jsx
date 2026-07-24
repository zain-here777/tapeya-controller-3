import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../../../shared/controller/activeController.js";
import { readThemeFromSearch } from "../../../shared/utils/outputPath.js";
import { useTheme } from "../../ThemeProvider.jsx";
import BroadcastPageShell from "../layouts/BroadcastPageShell.jsx";
import ControllerHost from "../controllers/ControllerHost.jsx";
import OutputLayout from "../layouts/OutputLayout.jsx";
import { controllerCatalog, getControllerEntry } from "../controllers/registry.js";

/** Theme 5 output page — fully self-contained within theme5. */
export default function Theme5OutputPage() {
  const { category: paramCategory, id: paramId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { themeId } = useTheme();

  const [active, setActive] = useState(() => {
    if (paramCategory && paramId) {
      return { category: paramCategory, id: paramId };
    }
    return readActiveController() ?? null;
  });

  // Keep the URL in sync with the shared theme store (store → URL only).
  // Never write URL → store here — that fights the control-panel dropdown.
  useEffect(() => {
    if (readThemeFromSearch(searchParams) === themeId) return;
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("theme", themeId);
        return next;
      },
      { replace: true }
    );
  }, [themeId, searchParams, setSearchParams]);

  useEffect(() => {
    if (paramCategory && paramId) {
      writeActiveController(paramCategory, paramId);
      setActive({ category: paramCategory, id: paramId });
    }
  }, [paramCategory, paramId]);

  useEffect(() => subscribeActiveController(setActive), []);

  const resolvedActive = useMemo(() => {
    if (active) {
      const entry = getControllerEntry(active.category, active.id);
      if (entry) return active;
    }

    const first = controllerCatalog[0];
    return first ? { category: first.category, id: first.id } : null;
  }, [active]);

  if (!resolvedActive) {
    return (
      <BroadcastPageShell className="t5-output-empty">
        <p>Select a controller from the control panel.</p>
        <Link to="/">Open control panel</Link>
      </BroadcastPageShell>
    );
  }

  const entry = getControllerEntry(resolvedActive.category, resolvedActive.id);

  if (!entry) {
    return (
      <BroadcastPageShell className="t5-output-empty">
        <p>
          Unknown controller: {resolvedActive.category}/{resolvedActive.id}
        </p>
        <Link to="/">Back to control panel</Link>
      </BroadcastPageShell>
    );
  }

  return (
    <OutputLayout title={entry.label} panelLink="/">
      <ControllerHost
        category={resolvedActive.category}
        id={resolvedActive.id}
        {...entry.getProps()}
      />
    </OutputLayout>
  );
}
