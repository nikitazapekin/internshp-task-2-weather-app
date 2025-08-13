import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 137px;
  height: 130px;

  ${flex("center", "center", "column")}
`;

export const Image = styled.img`
  ${media.sm`
  max-width: 100px
`}
`;
