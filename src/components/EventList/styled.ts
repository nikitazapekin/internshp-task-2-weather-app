import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.ul`
  ${flex("flex-start", "flex-start", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;
  margin-top: ${(props) => props.theme.spaces.sm}px;
  align-self: start;
  max-height: 145px;
  width: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.black} ${(props) => props.theme.colors.white};
  max-width: 400px;
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 3px;
  }
`;

export const EmptyListText = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
