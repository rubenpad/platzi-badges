import React, { useState } from 'react';

import api from '../../api';
import { Container, ContainerBadge, ContainerForm } from './styles';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
import PageLoading from '../../components/PageLoading';

function NewBadge(props) {
  const [status, setStatus] = useState({ loading: false, error: null });
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: null });
    try {
      await api.badges.create(form);
      setStatus({ loading: false });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error: null });
    }
  };

  if (status.loading) return <PageLoading />;

  return (
    <Container>
      <ContainerBadge>
        <Badge badge={form} />
      </ContainerBadge>
      <ContainerForm>
        <BadgeForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={status.error}
          title="CREATE BADGE"
        />
      </ContainerForm>
    </Container>
  );
}

export default NewBadge;
