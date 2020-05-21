import React from 'react';

import Badge from '../Badge';

interface ProductImageProps {
  image?: string;
  onSale?: boolean;
  discount: string;
  altAttr?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ children, ...rest }) => {
  const { image, altAttr, onSale, discount } = { ...rest };

  return (
    <figure className="product__image">
      {onSale && <Badge discount={discount} />}
      {image ? (
        <img src={image} alt={`Produto ${altAttr}`} title={altAttr} />
      ) : (
        <img
          src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
          alt={`Produto ${altAttr}`}
          title={altAttr}
          className="product__placeholder"
        />
      )}
    </figure>
  );
};

export default ProductImage;
