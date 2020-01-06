import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';
import BadgeDetails from '../../components/BadgeDetails';
import { getBadge, deleteBadge } from '../../redux/actions';

const BadgeDetailsContainer = (props) => {
  const {
    getBadge,
    deleteBadge,
    badgesReducer: { badgeById, loading, error },
    match: {
      params: { badgeId },
    },
  } = props;

  useEffect(() => {
    getBadge(badgeId);
  }, [getBadge, badgeId]);

  const handleDeleteBadge = () => {
    deleteBadge(badgeById._id);
    props.history.push('/badges');
  };

  const [modalMode, setModalMode] = React.useState({ visible: false });
  const openModal = () => setModalMode({ visible: true });
  const closeModal = () => setModalMode({ visible: false });

  if (loading) return <PageLoading />;

  if (error) return <PageError error={error} />;

  return typeof badgeById === 'object' && Object.keys(badgeById).length ? (
    <BadgeDetails
      badge={badgeById}
      modalMode={modalMode.visible}
      openModal={openModal}
      closeModal={closeModal}
      deleteBadge={handleDeleteBadge}
    />
  ) : (
    ''
  );
};

BadgeDetailsContainer.propTypes = {
  badgeId: PropTypes.string,
  getBadge: PropTypes.func,
  deleteBadge: PropTypes.func,
  badgeById: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { badgesReducer: state.badgesReducer };
};

const mapDispatchToProps = {
  getBadge,
  deleteBadge,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BadgeDetailsContainer);
