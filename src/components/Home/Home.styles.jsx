import styled, { css } from 'styled-components';
import { fadeInUp } from '../../styles/animations.js';

export const Container = styled.div`
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  padding-right: 3.8rem;
  opacity: 0;
  animation: 1100ms ${fadeInUp} 1500ms forwards;
`;

export const Title = styled.span`
  font-size: 3.5rem;
  text-align: center;
`;

export const Subscript = styled.span`
  text-align: center;
  margin-top: 3.5rem;
  font-size: 1.5rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 4.5rem;
`;

export const CategoryStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  margin: 0 3rem;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const CategoryName = styled.span`
  font-size: 1.25rem;
  margin-top: 0.6rem;
`;
