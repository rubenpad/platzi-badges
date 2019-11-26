import React, { useState } from 'react';

import api from '../../api';
import { StyledNewBadge } from './styles';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageError from '../../components/PageError/PageError';
import PageLoading from '../../components/PageLoading/PageLoading';

function NewBadge(props) {
  const [status, setStatus] = useState({ loading: false, error: null });
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: null });
    try {
      await api.badges.create(form);
      setStatus({ loading: false, error: null });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  if (status.error) return <PageError error={status.error} />

  if (status.loading) return <Loading />;

  return (
    <StyledNewBadge>
      <div className="badge">
        <Badge
          firstName={form.firstName}
          lastName={form.lastName}
          email={form.email}
          jobTitle={form.jobTitle}
          twitter={form.twitter}
        />
      </div>
      <div className="form">
        <BadgeForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          formValues={form}
          error={status.error}
          title="CREATE NEW BADGE"
        />
      </div>
    </StyledNewBadge>
  );
};

export default NewBadge;
