//import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ArrayCatlog } from '../../services/apiCatalog';

interface SearchProps {
  itemsFound: Array<ArrayCatlog>;
}

let initialState: SearchProps = {
  itemsFound: [],
};

const searchPrd = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state, action) {
      state.itemsFound = action.payload.products;
    },
  },
});

export const { search } = searchPrd.actions;

export default searchPrd.reducer;
