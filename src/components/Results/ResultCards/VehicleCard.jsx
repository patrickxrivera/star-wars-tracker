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

const VehicleCard = (props) => {
  const { Name, Model, Class, Passengers } = props.data;

  return (
    <Container>
      <HeaderBackground>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        <ListItem>
          <ItemTitle>Model: </ItemTitle> {Model}
        </ListItem>
        <ListItem>
          <ItemTitle>Class </ItemTitle> {Class}
        </ListItem>
        <ListItem>
          <ItemTitle>Passengers: </ItemTitle> {Passengers}
        </ListItem>
      </List>
    </Container>
  );
};

export default VehicleCard;
