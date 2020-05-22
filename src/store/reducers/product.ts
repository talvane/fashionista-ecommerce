import { createSlice } from '@reduxjs/toolkit';

import { ArrayCatlog } from '../../services/apiCatalog';

export interface DisplayProduct {
  loading?: boolean;
  error?: null;
  product: ArrayCatlog;
  selectedSize: string;
}

let initialState: DisplayProduct = {
  loading: true,
  error: null,
  product: {
    name: '',
    style: '',
    code_color: '',
    color_slug: '',
    color: '',
    on_sale: false,
    regular_price: '',
    actual_price: '',
    discount_percentage: '',
    installments: '',
    image: '',
    sizes: [],
  },
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

    success(state, action) {
      state.loading = false;
      state.error = null;
      state.product = action.payload.product[0];
    },

    error(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },

    addSize(state, action) {
      state.selectedSize = action.payload;
    },

    clear(state) {
      state.loading = false;
      state.error = null;
      state.product = {
        name: '',
        style: '',
        code_color: '',
        color_slug: '',
        color: '',
        on_sale: false,
        regular_price: '',
        actual_price: '',
        discount_percentage: '',
        installments: '',
        image: '',
        sizes: [],
      };
      state.selectedSize = '';
    },
  },
});

export const { start, success, error, addSize, clear } = product.actions;

export default product.reducer;
