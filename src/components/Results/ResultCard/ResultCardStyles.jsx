import styled from 'styled-components';

import { Heart } from 'react-feather';
import { getBgColorFrom } from './helpers/resultCardStylesHelpers';

export const Container = styled.div`
  height: 250px;
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 4px;
  z-index: 1;
  justify-self: center;
  margin-top: 4rem;
  background: #fff;
`;

export const HeaderBackground = styled.div`
  width: 100%;
  background-color: ${props => getBgColorFrom({ ...props })};
  border-radius: 4px 4px 0 0;
`;

export const HeaderContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.span`
  font-size: 1.2rem;
  color: #fff;
`;

export const BigHeart = styled(Heart)`
  stroke-width: 2;
  color: #fff;
  cursor: pointer;
  fill: ${props => (props.favorited ? '#fff' : 'none')};
`;

export const List = styled.div`
  list-style-type: none;
  margin-top: 1.1rem;
  padding: 0 1.2rem;
  font-size: 16px;
`;

export const ListItem = styled.li`
  margin: 1.1rem 0;
`;

export const ItemTitle = styled.span`
  opacity: 0.65;
`;
