import { Menu } from "grommet";
import { Globe } from "grommet-icons";

import { useDimensionInfo } from "../contexts";
import { Control } from "./Control";

export const DimensionSelect = () => {
  const { name, options, select } = useDimensionInfo();

  const items = options.map((dimensionName) => ({
    label: dimensionName,
    onClick: () => select(dimensionName),
  }));

  return (
    <Control top="11rem" left="1rem">
      <Menu
        primary
        kind="control"
        icon={<Globe color="light-1" />}
        tip={name}
        items={items}
        disabled={options.length === 0}
        dropBackground={{ color: "accent-1", opacity: "weak" }}
      />
      ;
    </Control>
  );
};
