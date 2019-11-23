import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../components/Layout';
import { Home } from '../containers/Home/Home';
import { Badges } from '../containers/Badges/Badges';
import { NewBadge } from '../containers/NewBadge/NewBadge';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={NewBadge} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
