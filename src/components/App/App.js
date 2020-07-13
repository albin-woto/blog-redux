import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Users from '../../pages/Users/Users';

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;
