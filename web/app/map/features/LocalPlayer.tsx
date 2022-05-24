import { useLocalPlayerLocation } from "../hooks";
import { BaseMobMarker } from "./BaseMobMarker";

export const LocalPlayer = () => {
  const location = useLocalPlayerLocation();
  return location ? <BaseMobMarker location={location} mobName="Local Player" /> : null;
};
