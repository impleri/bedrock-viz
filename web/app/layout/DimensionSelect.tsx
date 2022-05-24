import { Menu } from "grommet";

import { useDimensionInfo } from "../contexts";

export const DimensionSelect = () => {
  const { name, options, select } = useDimensionInfo();

  const items = options.map((dimensionName) => ({
    label: dimensionName,
    onClick: () => select(dimensionName),
  }));

  return <Menu label={name} items={items} disabled={options.length === 0} />;
};
