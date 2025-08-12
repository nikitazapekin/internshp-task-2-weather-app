import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;

  ${flex("flex-start", "center", "row")}

  column-gap: ${({ theme }) => theme.spaces.xl}px;
`;
