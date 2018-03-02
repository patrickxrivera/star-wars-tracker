import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { string } from 'prop-types';

import api from '../../../utils/api/api';
import NavBar from '../../Nav/NavBar/NavBar.jsx';
import CategoriesContainer from '../../Categories/CategoriesContainer/CategoriesContainer.jsx';
import ResultCard from '../ResultCard/ResultCard.jsx';
import Loading from '../Loading/Loading.jsx';
import {
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
      'getNumOfFavorites',
      'resetloadOnClick',
      'handleInitialClick',
      'isNewProp',
      'getResults',
      'getSelected',
      'updateResults',
      'setAnimations',
      'handleFavoriteClick'
    ].forEach(propToBind => {
      this[propToBind] = this[propToBind].bind(this);
    });
  }

  componentWillMount() {
    this.getNumOfFavorites();
  }

  componentWillReceiveProps(nextProps) {
    this.resetloadOnClick(this.state.loadOnClick);
    this.handleInitialClick(this.props, nextProps);
  }

  componentDidMount() {
    this.updateResults(this.state.selected);
  }

  getNumOfFavorites() {
    const numOfFavorites = getNumOf('Favorites');
    this.setState({ numOfFavorites });
  }

  resetloadOnClick(loadOnClick) {
    this.setState({ loadOnClick: true }); // reset so load animation is rendered for each click
  }

  handleInitialClick(currProps, nextProps) {
    if (this.isNewProp(currProps, nextProps)) {
      if (nextProps.location.state.selected === 'Favorites') {
        this.setState({ results: nextProps.location.state.cachedResults });
      }
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
    const cachedResults = getLocalStorageFor(selected);

    if (cachedResults) {
      this.setState({ results: cachedResults });
    } else {
      const results = await api.getDataModelFor(selected);
      setLocalStorageFor(selected, results); // cache the API response to access future requests in constant time
      this.setState({ results });
    }

    this.setAnimations({ ...this.state });
  }

  setAnimations({ initialLoad, loadOnClick }) {
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
