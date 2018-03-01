import styled from 'styled-components';

import { getBgColorFrom } from './helpers/resultCardStylesHelpers';

const Container = styled.div`
  height: 250px;
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 4px;
  z-index: 1;
  justify-self: center;
  margin-top: 4rem;
  background: #fff;
`;

const HeaderBackground = styled.div`
  width: 100%;
  background-color: ${props => getBgColorFrom({ ...props })};
  border-radius: 4px 4px 0 0;
`;

const HeaderContainer = styled.div`
  padding: 1.2rem;
`;

const Header = styled.span`
  font-size: 1.2rem;
  color: #fff;
`;

const List = styled.div`
  list-style-type: none;
  margin-top: 1.1rem;
  padding: 0 1.2rem;
  font-size: 16px;
`;

const ListItem = styled.li`
  margin: 1.1rem 0;
`;

const ItemTitle = styled.span`
  opacity: 0.65;
`;

export {
  Container,
  HeaderBackground,
  HeaderContainer,
  Header,
  List,
  ListItem,
  ItemTitle
};
