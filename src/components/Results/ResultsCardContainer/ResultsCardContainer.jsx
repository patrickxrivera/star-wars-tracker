import React from 'react';

import data from '../ResultsData.jsx';
import {
  Container,
  HeaderContainer,
  HeaderBackground,
  Header,
  List,
  ListItem,
  ItemTitle
} from './ResultsCardContainerStyles.jsx';

const { homeworld, population, name, species, language } = data;

const ResultsCardContainer = () => (
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

export default ResultsCardContainer;
