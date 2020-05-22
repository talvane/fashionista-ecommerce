import { createSlice } from '@reduxjs/toolkit';

import { ArrayCatlog } from '../../services/apiCatalog';
import { sortByItemName } from '../../utils/handlerProduct';

interface CartProps {
  items: Array<ArrayCatlog>;
  count: number;
  sizeIsMissing: boolean;
}

let initialState: CartProps = {
  items: [],
  count: 0,
  sizeIsMissing: false,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.items = sortByItemName([action.payload, ...state.items]);
      state.count = state.items.length;
    },

    remove(state, action) {
      state.items = sortByItemName([...action.payload]);
      state.count = state.items.length;
    },

    empty(state) {
      state.items = [];
      state.count = 0;
      state.sizeIsMissing = false;
    },

    check(state) {
      state.sizeIsMissing = true;
    },

    dismissWarning(state) {
      state.sizeIsMissing = false;
    },
  },
});

export const { add, remove, empty, check, dismissWarning } = cart.actions;

export default cart.reducer;
