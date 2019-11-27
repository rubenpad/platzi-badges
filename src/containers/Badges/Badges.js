import React from 'react';

import useQuery from '../../hooks/useQuery';
import api from '../../api';

import PageLoading from '../../components/PageLoading/PageLoading';
import BadgesList from '../../components/BadgesList/BadgesList';
import PageError from '../../components/PageError/PageError';
import { Container } from '../../components/BadgesList/styles';

function Badges() {
  const badges = useQuery(api.badges.list);

  if (badges.error) return <PageError error={badges.error} />;

  if (badges.loading) return <PageLoading />;

  return (
    <Container>
      <BadgesList badges={badges.data} />
    </Container>
  );
}

export default Badges;
