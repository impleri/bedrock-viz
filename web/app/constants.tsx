export enum DIMENSION {
  OVERWORLD = "overworld",
  NETHER = "nether",
  THE_END = "the-end",
}

export const DIMENSION_NAME: Record<DIMENSION, string> = {
  [DIMENSION.OVERWORLD]: "Overworld",
  [DIMENSION.NETHER]: "Nether",
  [DIMENSION.THE_END]: "The End",
};

export enum MAP_TYPE {
  OVERVIEW = "map",
  BIOME = "biome",
  HEIGHT = "height_col",
  HEIGHT_GRAY = "height_col_grayscale",
}

export const MAP_TYPE_NAME: Record<MAP_TYPE, string> = {
  [MAP_TYPE.OVERVIEW]: "Overview",
  [MAP_TYPE.BIOME]: "Biome Color",
  [MAP_TYPE.HEIGHT]: "Height",
  [MAP_TYPE.HEIGHT_GRAY]: "Height (Grayscale)",
};

export enum MAP_DETAIL {
  CHUNK_GRID = "chunk_grid",
  HEIGHT_ALPHA = "height_col_alpha",
  RELIEF = "shaded_relief",
  SLIME = "slime",
}

export const MAP_DETAIL_NAME: Record<MAP_DETAIL, string> = {
  [MAP_DETAIL.CHUNK_GRID]: "Chunk Grid",
  [MAP_DETAIL.HEIGHT_ALPHA]: "Height Shading",
  [MAP_DETAIL.RELIEF]: "Terrain",
  [MAP_DETAIL.SLIME]: "Slime Chunks",
};

export const DEFAULT_TILE_SIZE = 2048;

export const DEFAULT_WORLD_NAME = "My World";

export const UNKNOWN_SEED = "Unknown";

export const CHUNK_SIZE = 16;

export const RENDER_DISTANCE = 10;

export const INITIAL_DIMENSION = DIMENSION.OVERWORLD;
