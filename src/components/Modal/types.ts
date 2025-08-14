import type React from "react";

export interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  overlayClose?: boolean;
  width?: string;
}
