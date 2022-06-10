import React from "react";

import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";

import classed from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Modal>
      <div className={classed.error_modul}>
        <div className="error-title">
          <Title>{props.title}</Title>
        </div>
        <div className={classed.error_message}>
          <p>{props.message}</p>
        </div>
        <div className={classed.error_footer}>
          <Button type="button" onClick={props.onClick}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
