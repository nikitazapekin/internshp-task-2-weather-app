import { flex } from "@styles/mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(15px);
  margin-top: ${({ theme }) => theme.spaces.xl}px;

  ${flex("flex-start", "center", "row")};

  column-gap: ${({ theme }) => theme.spaces.xxl}px;
  padding: ${({ theme }) => theme.spaces.md}px ${({ theme }) => theme.spaces.h}px
    ${({ theme }) => theme.spaces.xl}px ${({ theme }) => theme.spaces.xl}px;
`;
