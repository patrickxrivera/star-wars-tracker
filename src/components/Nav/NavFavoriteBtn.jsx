import React from 'react';
import styled from 'styled-components';
import { Heart } from 'react-feather';

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 145px;
  height: 44px;
  background: #3e70ff;
  border: none;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  color: #fff;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const SmallHeart = styled(Heart)`
  width: 13px;
  height: 13px;
  padding: 0 4px;
`;

function NavFavoriteBtn() {
  return (
    <Btn>
      See Favorites <SmallHeart /> (0)
    </Btn>
  );
}

export default NavFavoriteBtn;
