import { point, points } from "@turf/helpers";
import center from "@turf/center";
import { useMemo } from "react";

import { useDimension } from "./useDimension";
import { Dimension } from "../../types";

export const useMapCenter = (dimension?: Dimension) => {
  const { maxX, maxZ, minX, minZ } = useDimension(dimension);

  return useMemo(() => {
    if (!maxX || !maxZ || !minX || !minZ) {
      return point([0, 0]);
    }

    const boundary = points([
      [minX, minZ],
      [maxX, maxZ],
    ]);

    return center(boundary);
  }, [maxX, maxZ, minX, minZ]);
};
