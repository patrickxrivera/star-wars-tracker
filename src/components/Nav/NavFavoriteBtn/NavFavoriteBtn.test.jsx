import React from 'react';
import { mount } from 'enzyme';
import NavFavoriteBtn from './NavFavoriteBtn.jsx';

test('NavFavoriteBtn renders correctly', () => {
  const wrapper = mount(<NavFavoriteBtn />);
  expect(wrapper).toMatchSnapshot();
});
