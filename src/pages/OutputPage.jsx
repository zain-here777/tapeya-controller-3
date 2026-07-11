import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ControllerHost from "../controllers/ControllerHost.jsx";
import {
  controllerCatalog,
  getControllerEntry,
} from "../controllers/registry.js";
import {
  readActiveController,
  subscribeActiveController,
  writeActiveController,
} from "../controllers/activeController.js";
import BroadcastPageShell from "../layouts/BroadcastPageShell.jsx";
import ControllerLayout from "../layouts/ControllerLayout.jsx";

/**
 * Broadcast output page — renders the active controller full-screen.
 * Prefer opening `/output` in a second tab; the control panel drives selection.
 */
export default function OutputPage() {
  const { category: paramCategory, id: paramId } = useParams();
  const [active, setActive] = useState(() => {
    if (paramCategory && paramId) {
      return { category: paramCategory, id: paramId };
    }
    return readActiveController() ?? firstCatalogSelection();
  });

  useEffect(() => {
    if (paramCategory && paramId) {
      writeActiveController(paramCategory, paramId);
      setActive({ category: paramCategory, id: paramId });
    }
  }, [paramCategory, paramId]);

  useEffect(() => subscribeActiveController(setActive), []);

  if (!active) {
    return (
      <BroadcastPageShell className="flex flex-col items-center justify-center gap-4 bg-white text-black">
        <p className="text-black/60">Select a controller from the control panel.</p>
        <Link to="/" className="output-page-link">
          Open control panel
        </Link>
      </BroadcastPageShell>
    );
  }

  const entry = getControllerEntry(active.category, active.id);

  if (!entry) {
    return (
      <BroadcastPageShell className="flex flex-col items-center justify-center gap-4 bg-white text-black">
        <p className="text-black/60">
          Unknown controller: {active.category}/{active.id}
        </p>
        <Link to="/" className="output-page-link">
          Back to control panel
        </Link>
      </BroadcastPageShell>
    );
  }

  return (
    <ControllerLayout title={entry.label} panelLink="/">
      <ControllerHost
        category={active.category}
        id={active.id}
        {...entry.getProps()}
      />
    </ControllerLayout>
  );
}

function firstCatalogSelection() {
  const first = controllerCatalog[0];
  return first ? { category: first.category, id: first.id } : null;
}
