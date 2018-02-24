import React from 'react';
import { mount } from 'enzyme';
import NavBar from './NavBar.jsx';

test('NavBar renders correctly', () => {
  const wrapper = mount(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
