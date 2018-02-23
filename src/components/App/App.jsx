import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    background-color: #303050;
    color: #fff;
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
