import { css } from "styled-components";

export const flex = (
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexDirection = "row",
  columnGap = "0px",
  rowGap = "0px"
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
  column-gap: ${columnGap};
  row-gap: ${rowGap};
`;
