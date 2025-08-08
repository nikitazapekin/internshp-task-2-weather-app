import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-padding: 0 calc(0.5vw + 2.5px);

  ${flex("flex-start", "center", "row")}
  gap: ${({ theme }) => theme.spaces.xl}px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;

    & > * {
      flex: 0 0 calc(16.666% - (5px + 0.5vw));
      min-width: 0;
      scroll-snap-align: start;
      margin: 0 calc(0.5vw + 2.5px);

      &:first-child {
        margin-left: 0;
        scroll-margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
        scroll-margin-right: 0;
      }
    }
  }

  ${media.xl`   
    column-gap: ${(props) => props.theme.spaces.sm}px;
  `}
`;
