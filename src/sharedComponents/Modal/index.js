import React from 'react';

import './style.css';

const Modal = ({ message, setError }) => {
  const closeModal = () => setError('');
  return (
    <div className="modal_background">
      <div className="modal_wrapper">
        <img src="./img/cancel.png" alt="cancel_icon" />
        <p>{message}</p>
        <button className="close_btn" onClick={closeModal}>
          Х
        </button>
      </div>
    </div>
  );
};
export default Modal;
