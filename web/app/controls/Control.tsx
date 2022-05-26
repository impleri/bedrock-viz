import { Box, BoxExtendedProps } from "grommet";
import { FC } from "react";
import styled from "styled-components";

import { LAYERS } from "../constants";

type ControlProps = BoxExtendedProps & {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
};

export const Control = styled<FC<ControlProps>>(Box)`
  position: absolute;
  ${({ top }) => (top ? `top: ${top};` : "")}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : "")}
  ${({ right }) => (right ? `right: ${right};` : "")}
  ${({ left }) => (left ? `left: ${left};` : "")}
  z-index: ${LAYERS.CONTROLS}
`;
