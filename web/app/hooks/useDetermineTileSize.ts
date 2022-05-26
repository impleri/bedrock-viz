import { useMemo } from "react";

import { DEFAULT_TILE_SIZE } from "../constants";

export type TileSizeOptions = {
  tileSize?: number | [number, number];
  tileSizeW?: number;
  tileSizeH?: number;
};

const isTuple = (value: unknown): value is [number, number] => Array.isArray(value);

export const useDetermineTileSize = ({ tileSize, tileSizeW, tileSizeH }: TileSizeOptions) => {
  return useMemo(() => {
    let actualTileSize: [number, number] = [DEFAULT_TILE_SIZE, DEFAULT_TILE_SIZE];

    if (isTuple(tileSize)) {
      actualTileSize = tileSize;
    } else if (typeof tileSize === "number" && !Number.isNaN(tileSize)) {
      actualTileSize = [tileSize, tileSize];
    } else if (tileSizeW && tileSizeH) {
      actualTileSize = [tileSizeW, tileSizeH];
    }

    return actualTileSize;
  }, [tileSize, tileSizeW, tileSizeH]);
};
