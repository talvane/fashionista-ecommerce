import React, { MouseEvent } from 'react';
import { v1 as uuid } from 'uuid';

import Button from '../Button';

interface Sizes {
  available: boolean;
  size: string;
  sku: string;
}

interface ProductContentProps {
  name: string;
  onSale?: boolean;
  regular_price: string;
  actual_price: string;
  installments: string;
  sizeWasNotSelected: boolean;
  sizes: Array<Sizes>;
  selectedSize: string;
  onClickSize: (event: MouseEvent<HTMLButtonElement>, sky: string) => void;
  onClickAdd: (
    event: MouseEvent<HTMLButtonElement>,
    selectedSize: string
  ) => void;
}

const ProductContent: React.FC<ProductContentProps> = ({
  children,
  ...props
}) => {
  const {
    name,
    onSale,
    regular_price,
    actual_price,
    installments,
    sizeWasNotSelected,
    sizes,
    selectedSize,
    onClickSize,
    onClickAdd,
  } = { ...props };

  return (
    <div className="product__content">
      <h3 className="product__name">{name}</h3>

      <div className="product__pricing">
        {onSale && (
          <span className="product__price product__price--from">
            {regular_price}
          </span>
        )}
        <span className="product__price product__price--to">
          {actual_price}
        </span>
        <span className="product__price product__price--installments">
          {`em até ${installments}`}
        </span>
      </div>

      <div className="product__sizes">
        <p className="product__sizes__title">Escolha o tamanho</p>

        {sizeWasNotSelected && (
          <p className="product__sizes__warning">
            É necessário escolher um tamanho
          </p>
        )}

        <div className="product__btn-group">
          {sizes.length > 0 &&
            sizes
              .filter((item: any) => item.available === true)
              .map((size: any) => (
                <Button
                  onClick={(event) => onClickSize(event, size.sku)}
                  key={uuid()}
                  className={`product__filter ${
                    selectedSize === size.sku ? 'product__filter--selected' : ''
                  }`}
                >
                  {size.size}
                </Button>
              ))}
        </div>
      </div>

      <div className="product__actions">
        <Button
          className="product__add-to-cart"
          onClick={(event) => onClickAdd(event, selectedSize)}
        >
          Adicionar à Sacola
        </Button>
      </div>
    </div>
  );
};

export default ProductContent;
