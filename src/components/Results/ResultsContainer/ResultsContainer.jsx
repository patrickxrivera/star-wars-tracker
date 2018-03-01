import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { string } from 'prop-types';

import api from '../../../utils/api/api';
import NavBar from '../../Nav/NavBar/NavBar.jsx';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import {
  Container,
  GridContainer,
  resultsPage
} from './ResultsContainerStyles.jsx';
import ResultCard from '../ResultCards/ResultCard.jsx';
import Loading from '../Loading/Loading.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected,
      results: null,
      initialLoad: true,
      loadOnClick: true
    };

    [
      'resetloadOnClick',
      'handleClick',
      'isNewProp',
      'getResults',
      'getSelected',
      'updateResults',
      'setAnimations'
    ].forEach(propToBind => {
      this[propToBind] = this[propToBind].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.resetloadOnClick(this.state.loadOnClick);
    this.handleClick(this.props, nextProps);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  resetloadOnClick(loadOnClick) {
    this.setState({ loadOnClick: true }); // reset so load animation is rendered for each click
  }

  handleClick(currProps, nextProps) {
    if (this.isNewProp(currProps, nextProps)) {
      this.getResults(nextProps);
    } else {
      this.setState({ loadOnClick: false }); // prevent load if user clicks same category
    }
  }

  isNewProp(curr, next) {
    return curr.location.state.selected !== next.location.state.selected;
  }

  getResults(nextProps) {
    const selected = this.getSelected(nextProps);
    this.setState({ selected }, () => this.updateResults(selected));
  }

  getSelected(nextProps) {
    return nextProps.location.state.selected;
  }

  async updateResults(selected) {
    const cachedResults = localStorage.getItem(selected);

    if (cachedResults) {
      this.setState({ results: JSON.parse(cachedResults) });
    } else {
      const results = await api.getDataModelFor(selected);
      localStorage.setItem(selected, JSON.stringify(results)); // cache the API response to access future requests in constant time
      this.setState({ results });
    }

    this.setAnimations({ ...this.state });
  }

  setAnimations({ initialLoad, loadOnClick }) {
    this.setState({ initialLoad: false, loadOnClick: false });
  }

  render() {
    const { selected, results, initialLoad, loadOnClick } = this.state;

    if (initialLoad) return <Loading />;

    return (
      <div>
        <NavBar selected={selected} />
        <ThemeProvider theme={resultsPage}>
          <CategoriesContainer selected={selected} />
        </ThemeProvider>
        <Container>
          {loadOnClick && <Loading selected={selected} />}
          {!loadOnClick && (
            <GridContainer>
              {results &&
                Object.values(results).map(data => {
                  return (
                    <ResultCard
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

ResultsContainer.propTypes = {
  selected: string.isRequired
};

export default ResultsContainer;
