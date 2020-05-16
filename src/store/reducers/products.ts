import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DisplayCatalog {
  img: string;
  badge: string;
  name: string;
  regular_price: string;
  actual_price: string;
}

let initialState: DisplayCatalog = {
  img: '',
  badge: '',
  name: '',
  regular_price: '',
  actual_price: '',
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayCatalog(state, action: PayloadAction<DisplayCatalog>) {
      const { img, badge, name, regular_price, actual_price } = action.payload;
      state.img = img;
      state.badge = badge;
      state.name = name;
      state.regular_price = regular_price;
      state.actual_price = actual_price;
    },
  },
});

export const { displayCatalog } = products.actions;

export default products.reducer;
