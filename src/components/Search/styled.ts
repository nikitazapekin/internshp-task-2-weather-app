import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  align-items: center;

  ${media.lg`   
 	flex-direction: row;
	column-gap: 28px;
  `}
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  max-width: 257px;
  padding: 3px 14px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black};

  ${media.lg`
	max-width: 173px;
  `}
`;
