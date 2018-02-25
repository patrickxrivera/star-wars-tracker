import React, { Component } from 'react';
import Container from './CategoriesContainerStyles.jsx';
import getJSX from './helpers/helpers.jsx';

import ResultsContainer from '../../Results/ResultsContainer/ResultsContainer.jsx';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedCategory) {
    this.setState(() => {
      return { selected: selectedCategory };
    });
  }

  render() {
    const selected = this.state.selected;
    const categoriesJSX = getJSX(this.handleClick);
    console.log(selected);

    return (
      <div>
        <Container>{categoriesJSX}</Container>
        {!!selected && <ResultsContainer selected={selected} />};
      </div>
    );
  }
}

export default CategoriesContainer;
