import React, { Component } from 'react';
import styled from 'styled-components';
import { User, Chrome, Send } from 'react-feather';

const Container = styled.div`
  margin: 120px auto 0;
  display: flex;
  flex-direction: column;
  padding-right: 3.8rem;
`;

const Title = styled.span`
  font-size: 3rem;
  text-align: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 4rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
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
