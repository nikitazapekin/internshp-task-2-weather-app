import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  padding: ${({ theme }) => theme.spaces.md}px;

  ${flex("center", "center", "column")};
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.sm};
  padding: ${({ theme }) => theme.spaces.md}px;
  background-color: ${({ theme }) => theme.colors.white};

  ${flex("center", "center", "column")};

  row-gap: ${({ theme }) => theme.spaces.md}px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-aligcentern
`;
