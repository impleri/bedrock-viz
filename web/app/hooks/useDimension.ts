import { useDimensionInfo } from "../contexts";
import { Dimension } from "../types";

/**
 * Private hook to resolve either the passed dimension or whichever is current in context
 */
export const useDimension = (dimension?: Dimension) => {
  const currentDimension = useDimensionInfo();

  return dimension ?? currentDimension;
};
