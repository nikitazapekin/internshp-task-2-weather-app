import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-start", "center", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;
  width: 100%;

  ${media.lg`
    margin-top:  ${(props) => props.theme.spaces.md}px;
   `}
`;

export const EventsAndWeatherButtonsWrapper = styled.div`
  ${flex("space-between", "center", "row")}

  width: 100%;

  ${media.lg`
    ${flex("center", "center", "column")}
      row-gap: ${(props) => props.theme.spaces.xxl}px;
  `}
`;

export const AuthButtonsAndEventsWrapper = styled.div`
  ${flex("space-between", "center", "row-reverse")}

  column-gap: ${(props) => props.theme.spaces.md}px;
  width: 100%;

  ${media.xh`
    ${flex("center", "center", "row-reverse")}
 
      column-gap: ${(props) => props.theme.spaces.lg}px;
   `}
`;

export const TitleOfEvents = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: none;
  margin-top: ${({ theme }) => theme.spaces.md}px;

  ${media.xh`
    ${flex("center", "center", "row")}
  `}
`;
