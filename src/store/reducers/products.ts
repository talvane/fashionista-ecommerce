import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DisplayCatalog {
  loading: boolean;
  error: null;
  products: [];
}

let initialState: DisplayCatalog = {
  loading: false,
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
