import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: ${props => props.theme.marginTop};
  animation: ${props => props.theme.animation};
  opacity: ${props => props.theme.opacity};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

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
    marginTop: '4.25rem',
    animation: 'none',
    opacity: '1'
  }
};

export { Container, StyledLink };
