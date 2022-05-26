import { Menu } from "grommet";
import { Resources } from "grommet-icons";
import { useMemo } from "react";

import { MAP_TYPE, MAP_TYPE_NAME } from "../constants";
import { useMapOptions } from "../contexts";
import { Control } from "./Control";

export const MapTypeSelect = () => {
  const { type, setType } = useMapOptions();

  const items = useMemo(
    () =>
      Object.values(MAP_TYPE).map((type) => ({
        label: MAP_TYPE_NAME[type],
        onClick: () => setType(type),
      })),
    [],
  );

  return (
    <Control top="15rem" left="1rem">
      <Menu
        primary
        kind="control"
        icon={<Resources color="light-1" />}
        tip={MAP_TYPE_NAME[type]}
        items={items}
        dropBackground={{ color: "accent-1", opacity: "weak" }}
      />
      ;
    </Control>
  );
};
