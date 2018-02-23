import React from 'react';
import styled from 'styled-components';
import { Heart } from 'react-feather';

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 160px;
  height: 50px;
  background: linear-gradient(to left, #da4453, #89216b);
  border: none;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  letter-spacing: 0.5px;
  font-size: 11px;
  font-weight: bold;
`;

const SmallHeart = styled(Heart)`
  width: 13px;
  height: 13px;
  padding: 0 3px;
`;

function NavFavoriteBtn() {
  return (
    <Btn>
      See Favorites <SmallHeart /> (0)
    </Btn>
  );
}

export default NavFavoriteBtn;
