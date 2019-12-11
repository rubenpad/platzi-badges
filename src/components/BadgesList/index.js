import React from 'react';
import { Link } from 'react-router-dom';

import BadgesListItem from '../BadgesListItem';
import { Container, Box, Input, List } from './styles';

function Badgeslist({ badges }) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button" to="/badges/new">
          NEW BADGE
        </Link>
        <Input
          value={query}
          type="text"
          placeholder="Search badges..."
          onChange={onChange}
        />
      </Box>
      {filteredBadges.length > 0 && (
        <List>
          {filteredBadges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link className="link" to={`/badges/${badge.id}/details`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </List>
      )}
    </Container>
  );
}

export default Badgeslist;
