import React, { MouseEvent } from 'react';
import { v1 as uuid } from 'uuid';

import { ArrayCatlog } from '../../services/apiCatalog';

import ProductImage from './ProductImage';
import MinusButton from '../MinusButton';
import PlusButton from '../PlusButton';
import Button from '../Button';

interface ProductListItemProps {
  item: ArrayCatlog;
  onClickAdd: (event: MouseEvent<HTMLButtonElement>, item: ArrayCatlog) => void;
  onClickRemove: (
    event: MouseEvent<HTMLButtonElement>,
    name: string,
    selectedSize?: string
  ) => void;
  onClickDropItem: (
    event: MouseEvent<HTMLButtonElement>,
    selectedSize?: string
  ) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  children,
  ...props
}) => {
  const { item, onClickAdd, onClickRemove, onClickDropItem } = {
    ...props,
  };

  return (
    <div className="product__list__item">
      <div className="product__list__row">
        <ProductImage
          image={item.image}
          onSale={item.on_sale}
          discount={item.discount_percentage}
          altAttr={item.name}
        />

        <div className="product__list__info">
          <p className="product__list__name">{item.name}</p>
          <p className="product__list__size">
            {item.sizes
              .filter((size) => item.selectedSize === size.sku)
              .map((sizeObj) => (
                <span key={uuid()}>{`Tam.: ${sizeObj.size}`}</span>
              ))}
          </p>

          {item.quantity && (
            <div className="product__list__quantity">
              <MinusButton
                className="cart__icons"
                onClick={(event) =>
                  onClickRemove(event, item.name, item.selectedSize)
                }
              />
              <div className="product__list__input">{item.quantity}</div>
              <PlusButton
                className="cart__icons"
                onClick={(event) => onClickAdd(event, item)}
              />
            </div>
          )}
        </div>

        <div className="product__list__pricing">
          <div className="product__list__current">{item.actual_price}</div>

          <div className="product__list__installments">{item.installments}</div>
        </div>
      </div>

      {item.quantity && (
        <div className="product__row">
          <Button
            className="cart__remove"
            onClick={(event) => onClickDropItem(event, item.selectedSize)}
          >
            Remover item
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductListItem;
