import { combineReducers } from '@reduxjs/toolkit';

import products from './reducers/products';

const rootReducer = combineReducers({
  products: products,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
