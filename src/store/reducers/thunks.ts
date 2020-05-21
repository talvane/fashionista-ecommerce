import { AppThunk } from '../store';

import { search } from './search';
import { success as successProducts, error } from './products';
import {
  success as successProduct,
  error as errorProduct,
  addSize,
} from './product';
import { check, add as addCart } from './cart';
import { dismissDrawer } from './drawer';
import { searchByTerms } from '../../utils/handlerProduct';
import { getCatalog, getProductByPathname } from '../../services/apiCatalog';

export const searchProducts = (e: any): AppThunk => (dispatch, getState) => {
  const searchTerm = e.target.value;

  if (searchTerm.length < 3) {
    dispatch(search({ products: [] }));
  }

  const catalog = getState().products.products;
  const itemsFound = searchByTerms(searchTerm, catalog);
  dispatch(search({ products: itemsFound }));
};

export const fetchCatalog = (): AppThunk => async (dispatch) => {
  try {
    const catalogResult = await getCatalog();
    dispatch(successProducts({ products: catalogResult }));
  } catch (err) {
    dispatch(error({ error: err.toString(), products: [] }));
  }
};

export const loadProductThunk = (params: any): AppThunk => async (dispatch) => {
  try {
    const productResult = await getProductByPathname(params.id, params.code);

    if (productResult) {
      dispatch(dismissDrawer());
      dispatch(successProduct({ product: productResult }));
    }
  } catch (err) {
    dispatch(errorProduct({ error: err.toString() }));
  }
};

export const sizeSelectorThunk = (e: any, sku: string): AppThunk => (
  dispatch
) => {
  e.preventDefault();

  dispatch(addSize(sku));
};

export const addToCartThunk = (e: any, selectedSize: string): AppThunk => (
  dispatch,
  getState
) => {
  e.preventDefault();

  const selectedProduct = getState().single.product;

  if (selectedSize === '') {
    return dispatch(check()); //TODO: ver mensagem anterior de erro
  }

  return dispatch(
    addCart({
      ...selectedProduct,
      selectedSize,
    })
  );
};
