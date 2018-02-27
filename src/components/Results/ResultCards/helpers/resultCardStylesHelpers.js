import colorMapping from './resultCardData';

export const getBgColorFrom = ({ selected }) => {
  return colorMapping[selected];
};
