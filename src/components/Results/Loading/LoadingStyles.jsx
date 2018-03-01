import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${props => (props.selected ? '5rem auto 0' : '10rem auto 0')};
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
`;

export default Wrapper;
