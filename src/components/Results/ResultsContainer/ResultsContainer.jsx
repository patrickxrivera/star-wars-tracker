import React, { Component } from 'react';

import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import Container from './ResultsContainerStyles.jsx';
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
        <CategoriesContainer />
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
