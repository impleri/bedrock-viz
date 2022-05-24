import { RControl, RLayerVector } from "rlayers";

import { Coordinates } from "./Coordinates";

export const Controls = () => {
  return (
    <RLayerVector zIndex={500}>
      <RControl.RScaleLine />
      <RControl.RFullScreen />
      <Coordinates />
    </RLayerVector>
  );
};
