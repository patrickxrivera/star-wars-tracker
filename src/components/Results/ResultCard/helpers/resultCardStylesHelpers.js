import colorMapping from './resultCardData';

export const getBgColorFrom = ({ type }) => {
  const targetColor = colorMapping[type];
  return targetColor;
};
