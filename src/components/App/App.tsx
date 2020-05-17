import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';

import Drawer from '../Drawer';

import './styles.scss';

const App: React.FC = ({ children }) => {
  const { isDrawerVisible } = useSelector((state: RootState) => state.drawer);

  return (
    <div className={`app ${isDrawerVisible ? 'app--is-drawer-visible' : ''}`}>
      {children}
      <Drawer />
    </div>
  );
};

export default App;
