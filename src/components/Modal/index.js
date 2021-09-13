import React, { useState } from 'react';
import { Button } from '../Button/index';
import './index.scss';

const Modal = (props) => {
  const title = props?.fields?.Title.value;
  const description = props?.fields?.Description.value;
  const [toggleModal, setToggleModal] = useState('hide');

  const openModal = () => {
    setToggleModal('show');
  };
  const closeModal = () => {
    setToggleModal('hide');
  };

  return (
    <div className="c-modal">
      <Button
        className="secondary"
        label="Open Modal"
        size="small"
        type="button"
        onClick={() => openModal()}
      />
      <div className={[toggleModal, 'c-modal__content_wrapper'].join(' ')}>
        <Button
          className="close"
          label="Close Modal"
          size="small"
          type="button"
          onClick={closeModal}
        />
        {title !== 'undefined' && <div className="c-modal__title">{title}</div>}
        <div className="c-modal__content">{description}</div>
      </div>
    </div>
  );
};

export default Modal;
