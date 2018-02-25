import React from 'react';
import { Container, Title, Subscript, Category } from './Home.styles.jsx';

import CategoriesContainer from '../../Categories/CategoriesContainer.jsx';

const Home = () => {
  return (
    <Container>
      <Title>Select a category</Title>
      <Subscript>
        Detailed information on your favorite Star Wars characters.
      </Subscript>
      <CategoriesContainer />
    </Container>
  );
};

export default Home;
