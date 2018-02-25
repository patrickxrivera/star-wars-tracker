import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            categoryName={categoryName}
            color={color}
            Icon={Icon}
            handleClick={this.handleClick}
            key={categoryName}
          />
        );
      }
    );

    return (
      <div>
        <Container>{categories}</Container>
        {!!selected && <Link to={{ pathname: `results` }} />};
      </div>
    );
  }
}

export default CategoriesContainer;
