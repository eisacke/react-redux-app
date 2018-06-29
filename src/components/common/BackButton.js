import React from 'react';

const BackButton = ({ history }) => {
  return (
    <div>
      <button onClick={history.goBack}>
        Back
      </button>
    </div>
  );
};

export default BackButton;
