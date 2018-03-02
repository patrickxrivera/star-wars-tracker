import React from 'react';

import getRouteFrom from './helpers/categoriesContainerHelpers';
import iconData from './CategoriesContainerData.jsx';
import Category from '../Category/Category.jsx';
import { Container, StyledLink } from './CategoriesContainerStyles.jsx';

const CategoriesContainer = ({ selected }) => (
  <Container>
    {Object.values(iconData).map(({ categoryName, color, Icon }) => {
      const props = { selected, categoryName, color, Icon };
      const route = getRouteFrom(categoryName);

      return (
        <StyledLink
          to={{
            pathname: `/results/${route}`,
            state: { selected: categoryName }
          }}
          key={categoryName}
        >
          <Category {...props} />
        </StyledLink>
      );
    })}
  </Container>
);

export default CategoriesContainer;
