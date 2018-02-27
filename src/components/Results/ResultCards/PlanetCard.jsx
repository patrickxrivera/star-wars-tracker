import React from 'react';

import {
  Container,
  HeaderContainer,
  HeaderBackground,
  Header,
  List,
  ListItem,
  ItemTitle
} from './styles/ResultCardStyles.jsx';

const PlanetCard = (props) => {
  const { Name, Terrain, Population, Climate } = props.data;
  const selected = props.selected;

  return (
    <Container>
      <HeaderBackground selected={selected}>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        <ListItem>
          <ItemTitle>Climate: </ItemTitle> {Climate}
        </ListItem>
        <ListItem>
          <ItemTitle>Terrain: </ItemTitle> {Terrain}
        </ListItem>
        <ListItem>
          <ItemTitle>Population: </ItemTitle> {Population}
        </ListItem>
      </List>
    </Container>
  );
};

export default PlanetCard;
