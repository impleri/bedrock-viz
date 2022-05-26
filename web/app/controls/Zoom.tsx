import { Button } from "grommet";
import { ZoomIn, ZoomOut } from "grommet-icons";

import { useZoomStep } from "../hooks";
import { Control } from "./Control";

export const Zoom = () => {
  const [zoomIn, zoomOut] = useZoomStep();

  return (
    <Control top="1rem" left="1rem">
      <Button primary kind="control" icon={<ZoomIn />} onClick={zoomIn} tip="Zoom In" />
      <Button primary kind="control" icon={<ZoomOut />} onClick={zoomOut} tip="Zoom Out" />
    </Control>
  );
};
