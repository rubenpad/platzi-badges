import React, { useState, useEffect } from 'react';

import api from '../../api';
import { Container, ContainerBadge, ContainerForm } from '../NewBadge/styles';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
import PageError from '../../components/PageError';
import PageLoading from '../../components/PageLoading';

function EditBadge(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });
  const [status, setStatus] = useState({ loading: true, error: null });

  const fetchData = async () => {
    setStatus({ loading: true, error: null });
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setStatus({ loading: false, error: null });
      setForm(data);
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      await api.badges.update(props.match.params.badgeId, form);
      setStatus({ loading: false, error: null });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  if (form.error) return <PageError error={status.error} />;

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
          title="UPDATE BADGE"
        />
      </ContainerForm>
    </Container>
  );
}

export default EditBadge;
