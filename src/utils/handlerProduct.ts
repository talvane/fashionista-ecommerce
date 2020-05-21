import { Catalog } from '../services/apiCatalog';
import slugfy from '../utils/slugfy';

export const searchByTerms = (searchTerm: string, items: Catalog) =>
  items.filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });

export const sortByItemName = (items: Catalog) =>
  items.sort((a, b) => a.name.localeCompare(b.name));

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
