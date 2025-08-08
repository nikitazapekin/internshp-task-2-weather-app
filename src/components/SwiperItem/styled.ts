import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-start", "center", "column")}

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    min-width: auto;
    width: 100%;
    padding: 0 ${({ theme }) => theme.spaces.sm}px;
    box-sizing: border-box;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  user-select: none;
`;

export const Image = styled.img`
  margin-top: ${({ theme }) => theme.spaces.md}px;
  pointer-events: none;
  user-select: none;
`;

export const Degree = styled.p`
  margin-top: ${({ theme }) => theme.spaces.xs}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  user-select: none;
`;
