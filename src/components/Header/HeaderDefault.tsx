import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  toogleCart,
  toogleSearch,
  toogleFilter,
} from '../../store/reducers/drawer';
import { RootState } from '../../store/rootReducer';

import Header from '.';
import SearchButton from '../SearchButton';
import CartButton from '../CartButton';
import CartCounter from '../CartCounter';
import FilterButton from '../FilterButton';

const HeaderDefault: React.FC = () => {
  const dispatch = useDispatch();

  const toogleSearchConnected = () => {
    const isSearchOpen = true;
    const isDrawerVisible = false;
    const isCartOpen = false;
    const isFilter = false;

    dispatch(
      toogleSearch({ isSearchOpen, isDrawerVisible, isCartOpen, isFilter })
    );
  };

  const toogleCartConnected = () => {
    const isSearchOpen = false;
    const isDrawerVisible = false;
    const isCartOpen = true;
    const isFilter = false;

    dispatch(
      toogleCart({ isSearchOpen, isDrawerVisible, isCartOpen, isFilter })
    );
  };

  const toogleFilterConnected = () => {
    const isSearchOpen = false;
    const isDrawerVisible = false;
    const isCartOpen = false;
    const isFilter = true;

    dispatch(
      toogleFilter({ isSearchOpen, isDrawerVisible, isCartOpen, isFilter })
    );
  };

  const counter = useSelector((state: RootState) => state.cart.count);

  return (
    <Header>
      <div className="header__default">
        <Link to="/" className="header__logo">
          Fashionista
        </Link>

        <div className="header__icons">
          <FilterButton
            className="header__icons--search"
            onClick={toogleFilterConnected}
          />

          <SearchButton
            className="header__icons--search"
            onClick={toogleSearchConnected}
          />

          <CartButton
            className="header__icons--cart"
            onClick={toogleCartConnected}
          >
            <CartCounter counter={counter} />
          </CartButton>
        </div>
      </div>
    </Header>
  );
};

export default HeaderDefault;
