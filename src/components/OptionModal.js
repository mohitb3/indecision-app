import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleDeleteSelectedOption}
    ariaHideApp={false} 
    closeTimeoutMS={200}>
    
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleDeleteSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;