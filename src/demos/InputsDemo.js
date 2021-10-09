import React, { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";
import InputField from "../components/InputField/InputField";
import Radio from "../components/Radio/Radio";
import Switch from "../components/Switch/Switch";

export default function InputsDemo() {
  const [inputFieldValue, setInputFieldValue] = useState({
    normal: "",
    withNumber: "",
    withError: "",
  });

  const onChange= (e)=>{
    setInputFieldValue({ ...inputFieldValue, [e.target.name]: e.target.value });
  }

  return (
    <div className="App__Section">
      <p className="App__Section--title">Inputs</p>
      <div className="App__grid2">
        <div>
          <p className="App__demoTitle">Switch</p>
          <Switch
            onChange={(isChecked) => console.log(isChecked)}
            defaultValue={true}
          />
        </div>
        <div>
          <p className="App__demoTitle">Checkbox</p>
          <Checkbox
            id="sample"
            onChange={(isChecked) => console.log("checkbox", isChecked)}
          >
            Sample Checkbox
          </Checkbox>
        </div>
        <div>
          <p className="App__demoTitle">Radio</p>
          <Radio
            name="radio_group"
            id="sample_radio"
            onChange={(isChecked) => console.log("radio", isChecked)}
          >
            Sample Radio&nbsp;
          </Radio>
          <Radio
            name="radio_group"
            id="sample_radio2"
            onChange={(isChecked) => console.log("radio", isChecked)}
          >
            Sample Radio 2
          </Radio>
        </div>
        <div>
          <p className="App__demoTitle">Input Text Field</p>
          <InputField
            placeholder="Placeholder"
            name="normal"
            value={inputFieldValue.normal}
            onChange={onChange}
          />
          <InputField
            type="number"
            placeholder="With number"
            name="withNumber"
            value={inputFieldValue.withNumber}
            onChange={onChange}
          />
          <InputField
            placeholder="With error"
            value={inputFieldValue.withError}
            name="withError"
            onChange={onChange}
            error={true}
          />
        </div>
        <div />
      </div>
    </div>
  );
}
