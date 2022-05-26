import { createContext, useContext, PropsWithChildren, useState, useCallback } from "react";

import { MAP_TYPE } from "../constants";
import { useDimensionInfo } from "./DimensionInfo";

type MapOptionsState = {
  type?: MAP_TYPE;
  setType: (type: MAP_TYPE) => void;
  yLevel?: number;
  setYLevel: (yLevel: number) => void;
};

const MapOptionsContext = createContext<MapOptionsState>({
  type: MAP_TYPE.OVERVIEW,
  setType: () => undefined,
  setYLevel: () => undefined,
});

export const useMapOptions = () => useContext(MapOptionsContext);

type MapOptionsProps = {
  initialType?: MAP_TYPE;
};

export const MapOptionsProvider = ({
  children,
  initialType = MAP_TYPE.OVERVIEW,
}: PropsWithChildren<MapOptionsProps>) => {
  const { minY, maxY } = useDimensionInfo();
  const [type, setType] = useState<MAP_TYPE>(() => initialType);
  const [yLevel, setYLevel] = useState<number>();

  const changeType = useCallback((newType: MAP_TYPE) => {
    setType(newType);
    setYLevel(undefined);
  }, []);

  const changeYLevel = useCallback(
    (newLevel: number) => {
      if (newLevel < minY || newLevel > maxY) {
        return;
      }

      setType(undefined);
      setYLevel(newLevel);
    },
    [minY, maxY],
  );

  const state: MapOptionsState = {
    type,
    setType: changeType,
    yLevel,
    setYLevel: changeYLevel,
  };

  return <MapOptionsContext.Provider value={state}>{children}</MapOptionsContext.Provider>;
};
