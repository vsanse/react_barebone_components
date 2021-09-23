import React from "react";

import "./Switch.scss";

const Switch = ({ onChange, defaultValue }) => {
  const handleChange = (evt) => {
    onChange && onChange(evt.target.checked);
  };
  return (
    <div className="switchBtn">
      <input
        type="checkbox"
        className={`app__switch`}
        onChange={handleChange}
        defaultChecked={defaultValue}
      ></input>
    </div>
  );
};

export default Switch;
