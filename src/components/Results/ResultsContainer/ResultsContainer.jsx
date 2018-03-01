import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import api from '../../../utils/api/api';
import NavBar from '../../Nav/NavBar/NavBar.jsx';
import getTargetCard from '../ResultCards/helpers/resultCardHelpers';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import {
  Container,
  GridContainer,
  resultsPage
} from './ResultsContainerStyles.jsx';
import Loading from '../Loading/Loading.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected,
      results: null,
      initialLoad: true, // TODO better name for loads
      clickLoad: true
    };

    this.resetClickLoad = this.resetClickLoad.bind(this);
    this.getResults = this.getResults.bind(this); // TODO better name
    this.isNewProp = this.isNewProp.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.setAnimations = this.setAnimations.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.resetClickLoad(this.state.clickLoad);
    this.getResults(this.props, nextProps);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  resetClickLoad(clickLoad) {
    this.setState({ clickLoad: true });
  }

  getResults(currProps, nextProps) {
    if (this.isNewProp(currProps, nextProps)) {
      const selected = nextProps.location.state.selected;
      this.setState({ selected }, () => this.updateResults(selected));
    } else {
      this.setState({ clickLoad: false }); // prevent loading animation if user clicks same category
    }
  }

  isNewProp(curr, next) {
    return curr.location.state.selected !== next.location.state.selected;
  }

  async updateResults(selected) {
    const results = await api.getDataModelFor(selected);
    this.setState({ results }, this.setAnimations({ ...this.state }));
  }

  setAnimations({ initialLoad, clickLoad, fadeUp }) {
    this.setState({ initialLoad: false, clickLoad: false });
  }

  render() {
    const selected = this.state.selected;
    const results = this.state.results;
    const initialLoad = this.state.initialLoad;
    const clickLoad = this.state.clickLoad;
    const TargetCard = getTargetCard(selected);

    if (initialLoad) return <Loading />;

    return (
      <div>
        <NavBar selected={selected} />
        <ThemeProvider theme={resultsPage}>
          <CategoriesContainer selected={selected} />
        </ThemeProvider>
        <Container>
          {clickLoad && <Loading />}
          {!clickLoad && (
            <GridContainer>
              {results &&
                Object.values(results).map(data => {
                  return (
                    <TargetCard
                      key={data.Name}
                      data={data}
                      selected={selected}
                    />
                  );
                })}
            </GridContainer>
          )}
        </Container>
      </div>
    );
  }
}

export default ResultsContainer;
