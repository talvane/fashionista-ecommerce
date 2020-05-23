import React from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { ArrayCatlog } from '../../services/apiCatalog';

import ProductListItem from '../Product/ProductListItem';
import {
  groupRepeatedProducts,
  sumItemsPrice,
} from '../../utils/handlerProduct';

import {
  addQuantityThunk,
  removeQuantityThunk,
  removeItemThunk,
} from '../../store/reducers/thunks';

import './styles.scss';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const addQuantityConnected = (e: any, item: ArrayCatlog) => {
    dispatch(addQuantityThunk(e, item));
  };

  const removeQuantityConnected = (
    e: any,
    itemName: string,
    selectedSize?: string
  ) => {
    dispatch(removeQuantityThunk(e, itemName, selectedSize));
  };

  const removeItemConnected = (e: any, selectedSize?: string) => {
    dispatch(removeItemThunk(e, selectedSize));
  };

  return (
    <div className="cart">
      <div className="product__list">
        {items.length > 0 ? (
          items
            .reduce(groupRepeatedProducts, [])
            .map((product: ArrayCatlog) => (
              <ProductListItem
                item={product}
                key={uuid()}
                onClickAdd={addQuantityConnected}
                onClickRemove={removeQuantityConnected}
                onClickDropItem={removeItemConnected}
              />
            ))
        ) : (
          <span className="cart__empty">Sua sacola está vazia :\</span>
        )}
      </div>

      <div className="cart__subtotal">
        <div className="header__title">
          {`Subtotal - R$ ${sumItemsPrice(items)}`}
        </div>
      </div>
    </div>
  );
};

export default Cart;
