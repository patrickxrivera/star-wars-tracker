import React from 'react';
import { mount } from 'enzyme';
import Home from './Home.jsx';

test('Home renders correctly', () => {
  const wrapper = mount(<Home />);
  expect(wrapper).toMatchSnapshot();
});
