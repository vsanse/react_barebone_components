import React from "react";
import AutoSuggest from "./components/AutoSuggest/AutoSuggest";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import LoadingCircle from "./components/LoadingCircle/LoadingCircle";
import Modal from "./components/Modal/Modal";
import "./styles.scss";

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
  return (
    <div className="App">
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
    </div>
  );
}
