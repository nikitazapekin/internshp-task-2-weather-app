import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-start", "center", "column")}
  row-gap: ${(props) => props.theme.spaces.md}px;
`;
