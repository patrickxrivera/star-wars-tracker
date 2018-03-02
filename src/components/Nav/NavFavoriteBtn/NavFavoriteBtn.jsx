import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtnStyles.jsx';
import { getNumOf } from '../../Results/ResultsContainer/helpers/resultsContainerHelpers';

const NavFavoriteBtn = ({ selected }) => {
  const numOfFavorites = getNumOf('favorites');
  return (
    <Btn type={selected}>
      See Favorites <SmallHeart /> ({numOfFavorites})
    </Btn>
  );
};

export default NavFavoriteBtn;
