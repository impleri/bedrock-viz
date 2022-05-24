import { Coordinate } from "ol/coordinate";
import { useEffect, useMemo, useState } from "react";
import { RMap } from "rlayers";

import { useDimensionInfo } from "../contexts";
import { Controls } from "./controls";
import { Features } from "./features";
import { useMapStartPoint, useProjection } from "./hooks";
import { BaseMaps } from "./layers";

import "ol/ol.css";

// 000 map.addLayer(layerMain);
// 100 map.addLayer(layerShadedReliefStatic);
// 110 map.addLayer(layerElevation);
// 120 map.addLayer(layerElevationAlpha);
// 200 map.addLayer(layerChunkGrid);
// 210 map.addLayer(layerSlimeChunks);
// 300 map.addLayer(vectorPoints);
// 400 map.addLayer(layerDraw);

type View = {
  center: Coordinate;
  zoom: number;
};

export const Map = () => {
  const { name } = useDimensionInfo();
  const projection = useProjection();
  const startPoint = useMapStartPoint();
  const initialView = useMemo(
    () => ({
      center: startPoint,
      zoom: 5,
    }),
    [],
  );
  const [view, setView] = useState<View>(initialView);

  useEffect(() => {
    setView((current) => ({
      center: startPoint,
      zoom: current.zoom,
    }));
  }, [name, startPoint]);

  return (
    <RMap
      initial={initialView}
      view={[view, setView]}
      minZoom={0}
      maxZoom={10}
      width="100%"
      height="100%"
      projection={projection as unknown as string}
    >
      <BaseMaps />
      {/*<Features />*/}
      <Controls />
    </RMap>
  );
};
