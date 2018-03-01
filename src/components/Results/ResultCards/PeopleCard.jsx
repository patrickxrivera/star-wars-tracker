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

const PeopleCard = props => {
  const { selected } = props;
  const { Name, Species, Homeworld, Language, Population } = props.data;

  return (
    <Container>
      <HeaderBackground selected={selected}>
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

PeopleCard.propTypes = {
  selected: string,
  data: shape({
    Name: string,
    Species: string,
    Homeworld: string,
    Language: string,
    Population: string
  })
};

export default PeopleCard;
