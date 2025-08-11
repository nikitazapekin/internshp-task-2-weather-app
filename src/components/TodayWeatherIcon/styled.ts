import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  width: auto;
`;

export const Image = styled.img`
  ${media.sm`
  max-width: 100px
`}
`;
