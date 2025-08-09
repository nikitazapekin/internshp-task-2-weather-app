import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import { createPortal } from "react-dom";

import { Content, Overlay, Text, Title, Wrapper } from "./styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const { closeModalButton } = UI_CONSTANTS.buttons;

  if (!isOpen) return null;

  return createPortal(
    <Wrapper>
      <Content>
        <Title>Ooops something wen't wrong</Title>
        <Text>The error was occured</Text>
        <Button text={closeModalButton} handler={onClose} />
      </Content>
      <Overlay onClick={onClose} />
    </Wrapper>,
    document.body
  );
};

export default Modal;
