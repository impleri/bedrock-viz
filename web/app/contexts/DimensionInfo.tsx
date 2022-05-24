import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react";

import { CHUNK_SIZE, DIMENSION, INITIAL_DIMENSION, RENDER_DISTANCE } from "../constants";
import { Dimension } from "../types";
import { useMapInfo } from "./MapInfo";

const HALF_MINIMUM_RENDER = CHUNK_SIZE * Math.floor(RENDER_DISTANCE / 2);

type DimensionInfoState = Dimension & {
  options: DIMENSION[];
  select: Dispatch<SetStateAction<DIMENSION>>;
};

const DimensionInfoContext = createContext<DimensionInfoState>({
  name: INITIAL_DIMENSION,
  minX: -HALF_MINIMUM_RENDER,
  maxX: HALF_MINIMUM_RENDER,
  minY: 0,
  maxY: 256,
  minZ: -HALF_MINIMUM_RENDER,
  maxZ: HALF_MINIMUM_RENDER,
  hasSlices: false,
  spawnable: false,
  options: [],
  select: () => undefined,
});

export const useDimensionInfo = () => useContext(DimensionInfoContext);

type DimensionInfoProps = {
  unused?: boolean;
};

export const DimensionInfoProvider = ({ children }: PropsWithChildren<Partial<DimensionInfoProps>>) => {
  const { dimensions } = useMapInfo();

  const [currentDimension, setDimension] = useState<DIMENSION>(INITIAL_DIMENSION);

  const selectedDimension: Dimension = useMemo(
    () => dimensions.find((dimension) => dimension.name === currentDimension),
    [currentDimension, dimensions],
  );

  const options: DIMENSION[] = dimensions.map(({ name }) => name).filter((name) => name !== currentDimension);

  return (
    <DimensionInfoContext.Provider value={{ ...selectedDimension, options, select: setDimension }}>
      {children}
    </DimensionInfoContext.Provider>
  );
};
