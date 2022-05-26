import { useMemo } from "react";

import { INITIAL_DIMENSION, MAP_TYPE } from "../constants";

export const useMapUrl = (dimension = INITIAL_DIMENSION, option: MAP_TYPE | number = MAP_TYPE.OVERVIEW) => {
  const url = useMemo(() => {
    const type = typeof option === "number" ? MAP_TYPE.OVERVIEW : option;
    const yLevel = typeof option === "number" ? option : undefined;

    return `/tiles/bedrock_viz.${yLevel ? "slice.full." : ""}${dimension}.${yLevel ?? type}.png.{y}.{x}.png`;
  }, [dimension, option]);

  return url;
};
