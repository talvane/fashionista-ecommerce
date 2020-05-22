import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductImage from '../Product/ProductImage';
import ProductContent from '../Product/ProductContent';
import { RootState } from '../../store/rootReducer';
import {
  loadProductThunk,
  sizeSelectorThunk,
  addToCartThunk,
} from '../../store/reducers/thunks';

import './styles.scss';

const SingleProduct: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { product, selectedSize } = useSelector(
    (state: RootState) => state.single
  );
  const { sizeIsMissing } = useSelector((state: RootState) => state.cart);

  const selectSizeConnected = (e: any, sku: string) => {
    dispatch(sizeSelectorThunk(e, sku));
  };

  const addToCartConnected = (e: any, selectedSize: string) => {
    dispatch(addToCartThunk(e, selectedSize));
  };

  useEffect(() => {
    dispatch(loadProductThunk(params));
  }, [dispatch, params]);

  return (
    <div className="single-product">
      <ProductImage
        {...product}
        onSale={product.on_sale}
        discount={product.discount_percentage}
      />

      <ProductContent
        {...product}
        selectedSize={selectedSize}
        onClickSize={selectSizeConnected}
        onClickAdd={addToCartConnected}
        onSale={product.on_sale}
        sizeWasNotSelected={sizeIsMissing}
      />
    </div>
  );
};

export default SingleProduct;
