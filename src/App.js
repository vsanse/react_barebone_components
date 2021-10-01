import React from "react";
import AutoSuggest from "./components/AutoSuggest/AutoSuggest";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Dropdown from "./components/Dropdown/Dropdown";
import LoadingCircle from "./components/LoadingCircle/LoadingCircle";
import Modal from "./components/Modal/Modal";
import Radio from "./components/Radio/Radio";
import Spinner from "./components/Spinner/Spinner";
import Switch from "./components/Switch/Switch";
import Toast from "./components/Toast/Toast";
import "./styles.scss";
import "./demos/demo.scss";
import ToastDemo from "./demos/ToastDemo";

const DATA = [
  "Delhi",
  "Dwarka",
  "Dehradun",
  "Karnatka",
  "Kolkata",
  "Chennai",
  "Kanpur"
];
export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalLoading, setShowModalLoading] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);
  React.useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 2000);
    }
  }, [showSpinner]);
  return (
    <div className="App">
      <div className="App__Section">
        <p className="App__Section--title">Get the code from</p>
        <a
          href="https://codesandbox.io/s/react-barebone-components-zvvw1?file=/src/App.js"
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
      <div className="App__Section">
        <p className="App__Section--title">Buttons</p>
        <div className="App__grid2">
          <Button>Default Button</Button>
          <Button danger>Default Danger Button</Button>
          <Button type="link">Link Button</Button>
          <Button type="link" danger>
            Danger Link Button
          </Button>
          <Button type="primary">Primary Button</Button>
          <Button type="primary" danger>
            Danger Primary Button
          </Button>
          <Button type="hollow" shape="round">
            Primary Button
          </Button>
          <Button type="hollow" danger shape="round">
            Danger Primary Button
          </Button>
        </div>
      </div>
      {/* Modals */}
      <div className="App__Section">
        <p className="App__Section--title">Modals</p>
        <div className="App__grid2">
          <Button
            type="primary"
            onClick={() => setShowModal(true)}
            shape="round"
          >
            Open Modal
          </Button>
          <Button
            type="primary"
            onClick={() => setShowModalLoading(true)}
            shape="round"
          >
            Open Modal With Loading
          </Button>
          <Modal
            visible={showModal}
            onClose={() => setShowModal(false)}
            width={300}
          >
            Hello World!
          </Modal>
          <Modal
            visible={showModalLoading}
            onClose={() => setShowModalLoading(false)}
            width={300}
          >
            <LoadingCircle />
          </Modal>
        </div>
      </div>
      {/* Select */}
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
      {/* Spinner */}
      <div className="App__Section">
        <p className="App__Section--title">Spinner</p>
        <div className="App__grid2">
          <div>
            <p className="App__demoTitle">Default</p>
            <Spinner loading={showSpinner}>
              <div className="App__dummyCard">
                <Button
                  onClick={() => {
                    setShowSpinner(true);
                  }}
                >
                  Show Spinner
                </Button>
              </div>
            </Spinner>
          </div>
          <div>
            <p className="App__demoTitle">With Custom Spinner</p>
            <Spinner loading={showSpinner} CustomSpinner={LoadingCircle}>
              <div className="App__dummyCard">
                <Button
                  onClick={() => {
                    setShowSpinner(true);
                  }}
                >
                  Show Spinner
                </Button>
              </div>
            </Spinner>
          </div>
        </div>
      </div>
      {/* Switch */}
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
        </div>
      </div>
      {/* Toasts */}
      <ToastDemo />
    </div>
  );
}
