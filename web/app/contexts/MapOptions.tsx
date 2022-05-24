import { createContext, useContext, PropsWithChildren } from "react";

import { MAP_TYPE } from "../constants";

type MapOptionsState = {
  type?: MAP_TYPE;
  yLevel?: number;
};

const MapOptionsContext = createContext<MapOptionsState>({
  type: MAP_TYPE.OVERVIEW,
});

export const useMapOptions = () => useContext(MapOptionsContext);

export const MapOptionsProvider = ({
  children,
  type = MAP_TYPE.OVERVIEW,
  yLevel,
}: PropsWithChildren<MapOptionsState>) => {
  const state: MapOptionsState = {
    type,
    yLevel,
  };

  return <MapOptionsContext.Provider value={state}>{children}</MapOptionsContext.Provider>;
};
