import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import api from '../../../utils/api/api';
import getTargetCard from '../ResultCards/helpers/resultCardHelpers';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import { Container, GridContainer, theme } from './ResultsContainerStyles.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected,
      results: null
    };

    this.updateResults = this.updateResults.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ selected: nextProps.location.state.selected }, () =>
        this.updateResults(this.state.selected)
      );
    }
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  async updateResults(selected) {
    const results = await api.getDataModelFor(selected);
    this.setState({ results });
  }

  render() {
    const selected = this.state.selected;
    const TargetCard = getTargetCard(selected);
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
                return <TargetCard key={data.Name} data={data} />;
              })}
          </GridContainer>
        </Container>
      </div>
    );
  }
}

export default ResultsContainer;
