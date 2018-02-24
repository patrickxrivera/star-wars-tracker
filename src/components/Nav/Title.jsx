import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

function Title() {
  return (
    <div>
      <Header>The API Strikes Back</Header>
    </div>
  );
}

export default Title;
