import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerProps {
  isDrawerVisible: boolean;
  isCartOpen: boolean;
  isSearchOpen: boolean;
}

let initialState: DrawerProps = {
  isDrawerVisible: false,
  isCartOpen: false,
  isSearchOpen: false,
};

const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toogleCart(state, action: PayloadAction<DrawerProps>) {
      const { isDrawerVisible } = action.payload;
      state.isDrawerVisible = !isDrawerVisible;
      state.isCartOpen = true;
      state.isSearchOpen = false;
    },

    toogleSearch(state, action: PayloadAction<DrawerProps>) {
      const { isDrawerVisible } = action.payload;
      state.isDrawerVisible = !isDrawerVisible;
      state.isCartOpen = false;
      state.isSearchOpen = true;
    },

    dismissDrawer(state) {
      state.isDrawerVisible = false;
      state.isCartOpen = false;
      state.isSearchOpen = false;
    },
  },
});

export const { toogleCart, toogleSearch, dismissDrawer } = drawer.actions;

export default drawer.reducer;
