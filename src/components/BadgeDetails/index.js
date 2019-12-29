import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, ContainerBadge, ContainerActions, Button } from './styles';
import Badge from '../Badge';
import DeleteBadgeModal from '../DeleteBadgeModal';

const BagdeDetails = (props) => {
  const {
    badge,
    deleteBadge,
    modalMode,
    openModal,
    closeModal,
  } = props;

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
};

BagdeDetails.propTypes = {
  badge: PropTypes.object,
  deleteBadge: PropTypes.func,
  modalMode: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { badgesReducer: state.badgesReducer };
};

export default connect(mapStateToProps, null)(BagdeDetails);
