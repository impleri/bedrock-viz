import { Button } from "grommet";
import { Map } from "grommet-icons";

import { useMapExtent, useZoomToExtent } from "../hooks";
import { Control } from "./Control";

export const ZoomToExtent = () => {
  const extent = useMapExtent();
  const zoom = useZoomToExtent(extent);

  return (
    <Control top="7rem" left="1rem">
      <Button primary kind="control" icon={<Map />} onClick={zoom} tip="Zoom Out Completely" />
    </Control>
  );
};
