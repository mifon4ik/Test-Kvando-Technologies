import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import './assets/css/App.scss';
import Main from './components/common/main/element';
import Groups from './components/groups/component';
import Group from './components/group/component';
import Index from './components/index/component';

const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path='/groups' render={() =>
              <Groups />
            } />
            <Route exact path='/groups/:owner_id' render={() =>
              <Group />
            } />
            <Route exact path='/' render={() =>
              <Index />
            } />
            <Route path='*' render={() =>
              <div>404</div>
            } />
          </Switch>
        </Main>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
