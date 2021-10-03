import "./styles.scss";
import "./demos/demo.scss";
import React from "react";
import ToastDemo from "./demos/ToastDemo";
import SpinnerDemo from "./demos/SpinnerDemo";
import InputsDemo from "./demos/InputsDemo";
import SelectDemo from "./demos/SelectDemo";
import ModalsDemo from "./demos/ModalsDemo";
import ButtonsDemo from "./demos/ButtonsDemo";

export default function App() {
  return (
    <div className="App">
      <div className="App__Section">
        <p className="App__Section--title">Get the code from</p>
        <a
          href="https://codesandbox.io/s/react-barebone-components-zvvw1"
          target="__blank"
        >
          Codesandbox
        </a>
        <span className="App__demoTitle marginLR8">or</span>
        <a
          href="https://github.com/vsanse/react_barebone_components"
          target="__blank"
        >
          Github
        </a>
      </div>
      {/* Buttons */}
      <ButtonsDemo />
      {/* Modals */}
      <ModalsDemo />
      {/* Select */}
      <SelectDemo />
      {/* Spinner */}
      <SpinnerDemo />
      {/* Inputs */}
      <InputsDemo />
      {/* Toasts */}
      <ToastDemo />
    </div>
  );
}
