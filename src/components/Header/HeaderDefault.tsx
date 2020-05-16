import React from 'react';

import Header from '.';
import SearchButton from '../SearchButton';
import CartButton from '../CartButton';
import CartCounter from '../CartCounter';

const HeaderDefault: React.FC = () => {
  return (
    <Header>
      <div className="header__default">
        <a href="">
          <img src="" alt="Fashionista"></img>
        </a>

        <div className="header__icons">
          <SearchButton className="header__icons--search" />
          <CartButton className="header__icons--cart">
            <CartCounter counter={0} />
          </CartButton>
        </div>
      </div>
    </Header>
  );
};

export default HeaderDefault;
