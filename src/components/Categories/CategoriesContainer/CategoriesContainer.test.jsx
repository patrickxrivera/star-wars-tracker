import React from 'react';
import { mount } from 'enzyme';

import CategoriesContainer, { Category } from './CategoriesContainer.jsx';

test('CategoriesContainer renders correctly', () => {
  const wrapper = mount(<CategoriesContainer />);
  expect(wrapper).toMatchSnapshot();
});
