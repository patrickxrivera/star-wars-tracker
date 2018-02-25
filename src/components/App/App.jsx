import React, { Component } from 'react';
import AppStyles from './AppStyles.jsx'; // global style that applies on import

import NavBar from '../Nav/NavBar/NavBar.jsx';
import Home from '../Home/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
