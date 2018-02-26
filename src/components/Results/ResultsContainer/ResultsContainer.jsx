import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import { Container, GridContainer, theme } from './ResultsContainerStyles.jsx';
import ResultsCardContainer from '../ResultsCardContainer/ResultsCardContainer.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected
    };
  }

  render() {
    console.log(this.state.selected);
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CategoriesContainer />
        </ThemeProvider>
        <Container>
          <GridContainer>
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
            <ResultsCardContainer />
          </GridContainer>
        </Container>
      </div>
    );
  }
}

export default ResultsContainer;
