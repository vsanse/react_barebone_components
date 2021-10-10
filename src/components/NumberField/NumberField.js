import React, { useState } from "react";
import "./NumberField.scss";

const NumberField = ({
  error,
  placeholder,
  setInputFieldValue,
  inputFieldValue,
}) => {


  return (
    <div className="number_wrapper">
      <label style={{ bottom: "32px", opacity: 0.9, color: "grey" }}>
        {placeholder}
      </label>

      <input
        onChange={(e) => {
          if(e.target.value==""){
            return setInputFieldValue({...inputFieldValue,number: 0})
          }
          else if(e.target.value==parseInt(e.target.value)){
          setInputFieldValue({...inputFieldValue,number: parseInt(e.target.value)});
        }}}
        value={inputFieldValue.number}
        style={{
          borderBottom:
            error && !inputFieldValue.number
              ? "2px solid red"
              : "2px solid rgb(10,10,10)",
        }}
      />
      <div className="arrows">
        <button
          onClick={(e) =>
            setInputFieldValue({
              ...inputFieldValue,
              number: inputFieldValue.number + 1,
            })
          }
        >
          ^
        </button>
        <button
          className="inverted"
          onClick={(e) =>
            setInputFieldValue({
              ...inputFieldValue,
              number: inputFieldValue.number - 1,
            })
          }
        >
          ^
        </button>
      </div>
    </div>
  );
};
NumberField.defaultProps = {
  arrows: true,
};
export default NumberField;
