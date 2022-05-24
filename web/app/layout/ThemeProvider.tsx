import { Grommet } from "grommet";
import { PropsWithChildren } from "react";

type Props = {
  children?: unknown;
};

export const ThemeProvider = ({ children }: PropsWithChildren<Props>) => {
  return <Grommet full>{children}</Grommet>;
};
