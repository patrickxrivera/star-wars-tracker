import React from 'react';

import data from '../ResultsData.jsx';
import {
  Container,
  ContentContainer,
  Header,
  List,
  ListItem
} from './ResultsCardContainerStyles.jsx';

const { homeworld, population, name, species, language } = data;

const ResultsCardContainer = () => (
  <Container>
    <ContentContainer>
      <Header>{name}</Header>
      <List>
        <ListItem>{homeworld}</ListItem>
        <ListItem>{species}</ListItem>
        <ListItem>{language}</ListItem>
        <ListItem>{population}</ListItem>
      </List>
    </ContentContainer>
  </Container>
);

export default ResultsCardContainer;
