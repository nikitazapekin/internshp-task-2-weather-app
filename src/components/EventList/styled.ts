import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.ul`
  ${flex("center", "center", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;
  margin-top: ${(props) => props.theme.spaces.sm}px;
  align-self: start;
  max-height: 145px;
  width: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.black} ${(props) => props.theme.colors.white};
  max-width: 100%;
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
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const EventCard = styled.li`
  ${flex("flex-start", "center", "row")}

  column-gap: ${(props) => props.theme.spaces.lg}px;
  width: 100%;
  max-width: 100%;

  ${media.sm`
    ${flex("flex-start", "flex-start", "column")}
     row-gap: ${(props) => props.theme.spaces.sm}px;
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
  max-width: 200px;
  width: 100%;
`;
