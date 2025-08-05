import styled from "styled-components";

export const BannerWrapper = styled.section`
  max-width: ${({ theme }) => theme.container}px;
  padding: 0 20px;
  padding: 50px 79px 0 79px;
  width: 100%;
  position: relative;
`;

export const BannerBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(15px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
`;
