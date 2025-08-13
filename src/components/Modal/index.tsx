import { createPortal } from "react-dom";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import useModal from "@hooks/useModal";

import { Content, Overlay, Text, Title, Wrapper } from "./styled";
import type { ModalProps } from "./types";

const Modal = ({
  title,
  message,
  children,
  onClose,
  showCloseButton = true,
  overlayClose = true,
  customContent = false,
}: ModalProps) => {
  const { closeModalButton } = UI_CONSTANTS.buttons;

  useModal();

  const renderContent = () => {
    if (customContent) {
      return children;
    }

    return (
      <>
        <Title>{title}</Title>
        <Text>{message}</Text>
        {children}
        {showCloseButton && <Button text={closeModalButton} handler={onClose} />}
      </>
    );
  };

  return createPortal(
    <Wrapper>
      <Content>{renderContent()}</Content>
      <Overlay onClick={overlayClose ? onClose : undefined} />
    </Wrapper>,
    document.body
  );
};

export default Modal;
