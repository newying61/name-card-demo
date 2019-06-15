import React from 'react';
import { H1 } from '../Styled';
import LogoImage from '../LogoImage';

const AppHeader: React.FC = React.memo(() => {
  return (
    <H1>
      <span>Name cards viewer</span>
      <LogoImage />
    </H1>
  );
});

export default AppHeader;
