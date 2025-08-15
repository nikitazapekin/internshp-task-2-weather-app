import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl}px;
  user-select: none;
  min-height: 216px;
  height: auto;
  backdrop-filter: blur(15px);
  position: relative;

  ${flex("flex-start", "center", "row")};

  column-gap: ${({ theme }) => theme.spaces.xxl}px;
  padding: 0 ${({ theme }) => theme.spaces.h}px 0 ${({ theme }) => theme.spaces.xl}px;

  ${media.lg`
    ${flex("flex-start", "center", "column")};

    padding: ${({ theme }) => theme.spaces.md}px ${({ theme }) => theme.spaces.md}px;
  `}
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0.2;
  z-index: ${({ theme }) => theme.zIndexes.x};
`;
