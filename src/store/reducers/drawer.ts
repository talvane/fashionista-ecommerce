import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerProps {
  isDrawerVisible: boolean;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isFilter: boolean;
}

let initialState: DrawerProps = {
  isDrawerVisible: false,
  isCartOpen: false,
  isSearchOpen: false,
  isFilter: false,
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
      state.isFilter = false;
    },

    toogleSearch(state, action: PayloadAction<DrawerProps>) {
      const { isDrawerVisible } = action.payload;
      state.isDrawerVisible = !isDrawerVisible;
      state.isCartOpen = false;
      state.isSearchOpen = true;
      state.isFilter = false;
    },

    toogleFilter(state, action: PayloadAction<DrawerProps>) {
      const { isDrawerVisible } = action.payload;
      state.isDrawerVisible = !isDrawerVisible;
      state.isCartOpen = false;
      state.isSearchOpen = false;
      state.isFilter = true;
    },

    dismissDrawer(state) {
      state.isDrawerVisible = false;
      state.isCartOpen = false;
      state.isSearchOpen = false;
      state.isFilter = false;
    },
  },
});

export const {
  toogleCart,
  toogleSearch,
  dismissDrawer,
  toogleFilter,
} = drawer.actions;

export default drawer.reducer;
