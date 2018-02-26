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

const PeopleCard = (props) => {
  const { Name, Species, Homeworld, Language, Population } = props.data;

  return (
    <Container>
      <HeaderBackground>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        <ListItem>
          <ItemTitle>Home: </ItemTitle> {Homeworld}
        </ListItem>
        <ListItem>
          <ItemTitle>Species: </ItemTitle> {Species}
        </ListItem>
        <ListItem>
          <ItemTitle>Language: </ItemTitle> {Language}
        </ListItem>
        <ListItem>
          <ItemTitle>Population </ItemTitle> {Population}
        </ListItem>
      </List>
    </Container>
  );
};

export default PeopleCard;