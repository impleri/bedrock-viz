import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import { useCallback, useEffect, useState } from "react";

import { useRContext } from "./useRContext";

const EVENT_NAME = "pointermove";

export const useMousePosition = (): Coordinate => {
  const { map } = useRContext();
  const [location, setLocation] = useState<Coordinate>();

  const listener = useCallback((event: MapBrowserEvent<UIEvent>) => {
    setLocation(event.map.getCoordinateFromPixel(event.pixel));
  }, []);

  useEffect(() => {
    map.on(EVENT_NAME, listener);

    return () => {
      map.un(EVENT_NAME, listener);
    };
  }, []);

  return location;
};
