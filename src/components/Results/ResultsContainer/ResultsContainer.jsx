import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { string } from 'prop-types';

import api from '../../../utils/api/api';
import NavBar from '../../Nav/NavBar/NavBar.jsx';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import ResultCard from '../ResultCard/ResultCard.jsx';
import Loading from '../Loading/Loading.jsx';
// import NoFavorites from '../NoFavorites/NoFavorites.jsx';
import {
  isNewProp,
  clickedFavorites,
  getNumOf,
  getLocalStorageFor,
  setLocalStorageFor
} from './helpers/resultsContainerHelpers';
import {
  Container,
  GridContainer,
  resultsPage
} from './ResultsContainerStyles.jsx';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.location.state.selected,
      results: null,
      initialLoad: true,
      loadOnClick: true,
      favorites: [],
      numOfFavorites: null
    };

    [
      'resetloadOnClick',
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
    this.resetloadOnClick(this.state.loadOnClick);
    this.handleInitialClick(this.props, nextProps);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  resetloadOnClick(loadOnClick) {
    this.setState({ loadOnClick: true }); // reset so load animation is rendered for each click
  }

  handleInitialClick(currProps, nextProps) {
    if (isNewProp(currProps, nextProps)) {
      this.determineResults(nextProps);
    } else {
      this.setState({ loadOnClick: false }); // prevent load if user clicks same category
    }
  }

  determineResults(nextProps) {
    const { selected, cachedResults } = nextProps.location.state;

    if (clickedFavorites(selected)) {
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
      setLocalStorageFor(selected, results); // cache the API response to access future requests in constant time
      this.setState({ results });
    }

    this.initAnimations({ ...this.state });
  }

  initAnimations({ initialLoad, loadOnClick }) {
    this.setState({ initialLoad: false, loadOnClick: false });
  }

  handleFavoriteClick(type, targetName) {
    const selectedList = getLocalStorageFor(type);
    let clicked;

    Object.values(selectedList).some(({ Name }, idx) => {
      if (Name === targetName) {
        clicked = selectedList[idx];
      }
    });

    clicked.Favorited = !clicked.Favorited;
    setLocalStorageFor(type, selectedList);

    let cachedFavorites = getLocalStorageFor('Favorites');

    if (!cachedFavorites) {
      const initialValue = [];
      setLocalStorageFor('Favorites', initialValue);
      cachedFavorites = getLocalStorageFor('Favorites');
    }

    const removedFavorite = cachedFavorites.some((entry, idx) => {
      if (entry.Name === clicked.Name) {
        const removeThisMany = 1;
        cachedFavorites.splice(idx, removeThisMany);
        return true;
      }
    });

    if (!removedFavorite) {
      cachedFavorites.push(clicked);
    }

    setLocalStorageFor('Favorites', cachedFavorites);
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

    const noFavorites = getLocalStorageFor('Favorites') === null;

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
