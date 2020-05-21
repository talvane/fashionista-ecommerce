//import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppThunk } from '../store';

import { ArrayCatlog } from '../../services/apiCatalog';
import { searchByTerms } from '../../utils/handlerProduct';

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
