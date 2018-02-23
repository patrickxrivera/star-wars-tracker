import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import

injectGlobal`
  @font-face {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    color: #fff;
  }

  body {
    background-color: #4d4566;
  }
`;

function App() {
  return (
    <div>
      <Nav />
      {/* <Home /> */}
    </div>
  );
}

export default App;
