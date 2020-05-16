import React, { useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';

import { getCatalog, Catalog } from '../../services/apiCatalog';

import Product from '../Product';

import './styles.scss';

const Products: React.FC = () => {
  const [produtcs, setProducts] = useState<Catalog>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProducts() {
      async function fetchProducts() {
        const productsResult = await getCatalog();
        setProducts(productsResult);
      }

      try {
        await Promise.all([fetchProducts()]);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllProducts();
  }, []);

  return (
    <section className="products">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="app__container">
          <div className="header__title">{produtcs.length} items</div>

          <div className="products__grid">
            {produtcs.map((product) => (
              <Product className="products__box" key={uuid()} {...product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
