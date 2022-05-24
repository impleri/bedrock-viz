import { Coordinate } from "ol/coordinate";
import { MousePosition } from "./MousePosition";

export const Coordinates = () => {
  return <MousePosition coordinateFormat={(coordinate: Coordinate) => `${coordinate[0]}, ${-coordinate[1]}`} />;
};
