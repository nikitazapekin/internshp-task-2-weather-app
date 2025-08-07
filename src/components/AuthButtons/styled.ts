import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spaces.lg}px;
  align-self: start;

  ${media.lg`
      margin-top: ${({ theme }) => theme.spaces.md}px;
   `}
`;
