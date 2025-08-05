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
