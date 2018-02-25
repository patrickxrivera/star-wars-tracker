import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

import { ContainerStyles, CategoryName } from './CategoryStyles.jsx';

const Container = styled.div`
  ${ContainerStyles};
`;

const Category = ({ categoryName, color, Icon, handleClick }) => (
  <Container onClick={() => handleClick(categoryName)} color={color}>
    <Icon size={35} />
    <CategoryName>{categoryName}</CategoryName>
  </Container>
);

Category.propTypes = {
  handleClick: func.isRequired,
  categoryName: string.isRequired,
  color: string.isRequired,
  Icon: func.isRequired
};

export default Category;
