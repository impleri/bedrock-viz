import { useMapInfo } from "../contexts";
import { DimensionLevels } from "./DimensionLevels";

export const BaseMaps = () => {
  const { dimensions } = useMapInfo();

  return (
    <>
      {dimensions.map((dimension) => (
        <DimensionLevels key={dimension.name} dimension={dimension} />
      ))}
    </>
  );
};
