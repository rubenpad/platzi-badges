import React from 'react';

import Modal from '../Modal';
import { ModalDelete, Button } from './styles';

function DeleteBadgeModal(props) {
  const { modalMode, closeModal, deleteBadge } = props;
  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <ModalDelete>
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>
        <div>
          <Button onClick={closeModal}>CANCEL</Button>
          <Button danger onClick={deleteBadge}>DELETE</Button>
        </div>
      </ModalDelete>
    </Modal>
  );
}

export default DeleteBadgeModal;
