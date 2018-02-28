import React from 'react';
import { Container, Title, Subscript } from './HomeStyles.jsx';

import CategoriesContainer from '../Categories/CategoriesContainer/CategoriesContainer.jsx';
import NavBar from '../Nav/NavBar/NavBar.jsx';

const Home = () => (
  <div>
    <NavBar />
    <Container>
      <Title>Select a category</Title>
      <Subscript>Detailed information on your favorite Star Wars characters.</Subscript>
      <CategoriesContainer />
    </Container>
  </div>
);

export default Home;
