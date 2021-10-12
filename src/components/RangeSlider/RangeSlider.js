import "./RangeSlider.scss";
import React from "react";

export default function RangeSlider({
  customClass,
  value,
  onChange,
  min,
  max
}) {
  let rangeMin = min || 0;
  let rangeMax = max || 100;
  return (
    <div className={`app__rangeSliderWrapper ${customClass || ""}`}>
      <input
        value={value}
        onChange={onChange}
        type="range"
        min={rangeMin}
        max={rangeMax}
        className={`app__rangeSlider`}
      />
      <span
        className="app__rangeSlider--trackFiller"
        style={{
          width: `${(value * 100) / rangeMax}%`
        }}
      />
    </div>
  );
}
