import { View } from "ol";
import { easeOut } from "ol/easing";
import { useMemo } from "react";

import { useRView } from "./useRView";

type EasingFn = (t: number) => number;

// Adapted from https://github.com/openlayers/openlayers/blob/main/src/ol/control/Zoom.js

const animateZoom =
  (view: View, duration: number, easing: EasingFn = easeOut) =>
  (newZoom: number) => {
    const zoom = view.getConstrainedZoom(newZoom);
    if (view.getAnimating()) {
      view.cancelAnimations();
    }
    view.animate({
      zoom,
      duration,
      easing,
    });
  };

const simpleZoom = (view: View) => (newZoom: number) => {
  const zoom = view.getConstrainedZoom(newZoom);
  view.setZoom(zoom);
};

type ZoomResult = (zoom: number) => void;

export const useZoom = (duration = 250, easing?: EasingFn): ZoomResult => {
  const view = useRView();

  const zoomFunction = useMemo(() => {
    return duration > 0 ? animateZoom(view, duration, easing) : simpleZoom(view);
  }, [duration, easing, view]);

  return zoomFunction;
};
