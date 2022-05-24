import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/* TODO:
 * - Base Layers (Block, Biome, Height, Gray Height)
 * - Overlays (Grid, Slime, Elevation, Relief)
 * - Options (Chunk Coords, Translate Nether Coords, Show mobs within X block of players)
 * - Measure
 * - Theming
 * - Help/Tour
 */
