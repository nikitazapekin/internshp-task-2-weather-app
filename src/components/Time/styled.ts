import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Time = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${media.lg`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
  ${media.sm`
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `}
`;
