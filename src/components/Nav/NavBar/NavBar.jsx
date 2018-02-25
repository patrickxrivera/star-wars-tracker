import React, { Component } from 'react';

import { Banner, Container } from './NavBar.styles.jsx';
import StoryBtn from '../StoryBtn/StoryBtn.jsx';
import Title from '../Title/Title.jsx';
import NavFavoriteBtn from '../NavFavoriteBtn/NavFavoriteBtn.jsx';

const NavBar = () => (
  <Banner>
    <Container>
      <Title />
      <NavFavoriteBtn />
    </Container>
  </Banner>
);

export default NavBar;
