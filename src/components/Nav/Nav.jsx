import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/styles.jsx';
import StoryBtn from './StoryBtn.jsx';
import Title from './Title.jsx';
import NavFavoriteBtn from './NavFavoriteBtn.jsx';

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;

  ${media.phone`width: 95%`};
`;

class Nav extends Component {
  render() {
    return (
      <Container>
        <StoryBtn />
        <Title />
        <NavFavoriteBtn />
      </Container>
    );
  }
}

export default Nav;
