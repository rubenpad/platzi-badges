import React from 'react';

import api from '../../api';
import { useForm } from '../../hooks/useForm';
import { StyledNewBadge } from './styles';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

function NewBadge(props) {
  const { history } = props;
  const form = useForm(
    {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
    api.badges.create,
    () => history.push('/badges'),
  );

  console.log(form.values);

  if (form.status.loading) return <PageLoading />;

  return (
    <StyledNewBadge>
      <div className="badge">
        <Badge values={form.values} />
      </div>
      <div className="form">
        <BadgeForm
          onChange={form.onChange}
          onSubmit={form.onSubmit}
          formValues={form.values}
          error={form.status.error}
          title="CREATE NEW BADGE"
        />
      </div>
    </StyledNewBadge>
  );
};

export default NewBadge;
