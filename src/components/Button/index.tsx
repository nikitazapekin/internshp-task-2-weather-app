import { ButtonElement } from "./styled";
import type { ButtonProps } from "./types";

const Button = ({ text, handler, isActive }: ButtonProps) => {
  return (
    <ButtonElement onClick={handler} isActive={isActive}>
      {text}
    </ButtonElement>
  );
};

export default Button;
