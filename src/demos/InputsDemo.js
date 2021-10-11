import React, { useState } from "react";
import Checkbox from "../components/Checkbox/Checkbox";
import InputField from "../components/InputField/InputField";
import NumberField from "../components/NumberField/NumberField";
import Radio from "../components/Radio/Radio";
import Switch from "../components/Switch/Switch";

export default function InputsDemo() {
  const [inputFieldValue, setInputFieldValue] = useState({
    normal: "",
    withError: "",
    number: 0
  });

  return (
    <div className="App__Section">
      <p className="App__Section--title">Inputs</p>
      <div className="App__grid2">
        <div>
          <p className="App__demoTitle">Switch</p>
          <Switch
            onChange={(isChecked) => console.log(isChecked)}
            defaultValue={true}
            icon={"😊"}
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
            value={inputFieldValue.normal}
            onChange={(e) =>
              setInputFieldValue({ ...inputFieldValue, normal: e.target.value })
            }
          />
          <InputField
            placeholder="With error"
            value={inputFieldValue.withError}
            onChange={(e) =>
              setInputFieldValue({
                ...inputFieldValue,
                withError: e.target.value
              })
            }
            error={true}
          />
          <NumberField
            placeholder="Number Placeholder"
            setInputFieldValue={setInputFieldValue}
            inputFieldValue={inputFieldValue}
          />
        </div>
        <div />
      </div>
    </div>
  );
}
