import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/sizes.js';
import { fadeIn } from '../../styles/animations.js';

import StoryBtn from './StoryBtn.jsx';
import Title from './Title.jsx';
import NavFavoriteBtn from './NavFavoriteBtn.jsx';

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

class Nav extends Component {
  render() {
    return (
      <Banner>
        <Container>
          <Title />
          <NavFavoriteBtn />
        </Container>
      </Banner>
    );
  }
}

export default Nav;
