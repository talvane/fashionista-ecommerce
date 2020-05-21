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

export const searchProducts = (e: any): AppThunk => (dispatch, getState) => {
  const searchTerm = e.target.value;

  if (searchTerm.length < 3) {
    dispatch(search({ products: [] }));
  }

  const catalog = getState().products.products;
  const itemsFound = searchByTerms(searchTerm, catalog);
  dispatch(search({ products: itemsFound }));
};
