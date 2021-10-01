import React from "react";
import Button from "../components/Button/Button";
import Toast from "../components/Toast/Toast";

export default function ToastDemo() {
  const [bottomCenter, setBottomCenter] = React.useState(false);
  const [bottomLeft, setBottomLeft] = React.useState(false);
  const [bottomRight, setBottomRight] = React.useState(false);
  const [topCenter, setTopCenter] = React.useState(false);
  const [topLeft, setTopLeft] = React.useState(false);
  const [topRight, setTopRight] = React.useState(false);
  return (
    <div className="App__Section">
      <p className="App__Section--title">Toasts</p>
      <div className="App__grid3">
        <Button type="primary" onClick={() => setTopLeft(true)} shape="round">
          Top left
        </Button>
        <Button type="primary" onClick={() => setTopCenter(true)} shape="round">
          Top Center
        </Button>
        <Button type="primary" onClick={() => setTopRight(true)} shape="round">
          Top Right
        </Button>
        <Button
          type="primary"
          onClick={() => setBottomLeft(true)}
          shape="round"
        >
          Bottom left
        </Button>
        <Button
          type="primary"
          onClick={() => setBottomCenter(true)}
          shape="round"
        >
          Bottom Center
        </Button>
        <Button
          type="primary"
          onClick={() => setBottomRight(true)}
          shape="round"
        >
          Bottom Right
        </Button>
        <Toast
          position="topLeft"
          visible={topLeft}
          onClose={() => setTopLeft(false)}
          text="This is Top Left Toast"
        />
        <Toast
          position="topCenter"
          visible={topCenter}
          onClose={() => setTopCenter(false)}
          text="This is Top Center Toast"
        />
        <Toast
          position="topRight"
          visible={topRight}
          onClose={() => setTopRight(false)}
          text="This is Top Right Toast"
        />
        <Toast
          position="bottomLeft"
          visible={bottomLeft}
          onClose={() => setBottomLeft(false)}
          text="This is Bottom Left Toast"
        />
        <Toast
          visible={bottomCenter}
          onClose={() => setBottomCenter(false)}
          text="This is Bottom Center Toast"
        />
        <Toast
          position="bottomRight"
          visible={bottomRight}
          onClose={() => setBottomRight(false)}
          text="This is Bottom Right Toast"
        />
      </div>
    </div>
  );
}
