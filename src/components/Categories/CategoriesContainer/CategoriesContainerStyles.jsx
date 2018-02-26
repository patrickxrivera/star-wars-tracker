import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: ${(props) => props.theme.main};
`;

Container.defaultProps = {
  theme: {
    main: '4.25rem'
  }
};

export default Container;
