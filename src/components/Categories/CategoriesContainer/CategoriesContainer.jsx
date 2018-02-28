import React from 'react';

import iconData from './CategoriesContainerData.jsx';
import Category from '../Category/Category.jsx';
import { Container, StyledLink } from './CategoriesContainerStyles.jsx';

const CategoriesContainer = ({ selected }) => (
  <Container>
    {Object.values(iconData).map(({ categoryName, color, Icon }) => {
      const props = { selected, categoryName, color, Icon };

      return (
        <StyledLink
          to={{
            pathname: '/results',
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
