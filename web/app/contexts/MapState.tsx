import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react";
import { RView } from "rlayers/RMap";

type MapState = {
  state: RView;
  setState: Dispatch<SetStateAction<RView>>;
};

const INITIAL_STATE: RView = {
  center: [0, 0],
  zoom: 6,
};
const MapStateContext = createContext<MapState>({
  state: INITIAL_STATE,
  setState: () => undefined,
});

export const useMapState = () => useContext(MapStateContext);

type MapStateProps = {
  initialView?: RView;
};

export const MapStateProvider = ({ children, initialView = INITIAL_STATE }: PropsWithChildren<MapStateProps>) => {
  const [view, setView] = useState<RView>(() => initialView);

  const state: MapState = useMemo(
    () => ({
      state: view,
      setState: setView,
    }),
    [view.center[0], view.center[1], view.zoom],
  );

  return <MapStateContext.Provider value={state}>{children}</MapStateContext.Provider>;
};
