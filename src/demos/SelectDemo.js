import React from "react";
import AutoSuggest from "../components/AutoSuggest/AutoSuggest";
import Dropdown from "../components/Dropdown/Dropdown";
const DATA = [
  "Delhi",
  "Dwarka",
  "Dehradun",
  "Karnatka",
  "Kolkata",
  "Chennai",
  "Kanpur"
];
export default function SelectDemo() {
  return (
    <div className="App__Section">
      <p className="App__Section--title">Select</p>
      <div className="App__grid2">
        <div>
          <p className="App__demoTitle">Dropdown</p>
          <Dropdown options={DATA} defaultOption={0} />
        </div>
        <div>
          <p className="App__demoTitle">Dropdown Autosuggest</p>
          <AutoSuggest options={DATA} defaultOption={0} autoFocus={true} />
        </div>
      </div>
    </div>
  );
}
