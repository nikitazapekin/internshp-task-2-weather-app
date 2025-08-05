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
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      if (!this.state.error) {
        return <ErrorText>An unknown error occurred</ErrorText>;
      }

      return <ErrorText>{this.state.error.message}</ErrorText>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
