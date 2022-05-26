import { ThemeProvider } from "./contexts";
import { Page } from "./Page";

export const App = () => (
  <ThemeProvider>
    <Page />
  </ThemeProvider>
);
