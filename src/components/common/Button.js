import React from 'react';

const Button = (props) => {
  return (
    <button {...props} className="mono ttu pointer bg-transparent pa0 bn fw3 outline-0 hover-brand">
      {props.children}
    </button>
  );
};

export default Button;
