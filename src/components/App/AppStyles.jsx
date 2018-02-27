import { injectGlobal } from 'styled-components';

const AppStyles = injectGlobal`
  html { /* gets rid of "jump" when scrollbar appears */
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    color: #52565F;
    margin: 0;
  }
`;

export default AppStyles;
