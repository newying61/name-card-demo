import React from 'react';
import { Nav, StyledNavLink } from '../Styled';

const AppNav: React.FC = React.memo(() => {
  return (
    <Nav>
      <StyledNavLink to='/cards'>All cards</StyledNavLink>
      <StyledNavLink to='/add'>Add card</StyledNavLink>
    </Nav>
);
});

export default AppNav;
