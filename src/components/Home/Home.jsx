import React from 'react';
import { Container, Title, Subscript } from './HomeStyles.jsx';

import CategoriesContainer from '../Categories/CategoriesContainer/CategoriesContainer.jsx';

const Home = () => (
  <Container>
    <Title>Select a category</Title>
    <Subscript>
      Detailed information on your favorite Star Wars characters.
    </Subscript>
    <CategoriesContainer />
  </Container>
);

export default Home;
