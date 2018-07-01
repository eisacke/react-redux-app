import React from 'react';
import Button from './Button';

const BackButton = ({ history }) => {
  return (
    <Button onClick={history.goBack}>
      <i className="fas fa-arrow-left"></i> Back
    </Button>
  );
};

export default BackButton;
