import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Users from '../../pages/Users/Users';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/users" component={Users} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
