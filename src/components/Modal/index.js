import React, { useState } from 'react';
import { Button } from '../Button/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Modal = (props) => {
  const title = props?.fields?.Title?.value;
  const description = props?.fields?.Description?.value;
  const label = props?.fields?.Label?.value;
  const position = props?.fields?.Position?.displayName;

  const [toggleModal, setToggleModal] = useState('hide');

  const openModal = () => {
    setToggleModal('show');
  };
  const closeModal = () => {
    setToggleModal('hide');
  };

  return (
    <div className={[position, 'c-modal'].join(' ')}>
      <Button
        className="primary"
        label={label}
        size="small"
        type="button"
        onClick={() => openModal()}
      />
      <div className={[toggleModal, 'c-modal__content_wrapper'].join(' ')}>
        <FontAwesomeIcon onClick={closeModal} className="c-modal__close" icon={faTimes} />
        {title !== 'undefined' && <div className="c-modal__title">{title}</div>}
        <div className="c-modal__content">{description}</div>
      </div>
    </div>
  );
};

export default Modal;
