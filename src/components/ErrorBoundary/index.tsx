import type { ErrorInfo } from "react";
import { Component } from "react";

import { ErrorText } from "./styled";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }
  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorText>{this.state.error.message}</ErrorText>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
