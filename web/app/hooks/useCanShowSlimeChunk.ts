import { DIMENSION } from "../constants";
import { Dimension } from "../types";
import { useDimension } from "./useDimension";

/**
 * Determine if the dimension has slime chunks to show
 */
export const useCanShowSlimeChunk = (dimension?: Dimension) => {
  const { name } = useDimension(dimension);

  return name !== DIMENSION.OVERWORLD;
};
