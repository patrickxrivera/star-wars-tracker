import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import api from '../../../utils/api';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import { Container, GridContainer, theme } from './ResultsContainerStyles.jsx';
import ResultsCardContainer from '../ResultsCardContainer/ResultsCardContainer.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected,
      results: null
    };

    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  async updateResults(selected) {
    const response = await api.getDataModelFor(selected);
    console.log(response);
  }

  render() {
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
