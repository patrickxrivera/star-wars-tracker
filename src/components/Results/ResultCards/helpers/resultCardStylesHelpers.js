import colorMapping from './resultCardData';

export const getBgColorFrom = ({ selected }) => {
  const targetColor = colorMapping[selected];
  return targetColor;
};
