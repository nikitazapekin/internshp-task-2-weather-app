import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerStyled = styled.span<{ position?: "relative" | "absolute" }>`
  width: 30px;
  height: 30px;
  border: 3px solid ${({ theme }) => theme.colors.blue};
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 0.8s linear infinite;

  ${({ position = "absolute" }) =>
    position === "absolute"
      ? `
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      `
      : `
        position: relative;
        margin: 0 auto;
      `}
`;
