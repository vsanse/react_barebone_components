import React from "react";

import "./Switch.scss";

const Switch = ({ onChange, defaultValue, label, id }) => {
  const handleChange = (evt) => {
    onChange && onChange(evt.target.checked);
  };
  return (
    <div className="switchBtn">
      <input
        id={id}
        type="checkbox"
        className={`app__switch`}
        onChange={handleChange}
        defaultChecked={defaultValue}
      ></input>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Switch;
