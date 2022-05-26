import { Text } from "grommet";
import { Coordinate } from "ol/coordinate";
import { useEffect, useState } from "react";

import { useMousePosition } from "../hooks";
import { Control } from "./Control";

export const MousePosition = () => {
  const [coordinates, setCoordinates] = useState<Coordinate>();
  const location = useMousePosition();

  useEffect(() => {
    if (location) {
      setCoordinates([location[0], -location[1]]);
    }
  }, [location]);

  if (!coordinates) {
    return;
  }

  const [x, y] = [coordinates[0].toFixed(2), coordinates[1].toFixed(2)];

  return (
    <Control background="brand" top="1rem" right="1rem">
      <Text>
        {x}, {y}
      </Text>
    </Control>
  );
};
