import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { toogleCart, toogleSearch } from '../../store/reducers/drawer';
import { RootState } from '../../store/rootReducer';

import Header from '.';
import SearchButton from '../SearchButton';
import CartButton from '../CartButton';
import CartCounter from '../CartCounter';

const HeaderDefault: React.FC = () => {
  const dispatch = useDispatch();

  const toogleSearchConnected = () => {
    const isSearchOpen = true;
    const isDrawerVisible = false;
    const isCartOpen = false;

    dispatch(toogleSearch({ isSearchOpen, isDrawerVisible, isCartOpen }));
  };

  const toogleCartConnected = () => {
    const isSearchOpen = false;
    const isDrawerVisible = false;
    const isCartOpen = true;

    dispatch(toogleCart({ isSearchOpen, isDrawerVisible, isCartOpen }));
  };

  const counter = useSelector((state: RootState) => state.cart.count);

  return (
    <Header>
      <div className="header__default">
        <Link to="/">
          <img src="" alt="Fashionista"></img>
        </Link>

        <div className="header__icons">
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
