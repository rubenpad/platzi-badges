import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerBadge, ContainerActions, Button } from './styles';
import Badge from '../Badge';
import DeleteBadgeModal from '../DeleteBadgeModal';

function BagdeDetails(props) {
  const { badge, deleteBadge, modalMode, openModal, closeModal } = props;
  return (
    <Container>
      <ContainerBadge>
        <Badge badge={badge} />
      </ContainerBadge>
      <ContainerActions>
        <h2>Actions</h2>
        <Link to={`/badges/${badge.id}/edit`}>EDIT</Link>
        <Button onClick={openModal}>DELETE</Button>
        <DeleteBadgeModal
          modalMode={modalMode}
          closeModal={closeModal}
          deleteBadge={deleteBadge}
        />
      </ContainerActions>
    </Container>
  );
}

export default BagdeDetails;
