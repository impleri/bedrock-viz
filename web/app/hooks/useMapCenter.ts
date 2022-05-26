import { point, points } from "@turf/helpers";
import center from "@turf/center";
import { useMemo } from "react";

import { useDimension } from "./useDimension";
import { useWorldSpawn } from "./useWorldSpawn";
import { Dimension } from "../types";

export const useMapCenter = (dimension?: Dimension) => {
  const { maxX, maxZ, minX, minZ } = useDimension(dimension);
  const worldSpawn = useWorldSpawn(dimension);

  return useMemo(() => {
    if (!maxX || !maxZ || !minX || !minZ) {
      return point(worldSpawn ?? [0, 0]);
    }

    const boundary = points([
      [minX, -maxZ],
      [maxX, -minZ],
    ]);

    return center(boundary);
  }, [maxX, maxZ, minX, minZ]);
};
