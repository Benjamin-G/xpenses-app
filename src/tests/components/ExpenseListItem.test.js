import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../components/ExpenseListItem'
import fixtures from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...fixtures[0]} />)
  expect(wrapper).toMatchSnapshot()
})