import styled, { css } from 'styled-components';

import {
  getBorderBottomFrom,
  getOpacityFrom,
  getHoverOpacityFrom
} from './helpers/categoryStylesHelpers';

const ContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  margin: 0 3rem;
  padding-bottom: 2rem;
  border-bottom: ${props => getBorderBottomFrom({ ...props })};
  opacity: ${props => getOpacityFrom({ ...props })};

  &:hover {
    opacity: ${props => getHoverOpacityFrom({ ...props })};
    cursor: pointer;
  }
`;

const CategoryName = styled.span`
  font-size: 1.25rem;
  margin-top: 0.6rem;
`;

export { ContainerStyles, CategoryName };
