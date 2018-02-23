import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  text-align: center;
`;

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Subscript = styled.div`
  font-size: 1.25rem;
  margin-top: 0.3rem;
  color: hsl(255, 50%, 85%);
`;

function Title() {
  return (
    <Container>
      <Header>Star Wars Tracker</Header>
      <Subscript>The API Strikes Back</Subscript>
    </Container>
  );
}

export default Title;
