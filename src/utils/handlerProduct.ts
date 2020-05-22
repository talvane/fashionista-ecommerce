import { Catalog, ArrayCatlog } from '../services/apiCatalog';
import slugfy from '../utils/slugfy';

export const searchByTerms = (searchTerm: string, items: Catalog) =>
  items.filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });

export const sortByItemName = (items: Catalog) => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
};

export const getLastPath = (pathname: any) => pathname.split('/').pop();

export const filterProductBySlug = (
  pathname: string,
  code: string,
  data: Catalog
) => {
  const slug = slugfy(getLastPath(pathname));
  const product = data.filter(
    (product) => slugfy(product.name) === slug && product.code_color === code
  );
  return product;
};

export const groupRepeatedProducts = (cart: any, product: any) => {
  const repeated = cart.find(
    (cartItem: any) => cartItem.selectedSize === product.selectedSize
  );

  if (!repeated) {
    cart.push({ ...product, quantity: 1 });
    return cart;
  }

  repeated.quantity += 1;
  return cart;
};

export const sumItemsPrice = (items: Array<ArrayCatlog>) => {
  const totalPrice = items
    .reduce((acc, item) => {
      const priceWithoutCurrency = item.actual_price
        .replace('R$ ', '')
        .replace(',', '.');
      const priceToFloat = parseFloat(priceWithoutCurrency);
      return acc + priceToFloat;
    }, 0)
    .toFixed(2)
    .replace('.', ',');

  return totalPrice;
};
