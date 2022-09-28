import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active " onClick={props.onDismiss}>
      <div
        className="ui standerd modal mini visible active"
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
