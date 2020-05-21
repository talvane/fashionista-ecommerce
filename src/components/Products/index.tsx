import React, { useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCatalog } from '../../store/reducers/thunks';
import { RootState } from '../../store/rootReducer';

import Product from '../Product';

import './styles.scss';

const Products: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <section className="products">
      {data.loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="app__container">
          <div className="header__title">{data.products.length} items</div>

          <div className="products__grid">
            {data.products.map((product) => (
              <Product className="products__box" key={uuid()} {...product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
