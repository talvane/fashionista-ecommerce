import React from 'react';
import { useSelector } from 'react-redux';

import HeaderContext from '../Header/HeaderContext';
//import Cart from '';
import Search from '../Search';

import { RootState } from '../../store/rootReducer';

import './styles.scss';

interface DrawerProps {
  cartCounter?: number;
}

const Drawer: React.FC<DrawerProps> = ({ cartCounter }) => {
  const { isDrawerVisible, isCartOpen, isSearchOpen } = useSelector(
    (state: RootState) => state.drawer
  );

  return (
    <div className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}>
      {isCartOpen && <HeaderContext headerTitle={`Sacola (${cartCounter})`} />}
      {isSearchOpen && <HeaderContext headerTitle="Buscar Produtos" />}

      <div className="drawer__content">
        {/*isCartOpen && <Cart />*/}
        {isSearchOpen && <Search />}
      </div>
    </div>
  );
};

export default Drawer;
