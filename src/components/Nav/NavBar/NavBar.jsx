import React from 'react';

import { Banner, Container } from './NavBarStyles.jsx';
import Title from '../Title/Title.jsx';
import NavFavoriteBtn from '../NavFavoriteBtn/NavFavoriteBtn.jsx';

const NavBar = props => (
  <Banner selected={props.selected}>
    <Container>
      <Title />
      <NavFavoriteBtn {...props} />
    </Container>
  </Banner>
);

export default NavBar;
