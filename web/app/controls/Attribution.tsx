import { Anchor, Text } from "grommet";
import { StatusInfo } from "grommet-icons";

import { useMaybeCollapse } from "../hooks";
import { Control } from "./Control";

type AttributionProps = {
  collapsible?: boolean;
  startCollapsed?: boolean;
};

export const Attribution = ({ startCollapsed = false, collapsible = false }: AttributionProps) => {
  const [collapsed, toggleCollapse] = useMaybeCollapse(startCollapsed, collapsible);

  let content = (
    <Text>
      Created by{" "}
      <Anchor href="https://github.com/bedrock-viz/bedrock-viz" target="_blank">
        bedrock_viz
      </Anchor>
    </Text>
  );
  if (collapsed) {
    content = null;
  }

  return (
    <Control background="brand" bottom="1rem" right="1rem" onClick={toggleCollapse} direction="row">
      <StatusInfo />
      {content}
    </Control>
  );
};
