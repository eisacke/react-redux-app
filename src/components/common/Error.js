import React from 'react';

const Error = ({ errors: { status, statusText }}) => {
  return (
    <div>Error: {status} {statusText}</div>
  );
};

export default Error;
