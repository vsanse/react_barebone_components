import React from "react";
import Button from "../components/Button/Button";
import LoadingCircle from "../components/LoadingCircle/LoadingCircle";
import Spinner from "../components/Spinner/Spinner";
export default function SpinnerDemo() {
  const [showSpinner, setShowSpinner] = React.useState(false);
  React.useEffect(() => {
    if (showSpinner) {
      setTimeout(() => {
        setShowSpinner(false);
      }, 2000);
    }
  }, [showSpinner]);
  return (
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
  );
}
