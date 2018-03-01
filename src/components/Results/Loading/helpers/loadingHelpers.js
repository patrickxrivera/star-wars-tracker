import colorMapping from '../../ResultCard/helpers/resultCardData';

const getColorFrom = selected => {
  const defaultPrettyColor = '#0984e3';
  return colorMapping[selected] || defaultPrettyColor;
};

export default getColorFrom;
