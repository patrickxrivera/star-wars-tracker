import colorMapping from './resultCardData';
import { fadeIn, fadeInUp } from '../../../../styles/animations.js';

export const getBgColorFrom = ({ selected }) => {
  const targetColor = colorMapping[selected];
  return targetColor;
};
