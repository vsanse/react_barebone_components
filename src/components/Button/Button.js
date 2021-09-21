import React from "react";
import "./Button.scss";
const Button = ({ type, danger, shape, children, ...rest }) => {
  return (
    <button
      className={`app__btn app__btn--${type || "default"} ${
        danger ? "danger" : ""
      } app__btn--${shape ? shape : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
