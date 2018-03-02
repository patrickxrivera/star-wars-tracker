import { fadeIn, fadeInUp } from '../../../../styles/animations.js';

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
