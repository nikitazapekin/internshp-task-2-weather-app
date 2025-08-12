import type React from "react";

export interface ModalProps {
  onClose: () => void;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  overlayClose?: boolean;
}
