import React, { Component } from 'react';
import styled from 'styled-components';
import { ContainerStyles, CategoryName } from './CategoryStyles.jsx';

const Container = styled.div`
  ${ContainerStyles};
`;

class Category extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return null;
  }

  render() {
    const Icon = this.props.icon;

    return (
      <Container
        onClick={this.props.handleClick}
        key={this.props.categoryName}
        color={this.props.color}
        data-test={`category-${this.props.categoryName}`}
      >
        <Icon size={35} />
        <CategoryName>{this.props.categoryName}</CategoryName>
      </Container>
    );
  }
}

export default Category;
