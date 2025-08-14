import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  ${flex("center", "center", "column")};
`;

export const Content = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.md}px;

  ${flex("center", "center", "column")};

  row-gap: ${({ theme }) => theme.spaces.md}px;
`;

export const Title = styled.section`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
`;

export const Text = styled.section`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;

  ${media.sm`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `}
`;

export const Image = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
  object-fit: cover;
  object-position: center;
  z-index: ${({ theme }) => theme.zIndexes.x};

  ${media.sm`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  `}
`;
