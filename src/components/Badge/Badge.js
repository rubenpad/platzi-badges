import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import logo from '../../assets/badge-header.svg';
import { Gravatar } from '../../utils/Gravatar';
import { StyledBadge } from './styles';

export const Badge = (props) => {
  const { firstName, lastName, email, jobTitle, twitter } = props;
  return (
    <StyledBadge>
      <div className="header">
        <img src={logo} alt="PlatziConf Logo"/>
      </div>
      <div className="user">
        <img className="avatar" src={Gravatar(email)} alt="User Avatar"/>
        <div>
          <h1>
            {firstName}
            <br/>
            {lastName}
          </h1>
          <p><span><FaTwitter />{twitter}</span></p>
          <p>{jobTitle}</p>
        </div>
      </div>
      <div className="footer">
        <p>#platziconf</p>
      </div>
    </StyledBadge>
  )
};
