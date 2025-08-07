import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.li`
  ${flex("flex-start", "center", "row")}

  column-gap: ${(props) => props.theme.spaces.lg}px;
  width: 100%;
  max-width: 100%;
`;
export const Time = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  padding: ${({ theme }) => theme.spaces.xs}px ${({ theme }) => theme.spaces.sm}px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spaces.md}px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  max-width: 200px;
  width: 100%;
`;
