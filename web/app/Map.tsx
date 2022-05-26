import { useEffect } from "react";
import { RMap } from "rlayers";

import { useDimensionInfo, useMapState } from "./contexts";
import { Controls } from "./controls";
import { Features } from "./features";
import { useMapStartPoint, useProjection } from "./hooks";
import { BaseMaps } from "./layers";

import "ol/ol.css";

export const Map = () => {
  const { name } = useDimensionInfo();
  const { state, setState } = useMapState();
  const projection = useProjection();
  const startPoint = useMapStartPoint();

  // Reset start point when changing dimensions
  useEffect(() => {
    setState((current) => ({
      center: startPoint,
      zoom: current.zoom ?? 5,
    }));
  }, [name, startPoint]);

  return (
    <RMap
      initial={state}
      view={[state, setState]}
      minZoom={0}
      maxZoom={10}
      width="100%"
      height="100%"
      noDefaultControls
      projection={projection as unknown as string}
    >
      <BaseMaps />
      <Features />
      <Controls />
    </RMap>
  );
};
