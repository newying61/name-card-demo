import React from 'react';
import logo from './logo.svg';

const LogoImage: React.FC = React.memo(() => {
  return (
    <img src={logo} alt="logo" width="80" height="80" role="presentation" aria-hidden="true" />
  );
});

export default LogoImage;
