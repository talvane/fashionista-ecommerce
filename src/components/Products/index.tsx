import React from 'react';
//import uuidv1 from 'uuid/v1';

import Product from '../Product';

import './styles.scss';

const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title"> 0 items </div>

        <div className="products__grid">
          <Product className="products__box" />
          <Product className="products__box" />
        </div>
      </div>
    </section>
  );
};

export default Products;
