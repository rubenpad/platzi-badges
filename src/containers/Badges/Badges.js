import React from 'react';

import useQuery from '../../hooks/useQuery';
import api from '../../api';

import { StyledBadges } from './styles';
import PageLoading from '../../components/PageLoading/PageLoading';
import BadgesList from '../../components/BadgesList/BadgesList';
import PageError from '../../components/PageError/PageError';

function Badges() {
  const badges = useQuery(() => api.badges.list());

  if (badges.error) return <PageError error={badges.error} />;

  if (badges.loading) return <PageLoading />;

  return (
    <StyledBadges>
      <BadgesList badges={badges.data} />
    </StyledBadges>
  );
}

export default Badges;
