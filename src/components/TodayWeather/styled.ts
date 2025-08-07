import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;

  ${flex("center", "center", "row")}

  column-gap:   ${({ theme }) => theme.spaces.xl};
`;

export const Image = styled.img``;
