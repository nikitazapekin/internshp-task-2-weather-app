import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-start", "center", "column")}
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;

export const Image = styled.img`
  margin-top: ${({ theme }) => theme.spaces.md}px;
`;

export const Degree = styled.p`
  margin-top: ${({ theme }) => theme.spaces.xs}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
