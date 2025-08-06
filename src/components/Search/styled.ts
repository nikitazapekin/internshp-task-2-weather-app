import { media } from "@styles/breakpoints";
import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${flex("flex-start", "center", "column", "0px", "17px")}

  ${media.lg`   
 	flex-direction: row;
	column-gap: 28px;
  `}
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  max-width: 257px;
  padding: ${({ theme }) => theme.paddings.inputFieldPadding};
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
