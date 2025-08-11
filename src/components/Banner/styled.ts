import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  position: relative;
  //  padding: ${({ theme }) => theme.spaces.md}px;
  margin: ${({ theme }) => theme.spaces.md}px 0;

  ${media.sm`
    padding: ${({ theme }) => theme.spaces.xs}px;
  `}
`;

export const BannerBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes.x};
  opacity: 0.2;
`;

export const TopAndCenterOfBannerWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.xxl}px ${({ theme }) => theme.spaces.h}px 0
    ${({ theme }) => theme.spaces.xh}px;

  ${media.lg`
    padding: ${({ theme }) => theme.spaces.xs}px  
    `}
`;

/*
  spaces: {
    x: 5,
    xs: 10,
    sm: 15,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50,
    g: 60,
    h: 70,
    xh: 80,
    eh: 90,
  },
  */
