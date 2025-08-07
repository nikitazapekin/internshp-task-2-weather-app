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

  width: 100%;
`;
