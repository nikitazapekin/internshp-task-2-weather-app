import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(15px);
  margin-top: ${({ theme }) => theme.spaces.xl}px;
`;
