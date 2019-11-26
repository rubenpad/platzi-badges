import React from 'react';

import useQuery from '../../hooks/useQuery';
import api from '../../api';

import { StyledBadges } from './styles';
import Loader from '../../components/Loader/Loader';
import BadgesList from '../../components/BadgesList/BadgesList';

function Badges() {
  const badges = useQuery(() => api.badges.list());
  console.log(badges);

  if (badges.loading) {
    return (
      <StyledBadges>
        <Loader />
      </StyledBadges>
    );
  }

  return (
    <StyledBadges>
      <BadgesList badges={badges.data} />
    </StyledBadges>
  );
}

export default Badges;
