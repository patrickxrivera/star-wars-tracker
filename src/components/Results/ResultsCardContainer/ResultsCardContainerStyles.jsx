import styled from 'styled-components';

const Container = styled.div`
  height: 300px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  z-index: 1;
  justify-self: center;
`;

const ContentContainer = styled.div`
  padding: 1.2rem;
`;

const Header = styled.span`
  font-size: 1.2rem;
`;

const List = styled.div`
  list-style-type: none;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin: 0.75rem 0;
`;

export { Container, ContentContainer, Header, List, ListItem };
