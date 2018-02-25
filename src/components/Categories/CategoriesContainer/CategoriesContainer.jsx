import React, { Component } from 'react';

import iconData from './CategoriesContainerData.jsx';
import Category from '../Category/Category.jsx';
import Container from './CategoriesContainerStyles.jsx';
import ResultsContainer from '../../Results/ResultsContainer/ResultsContainer.jsx';

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedCategory) {
    this.setState(() => {
      return { selected: selectedCategory };
    });
  }

  render() {
    const selected = this.state.selected;

    const categories = Object.values(iconData).map(
      ({ categoryName, color, Icon }) => {
        return (
          <Category
            handleClick={this.handleClick}
            key={categoryName}
            color={color}
            Icon={Icon}
            categoryName={categoryName}
          />
        );
      }
    );

    return (
      <div>
        <Container>{categories}</Container>
        {!!selected && <ResultsContainer selected={selected} />};
      </div>
    );
  }
}

export default CategoriesContainer;
