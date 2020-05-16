import React from 'react';

import HeaderContext from '../Header/HeaderContext';
//import Cart from '';
//import Search from '';

interface DrawerProps {
  isDrawerVisible?: boolean;
  isCartOpen?: boolean;
  isSearchOpen?: boolean;
  cartCounter?: number;
}

const Drawer: React.FC<DrawerProps> = ({
  isDrawerVisible,
  isCartOpen,
  isSearchOpen,
  cartCounter,
}) => (
  <div className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}>
    {isCartOpen && <HeaderContext headerTitle={`Sacola (${cartCounter})`} />}
    {isSearchOpen && <HeaderContext headerTitle="Buscar Produtos" />}

    <div className="drawer__content"></div>
  </div>
);

export default Drawer;
