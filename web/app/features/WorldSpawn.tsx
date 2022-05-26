import { useWorldSpawn } from "../hooks";
import { BaseMobMarker } from "./BaseMobMarker";

export const WorldSpawn = () => {
  const location = useWorldSpawn();
  return location ? <BaseMobMarker location={location} mobName="World Spawn" /> : null;
};
