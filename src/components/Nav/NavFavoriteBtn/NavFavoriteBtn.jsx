import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtnStyles.jsx';

const NavFavoriteBtn = ({ selected, numOfFavorites }) => (
  <Btn type={selected}>
    See Favorites <SmallHeart /> ({numOfFavorites})
  </Btn>
);

export default NavFavoriteBtn;
