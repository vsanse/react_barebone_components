import React from "react";
import Button from "../components/Button/Button";
import LoadingCircle from "../components/LoadingCircle/LoadingCircle";
import Paper from "../components/Paper/Paper";
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
      <p className="App__Section--title">Paper effect containers</p>
      <div className="App__grid2">
        <div>
          <p className="App__demoTitle">Light Mode</p>
          <Paper>
              <div className="cover_full">
                <h4>These containers take props such as elevation.</h4>
                <p>Example: {"<Paper elevation={8} />"}</p>
              </div>
          </Paper>
          <Paper>
            <Paper elevation={2} >
                <div className="cover_full">
                    <b>With Elevation 2</b>
                </div>
            </Paper>
            <Paper elevation={6} >
                <div className="cover_full">
                    <b>With Elevation 6</b>
                </div>
            </Paper>
          </Paper>
        </div>
        <div>
          <p className="App__demoTitle">Dark Mode</p>
          <Paper mode="dark">
              <div className="cover_full">
                <h4>Also you can pass a prop mode as dark to change theme.</h4>
                <p>Example: {"<Paper mode='dark' />"}</p>
              </div>
          </Paper>
          <Paper>
            <Paper mode="dark" elevation={2} >
                <div className="cover_full">
                    <b>With Elevation 2</b>
                </div>
            </Paper>
            <Paper mode="dark" elevation={6} >
                <div className="cover_full">
                    <b>With Elevation 6</b>
                </div>
            </Paper>
          </Paper>
        </div>
      </div>
    </div>
  );
}
