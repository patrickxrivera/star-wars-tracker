import { fadeIn, fadeInUp } from '../../../../styles/animations.js';

export const getAnimationFrom = ({ fadeUp }) => {
  return fadeUp ? `1100ms ${fadeInUp} 1300ms forwards` : `1200ms ${fadeIn} 600ms forwards`;
};
