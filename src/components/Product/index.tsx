import React from 'react';
import { Link } from 'react-router-dom';

import ProductImage from './ProductImage';

import './styles.scss';

interface ProductProps {
  className?: string;
  image: string;
  name: string;
  on_sale?: boolean;
  discount_percentage: string;
  regular_price: string;
  actual_price: string;
}

const Product: React.FC<ProductProps> = ({ children, ...rest }) => {
  const {
    className,
    image,
    name,
    on_sale,
    discount_percentage,
    regular_price,
    actual_price,
  } = { ...rest };

  return (
    <div className={className}>
      <Link to={`/produto/${name}`}>
        <ProductImage
          image={image}
          onSale={on_sale}
          discount={discount_percentage}
          altAttr={name}
        />
        <h3 className="product__name">{name}</h3>
        <div className="product__pricing">
          {on_sale && (
            <span className="product__price product__price--from">
              {regular_price}
            </span>
          )}
          <span className="product__price product__price--to">
            {actual_price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
