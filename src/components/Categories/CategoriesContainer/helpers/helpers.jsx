import React from 'react';
import icons from '../CategoriesContainerData.jsx';

import Category from '../../Category/Category.jsx';

const getJSX = () => {
  const categoriesJSX = Object.keys(icons).map((categoryName) => {
    const iconData = getIconDataFrom(icons, categoryName);
    const categoryJSX = createJSXFrom(iconData);
    return categoryJSX;
  });

  return categoriesJSX;
};

const getIconDataFrom = (icons, categoryName) => {
  const [color, Icon] = [
    icons[categoryName].color,
    icons[categoryName].iconName
  ];
  return { color, Icon, categoryName };
};

const createJSXFrom = ({ color, Icon, categoryName }) => {
  return (
    <Category
      onClick={this.handleClick}
      key={categoryName}
      color={color}
      Icon={Icon}
      categoryName={categoryName}
    />
  );
};

export default getJSX;
