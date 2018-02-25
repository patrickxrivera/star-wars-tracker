import React from 'react';
import icons from '../CategoriesContainerData.jsx';

import Category from '../../Category/Category.jsx';

const getJSX = (handleClick) => {
  const categoriesJSX = Object.keys(icons).map((categoryName) => {
    const iconData = getIconDataFrom(icons, categoryName, handleClick);
    const categoryJSX = createJSXFrom(iconData);
    return categoryJSX;
  });

  return categoriesJSX;
};

const getIconDataFrom = (icons, categoryName, handleClick) => {
  const [color, Icon] = [
    icons[categoryName].color,
    icons[categoryName].iconName
  ];
  return { color, Icon, categoryName, handleClick };
};

const createJSXFrom = ({ color, Icon, categoryName, handleClick }) => {
  return (
    <Category
      onClick={handleClick}
      key={categoryName}
      color={color}
      Icon={Icon}
      categoryName={categoryName}
    />
  );
};

export default getJSX;
