import React from 'react';

import './styles.scss';

const Header: React.FC = ({ children, ...rest }) => {
  return (
    <header className="header">
      <div className="app__container" {...rest}>
        {children}
      </div>
    </header>
  );
};

export default Header;
