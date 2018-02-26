import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import { Container, theme } from './ResultsContainerStyles.jsx';
import ResultsCardContainer from '../ResultsCardContainer/ResultsCardContainer.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CategoriesContainer />
        </ThemeProvider>
        <Container>
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
          <ResultsCardContainer />
        </Container>
      </div>
    );
  }
}

export default ResultsContainer;
