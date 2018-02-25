import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { sel, simulateClick } from '../../../utils/testUtils';

import Category from './Category.jsx';

test('Category renders correctly', () => {
  const wrapper = shallow(<Category />);
  expect(wrapper).toMatchSnapshot();
});
