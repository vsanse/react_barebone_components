import React from "react";
import Button from "../components/Button/Button";
import LoadingCircle from "../components/LoadingCircle/LoadingCircle";
import Modal from "../components/Modal/Modal";

export default function ModalsDemo() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModalLoading, setShowModalLoading] = React.useState(false);
  return (
    <div className="App__Section">
      <p className="App__Section--title">Modals</p>
      <div className="App__grid2">
        <Button type="primary" onClick={() => setShowModal(true)} shape="round">
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
  );
}
