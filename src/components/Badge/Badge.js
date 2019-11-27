import React from 'react';
import { FaTwitter } from 'react-icons/fa';

import logo from '../../assets/badge-header.svg';
import Gravatar from '../Gravatar/Gravatar';
import { Container, Header, UserBox, Footer } from './styles';

function Badge({ badge }) {
  const { firstName, lastName, jobTitle, twitter, email } = badge;
  return (
    <Container>
      <Header>
        <img src={logo} alt="PlatziConf Logo" />
      </Header>
      <UserBox>
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
      </UserBox>
      <Footer>
        <p>#platziconf</p>
      </Footer>
    </Container>
  );
};

export default Badge;
