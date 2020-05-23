import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import rootReducer, { RootState } from './rootReducer';
import history from '../routes/history';
import { saveState, loadState } from '../utils/localStorage';

const middleware = [routerMiddleware(history), ...getDefaultMiddleware()];
const preloadedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
