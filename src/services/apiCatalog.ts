import axios from 'axios';
import { filterProductBySlug } from '../utils/handlerProduct';

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
  const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

  try {
    const catalog = await axios.get<Catalog>(url);

    return catalog.data;
  } catch (error) {
    throw error;
  }
}

export const getProductByPathname = async (pathname: string, code: string) => {
  const data = await getCatalog();
  return filterProductBySlug(pathname, code, data);
};
