import styled from 'styled-components';

import { fadeIn, fadeInUp } from '../../../styles/animations.js';
import { media } from '../../../styles/sizes';

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid #ecf0f1;
  animation: 1100ms ${fadeIn} 200ms forwards;
  opacity: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 0.1rem 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  padding-bottom: 2rem;
  opacity: 0;
  animation: 1100ms ${fadeInUp} 500ms forwards;

  ${media.large`grid-template-columns: repeat(3, 1fr)`};
  ${media.large`width: 850px`};

  ${media.small`grid-template-columns: repeat(2, 1fr)`};
  ${media.small`width: 570px`};
`;

export const resultsPage = {
  marginTop: '1.7rem',
  animation: `1200ms ${fadeIn} 300ms forwards`,
  opacity: '0'
};
