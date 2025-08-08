import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const TopWrapper = styled.section`
  width: 100%;

  ${flex("space-between", "center", "row")}

  ${media.lg`
    ${flex("center", "center", "column")}
    row-gap: ${(props) => props.theme.spaces.xxl}px;
  `}
`;
