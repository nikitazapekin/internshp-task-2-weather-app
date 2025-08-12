import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;

  ${flex("flex-start", "center", "row")}

  column-gap: ${({ theme }) => theme.spaces.xl}px;
  max-width: 276px;
  width: 100%;

  ${media.sm`
    ${flex("center", "center", "row")}
  `}
`;
