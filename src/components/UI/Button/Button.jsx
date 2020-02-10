import React from "react";

import "./Button.css";

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      value={props.value} 
    >
      {props.children}
    </button>
  );
};

export default Button;
