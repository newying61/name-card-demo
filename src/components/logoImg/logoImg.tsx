import React from 'react';
import logo from './logo.svg';

const LogoImg: React.FC = React.memo(() => {
  return (
    <img src={logo} alt="logo" width="80" height="80" />
  );
});

export default LogoImg;
