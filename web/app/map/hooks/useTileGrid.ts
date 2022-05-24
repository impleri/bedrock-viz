import TileGrid from "ol/tilegrid/TileGrid";
import { useMemo } from "react";

import { useMapInfo } from "../../contexts";
import { Dimension } from "../../types";
import { useMapExtent } from "./useMapExtent";

export const useTileGrid = (dimension?: Dimension) => {
  const { tileSize } = useMapInfo();
  const extent = useMapExtent(dimension);

  const tileGrid = useMemo(
    () =>
      new TileGrid({
        extent,
        tileSize,
        resolutions: [1],
      }),
    [extent, tileSize],
  );

  return tileGrid;
};
