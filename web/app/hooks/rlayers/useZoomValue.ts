import { useMapState } from "../../contexts";

export const useZoomValue = () => {
  const { state } = useMapState();

  return state.zoom;
};
