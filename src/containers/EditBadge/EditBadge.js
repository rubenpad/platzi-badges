import React, { useState } from 'react';

import api from '../../api';
import useQuery from '../../hooks/useQuery';

import { StyledEditBadge } from './styles';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageError from '../../components/PageError/PageError';
import PageLoading from '../../components/PageLoading/PageLoading';

function EditBadge(props) {
  const badge = useQuery(() => api.badges.read(props.match.params.badgeId));


  const [status, setStatus] = useState({ loading: false, error: null });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...badge.data,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: null });
    try {
      await api.badges.update(props.match.params.badgeId, badge.data);
      setStatus({ loading: false, error: null });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  if (badge.error) return <PageError error={status.error} />;

  if (badge.loading || status.loading) return <PageLoading />;

  return (
    <StyledEditBadge>
      <div className="badge">
        <Badge badge={badge.data} />
      </div>
      <div className="form">
        <BadgeForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={badge.data}
          error={status.error}
          title="EDIT BADGE"
        />
      </div>
    </StyledEditBadge>
  );
};

export default EditBadge;
