import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtn.styles.jsx';

const NavFavoriteBtn = () => {
  return (
    <Btn>
      See Favorites <SmallHeart /> (0)
    </Btn>
  );
};

export default NavFavoriteBtn;
