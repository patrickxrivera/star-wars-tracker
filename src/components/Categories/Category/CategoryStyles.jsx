import styled, { css } from 'styled-components';

const ContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  margin: 0 3rem;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const CategoryName = styled.span`
  font-size: 1.25rem;
  margin-top: 0.6rem;
`;

export { ContainerStyles, CategoryName };
