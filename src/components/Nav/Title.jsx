import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: hsla(240, 25%, 83%, 1);
`;

function Title() {
  return (
    <Container>
      <Header>The API Strikes Back</Header>
    </Container>
  );
}

export default Title;
