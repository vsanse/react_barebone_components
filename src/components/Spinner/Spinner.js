import React from "react";
import "./Spinner.scss";

const Spinner = ({ loading, children, CustomSpinner }) => {
  return (
    <div className="app__spinner">
      {children}
      {loading && (
        <div className="app__spinner--overlay">
          {CustomSpinner ? (
            <CustomSpinner />
          ) : (
            <span className="app__spinner--overlaySpinner"></span>
          )}
        </div>
      )}
    </div>
  );
};

export default Spinner;
