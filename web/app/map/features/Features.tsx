import { RLayerVector } from "rlayers";

import { LocalPlayer } from "./LocalPlayer";

export const Features = () => {
  return (
    <RLayerVector zIndex={300}>
      <LocalPlayer />
    </RLayerVector>
  );
};
