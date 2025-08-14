import styled from "styled-components";

export const Image = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-position: center;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndexes.xm};
`;
