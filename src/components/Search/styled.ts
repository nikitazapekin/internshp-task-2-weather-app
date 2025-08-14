import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  ${flex("center", "center", "column")}

  ${media.lg`   
    ${flex("center", "flex-start", "row")}

      column-gap: ${(props) => props.theme.spaces.lg}px;
    `}
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.md}px;
  height: auto;
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
`;

export const SuggestionsContent = styled.ul<{ height?: number }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  list-style: none;
  margin: 0;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  padding: ${({ height, theme }) => (height ? theme.spaces.md : 0)}px;

  ${flex("center", "flex-start", "column")};

  width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const SuggestionItem = styled.li`
  padding: ${({ theme }) => theme.spaces.sm}px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const NothingFoundText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
  text-align: center;
`;
