import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #ecf0f1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.1rem 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  padding-bottom: 2rem;
  width: 850px;
`;

const theme = {
  main: '1.7rem'
};

export { Container, GridContainer, theme };
