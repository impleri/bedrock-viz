import { useMemo } from "react";

import { INITIAL_DIMENSION, MAP_TYPE } from "../../constants";

export const useMapUrl = (dimension = INITIAL_DIMENSION, option: MAP_TYPE | number = MAP_TYPE.OVERVIEW) => {
  const url = useMemo(() => {
    const type = typeof option === "number" ? MAP_TYPE.OVERVIEW : option;
    const yLevel = typeof option === "number" ? option : undefined;

    if (type === MAP_TYPE.OVERVIEW && yLevel) {
      return `/tiles/bedrock_viz.slice.full.${dimension}.${yLevel}.png.{y}.{x}.png`;
    }

    return `/tiles/bedrock_viz.${dimension}.${type}.png.{y}.{x}.png`;
  }, [dimension, option]);

  return url;
};
