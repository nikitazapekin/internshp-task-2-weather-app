import { SpinnerStyled } from "./styled";
import type { SpinnerProps } from "./types";

const Spinner = ({ position }: SpinnerProps) => {
  return <SpinnerStyled position={position} data-testid="spinner" />;
};

export default Spinner;
