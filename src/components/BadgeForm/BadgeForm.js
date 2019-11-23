import React from 'react';

import { StyledBadgeForm } from './styles';

export const BadgeForm = () => {
  return (
    <StyledBadgeForm>
      <h2>New Attendant</h2>
      <form className="form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter"
          required 
        />
        <button type="submit">Save</button>
      </form>
    </StyledBadgeForm>
  );
};
