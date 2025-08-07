import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.lg}px;
  margin-right: auto;

  ${media.lg`
     margin-right: none;
   `}
`;
