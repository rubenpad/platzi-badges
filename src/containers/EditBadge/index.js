import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, ContainerBadge, ContainerForm } from '../NewBadge/styles';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
import PageError from '../../components/PageError';
import PageLoading from '../../components/PageLoading';
import { getBadge, updateBadge } from '../../redux/actions';

const EditBadge = (props) => {
  const {
    getBadge,
    updateBadge,
    badgesReducer: {
      badgeById: { firstName, lastName, email, jobTitle, twitter },
      loading,
      error,
    },
    match: {
      params: { badgeId },
    },
  } = props;

  const [form, setForm] = useState({
    firstName,
    lastName,
    email,
    jobTitle,
    twitter,
  });

  useEffect(() => {
    getBadge(badgeId);
  }, [getBadge]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateBadge(badgeId, form);
    props.history.push('/badges');
  };

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

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
          error={error}
          title="UPDATE BADGE"
        />
      </ContainerForm>
    </Container>
  );
};

EditBadge.propTypes = { badgeId: PropTypes.string };

const mapStateToProps = (state) => {
  return {
    badgesReducer: state.badgesReducer,
  };
};

const mapDispatchToProps = {
  getBadge,
  updateBadge,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBadge);
