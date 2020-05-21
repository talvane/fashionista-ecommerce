import { Catalog } from '../services/apiCatalog';

export const searchByTerms = (searchTerm: string, items: Catalog) =>
  items.filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });
