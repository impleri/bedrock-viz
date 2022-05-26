import { useCallback } from "react";

import { useZoom } from "./useZoom";
import { useZoomValue } from "./useZoomValue";

type ZoomStepResult = [() => void, () => void];

const noop = () => undefined;

export const useZoomStep = (step = 1): ZoomStepResult => {
  const currentZoom = useZoomValue();
  const setZoom = useZoom();

  const zoomIn = useCallback(() => (currentZoom ? setZoom(currentZoom + step) : noop), [currentZoom, setZoom, step]);
  const zoomOut = useCallback(() => (currentZoom ? setZoom(currentZoom - step) : noop), [currentZoom, setZoom, step]);

  return [zoomIn, zoomOut];
};
