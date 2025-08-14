import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  ${flex("center", "center", "column")}

  ${media.lg`   
    ${flex("center", "center", "row")}

      column-gap: ${(props) => props.theme.spaces.lg}px;
    `}
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

export const SuggestionsWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.md}px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
`;

export const SuggestionItem = styled.li`
  padding: ${({ theme }) => theme.spaces.sm}px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
