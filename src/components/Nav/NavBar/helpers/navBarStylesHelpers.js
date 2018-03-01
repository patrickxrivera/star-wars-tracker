import { fadeIn } from '../../../../styles/animations.js';

export const getAnimationFrom = ({ selected }) => {
  return selected
    ? `900ms ${fadeIn} 300ms forwards`
    : `1500ms ${fadeIn} 700ms forwards`;
};
