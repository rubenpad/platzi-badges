import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import Avatar from './styles';

const Gravatar = ({ email }) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });

  return <Avatar src={`${base}${hash}?d=identicon`} alt="User Avatar" />;
};

Gravatar.propTypes = { email: PropTypes.string };

export default Gravatar;
