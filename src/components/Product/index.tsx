import React from 'react';

// Imagem vinda da api
import imgCatalog from '../../assets/catalog_1.jpg';

import './styles.scss';

interface ProductProps {
  className?: string;
}

const Product: React.FC<ProductProps> = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <a href="">
        <img src={imgCatalog} alt="imgProduct"></img>
        <h3>Nome do Produto</h3>
        <span>Preço Do Produto</span>
      </a>
    </div>
  );
};

export default Product;
