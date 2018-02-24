import React from 'react';
import styled from 'styled-components';
import { User, Chrome, Send } from 'react-feather';
import { Container, Title, Subscript, CategoriesContainer, CategoryStyles, CategoryName } from './Home.styles.jsx';

const getJSXForCategories = () => {
  const icons = {
    People: { color: '#4f5ef5', iconName: User },
    Planets: { color: '#f44c67', iconName: Chrome },
    Vehicles: { color: '#2fca74', iconName: Send }
  };

  const categoriesJSX = Object.keys(icons).map((categoryName) => {
    const iconData = getIconDataFrom(icons, categoryName);
    const categoryJSX = createJSXFrom(iconData);
    return categoryJSX;
  });

  return categoriesJSX;
};

const getIconDataFrom = (icons, categoryName) => {
  const [color, Icon] = [icons[categoryName].color, icons[categoryName].iconName];
  return { color, Icon, categoryName };
};

const createJSXFrom = ({ color, Icon, categoryName }) => {
  return (
    <Category color={color}>
      <Icon size={35} />
      <CategoryName>{categoryName}</CategoryName>
    </Category>
  );
};

const Category = styled.div`
  ${CategoryStyles};
`;

function Home() {
  const categoriesJSX = getJSXForCategories();

  return (
    <Container>
      <Title>Select a category</Title>
      <Subscript>Detailed information on your favorite Star Wars characters.</Subscript>
      <CategoriesContainer>{categoriesJSX}</CategoriesContainer>
    </Container>
  );
}

export default Home;
