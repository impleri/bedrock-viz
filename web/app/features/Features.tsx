import { RLayerVector } from "rlayers";

import { LAYERS } from "../constants";
import { LocalPlayer } from "./LocalPlayer";
import { WorldSpawn } from "./WorldSpawn";

export const Features = () => {
  return (
    <RLayerVector zIndex={LAYERS.FEATURE}>
      <WorldSpawn />
      <LocalPlayer />
    </RLayerVector>
  );
};
