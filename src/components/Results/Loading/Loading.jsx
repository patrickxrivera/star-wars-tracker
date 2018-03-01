import React from 'react';

import ReactLoading from 'react-loading';
import Wrapper from './LoadingStyles.jsx';

const colorMapping = {
  People: '#4f5ef5',
  Planets: '#f44c67',
  Vehicles: '#2fca74'
};

const getColorFrom = selected => {
  return colorMapping[selected];
};

const Loading = ({ selected }) => {
  const color = getColorFrom(selected) || '#0984e3';

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
