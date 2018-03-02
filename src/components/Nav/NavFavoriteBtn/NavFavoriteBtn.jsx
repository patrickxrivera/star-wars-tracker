import React from 'react';

import { Btn, SmallHeart } from './NavFavoriteBtnStyles.jsx';
import {
  getNumOf,
  getLocalStorageFor
} from '../../Results/ResultsContainer/helpers/resultsContainerHelpers';
import { StyledLink } from './NavFavoriteBtnStyles.jsx';

const NavFavoriteBtn = ({ selected }) => {
  const numOfFavorites = getNumOf('favorites');
  const cachedResults = getLocalStorageFor(selected);

  return (
    <Btn type={selected}>
      <StyledLink
        to={{
          pathname: '/results',
          state: { cachedResults, selected: 'favorites' }
        }}
      >
        See Favorites <SmallHeart /> ({numOfFavorites})
      </StyledLink>
    </Btn>
  );
};

export default NavFavoriteBtn;
