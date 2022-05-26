import { Coordinate } from "ol/coordinate";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { RFeature, ROverlay } from "rlayers";

import { useProjection } from "../hooks";

type Props = {
  location: Coordinate;
  mobName: string;
};

export const BaseMobMarker = ({ location, mobName }: Props) => {
  const projection = useProjection();

  return (
    <RFeature geometry={new Point(fromLonLat(location, projection))}>
      <ROverlay>{mobName}</ROverlay>
    </RFeature>
  );
};
