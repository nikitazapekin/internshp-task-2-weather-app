import { ButtonElement } from "./styled";
import type { ButtonProps } from "./types";

const Button = ({ text, handler }: ButtonProps) => {
  return <ButtonElement onClick={handler}>{text}</ButtonElement>;
};

export default Button;
