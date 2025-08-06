import styled from "styled-components";

export const ButtonElement = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.paddings.buttonPaddings};
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family:
    ${({ theme }) => theme.fontFamilies.primary}, ${({ theme }) => theme.fontFamilies.secondary};
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
