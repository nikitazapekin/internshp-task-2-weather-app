import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.ul`
  ${flex("flex-start", "center", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;
  max-height: 145px;
  min-height: 100px;
  width: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.black} ${(props) => props.theme.colors.white};
  max-width: 100%;
  width: 100%;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  ${media.xh`
   max-width: 100%;
   width: 100%;
  `}
`;

export const EmptyListText = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  justify-self: flex-start;
  position: relative;
  text-align: center;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.x}px;

  ${media.sm`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  `}
`;

export const EventCard = styled.li`
  ${flex("flex-start", "center", "row")}

  column-gap: ${(props) => props.theme.spaces.lg}px;
  width: 100%;
  max-width: 100%;

  ${media.xh`
     column-gap: ${(props) => props.theme.spaces.xs}px;
  `}
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  padding: ${({ theme }) => theme.spaces.xs}px ${({ theme }) => theme.spaces.sm}px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spaces.md}px;

  ${media.xh`
    padding: ${({ theme }) => theme.spaces.x}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  width: 100%;

  ${media.sm`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  `}
`;
