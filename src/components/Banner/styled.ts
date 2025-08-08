import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  width: 100%;
  position: relative;
  backdrop-filter: blur(5px);
  padding: ${({ theme }) => theme.spaces.sm}px ${({ theme }) => theme.spaces.md}px
    ${({ theme }) => theme.spaces.md}px ${({ theme }) => theme.spaces.md}px;
`;

export const BannerBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes.x};
  opacity: 0.2;
`;
