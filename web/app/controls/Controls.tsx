import { RLayerVector } from "rlayers";

import { LAYERS } from "../constants";
import { Attribution } from "./Attribution";
import { DimensionSelect } from "./DimensionSelect";
import { MapTypeSelect } from "./MapTypeSelect";
import { MousePosition } from "./MousePosition";
import { FullScreen } from "./FullScreen";
import { ScaleLine } from "./ScaleLine";
import { Zoom } from "./Zoom";
import { ZoomToExtent } from "./ZoomToExtent";

export const Controls = () => {
  return (
    <RLayerVector zIndex={LAYERS.CONTROLS}>
      <Zoom />
      <ZoomToExtent />
      <DimensionSelect />
      <MapTypeSelect />
      <ScaleLine />
      <MousePosition />
      <FullScreen />
      <Attribution collapsible />
    </RLayerVector>
  );
};
