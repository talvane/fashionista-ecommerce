import { combineReducers } from '@reduxjs/toolkit';

import drawer from './reducers/drawer';
import products from './reducers/products';

const rootReducer = combineReducers({
  drawer: drawer,
  products: products,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
