import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Users from '../../pages/Users/Users';
import Publications from '../../components/Publications/Publications';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/publications/:key" component={Publications} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
