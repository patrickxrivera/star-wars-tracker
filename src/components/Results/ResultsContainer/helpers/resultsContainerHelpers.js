import { fadeIn, fadeInUp } from '../../../../styles/animations.js';

export const getAnimationFrom = ({ fadeUp }) => {
  return fadeUp
    ? `1100ms ${fadeInUp} 1300ms forwards`
    : `1200ms ${fadeIn} 600ms forwards`;
};

export const getNumOf = () => {
  const allFavorites = JSON.parse(localStorage.getItem('favorites'));
  return allFavorites.length;
};

export const getLocalStorageFor = key => JSON.parse(localStorage.getItem(key));

export const setLocalStorageFor = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
