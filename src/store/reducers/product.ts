import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../store';

import { ArrayCatlog } from '../../services/apiCatalog';

interface DisplayProduct {
  loading?: boolean;
  error?: null;
  product: Array<ArrayCatlog>;
  selectedSize: string;
}

let initialState: DisplayProduct = {
  loading: true,
  error: null,
  product: [],
  selectedSize: '',
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
      state.error = null;
    },

    success(state, action: PayloadAction<DisplayProduct>) {
      state.loading = false;
      state.error = null;
      state.product = action.payload.product;
    },

    error(state, action: PayloadAction<DisplayProduct>) {
      state.loading = false;
      state.error = action.payload.error;
    },

    addSize(state, action) {
      state.selectedSize = action.payload.sku;
    },

    clear(state) {
      state.loading = false;
      state.error = null;
      state.product = [];
      state.selectedSize = '';
    },
  },
});

export const { start, success, error, addSize, clear } = product.actions;

export default product.reducer;

/*
export const fetchCatalog = (): AppThunk => async (dispatch) => {
  try {
    const catalogResult = await getCatalog();
    dispatch(success({ products: catalogResult }));
  } catch (err) {
    dispatch(error({ error: err.toString(), products: [] }));
  }
};
*/
