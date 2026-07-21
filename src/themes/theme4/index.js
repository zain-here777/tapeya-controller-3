import { createThemeModule } from "../contract.js";
import ControlPanelPage from "./pages/ControlPanelPage.jsx";
import OutputPage from "./pages/OutputPage.jsx";
import ControllerHost from "./controllers/ControllerHost.jsx";
import {
  controllerCatalog,
  controllerOutputPath,
  getController,
  getControllerEntry,
  getControllersByCategory,
  LOWER_THIRD_PANEL_ROW_SIZE,
} from "./controllers/registry.js";
import { theme4Config } from "./config/theme.config.js";

async function loadStyles() {
  await import("./styles/theme4.css");
  await import("./FullScreenTransition/styles/fst.css");
}

export default createThemeModule({
  id: theme4Config.id,
  label: theme4Config.label,
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  ControllerHost,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
});

export {
  loadStyles,
  ControlPanelPage,
  OutputPage,
  getController,
  getControllerEntry,
  getControllersByCategory,
  controllerOutputPath,
  controllerCatalog,
  LOWER_THIRD_PANEL_ROW_SIZE,
  ControllerHost,
};
