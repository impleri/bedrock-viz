import { RControl, RLayerVector } from "rlayers";

import { Coordinates } from "./Coordinates";
import { ZoomToExtent } from "./ZoomToExtent";

export const Controls = () => {
  return (
    <RLayerVector zIndex={500}>
      <RControl.RScaleLine />
      <RControl.RFullScreen />
      <RControl.RAttribution />
      <Coordinates />
      <ZoomToExtent />
    </RLayerVector>
  );
};
