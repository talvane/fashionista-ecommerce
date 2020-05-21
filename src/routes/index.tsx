import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import App from '../components/App/App';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

//TODO: //{/*<Route path="*" component={Product} /> ->Rota 404<- */}

const Routes: React.FC = () => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/produto/:id" component={Product} />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default Routes;
