import "./Toast.scss";
import React from "react";
import PropTypes from "prop-types";

/* 
  Postions:
    1- topLeft
    2- topCenter
    3- topRight
    4- bottomLeft
    5- bottomCenter (default)
    6- bottomRight

*/

const Toast = ({ timeout, text, position, visible, onClose }) => {
  React.useEffect(() => {
    if (visible) {
      setTimeout(() => {
        onClose();
      }, timeout);
    }
  }, [visible, timeout, onClose]);
  return (
    <div className={`app__toast ${visible ? "visible" : ""} ${position}`}>
      <p>{text}</p>
    </div>
  );
};

export default Toast;

Toast.defaultProps = {
  timeout: 1500,
  text: "This is sample toast",
  position: "bottomCenter",
  onClose: () => {}
};

Toast.propTypes = {
  timeout: PropTypes.number,
  text: PropTypes.string,
  position: PropTypes.string,
  visible: PropTypes.bool
};
