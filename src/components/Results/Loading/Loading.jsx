import React from 'react';

import ReactLoading from 'react-loading';
import Wrapper from './LoadingStyles.jsx';
import getColorFrom from './helpers/loadingHelpers';

const Loading = ({ selected }) => {
  const color = getColorFrom(selected);

  return (
    <Wrapper selected={selected}>
      <ReactLoading
        delay={0}
        type={'bubbles'}
        color={color}
        height={100}
        width={100}
      />
    </Wrapper>
  );
};

export default Loading;
