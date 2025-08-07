import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-end", "center", "row")}
  column-gap: ${({ theme }) => theme.spaces.lg}px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.lg}px;
  align-self: flex-end;
`;
