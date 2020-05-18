import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../store';

import { getCatalog, ArrayCatlog } from '../../services/apiCatalog';

interface DisplayCatalog {
  loading?: boolean;
  error?: null;
  products: Array<ArrayCatlog>;
}

let initialState: DisplayCatalog = {
  loading: true,
  error: null,
  products: [],
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
      state.error = null;
    },

    success(state, action: PayloadAction<DisplayCatalog>) {
      state.loading = false;
      state.error = null;
      state.products = action.payload.products;
    },

    error(state, action: PayloadAction<DisplayCatalog>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { start, success, error } = products.actions;

export default products.reducer;

export const fetchCatalog = (): AppThunk => async (dispatch) => {
  try {
    const catalogResult = await getCatalog();
    dispatch(success({ products: catalogResult }));
  } catch (err) {
    dispatch(error({ error: err.toString(), products: [] }));
  }
};
