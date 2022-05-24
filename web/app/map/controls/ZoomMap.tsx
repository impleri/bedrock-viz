import { useMapExtent } from "../hooks";
import { ZoomToExtent } from "./ZoomToExtent";

export const ZoomMap = () => {
  const extent = useMapExtent();
  return <ZoomToExtent extent={extent} />;
};
