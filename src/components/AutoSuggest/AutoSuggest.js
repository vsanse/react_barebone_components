import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./AutoSuggest.scss";
const AutoSuggest = ({ options, defaultOption, autoFocus }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(
    options[defaultOption]
  );
  const [renderedOptions, setRenderedOptions] = React.useState(options);
  const [cursor, setCursor] = React.useState(-1);
  const ref = React.useRef();
  useOutsideClick(ref, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });
  const toggleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const selectNewOption = (evt, idx) => {
    evt.stopPropagation();
    setSelectedOption(renderedOptions[idx]);
    toggleShowDropdown();
  };
  const filterOptions = (text) => {
    if (text) {
      setRenderedOptions(
        options.filter(
          (item) => item.toLowerCase().indexOf(text.toLowerCase()) !== -1
        )
      );
    } else {
      setRenderedOptions(options);
    }
  };
  const handleInputChange = (evt) => {
    evt.stopPropagation();
    if (!showDropdown) {
      toggleShowDropdown();
    }
    setSelectedOption(evt.target.value);
    filterOptions(evt.target.value);
    setCursor(0);
  };
  const handleCursor = (evt) => {
    if (evt.key === "ArrowUp" && cursor > 0) {
      setCursor((c) => c - 1);
    }
    if (evt.key === "ArrowDown") {
      cursor < renderedOptions.length - 1 && setCursor((c) => c + 1);
      !showDropdown && toggleShowDropdown(true);
    }
    if (evt.key === "Enter") {
      setSelectedOption(renderedOptions[cursor]);
      toggleShowDropdown();
    }
  };
  return (
    <div
      className="autosuggest__wrapper"
      onClick={toggleShowDropdown}
      ref={ref}
    >
      <input
        type="text"
        value={selectedOption}
        onChange={handleInputChange}
        onKeyDown={handleCursor}
        autoFocus={autoFocus}
      />
      {showDropdown && (
        <ul className="autosuggest__itemsList">
          {renderedOptions.map((item, idx) => (
            <li
              key={item}
              className={idx === cursor ? "active" : ""}
              onClick={(e) => selectNewOption(e, idx)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggest;
