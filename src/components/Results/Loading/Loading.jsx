import React from 'react';

import ReactLoading from 'react-loading';
import Wrapper from './LoadingStyles.jsx';

const Loading = ({ selected }) => (
  <Wrapper selected={selected}>
    <ReactLoading
      delay={0}
      type={'bubbles'}
      color={'#00cec9'}
      height={100}
      width={100}
    />
  </Wrapper>
);

export default Loading;
