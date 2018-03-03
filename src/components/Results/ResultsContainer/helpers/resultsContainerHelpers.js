import { fadeIn, fadeInUp } from '../../../../styles/animations.js';

export const isNewProp = (curr, next) =>
  curr.location.state.selected !== next.location.state.selected;

export const userClickedFavorites = selected => selected === 'Favorite';

export const getAnimationFrom = ({ fadeUp }) => {
  return fadeUp
    ? `1100ms ${fadeInUp} 1300ms forwards`
    : `1200ms ${fadeIn} 600ms forwards`;
};

export const getNumOf = key => {
  const list = JSON.parse(localStorage.getItem(key));
  return list ? list.length : 0;
};

export const getLocalStorageFor = key => JSON.parse(localStorage.getItem(key));

export const setLocalStorageFor = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const toggleClickedItem = (type, targetName) => {
  const selectedList = getLocalStorageFor(type);
  let clicked;

  Object.values(selectedList).some(({ Name }, idx) => {
    if (Name === targetName) {
      clicked = selectedList[idx];
    }
  });

  clicked.Favorited = !clicked.Favorited;

  setLocalStorageFor(type, selectedList);

  return clicked;
};

export const updateCachedFavorites = clicked => {
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

  return cachedFavorites;
};

export const shouldRenderFavoritesMsg = selected =>
  _favoritesIsEmpty() && _favoritesIsSelected();

const _favoritesIsEmpty = () => getNumOf('Favorites') === 0;

const _favoritesIsSelected = selected => selected === 'Favorites';
