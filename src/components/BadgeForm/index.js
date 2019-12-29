import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Form, Input, Button } from './styles';

const BadgeForm = (props) => {
  const {
    formValues: { firstName, lastName, email, twitter, jobTitle },
    error,
    onChange,
    onSubmit,
    title,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          required
        />
        <Input
          onChange={onChange}
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="jobTitle"
          value={jobTitle}
          placeholder="Job Title"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="twitter"
          value={twitter}
          placeholder="Twitter"
          required
        />
        {error && <p>{error.message}</p>}
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

BadgeForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default BadgeForm;
