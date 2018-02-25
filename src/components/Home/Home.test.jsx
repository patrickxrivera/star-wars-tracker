import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { sel, simulateClick } from '../../utils/testUtils';

import Home from './Home.jsx';

test('Home renders correctly', () => {
  const wrapper = mount(<Home />);
  expect(wrapper).toMatchSnapshot();
});
