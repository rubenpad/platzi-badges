import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import logo from '../../assets/badge-header.svg';
import Gravatar from '../Gravatar/Gravatar';
import { StyledBadge } from './styles';

function Badge({ values }) {
  const { firstName, lastName, jobTitle, twitter, email } = values;
  return (
    <StyledBadge>
      <div className="header">
        <img src={logo} alt="PlatziConf Logo" />
      </div>
      <div className="user">
        <Gravatar email={email} />
        <div>
          <h1>
            {firstName || 'First Name'}
            <br />
            {lastName || 'Last Name'}
          </h1>
          <p>
            <span>
              <FaTwitter />
              {twitter || 'Twitter'}
            </span>
          </p>
          <p>{jobTitle || 'Job Title'}</p>
        </div>
      </div>
      <div className="footer">
        <p>#platziconf</p>
      </div>
    </StyledBadge>
  );
};

export default Badge;
