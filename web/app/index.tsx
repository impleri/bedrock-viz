import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/* TODO:
 * - Map Overview Control
 * - Why only Nether Dimension map tiles aren't loading?
 * - Overlay Control (Grid, Slime, Elevation, Relief)
 * - Option Control (Chunk Coords, Translate Nether Coords, Show mobs within X block of players)
 * - Measure Control
 * - Theming
 * - Help/Tour
 * - Translation
 */
