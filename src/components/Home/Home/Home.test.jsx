import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { sel, simulateClick } from '../../../utils/testUtils';

import Home, { Container, CategoriesContainer, Category } from './Home.jsx';

test('Home renders correctly', () => {
  const wrapper = mount(<Home />);
  expect(wrapper).toMatchSnapshot();
});

test('Home calls handleClick when a category is clicked', () => {
  const handleClick = sinon.spy();
  const wrapper = mount(
    <Home>
      <Container>
        <CategoriesContainer>
          <Category onClick={handleClick} />
        </CategoriesContainer>
      </Container>
    </Home>
  );
  const targetEl = wrapper.find(sel('category-People')).first();
  simulateClick(targetEl);

  expect(handleClick.calledOnce).toEqual(true);
});
