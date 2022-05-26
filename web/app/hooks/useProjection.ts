import { Projection } from "ol/proj";
import { useMemo } from "react";

import { Dimension } from "../types";
import { useMapExtent } from "./useMapExtent";

export const useProjection = (dimension?: Dimension) => {
  const extent = useMapExtent(dimension);

  const projection = useMemo(() => {
    return new Projection({
      code: "bedrock_viz-image",
      units: "m",
      extent,
      getPointResolution: (resolution) => resolution,
    });
  }, [extent]);

  return projection;
};
