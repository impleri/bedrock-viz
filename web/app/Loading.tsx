import { Box, Spinner } from "grommet";

export const Loading = () => (
  <Box fill>
    <Box margin="large" align="center">
      <Spinner align="center" justify="center" size="xlarge" />
    </Box>
  </Box>
);
