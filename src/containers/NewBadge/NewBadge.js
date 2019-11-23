import React from 'react';

import { StyledNewBadge } from './styles';
import { Badge } from '../../components/Badge/Badge';
import { BadgeForm } from '../../components/BadgeForm/BadgeForm';

export const NewBadge = () => {
  return (
    <StyledNewBadge>
      <div className="badge">
        <Badge
          firstName="Ruben"
          lastName="Padilla"
          email="rubbenpad2@gmail.com"
          jobTitle="Engineer"
          twitter="@rubbenpad2"
        />
      </div>
      <div className="form">
        <BadgeForm />
      </div>
    </StyledNewBadge>
  );
};
