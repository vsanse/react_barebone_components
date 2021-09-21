import React from "react";
import "./Button.scss";
const Button = ({ type, onClick, danger, children }) => {
  return (
    <button
      className={`app__btn app__btn--${type || "default"} ${
        danger ? "danger" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
