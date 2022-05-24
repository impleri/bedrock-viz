import { Dimension } from "../../types";
import { useDimension } from "./useDimension";

/**
 * Get the local player position for the given dimension
 */
export const useLocalPlayerLocation = (dimension?: Dimension) => {
  const { localPlayerPos } = useDimension(dimension);

  return localPlayerPos;
};
