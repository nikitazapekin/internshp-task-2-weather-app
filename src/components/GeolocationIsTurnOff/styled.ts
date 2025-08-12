import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: ${({ theme }) => theme.spaces.md}px ${({ theme }) => theme.spaces.md}px;

  ${flex("center", "center", "column")};
`;

export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  z-index: ${({ theme }) => theme.zIndexes.md};
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-position: center;
  z-index: ${({ theme }) => theme.zIndexes.sm};
  opacity: 0.3;
`;
