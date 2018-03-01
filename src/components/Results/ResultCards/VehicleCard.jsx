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

const VehicleCard = props => {
  const { selected } = props;
  const { Name, Model, Class, Passengers } = props.data;

  return (
    <Container>
      <HeaderBackground selected={selected}>
        <HeaderContainer>
          <Header>{Name}</Header>
        </HeaderContainer>
      </HeaderBackground>
      <List>
        <ListItem>
          <ItemTitle>Model: </ItemTitle> {Model}
        </ListItem>
        <ListItem>
          <ItemTitle>Class: </ItemTitle> {Class}
        </ListItem>
        <ListItem>
          <ItemTitle>Passengers: </ItemTitle> {Passengers}
        </ListItem>
      </List>
    </Container>
  );
};

VehicleCard.propTypes = {
  selected: string,
  data: shape({
    Name: string,
    Model: string,
    Class: string,
    Passengers: string
  })
};

export default VehicleCard;
