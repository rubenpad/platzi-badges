import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter } from 'react-icons/fa';

import logo from '../../assets/badge-header.svg';
import Gravatar from '../Gravatar';
import { Container, Header, Box, Footer } from './styles';

const Badge = ({ badge }) => {
  const { firstName, lastName, jobTitle, twitter, email } = badge;

  return (
    <Container>
      <Header>
        <img src={logo} alt="PlatziConf Logo" />
      </Header>
      <Box>
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
      </Box>
      <Footer>
        <p>#platziconf</p>
      </Footer>
    </Container>
  );
};

Badge.propTypes = {
  badge: PropTypes.object,
};

export default Badge;
