import React, { Component } from 'react';
import styled from 'styled-components';
import { User, Chrome, Send } from 'react-feather';

const Container = styled.div`
  margin: 120px auto 0;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 3rem;
  border: 2px solid red;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  border: 2px solid red;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Select a category</Title>
        <CategoriesContainer>
          <Category>
            <User />
            <span>People</span>
          </Category>
          <Category>
            <Chrome />
            <span>Planets</span>
          </Category>
          <Category>
            <Send />
            <span>Vehicles</span>
          </Category>
        </CategoriesContainer>
      </Container>
    );
  }
}

export default Home;
