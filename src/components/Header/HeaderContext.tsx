import React from 'react';
import { useDispatch } from 'react-redux';

import Header from '.';
import BackButton from '../BackButton';

import { dismissDrawerThunk } from '../../store/reducers/thunks';

interface HeaderContextProps {
  headerTitle: string;
}

const HeaderContext: React.FC<HeaderContextProps> = ({ headerTitle }) => {
  const dispatch = useDispatch();

  const dismissDrawerConnected = (e: any) => {
    dispatch(dismissDrawerThunk());
  };

  return (
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
};

export default HeaderContext;
