import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import NavBar from '../Nav/NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    color: #52565F;
    margin-top: 1rem;
  }
`;

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
