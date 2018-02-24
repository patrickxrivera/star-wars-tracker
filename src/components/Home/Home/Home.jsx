import React, { Component } from 'react';
import styled from 'styled-components';
import icons from './HomeData.jsx';
import {
  Container,
  Title,
  Subscript,
  CategoriesContainer,
  CategoryStyles,
  CategoryName
} from './Home.styles.jsx';

const Category = styled.div`
  ${CategoryStyles};
`;

class Home extends Component {
  constructor(props) {
    super(props);

    [
      'handleClick',
      'getJSXForCategories',
      'getIconDataFrom',
      'createJSXFrom'
    ].forEach((propToBind) => {
      this[propToBind] = this[propToBind].bind(this);
    });
  }

  handleClick() {
    return null;
  }

  getJSXForCategories() {
    const categoriesJSX = Object.keys(icons).map((categoryName) => {
      const iconData = this.getIconDataFrom(icons, categoryName);
      const categoryJSX = this.createJSXFrom(iconData);
      return categoryJSX;
    });

    return categoriesJSX;
  }

  getIconDataFrom(icons, categoryName) {
    const [color, Icon] = [
      icons[categoryName].color,
      icons[categoryName].iconName
    ];
    return { color, Icon, categoryName };
  }

  createJSXFrom({ color, Icon, categoryName }) {
    return (
      <Category
        onClick={this.handleClick}
        key={categoryName}
        color={color}
        data-test={`category-${categoryName}`}
      >
        <Icon size={35} />
        <CategoryName>{categoryName}</CategoryName>
      </Category>
    );
  }

  render() {
    const categoriesJSX = this.getJSXForCategories();

    return (
      <Container>
        <Title>Select a category</Title>
        <Subscript>
          Detailed information on your favorite Star Wars characters.
        </Subscript>
        <CategoriesContainer>{categoriesJSX}</CategoriesContainer>
      </Container>
    );
  }
}

export { Container, CategoriesContainer, Category };
export default Home;
