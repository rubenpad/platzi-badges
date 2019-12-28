import React from 'react';
import md5 from 'md5';
import Avatar from './styles';

function Gravatar({ email }) {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return <Avatar src={`${base}${hash}?d=identicon`} alt="User Avatar" />;
}

export default Gravatar;
