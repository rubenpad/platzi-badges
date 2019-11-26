import React from 'react';
import { Link } from 'react-router-dom';

import { StyledBadgesList } from './styles';
import BadgesListItem from '../BadgesListItem/BadgesListItem';

function Badgeslist({ badges }) {

  return (
    <StyledBadgesList>
      <div className="box">
        <Link to="/badges/new">NEW BADGE</Link>
      </div>
      <ul>
        {badges.map((badge) => {
          return (
            <li key={badge.id}>
              <BadgesListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    </StyledBadgesList>
  );
}

export default Badgeslist;
