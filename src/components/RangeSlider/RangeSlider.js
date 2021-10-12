import "./RangeSlider.scss";
import React from "react";

export default function RangeSlider({
  customClass,
  value,
  onChange,
  min,
  max
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="range"
      min={min || 0}
      max={max || 100}
      className={`app__rangeSlider ${customClass || ""}`}
    />
  );
}
