import { Grommet, ThemeType } from "grommet";
import { PropsWithChildren } from "react";
import { LAYERS } from "../constants";

type Props = {
  children?: unknown;
};

const theme: ThemeType = {
  global: {
    drop: {
      zIndex: `${LAYERS.CONTROLS + 10}`,
    },
    colors: {
      brand: "#5d7c15",
      "accent-1": "#3c44a9",
      "accent-2": "#825432",
    },
  },
};

export const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Grommet theme={theme} full>
      {children}
    </Grommet>
  );
};
