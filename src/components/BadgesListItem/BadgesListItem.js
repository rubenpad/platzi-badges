import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import { StyledBadgesListItem, Information } from './styles';
import Gravatar from '../Gravatar/Gravatar';

function BadgesListItem({ badge }) {
  const { firstName, lastName, email, jobTitle, twitter } = badge;

  return (
    <StyledBadgesListItem>
      <Gravatar email={email} />
      <Information>
        <div>
          <h2>{`${firstName} ${lastName}`}</h2>
        </div>
        <div>
          <p className="twitter">
            <FaTwitter />
            {twitter}
          </p>
          <p>{jobTitle}</p>
        </div>
      </Information>
    </StyledBadgesListItem>
  );
};

export default BadgesListItem;
