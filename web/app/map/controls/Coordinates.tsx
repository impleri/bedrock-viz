import { Coordinate } from "ol/coordinate";
import { useProjection } from "../hooks";

import { MousePosition } from "./MousePosition";

export const Coordinates = () => {
  const projection = useProjection();

  return (
    <MousePosition
      projection={projection}
      coordinateFormat={(coordinate: Coordinate) => `${coordinate[0]}, ${-coordinate[1]}`}
    />
  );
};
