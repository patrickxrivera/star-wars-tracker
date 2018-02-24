import React, { Component } from 'react';
import styled from 'styled-components';
import { User, Chrome, Send } from 'react-feather';

const getCategories = () => {
  const icons = {
    People: User,
    Planets: Chrome,
    Vehicles: Send
  };

  const categories = Object.keys(icons).map((categoryName) => {
    const Icon = icons[categoryName];
    const categoryJSX = createJSXFor(Icon, categoryName);
    return categoryJSX;
  });

  return categories;
};

const createJSXFor = (Icon, categoryName) => {
  return (
    <Category>
      <Icon />
      <CategoryName>{categoryName}</CategoryName>
    </Category>
  );
};

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

const CategoryName = styled.span`
  font-size: 1.25rem;
  margin-top: 0.6rem;
`;

class Home extends Component {
  render() {
    const categories = getCategories();

    return (
      <Container>
        <Title>Select a category</Title>
        <CategoriesContainer>{categories}</CategoriesContainer>
      </Container>
    );
  }
}

export default Home;
