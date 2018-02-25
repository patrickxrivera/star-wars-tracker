import React from 'react';
import AppStyles from './AppStyles.jsx'; // global styles that apply on import

import NavBar from '../Nav/NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';

const App = () => (
  <div>
    <NavBar />
    <Home />
  </div>
);

export default App;
