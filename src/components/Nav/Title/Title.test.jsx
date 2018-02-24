import React from 'react';
import { mount } from 'enzyme';
import Title from './Title.jsx';

test('Title renders by correctly', () => {
  const wrapper = mount(<Title />);
  expect(wrapper).toMatchSnapshot();
});
