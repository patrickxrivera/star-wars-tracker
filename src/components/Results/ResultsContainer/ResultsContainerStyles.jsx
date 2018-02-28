import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid #ecf0f1;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.1rem 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  padding-bottom: 2rem;
  width: 850px;
`;

export const theme = {
  main: '1.7rem'
};
