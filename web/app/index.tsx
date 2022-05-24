import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/* TODO:
 * - Coordinates
 * - Switch Dimensions
 * - Level/Layer switcher (Block, Biome, Height, Gray Height)
 * - Options (Chunk Coords, Translate Nether Coords, Show mobs within X block of players)
 * - Overlays (Grid, Slime, Elevation, Relief)
 * - Measure Control
 * - Zoom to Extent
 * - Help/Tour
 */
