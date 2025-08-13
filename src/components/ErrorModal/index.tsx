import Modal from "@components/Modal";

import type { ErrorModalProps } from "./types";

const ErrorModal = ({ errorMessage, errorTitle = "Error", ...props }: ErrorModalProps) => {
  return (
    <Modal
      title={errorTitle}
      message={errorMessage}
      showCloseButton={true}
      overlayClose={true}
      {...props}
    />
  );
};

export default ErrorModal;
