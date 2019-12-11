import React from 'react';

import { Container, Title, Form, Input, Button } from './styles';

function BadgeForm(props) {
  const { onChange, onSubmit, formValues, error, title } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          name="firstName"
          value={formValues.firstName}
          placeholder="First Name"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="lastName"
          value={formValues.lastName}
          placeholder="Last Name"
          required
        />
        <Input
          onChange={onChange}
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="jobTitle"
          value={formValues.jobTitle}
          placeholder="Job Title"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="twitter"
          value={formValues.twitter}
          placeholder="Twitter"
          required
        />
        {error && <p>{error.message}</p>}
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default BadgeForm;
