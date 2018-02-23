import React, { Component } from 'react';
import styled from 'styled-components';
import StoryBtn from './StoryBtn.jsx';
import Title from './Title.jsx';
import NavFavoriteBtn from './NavFavoriteBtn.jsx';


class Nav extends Component {
  render() {
    return (
      <StoryBtn />
      <Title />
      <NavFavoriteBtn />
    )
  }
}

export default Nav;
