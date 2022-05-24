import { RLayerTile } from "rlayers";

import { useCanShowSlimeChunk, useProjection, useSlimeChunkUrl, useTileGrid } from "../hooks";

export const SlimeChunkLevel = () => {
  const projection = useProjection();
  const tileGrid = useTileGrid();
  const mapUrl = useSlimeChunkUrl();
  const canShow = useCanShowSlimeChunk();

  if (!canShow) {
    return null;
  }

  return <RLayerTile url={mapUrl} projection={projection as unknown as string} tileGrid={tileGrid} />;
};
