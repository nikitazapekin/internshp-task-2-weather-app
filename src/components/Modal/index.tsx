import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Content, Overlay, Text, Title, Wrapper } from "./styled";
import type { ModalProps } from "./types";

const Modal = ({ errorMessage, onClose }: ModalProps) => {
  const { closeModalButton } = UI_CONSTANTS.buttons;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <Wrapper>
      <Content>
        <Title>Ooops something wen't wrong</Title>
        <Text>{errorMessage}</Text>
        <Button text={closeModalButton} handler={onClose} />
      </Content>
      <Overlay onClick={onClose} />
    </Wrapper>,
    document.body
  );
};

export default Modal;
