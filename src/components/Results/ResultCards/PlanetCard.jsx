import React from 'react';
import { string, shape } from 'prop-types';

import {
  Container,
  HeaderContainer,
  HeaderBackground,
  Header,
  List,
  ListItem,
  ItemTitle
} from './styles/ResultCardStyles.jsx';

const PlanetCard = props => {
  const { selected } = props;
  const { Name, Terrain, Population, Climate } = props.data;

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

PlanetCard.propTypes = {
  selected: string,
  data: shape({
    Name: string,
    Terrain: string,
    Population: string,
    Climate: string
  })
};

export default PlanetCard;
