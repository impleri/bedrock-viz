import { Text, Box } from "grommet";

import { useScaleLine } from "../hooks";
import { Control } from "./Control";

const BORDER_COLOR = "light-5";

export const ScaleLine = () => {
  const { label, width } = useScaleLine({});

  return (
    <Control bottom="1rem" left="1rem">
      <Box
        border={[
          {
            color: BORDER_COLOR,
            size: "small",
            style: "solid",
            side: "left",
          },
          {
            color: BORDER_COLOR,
            size: "small",
            style: "solid",
            side: "bottom",
          },
          {
            color: BORDER_COLOR,
            size: "small",
            style: "solid",
            side: "right",
          },
        ]}
        background={{
          color: "brand",
          opacity: "strong",
        }}
        height="2rem"
        align="center"
        justify="center"
        width={`${width}px`}
      >
        <Text size="small">{label}</Text>
      </Box>
    </Control>
  );
};
