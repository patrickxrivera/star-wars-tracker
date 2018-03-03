import styled from 'styled-components';

import { fadeInUp } from '../../../styles/animations.js';

export const Container = styled.div`
  margin: 5rem auto 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: 1100ms ${fadeInUp} 500ms forwards;
`;

export const Text = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;
