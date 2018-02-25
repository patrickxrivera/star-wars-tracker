import styled, { css } from 'styled-components';
import { fadeInUp } from '../../../styles/animations.js';

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
