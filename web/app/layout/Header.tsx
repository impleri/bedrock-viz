import { Header as UiHeader, Heading, Tag } from "grommet";

import { useMapInfo } from "../contexts";
import { DimensionSelect } from "./DimensionSelect";

export const Header = () => {
  const { bedrockVizVersion, name, seed } = useMapInfo();

  return (
    <UiHeader background="dark-1">
      <Heading color="brand" size="small">
        {name}
      </Heading>
      <DimensionSelect />
      <Tag value={seed} />
      <Tag value={bedrockVizVersion} />
    </UiHeader>
  );
};
