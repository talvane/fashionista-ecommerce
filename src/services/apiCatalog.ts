import axios from 'axios';
import { filterProductBySlug } from '../utils/handlerProduct';
import Catalog from '../pages/Catalog';

interface Sizes {
  available: boolean;
  size: string;
  sku: string;
}

export interface ArrayCatlog {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale?: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: Array<Sizes>;
  selectedSize?: string;
  quantity?: number;
}

export interface Catalog extends Array<ArrayCatlog> {}

export async function getCatalog() {
  const url = 'https://5f074b869c5c250016306cbf.mockapi.io/api/v1/catalog';

  try {
    const catalog = await axios.get<Catalog>(url);
    const ArrFilters = catalog.data.map((elem) => {
      return elem.name.split(' ')[0];
    });
    const filters = ArrFilters.filter(
      (item: any, i: any) => ArrFilters.indexOf(item) === i
    ).sort();

    return { catalog: catalog.data, filters };
  } catch (error) {
    throw error;
  }
}

export const getProductByPathname = async (pathname: string, code: string) => {
  const data = await getCatalog();
  return filterProductBySlug(pathname, code, data.catalog);
};

// import productsEndpoint from './products.json';
// import { filterProductBySlug } from '../utils/productHandler';

// const getProducts = mockedData => new Promise(resolve => resolve([...mockedData.products]));

// const getProductByPathname = pathname => new Promise(resolve => (
//   resolve(filterProductBySlug(pathname, productsEndpoint, getProducts))
// ));

// const api = {
//   getProducts: () => getProducts(productsEndpoint),
//   getProductByPathname: pathname => getProductByPathname(pathname),
// };

// export default api;
