//import { grid } from "@styles/mixins";
import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.g}px;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${({ theme }) => theme.spaces.g}px;
  grid-row-gap: ${({ theme }) => theme.spaces.md}px;
  justify-content: center;

  ${media.md`
    grid-template-columns: repeat(3, 1fr);
//  grid-template-columns: repeat(3,  ${({ theme }) => theme.spaces.g}px);
`} //  {grid("center", "center", "1fr 1fr", "auto 100px", "12px", "8px", "start", "stretch")}
     ${media.xh`
      grid-template-columns: repeat(3,   ${({ theme }) => theme.spaces.g}px);
      `}
`;
