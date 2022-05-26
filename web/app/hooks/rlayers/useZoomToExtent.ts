import { Extent } from "ol/extent";
import { fromExtent } from "ol/geom/Polygon";
import { useCallback } from "react";

import { useRView } from "./useRView";

type ZoomToExtentResult = () => void;

// Adapted from https://github.com/openlayers/openlayers/blob/main/src/ol/control/ZoomToExtent.js
export const useZoomToExtent = (extent?: Extent): ZoomToExtentResult => {
  const view = useRView();

  const zoomFunction = useCallback(() => {
    const target = extent ?? view.getProjection().getExtent();
    view.fitInternal(fromExtent(target));
  }, [extent, view]);

  return zoomFunction;
};
