import { AppThunk } from '../store';

import { search } from './search';
import { success as successProducts, error } from './products';
import {
  success as successProduct,
  error as errorProduct,
  addSize,
  clear as clearProduct,
} from './product';
import { check, add as addCart, remove as removeCart } from './cart';
import { dismissDrawer } from './drawer';
import {
  searchByTerms,
  findIndexBySlug,
  groupItemsBySlug,
  removeItemBySlug,
} from '../../utils/handlerProduct';
import {
  getCatalog,
  getProductByPathname,
  ArrayCatlog,
} from '../../services/apiCatalog';

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
    const dataResult = await getCatalog();
    const catalogResult = dataResult.catalog;
    const filtersResult = dataResult.filters;
    dispatch(
      successProducts({ products: catalogResult, filters: filtersResult })
    );
  } catch (err) {
    dispatch(error({ error: err.toString(), products: [], filters: [] }));
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
    dispatch(check());
  } else {
    dispatch(
      addCart({
        ...selectedProduct,
        selectedSize,
      })
    );
  }
};

export const addQuantityThunk = (
  e: any,
  currentProduct: ArrayCatlog
): AppThunk => (dispatch) => {
  e.preventDefault();

  dispatch(addCart({ ...currentProduct })); // TODO: Verificar ordenação dentro do carrinho de compras...
};

export const removeQuantityThunk = (
  e: any,
  itemName: string,
  selectedSize?: string
): AppThunk => (dispatch, getState) => {
  e.preventDefault();

  const cartItems = getState().cart.items;
  const itemIndex = findIndexBySlug(itemName, selectedSize, cartItems);
  const groupedItems = groupItemsBySlug(itemName, cartItems);

  if (groupedItems.length > 1) {
    let clone = Object.assign([], cartItems);
    clone.splice(itemIndex, 1);

    dispatch(removeCart(clone));
  }
};

export const removeItemThunk = (e: any, selectedSize?: string): AppThunk => (
  dispatch,
  getState
) => {
  e.preventDefault();

  const cartItems = getState().cart.items;
  const itemToRemove = removeItemBySlug(selectedSize, cartItems);
  dispatch(removeCart(itemToRemove));
};

export const dismissDrawerThunk = (): AppThunk => (dispatch) => {
  dispatch(dismissDrawer());
};

export const clearProductThunk = (): AppThunk => (dispatch) => {
  dispatch(clearProduct());
};

export const filterCatalog = (checkboxes: Object): AppThunk => async (
  dispatch,
  getState
) => {
  let filters = [];
  for (let prop in checkboxes) {
    if (Object.getOwnPropertyDescriptor(checkboxes, prop)?.value) {
      filters.push(prop);
    }
  }

  if (filters) {
    const catalog = getState().products.products;
  }

  /*
  const ArrFilters = catalog.data.map((elem) => {
    return elem.name.split(' ')[0];
  });
  const filters = ArrFilters.filter(
    (item, i) => ArrFilters.indexOf(item) === i
  ).sort();
  */

  /*
  export const searchByTerms = (searchTerm: string, items: Catalog) =>
  items.filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });
  */

  /*
  try {
    const dataResult = await getCatalog();
    const catalogResult = dataResult.catalog;
    const filtersResult = dataResult.filters;
    dispatch(
      successProducts({ products: catalogResult, filters: filtersResult })
    );
  } catch (err) {
    dispatch(error({ error: err.toString(), products: [], filters: [] }));
  }
  */
};
