import { ButtonElement } from "./styled";
import type { ButtonProps } from "./types";

const Button = ({ text }: ButtonProps) => {
  return <ButtonElement>{text}</ButtonElement>;
};

export default Button;
