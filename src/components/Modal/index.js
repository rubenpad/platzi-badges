import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { FaWindowClose } from 'react-icons/fa';

import { Overlay, ModalBox, ModalContent, CloseButton } from './styles';

const Modal = (props) => {
  const { children, modalMode, closeModal } = props;

  if (!modalMode) return null;

  return createPortal(
    <Overlay>
      <ModalBox>
        <CloseButton onClick={closeModal}>
          <FaWindowClose />
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Overlay>,
    document.getElementById('modal'),
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  modalMode: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Modal;
