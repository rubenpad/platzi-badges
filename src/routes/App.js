import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Badges from '../containers/Badges';
import NewBadge from '../containers/NewBadge';
import BadgeDetailsContainer from '../containers/BadgeDetailsContainer';
import EditBadge from '../containers/EditBadge';
import NotFound from '../components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={NewBadge} />
          <Route
            exact
            path="/badges/:badgeId/details"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={EditBadge} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
