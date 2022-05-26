import { createContext, useContext, PropsWithChildren } from "react";

import { DEFAULT_TILE_SIZE, DEFAULT_WORLD_NAME, UNKNOWN_SEED } from "../constants";
import { TileSizeOptions, useDetermineTileSize } from "../hooks";
import { Dimension } from "../types";

type MapInfoState = {
  bedrockVizVersion: string;
  createdAt: Date;
  dimensions: Dimension[];
  name: string;
  seed: string | number;
  tileSize: [number, number];
  worldSpawn: [number, number];
};

const MapInfoContext = createContext<MapInfoState>({
  bedrockVizVersion: "",
  createdAt: new Date(),
  dimensions: [],
  name: "",
  seed: "",
  tileSize: [DEFAULT_TILE_SIZE, DEFAULT_TILE_SIZE],
  worldSpawn: [0, 0],
});

export const useMapInfo = () => useContext(MapInfoContext);

type MapInfoProps = Partial<Omit<MapInfoState, "tileSize">> & TileSizeOptions;

export const MapInfoProvider = ({
  children,
  bedrockVizVersion = "",
  createdAt = new Date(),
  dimensions = [],
  worldSpawn = [0, 0],
  name = DEFAULT_WORLD_NAME,
  seed = UNKNOWN_SEED,
  ...tileSizeOptions
}: PropsWithChildren<MapInfoProps>) => {
  const tileSize = useDetermineTileSize(tileSizeOptions);

  const state: MapInfoState = {
    bedrockVizVersion,
    createdAt,
    dimensions,
    name,
    seed,
    tileSize,
    worldSpawn,
  };

  return <MapInfoContext.Provider value={state}>{children}</MapInfoContext.Provider>;
};
