import { useMemo } from "react";

import { useMapInfo } from "../../contexts";
import { Dimension } from "../../types";
import { useDimension } from "./useDimension";

/**
 * Helper function to calculate how much space is left over in the tiles after accounting
 * for the area explored.
 */
const calculateDimensionOffset = (min: number, max: number, tileSize: number): number => {
  const rawLength = max - min;
  const chunkLength = Math.ceil(rawLength / 16) + 1;
  const length = chunkLength * 16;
  const tileCount = Math.ceil(length / tileSize);
  const tileLength = tileCount * tileSize;
  return tileLength - length;
};

/**
 * Calculate the extent of the map from the provided min/max coordinates for the dimension
 * and map tile size.
 */
export const useMapExtent = (dimension?: Dimension) => {
  const { tileSize } = useMapInfo();
  const { maxX, maxZ, minX, minZ } = useDimension(dimension);

  return useMemo(() => {
    const [tileSizeX, tileSizeY] = tileSize;

    const offsetX = calculateDimensionOffset(minX, maxX, tileSizeX);
    const offsetZ = calculateDimensionOffset(minZ, maxZ, tileSizeY);

    return [minX, offsetZ - maxZ, maxX + offsetX, -minZ];
  }, [maxX, maxZ, minX, minZ, tileSize[0], tileSize[1]]);
};
