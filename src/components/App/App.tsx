import React from 'react';

import Drawer from '../Drawer';

import './styles.scss';

interface AppPros {
  isDrawerVisible?: boolean;
}

const App: React.FC<AppPros> = ({ children, isDrawerVisible }) => (
  <div className={`app ${isDrawerVisible ? 'app--is-drawer-visible' : ''}`}>
    {children}
    <Drawer />
  </div>
);

export default App;
