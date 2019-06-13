import React from 'react';

import ErrorDetails from './ErrorDetails';

interface IErrorBoundaryProps {
  onError?: (error: Error | null, errorInfo: any) => any | null
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: object) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error | null, errorInfo: object) {
    this.setState({
      error,
      errorInfo,
      hasError: true
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // TODO: define a proper error fallback component
      return (<ErrorDetails {...this.state} />);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
