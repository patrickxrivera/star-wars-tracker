import styled, { css } from 'styled-components';

const sizes = {
  small: 639,
  medium: 1047,
  large: 2500
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { media };
