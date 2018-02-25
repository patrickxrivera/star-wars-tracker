import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: minmax(100px, auto);
  margin: 0 auto;
  width: 900px;
`;

export default Container;
