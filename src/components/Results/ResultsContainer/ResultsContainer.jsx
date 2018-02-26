import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import api from '../../../utils/api/api';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import { Container, GridContainer, theme } from './ResultsContainerStyles.jsx';
import PeopleCard from '../ResultCards/PeopleCard.jsx';

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
    const results = await api.getDataModelFor(selected);

    this.setState(() => {
      return { results };
    });
  }

  render() {
    const results = this.state.results;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <CategoriesContainer />
        </ThemeProvider>
        <Container>
          <GridContainer>
            {results &&
              Object.values(results).map((data) => {
                return <PeopleCard key={data.Name} data={data} />;
              })}
          </GridContainer>
        </Container>
      </div>
    );
  }
}

export default ResultsContainer;
