import React, {Component, ErrorInfo} from 'react';
import {Error} from '~/screens/Orderbook/components/Error';

type State = {
  hasError: boolean;
  errorMessage?: string;
};

export class ErrorBoundary extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: ErrorInfo) {
    return {hasError: true, errorMessage: error};
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn('ErrorBoundary ~ componentDidCatch ~ errorInfo', errorInfo);
    console.warn('ErrorBoundary ~ componentDidCatch ~ error', error);
    /**
     * here we can call services to log our errors
     */
  }

  render() {
    if (this.state.hasError) {
      return <Error errorMessage={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}
