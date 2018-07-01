import React from 'react';

const Error = ({ errors: { status, statusText }}) => {
  return (
    <div className="mono">Error: {status} {statusText}</div>
  );
};

export default Error;
