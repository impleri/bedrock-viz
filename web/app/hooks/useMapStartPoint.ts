import { Dimension } from "../types";
import { useLocalPlayerLocation } from "./useLocalPlayerLocation";
import { useMapCenter } from "./useMapCenter";
import { useWorldSpawn } from "./useWorldSpawn";

export const useMapStartPoint = (dimension?: Dimension) => {
  const localPlayerPos = useLocalPlayerLocation(dimension);
  const worldSpawn = useWorldSpawn(dimension);
  const center = useMapCenter(dimension);

  return worldSpawn ?? center.geometry.coordinates;
};
