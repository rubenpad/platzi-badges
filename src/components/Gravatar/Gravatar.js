import React from 'react';
import md5 from 'md5';
import { StyledGravatar } from './styles';

function Gravatar({ email }) {
  const base = 'https:gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return (
    <StyledGravatar src={`${base}${hash}?d=identicon`} alt="User Avatar" />
  );
};

export default Gravatar;
