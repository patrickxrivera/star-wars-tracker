import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: ${(props) => props.theme.main};
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

Container.defaultProps = {
  theme: {
    main: '4.25rem'
  }
};

export { Container, StyledLink };
