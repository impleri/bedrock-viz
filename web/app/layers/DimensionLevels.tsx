import { MAP_TYPE } from "../constants";
import { useDimensionInfo, useMapOptions } from "../contexts";
import { Dimension } from "../types";
import { WorldLevel } from "./WorldLevel";

type Props = {
  dimension: Dimension;
  slices?: [number, number];
};

const createSlices = (start: number, end: number): number[] => {
  const slices: number[] = [];

  for (let x = start; x <= end; x++) {
    slices.push(x);
  }

  return slices;
};

export const DimensionLevels = ({ dimension }: Props) => {
  const { name } = useDimensionInfo();
  const { type: selectedType } = useMapOptions();

  const isDimensionSelected = name === dimension.name;
  const slices = dimension.hasSlices ? createSlices(dimension.minY, dimension.maxY) : undefined;

  return (
    <>
      {Object.values(MAP_TYPE).map((type) => {
        const isTypeSelected = type === selectedType;
        return (
          <WorldLevel
            key={`${dimension}-${type}`}
            dimension={dimension}
            type={type}
            visible={isDimensionSelected && isTypeSelected}
          />
        );
      })}

      {slices?.map((yLevel) => {
        const isTypeSelected = false;
        return (
          <WorldLevel
            key={`${dimension}-y${yLevel}`}
            dimension={dimension}
            yLevel={yLevel}
            visible={isDimensionSelected && isTypeSelected}
          />
        );
      })}
    </>
  );
};
