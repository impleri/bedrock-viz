import { useMemo } from "react";

import { useRContext } from "./useRContext";

export const useRView = () => {
  const { map } = useRContext();

  return useMemo(() => map.getView(), [map]);
};
