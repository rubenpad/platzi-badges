import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import { Item, UserBox } from './styles';
import Gravatar from '../Gravatar';

function BadgesListItem({ badge }) {
  const { firstName, lastName, email, jobTitle, twitter } = badge;

  return (
    <Item>
      <Gravatar email={email} />
      <UserBox>
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
      </UserBox>
    </Item>
  );
}

export default BadgesListItem;
