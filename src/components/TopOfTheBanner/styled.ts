import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const TopWrapper = styled.section`
  width: 100%;

  ${flex("space-between", "center", "row")}

  padding: ${({ theme }) => theme.spaces.xxl}px ${({ theme }) => theme.spaces.eh}px
    0px ${({ theme }) => theme.spaces.xh}px;
  ${media.lg`
    ${flex("center", "center", "column")}
    
    row-gap: ${(props) => props.theme.spaces.xxl}px;
    padding: 0 0;
  `}
`;
