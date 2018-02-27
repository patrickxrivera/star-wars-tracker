export const getBorderBottomFrom = ({ selected, categoryName, color }) => {
  return isSelected(selected, categoryName) ? `2px solid ${color}` : 'none';
};

export const getOpacityFrom = ({ selected, categoryName }) => {
  return isUndefined(selected) || isSelected(selected, categoryName) ? '1' : '0.4';
};

export const getHoverOpacityFrom = ({ selected }) => {
  return isUndefined(selected) ? '0.6' : '1';
};

const isSelected = (selected, categoryName) => {
  return selected === categoryName;
};

const isUndefined = (selected) => {
  return selected === undefined;
};
