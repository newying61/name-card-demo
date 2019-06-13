import React from 'react';

interface IErrorDetailsProps {
  error: Error | null;
  errorInfo: any;
}

const ErrorDetails: React.FC<IErrorDetailsProps> = ({ error, errorInfo }) => {
  return (
    <section>
      <h1>Something went wrong.</h1>
      <details>
        <summary>Error</summary>
        <p>{error && error.toString()}</p>
      </details>
      <details>
        <summary>Error Info</summary>
        <p>{errorInfo && errorInfo.componentStack}</p>
      </details>
    </section>
  );
}

export default ErrorDetails;
