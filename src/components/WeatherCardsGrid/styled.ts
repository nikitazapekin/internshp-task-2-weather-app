import { media } from "@styles/breakpoints";
import { grid } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.g}px;
  height: auto;
  width: 100%;

  ${grid("center", "stretch", "repeat(4, 1fr)", "auto", "start", "stretch")}

  grid-column-gap: ${({ theme }) => theme.spaces.g}px;
  grid-row-gap: ${({ theme }) => theme.spaces.md}px;

  ${media.md`
    grid-template-columns: repeat(3, 1fr);
    `}

  ${media.xh`
    grid-template-columns: repeat(3,auto);
    grid-column-gap: ${({ theme }) => theme.spaces.g}px;
  `}
`;
