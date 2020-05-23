import React from 'react';
import { v1 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProductListItem from '../Product/ProductListItem';

import { RootState } from '../../store/rootReducer';
import { searchProducts } from '../../store/reducers/thunks';
import slugfy from '../../utils/slugfy';

import './styles.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { itemsFound } = useSelector((state: RootState) => state.search);

  console.log(itemsFound);

  const searchConnected = (e: any) => {
    dispatch(searchProducts(e));
  };

  return (
    <div className="search">
      <div className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Buscar por produto..."
          onChange={(event) => searchConnected(event)}
        />
      </div>

      {itemsFound.length > 0 && (
        <div className="header__title">{`${itemsFound.length} items`}</div>
      )}

      <div className="product__list">
        {itemsFound.length > 0 ? (
          itemsFound.map((product) => (
            <Link
              key={uuid()}
              to={`/produto/${slugfy(product.name)}/${product.code_color}`}
            >
              <ProductListItem
                item={product}
                onClickAdd={() => {}}
                onClickRemove={() => {}}
                onClickDropItem={() => {}}
              />
            </Link>
          ))
        ) : (
          <span className="cart__empty">Nenhum item encontrado :\</span>
        )}
      </div>
    </div>
  );
};

export default Search;
