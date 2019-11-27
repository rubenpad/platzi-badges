import React from 'react';
import { Link } from 'react-router-dom';

import BadgesListItem from '../BadgesListItem/BadgesListItem';
import { Container, Box, List } from './styles';

function Badgeslist({ badges }) {
  return (
    <Container>
      <Box>
        <Link className="button" to="/badges/new">NEW BADGE</Link>
      </Box>
      <List>
        {badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="link" to={`/badges/${badge.id}/edit`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </List>
    </Container>
  );
}

export default Badgeslist;
