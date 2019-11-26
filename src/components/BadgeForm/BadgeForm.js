import React from 'react';

import { StyledBadgeForm } from './styles';

function BadgeForm(props) {
  const { onChange, onSubmit, formValues, error, title } = props;
  return (
    <StyledBadgeForm>
      <h2>{title}</h2>
      <form className="form" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="firstName"
          value={formValues.firstName}
          placeholder="First Name"
          required
        />
        <input
          onChange={onChange}
          type="text"
          name="lastName"
          value={formValues.lastName}
          placeholder="Last Name"
          required
        />
        <input
          onChange={onChange}
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email"
          required
        />
        <input
          onChange={onChange}
          type="text"
          name="jobTitle"
          value={formValues.jobTitle}
          placeholder="Job Title"
          required
        />
        <input
          onChange={onChange}
          type="text"
          name="twitter"
          value={formValues.twitter}
          placeholder="Twitter"
          required
        />
        {error && <p>{error.message}</p>}
        <button type="submit">Save</button>
      </form>
    </StyledBadgeForm>
  );
};

export default BadgeForm;
