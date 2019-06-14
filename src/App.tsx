import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './styled.globalstyle';
import { H1, Nav, StyledNavLink } from './components/Styled';
import LogoImage from './components/LogoImage';
import NameCardsViewerContainer from './containers/NameCardsViewerContainer';
import { NameCardCreateForm, NameCardUpdateForm } from './containers/NameCardEditFormContainer';

interface AppProps {
  store: Store
}

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <H1>
            <span>Name cards viewer</span>
            <LogoImage />
          </H1>
          <Nav>
              <StyledNavLink to='/cards'>All cards</StyledNavLink>
              <StyledNavLink to='/add'>Add card</StyledNavLink>
          </Nav>
          <Switch>
            <Route path="/cards" exact component={NameCardsViewerContainer} />
            <Route path="/cards/:id" component={NameCardUpdateForm} />
            <Route path="/add" component={NameCardCreateForm} />
            <Redirect to="/cards" />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
