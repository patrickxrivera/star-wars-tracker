import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-top: 2px solid #4f5ef5;
  margin-top: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.1rem 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  padding-bottom: 2rem;
  width: 1000px;
`;

const theme = {
  main: '1.7rem'
};

export { Container, GridContainer, theme };
