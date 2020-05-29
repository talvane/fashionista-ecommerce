import React from 'react';
import { useSelector } from 'react-redux';

import HeaderContext from '../Header/HeaderContext';
import Cart from '../Cart';
import Search from '../Search';
import Filter from '../Filter';

import { RootState } from '../../store/rootReducer';

import './styles.scss';

const Drawer: React.FC = () => {
  const { isDrawerVisible, isCartOpen, isSearchOpen, isFilter } = useSelector(
    (state: RootState) => state.drawer
  );

  const cartCounter = useSelector((state: RootState) => state.cart.count);

  return (
    <div className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}>
      {isCartOpen && <HeaderContext headerTitle={`Sacola (${cartCounter})`} />}
      {isSearchOpen && <HeaderContext headerTitle="Buscar Produtos" />}
      {isFilter && <HeaderContext headerTitle="Filtrar Grupos" />}

      <div className="drawer__content">
        {isCartOpen && <Cart />}
        {isSearchOpen && <Search />}
        {isFilter && <Filter />}
      </div>
    </div>
  );
};

export default Drawer;
