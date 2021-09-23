import "./Radio.scss";
import React from "react";
import PropTypes from "prop-types";

export default function Radio({
  id,
  name,
  defaultChecked,
  children,
  onChange
}) {
  const handleChange = (evt) => {
    onChange && onChange(evt.target.checked);
  };
  return (
    <span className="radioOuterPWA">
      <input
        type="radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      <label className="latoBold font12" htmlFor={id}>
        {children}
      </label>
    </span>
  );
}
Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func
};
