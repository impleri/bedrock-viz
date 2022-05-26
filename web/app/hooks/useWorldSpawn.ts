import { DIMENSION } from "../constants";
import { useMapInfo } from "../contexts";
import { Dimension } from "../types";
import { useDimension } from "./useDimension";

/**
 * Get the local player position for the given dimension
 */
export const useWorldSpawn = (dimension?: Dimension) => {
  const { worldSpawn } = useMapInfo();
  const { name } = useDimension(dimension);

  return name === DIMENSION.OVERWORLD ? worldSpawn : undefined;
};
