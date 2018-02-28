import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtnStyles.jsx';

const NavFavoriteBtn = ({ selected }) => (
  <Btn selected={selected}>
    See Favorites<SmallHeart /> (0)
  </Btn>
);

export default NavFavoriteBtn;
