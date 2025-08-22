import { ButtonElement } from "./styled";
import type { ButtonProps } from "./types";

const Button = ({ text, handler, isActive, isFullWidth }: ButtonProps) => {
  return (
    <ButtonElement onClick={handler} $isActive={isActive} $isFullWidth={isFullWidth}>
      {text}
    </ButtonElement>
  );
};

export default Button;
