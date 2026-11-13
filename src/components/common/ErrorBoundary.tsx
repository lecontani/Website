import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Myltrix UI Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-screen">
          <div className="error-boundary-card">
            <h1 style={{ textTransform: 'none' }}>Myltrix — Unexpected Interface Error</h1>
            <p>
              An unexpected error occurred while rendering this view. Please reload the page or
              return to the home screen.
            </p>
            {this.state.errorMessage && (
              <pre className="error-boundary-trace">{this.state.errorMessage}</pre>
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.setState({ hasError: false, errorMessage: '' });
                window.location.href = '/';
              }}
            >
              Return to Home Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
