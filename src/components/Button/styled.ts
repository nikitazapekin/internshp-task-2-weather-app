import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const ButtonElement = styled.button<{ isActive?: boolean; isFullWidth?: boolean }>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.lg}px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.blue : theme.colors.black)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: 0.4s ease-in-out;
  min-width: 94px;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  ${media.lg`
   font-size: ${({ theme }) => theme.fontSizes.xxs};
   padding: ${({ theme }) => theme.spaces.xs}px ${({ theme }) => theme.spaces.xs}px;
  `}

  ${media.sm`
   font-size: ${({ theme }) => theme.fontSizes.xxs};
   padding: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.x}px;
  `}
`;
