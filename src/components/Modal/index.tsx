import { createPortal } from "react-dom";
import Button from "@components/Button";
import { UI_CONSTANTS } from "@constants/UI";
import useModal from "@hooks/useModal";

import { Content, Overlay, Wrapper } from "./styled";
import type { ModalProps } from "./types";

const Modal = ({ children, onClose, showCloseButton = true, overlayClose = true }: ModalProps) => {
  const { closeModalButton } = UI_CONSTANTS.buttons;

  useModal();

  return createPortal(
    <Wrapper>
      <Content>
        {children}
        {showCloseButton && <Button text={closeModalButton} handler={onClose} />}
      </Content>
      <Overlay onClick={overlayClose ? onClose : undefined} />
    </Wrapper>,
    document.body
  );
};

export default Modal;
