import React, { Component } from 'react';
import styled from 'styled-components';
import { ContainerStyles, CategoryName } from './CategoryStyles.jsx';
import { func, string } from 'prop-types';

const Container = styled.div`
  ${ContainerStyles};
`;

const Category = ({ onClick, categoryName, color, Icon }) => (
  <Container
    onClick={() => onClick(categoryName)}
    key={categoryName}
    color={color}
  >
    <Icon size={35} />
    <CategoryName>{categoryName}</CategoryName>
  </Container>
);

Category.propTypes = {
  onClick: func.isRequired,
  categoryName: string.isRequired,
  color: string.isRequired,
  Icon: func.isRequired
};

export default Category;
