import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.li`
  ${flex("flex-start", "center", "row")}

  column-gap: ${(props) => props.theme.spaces.lg}px;
  width: auto;
  max-width: 100%;

  ${media.sm`
    ${flex("flex-start", "flex-start", "column")}

    row-gap: ${(props) => props.theme.spaces.xs}px;
  `}
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  padding: ${({ theme }) => theme.spaces.xs}px ${({ theme }) => theme.spaces.sm}px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spaces.md}px;

  ${media.sm`
   padding: ${({ theme }) => theme.spaces.x}px;
   font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;

  ${media.sm`
   font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  `}
`;
