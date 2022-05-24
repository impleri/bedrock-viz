import { Dimension } from "../../types";
import { useLocalPlayerLocation } from "./useLocalPlayerLocation";
import { useMapCenter } from "./useMapCenter";

export const useMapStartPoint = (dimension?: Dimension) => {
  const localPlayerPos = useLocalPlayerLocation(dimension);
  const center = useMapCenter(dimension);

  return localPlayerPos ?? center.geometry.coordinates;
};
