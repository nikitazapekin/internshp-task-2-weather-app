import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  padding: ${({ theme }) => theme.spaces.xxl}px ${({ theme }) => theme.spaces.eh}px
    ${({ theme }) => theme.spaces.md}px ${({ theme }) => theme.spaces.xh}px;
  width: 100%;
  position: relative;

  ${flex("center", "flex-start", "column", "0px", "0px")}
`;

export const BannerBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(15px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes.x};
  opacity: 0.2;
`;
