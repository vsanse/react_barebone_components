import "./Checkbox.scss";
import React from "react";
import PropTypes from "prop-types";

export default function Checkbox({
  name,
  id,
  children,
  defaultChecked,
  onChange
}) {
  const handleChange = (evt) => {
    onChange && onChange(evt.target.checked);
  };
  return (
    <span className="app__checkmark">
      <input
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </span>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func
};
