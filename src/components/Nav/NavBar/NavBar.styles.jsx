import styled from 'styled-components';
import { media } from '../../../styles/sizes.js';
import { fadeIn } from '../../../styles/animations.js';

const Banner = styled.div`
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 1rem;
  opacity: 0;
  animation: 1500ms ${fadeIn} 700ms forwards;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  ${media.small`width: 95%`};
`;

export { Banner, Container };
