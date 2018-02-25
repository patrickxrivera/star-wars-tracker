import React, { Component } from 'react';
import Container from './CategoriesContainerStyles.jsx';
import icons from './CategoriesContainerData.jsx';

import Category from '../Category/Category.jsx';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    [
      'handleClick',
      'getJSXForCategories',
      'getIconDataFrom',
      'createJSXFrom'
    ].forEach((propToBind) => {
      this[propToBind] = this[propToBind].bind(this);
    });
  }

  handleClick(categoryName) {
    console.log(categoryName);
  }

  getJSXForCategories() {
    const categoriesJSX = Object.keys(icons).map((categoryName) => {
      const iconData = this.getIconDataFrom(icons, categoryName);
      const categoryJSX = this.createJSXFrom(iconData);
      return categoryJSX;
    });

    return categoriesJSX;
  }

  getIconDataFrom(icons, categoryName) {
    const [color, Icon] = [
      icons[categoryName].color,
      icons[categoryName].iconName
    ];
    return { color, Icon, categoryName };
  }

  createJSXFrom({ color, Icon, categoryName }) {
    return (
      <Category
        onClick={this.handleClick}
        key={categoryName}
        color={color}
        Icon={Icon}
        categoryName={categoryName}
      />
    );
  }

  render() {
    const categoriesJSX = this.getJSXForCategories();

    return <Container>{categoriesJSX}</Container>;
  }
}

export default CategoriesContainer;
