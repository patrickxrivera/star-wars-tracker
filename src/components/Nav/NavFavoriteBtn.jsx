import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  z-index: 100;
  width: 139px;
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

function NavFavoriteBtn() {
  return <Btn>See Favorites (0)</Btn>;
}

export default NavFavoriteBtn;
