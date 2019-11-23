import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../components/Layout';
import { Home } from '../cotainers/Home/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
