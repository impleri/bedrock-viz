import { DIMENSION } from "./constants";

export type Dimension = {
  name: DIMENSION;
  maxX: number;
  maxY: number;
  maxZ: number;
  minX: number;
  minY: number;
  minZ: number;
  hasSlices: boolean;
  spawnable: boolean;
  localPlayerPos?: [number, number];
  geojsonBlocks?: string[];
};

export type Info = {
  name: string;
  seed: number;
  generatedAt: string;
  generatorVersion: string;
  includesGeoJSON: boolean;
  worldSpawn: [number, number];
  tileSize: [number, number] | false;
  dimensions: Dimension[];
};
