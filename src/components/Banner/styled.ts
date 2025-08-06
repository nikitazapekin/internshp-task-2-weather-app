import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  padding: ${({ theme }) => theme.paddings.bannerPaddings};
  width: 100%;
  position: relative;
`;

export const BannerBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(15px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes.minusOne};
  opacity: 0.2;
`;
