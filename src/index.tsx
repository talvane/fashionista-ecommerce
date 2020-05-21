import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

import { store } from './store/store';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,

  document.getElementById('root')
);
