import type { ErrorInfo } from "react";
import { Component } from "react";
import ErrorContent from "@components/ErrorContent";
import Modal from "@components/Modal";
import { UI_CONSTANTS } from "@constants";

import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, isOpenModal: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, isOpenModal: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  handleCloseModal = () => {
    this.setState({ ...this.state, hasError: false, isOpenModal: false });
  };

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.props.children !== prevProps.children && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    const { defaultErrorMessage, defaultErrorTitle } = UI_CONSTANTS.errorsModal;

    if (this.state.hasError && this.state.isOpenModal) {
      return (
        <Modal onClose={this.handleCloseModal}>
          <ErrorContent
            title={this.state.error?.name || defaultErrorTitle}
            text={this.state.error?.message || defaultErrorMessage}
          />
        </Modal>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
