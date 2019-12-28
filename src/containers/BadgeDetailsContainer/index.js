import React from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import useQuery from '../../hooks/useQuery';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';
import BadgeDetails from '../../components/BadgeDetails';

function BadgeDetailsContainer(props) {
  const {
    match: {
      params: { badgeId },
    },
  } = props;
  const badge = useQuery(() => api.badges.read(badgeId));

  const [modalMode, setModalMode] = React.useState({ visible: false });
  const openModal = () => setModalMode({ visible: true });
  const closeModal = () => setModalMode({ visible: false });

  const [status, setStatus] = React.useState({ loading: false, error: null });
  const deleteBadge = async () => {
    setStatus({ loading: true, error: null });
    try {
      await api.badges.remove(props.match.params.badgeId);
      setStatus({ loading: false, error: null });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  if (badge.loading || status.loading) return <PageLoading />;

  if (badge.error || status.error) return <PageError />;

  return (
    <BadgeDetails
      badge={badge.data}
      modalMode={modalMode.visible}
      openModal={openModal}
      closeModal={closeModal}
      deleteBadge={deleteBadge}
    />
  );
}

BadgeDetailsContainer.propTypes = { badgeId: PropTypes.string.isRequired };

export default BadgeDetailsContainer;
