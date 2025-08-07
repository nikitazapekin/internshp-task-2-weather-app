import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.ul`
  ${flex("flex-start", "center", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;
  margin-top: ${(props) => props.theme.spaces.sm}px;
`;
