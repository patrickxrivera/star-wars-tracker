import React, { Component } from 'react';
import styled from 'styled-components';
import { ContainerStyles, CategoryName } from './CategoryStyles.jsx';

const Container = styled.div`
  ${ContainerStyles};
`;

const Category = ({ handleClick, categoryName, color, Icon }) => (
  <Container onClick={handleClick} key={categoryName} color={color}>
    <Icon size={35} />
    <CategoryName>{categoryName}</CategoryName>
  </Container>
);

export default Category;
