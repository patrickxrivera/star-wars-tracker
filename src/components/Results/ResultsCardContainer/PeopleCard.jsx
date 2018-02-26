import React from 'react';

import {
  Container,
  HeaderContainer,
  HeaderBackground,
  Header,
  List,
  ListItem,
  ItemTitle
} from './ResultsCardContainerStyles.jsx';

const PeopleCard = ({ name, homeworld, species, language, population }) => (
  <Container>
    <HeaderBackground>
      <HeaderContainer>
        <Header>{name}</Header>
      </HeaderContainer>
    </HeaderBackground>
    <List>
      <ListItem>
        <ItemTitle>Home: </ItemTitle> {homeworld}
      </ListItem>
      <ListItem>
        <ItemTitle>Species: </ItemTitle> {species}
      </ListItem>
      <ListItem>
        <ItemTitle>Language: </ItemTitle> {language}
      </ListItem>
      <ListItem>
        <ItemTitle>Population </ItemTitle> {population}
      </ListItem>
    </List>
  </Container>
);

export default PeopleCard;
