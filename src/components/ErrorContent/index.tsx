import { Text, Title } from "./styled";
import type { ErrorContentProps } from "./types";

const ErrorContent = ({ title, text }: ErrorContentProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
};

export default ErrorContent;
