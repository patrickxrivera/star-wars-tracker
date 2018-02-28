import React from 'react';

import { Banner, Container } from './NavBarStyles.jsx';
import Title from '../Title/Title.jsx';
import NavFavoriteBtn from '../NavFavoriteBtn/NavFavoriteBtn.jsx';

const NavBar = ({ selected }) => (
  <Banner>
    <Container>
      <Title />
      <NavFavoriteBtn selected={selected} />
    </Container>
  </Banner>
);

export default NavBar;
