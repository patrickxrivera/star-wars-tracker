import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Nav from '../Nav/Nav.jsx';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    background-color: #4d4566;
    color: #fff;
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
