import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("center", "center", "column")}

  row-gap: ${(props) => props.theme.spaces.md}px;

  ${media.lg`   
    ${flex("center", "center", "row")}
      column-gap: ${(props) => props.theme.spaces.lg}px;
    `}

  width: 100%;
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  max-width: 257px;
  padding: ${({ theme }) => theme.spaces.x}px ${({ theme }) => theme.spaces.sm}px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black};

  ${media.lg`
  	width: 173px;
  `}

  ${media.xh`
    max-width: 100%;
  	width: 100%;
  `}

  ${media.sm`
  	font-size: ${({ theme }) => theme.fontSizes.xxs};
    padding: ${({ theme }) => theme.spaces.x}px;
  `}
`;
