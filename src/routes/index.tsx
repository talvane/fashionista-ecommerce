import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { ConnectedRouter } from 'connected-react-router';

//import history from './history';

import App from '../components/App/App';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <App>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/produto/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  </App>
);

export default Routes;

/*
<ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/produto/:id" component={Product} />
      </Switch>
    </App>
  </ConnectedRouter>
*/
