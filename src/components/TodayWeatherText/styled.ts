import { flex } from "@styles/mixins";
import styled from "styled-components";

export const TextWrapper = styled.div`
  ${flex("center", "center", "column")}
  row-gap: ${({ theme }) => theme.spaces.sm}px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
