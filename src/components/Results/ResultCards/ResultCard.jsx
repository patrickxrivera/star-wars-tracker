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
} from './ResultCardStyles.jsx';

const ResultCard = ({ selected, data }) => {
  const { Name, Favorited, Type, ...rest } = data;

  return (
    <Container>
      <HeaderBackground selected={selected}>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        {Object.entries(rest).map(([title, val]) => {
          return (
            <ListItem key={`${title}-${val}`}>
              <ItemTitle>{title}: </ItemTitle> {val}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

ResultCard.propTypes = {
  selected: string.isRequired,
  data: shape({
    // All
    Name: string.isRequired,

    //People
    Species: string,
    Homeworld: string,
    Language: string,
    Population: string,

    // Planets
    Terrain: string,
    Climate: string,

    // Vehicles
    Model: string,
    Class: string,
    Passengers: string
  })
};

export default ResultCard;
