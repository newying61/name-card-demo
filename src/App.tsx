import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './styled.globalstyle';
import AppHeader from './components/AppHeader';
import AppNav from './components/AppNav';
import NameCardsViewerContainer from './containers/NameCardsViewerContainer';
import { NameCardForm } from './containers/NameCardEditFormContainer';
import configureStore from './store/configureStore';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <AppHeader />
          <AppNav />
          <Switch>
            <Route path="/cards" exact component={NameCardsViewerContainer} />
            <Route path="/cards/:id" component={NameCardForm} />
            <Route path="/add" component={NameCardForm} />
            <Redirect to="/cards" />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
