import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { getDisplayName } from '../../utils/hocUtil';
import ErrorBoundary from './ErrorBoundary';

const withErrorBoundary = <Props extends object>(WrappedComponent: React.ComponentType<Props>) => {
  class WithErrorBoundary extends React.Component<Props> {
    static displayName = `withErrorBoundary(${getDisplayName(WrappedComponent)})`;

    render() {
      return (
        <ErrorBoundary>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };

  hoistNonReactStatics(WithErrorBoundary, WrappedComponent);

  return WithErrorBoundary;
};

export default withErrorBoundary;
