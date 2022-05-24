import { RLayerTile } from "rlayers";

import { MAP_TYPE } from "../../constants";
import { Dimension } from "../../types";
import { useMapUrl, useProjection, useTileGrid } from "../hooks";

type Props = {
  dimension: Dimension;
  type?: MAP_TYPE;
  yLevel?: number;
  visible?: boolean;
};

export const WorldLevel = ({ dimension, type = MAP_TYPE.OVERVIEW, yLevel, visible = true }: Props) => {
  const tileGrid = useTileGrid(dimension);
  const projection = useProjection(dimension);
  const mapUrl = useMapUrl(dimension.name, yLevel ?? type);

  return (
    <RLayerTile
      attributions="Created by bedrock_viz"
      url={mapUrl}
      tileGrid={tileGrid}
      projection={projection as unknown as string}
      visible={visible}
    />
  );
};
