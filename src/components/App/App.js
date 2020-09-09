import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../Loader/Loader';

const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Users = lazy(() => import('../../pages/Users/Users'));
const Publications = lazy(() => import('../Publications/Publications'));
const About = lazy(() => import('../../pages/About/About'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/publications/:key" component={Publications} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default App;
