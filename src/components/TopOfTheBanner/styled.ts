import { media } from "@styles/breakpoints";
import styled from "styled-components";

export const TopWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.lg`
flex-direction: column;
align-items: center;
row-gap: 48.74px;
 
  `}
`;

export const Time = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${media.lg`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `}
`;

export const SearchWrapper = styled.div`
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
