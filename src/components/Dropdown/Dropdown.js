import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./Dropdown.scss";
const Dropdown = ({ options, defaultOption }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(
    options[defaultOption]
  );
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
    setSelectedOption(options[idx]);
    toggleShowDropdown();
  };
  return (
    <div className="dropdown__wrapper" onClick={toggleShowDropdown} ref={ref}>
      <p className="dropdown__selected">{selectedOption}</p>
      {showDropdown && (
        <ul className="dropdown__itemsList">
          {options.map((item, idx) => (
            <li key={item} onClick={(e) => selectNewOption(e, idx)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
