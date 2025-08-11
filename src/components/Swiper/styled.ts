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

  ${media.xl`
    ${flex("flex-start", "center", "row")}

    flex-wrap: nowrap;
    scroll-snap-type: ${({ theme }) => theme.swiper.scroll_snap_type};

    & > * {
      flex: ${({ theme }) => theme.swiper.flex_basis} calc(${({ theme }) => theme.swiper.container}% - (5px + ${({ theme }) => theme.swiper.vw_ratio}vw));
      min-width: ${({ theme }) => theme.swiper.min_width};
      scroll-snap-align: ${({ theme }) => theme.swiper.scroll_snap_align};
      margin: 0 calc(${({ theme }) => theme.swiper.vw_ratio}vw +  ${({ theme }) => theme.swiper.margin_base}px);

      &:first-child {
        margin-left: 0;
        scroll-margin-left: 0;
      }
      
      &:last-child {
        margin-right: 0;
        scroll-margin-right: 0;
      }
    }
  `}

  ${media.xl`   
    column-gap: ${(props) => props.theme.spaces.sm}px;
  `}
`;
