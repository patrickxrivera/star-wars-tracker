import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { sel, simulateClick } from '../../utils/testUtils';

import CategoriesContainer, { Category } from './CategoriesContainer.jsx';

test('CategoriesContainer renders correctly', () => {
  const wrapper = mount(<CategoriesContainer />);
  expect(wrapper).toMatchSnapshot();
});

// test('Calls handleClick when a category is clicked', () => {
//   const handleClick = sinon.spy();
//   const wrapper = shallow(<Category onClick={handleClick} />);
//   const targetEl = wrapper.find(sel('category-Vehicles')).first();
//   simulateClick(targetEl);
//
//   expect(handleClick.calledOnce).toEqual(true);
// });
