import React, { Component } from 'react';
import Container from './CategoriesContainerStyles.jsx';
import getJSX from './helpers/helpers.jsx';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(categoryName) {}

  render() {
    const categoriesJSX = getJSX();
    return <Container>{categoriesJSX}</Container>;
  }
}

export default CategoriesContainer;
