import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtnStyles.jsx';
import {
  getNumOf,
  getLocalStorageFor
} from '../../Results/ResultsContainer/helpers/resultsContainerHelpers';
import { StyledLink } from './NavFavoriteBtnStyles.jsx';

const NavFavoriteBtn = ({ selected }) => {
  const numOfFavorites = getNumOf('Favorites');
  const cachedResults = getLocalStorageFor('Favorites');

  return (
    <Btn type={selected}>
      <StyledLink
        to={{
          pathname: '/results/favorites',
          state: { cachedResults, selected: 'Favorites' }
        }}
      >
        See Favorites <SmallHeart /> ({numOfFavorites})
      </StyledLink>
    </Btn>
  );
};

export default NavFavoriteBtn;
