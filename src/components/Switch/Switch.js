import React from "react";

import "./Switch.scss";

const Switch = ({ onChange, defaultValue, label, id, icon }) => {
  const ref = React.useRef(null);
  const handleChange = (evt) => {
    onChange && onChange(evt.target.checked);
  };
  return (
    <div className="switchBtn">
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={`app__switch`}
        onChange={handleChange}
        defaultChecked={defaultValue}
      ></input>
      <span className="switch__thumb" onClick={() => ref.current.click()}>
        {icon && <span className="switch__thumb--icon">{icon}</span>}
      </span>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Switch;
