import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import history from '../routes/history';
import drawer from './reducers/drawer';
import products from './reducers/products';
import search from './reducers/search';
import product from './reducers/product';

const rootReducer = combineReducers({
  router: connectRouter(history),
  drawer: drawer,
  products: products,
  search: search,
  single: product,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
