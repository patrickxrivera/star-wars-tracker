import styled from 'styled-components';

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Link = styled.a`
  text-decoration: none;
  color: #52565f;

  &:visited {
    color: default;
  }
`;

export { Header, Link };
