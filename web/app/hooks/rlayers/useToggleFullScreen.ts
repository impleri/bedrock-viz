import { Map as OLMap } from "ol";
import { useCallback } from "react";

import { useRContext } from "./useRContext";

const isFullScreenSupported = (doc: Document) => {
  const body = doc.body;

  return !!(
    body["webkitRequestFullscreen"] ||
    (body["msRequestFullscreen"] && doc["msFullscreenEnabled"]) ||
    (body.requestFullscreen && doc.fullscreenEnabled)
  );
};

const enterFullScreen = (map: OLMap, source?: string | HTMLElement) => () => {
  const doc = map.getOwnerDocument();

  let element: HTMLElement;

  if (source) {
    element = typeof source === "string" ? doc.getElementById(source) : source;
  }

  if (!source || !element) {
    element = map.getTargetElement();
  }

  if (element["webkitRequestFullscreen"]) {
    element["webkitRequestFullscreen"]();
  } else if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element["msRequestFullscreen"]) {
    element["msRequestFullscreen"]();
  }
};

const exitFullScreen = (doc: Document) => () => {
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc["msExitFullscreen"]) {
    doc["msExitFullscreen"]();
  } else if (doc["webkitExitFullscreen"]) {
    doc["webkitExitFullscreen"]();
  }
};

const isFullScreen = (doc: Document) => {
  return !!(doc["webkitIsFullScreen"] || doc["msFullscreenElement"] || doc.fullscreenElement);
};

type FullScreenHook = [boolean, () => void, boolean];

export const useToggleFullScreen = (source?: string | HTMLElement): FullScreenHook => {
  const { map } = useRContext();

  const doc = map.getOwnerDocument();
  const requestFullScreen = useCallback(enterFullScreen(map, source), [map, source]);
  const requestExitScreen = useCallback(exitFullScreen(doc), [doc]);

  if (!isFullScreenSupported(doc)) {
    return [false, () => undefined, false];
  }

  const toggled = isFullScreen(doc);
  return [toggled, toggled ? requestExitScreen : requestFullScreen, true];
};
