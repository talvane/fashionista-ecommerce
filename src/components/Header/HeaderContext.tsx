import React, { MouseEvent } from 'react';

import Header from '.';
import BackButton from '../BackButton';

interface HeaderContextProps {
  dismissDrawerConnected?: (event: MouseEvent<HTMLButtonElement>) => void;
  headerTitle: string;
}

const HeaderContext: React.FC<HeaderContextProps> = ({
  dismissDrawerConnected,
  headerTitle,
}) => (
  <Header>
    <div className="header__context">
      <div className="header__icons">
        <BackButton
          className="header__icons--back"
          onClick={dismissDrawerConnected}
        />
      </div>

      <div className="header__title">{headerTitle}</div>
    </div>
  </Header>
);

export default HeaderContext;
