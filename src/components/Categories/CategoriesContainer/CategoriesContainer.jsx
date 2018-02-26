import React, { Component } from 'react';

import iconData from './CategoriesContainerData.jsx';
import Category from '../Category/Category.jsx';
import { Container, StyledLink } from './CategoriesContainerStyles.jsx';
import ResultsContainer from '../../Results/ResultsContainer/ResultsContainer.jsx';

const categories = Object.values(iconData).map(
  ({ categoryName, color, Icon }) => {
    return (
      <StyledLink
        to={{
          pathname: '/results',
          state: { selected: categoryName }
        }}
      >
        <Category
          categoryName={categoryName}
          color={color}
          Icon={Icon}
          key={categoryName}
        />
      </StyledLink>
    );
  }
);

const CategoriesContainer = () => (
  <div>
    <Container>{categories}</Container>
  </div>
);

export default CategoriesContainer;
