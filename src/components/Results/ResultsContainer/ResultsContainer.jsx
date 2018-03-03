import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { string } from 'prop-types';

import api from '../../../utils/api/api';
import NavBar from '../../Nav/NavBar/NavBar.jsx';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import ResultCard from '../ResultCard/ResultCard.jsx';
import Loading from '../Loading/Loading.jsx';
import NoFavorites from '../NoFavorites/NoFavorites.jsx';
import {
  isNewProp,
  userClickedFavorites,
  getNumOf,
  getLocalStorageFor,
  setLocalStorageFor,
  toggleClickedItem,
  updateCachedFavorites,
  shouldRenderFavoritesMsg
} from './helpers/resultsContainerHelpers';
import {
  Container,
  GridContainer,
  resultsPage
} from './ResultsContainerStyles.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    const { selected } = this.props.location.state;

    this.state = {
      selected: selected,
      results: null,
      initialLoad: true,
      loadOnClick: true,
      favorites: [],
      numOfFavorites: null
    };

    [
      'resetloadAnimation',
      'handleInitialClick',
      'determineResults',
      'getResults',
      'updateResults',
      'initAnimations',
      'handleFavoriteClick'
    ].forEach(propToBind => {
      this[propToBind] = this[propToBind].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.resetloadAnimation(this.state.loadOnClick);
    this.handleInitialClick(this.props, nextProps);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  resetloadAnimation(loadOnClick) {
    this.setState({ loadOnClick: true });
  }

  handleInitialClick(...args) {
    if (isNewProp(...args)) {
      this.determineResults(...args);
    } else {
      this.setState({ loadOnClick: false });
    }
  }

  determineResults(...args) {
    const [currProps, nextProps] = args;
    const { selected, cachedResults } = nextProps.location.state;

    if (userClickedFavorites(selected)) {
      this.setState({ results: cachedResults });
    } else {
      this.getResults(selected);
    }
  }

  getResults(selected) {
    this.setState({ selected }, () => this.updateResults(selected));
  }

  async updateResults(selected) {
    const cachedResults = getLocalStorageFor(selected);

    if (cachedResults) {
      this.setState({ results: cachedResults });
    } else {
      const results = await api.getDataModelFor(selected);
      setLocalStorageFor(selected, results);
      this.setState({ results });
    }

    this.initAnimations({ ...this.state });
  }

  initAnimations({ initialLoad, loadOnClick }) {
    this.setState({ initialLoad: false, loadOnClick: false });
  }

  handleFavoriteClick(...args) {
    const clickedItem = toggleClickedItem(...args);
    const cachedFavorites = updateCachedFavorites(clickedItem);
    const newResults = getLocalStorageFor(this.state.selected);

    this.setState({
      favorites: cachedFavorites,
      numOfFavorites: cachedFavorites.length,
      results: newResults
    });
  }

  render() {
    const {
      initialLoad,
      favorites,
      selected,
      results,
      loadOnClick
    } = this.state;

    const renderFavoritesMsg = shouldRenderFavoritesMsg(selected);

    if (initialLoad) return <Loading />;

    return (
      <div>
        <NavBar selected={selected} />
        <ThemeProvider theme={resultsPage}>
          <CategoriesContainer selected={selected} />
        </ThemeProvider>
        <Container>
          {loadOnClick && <Loading selected={selected} />}
          {renderFavoritesMsg && <NoFavorites />}
          {!loadOnClick && (
            <GridContainer>
              {results &&
                Object.values(results).map((data, idx) => {
                  return (
                    <ResultCard
                      key={data.Name}
                      data={data}
                      idx={idx}
                      handleClick={this.handleFavoriteClick}
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
  selected: string
};

export default ResultsContainer;
