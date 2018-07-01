import React from 'react';

const ErrorMessage = ({ errors: { status, statusText }}) => {
  return (
    <div className="mono">Error: {status} {statusText}</div>
  );
};

export default ErrorMessage;
