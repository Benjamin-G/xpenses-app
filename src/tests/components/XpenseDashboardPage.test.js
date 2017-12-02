import React from 'react'
import { shallow } from 'enzyme'

import XpenseDashboardPage from '../../components/XpenseDashboardPage'
import fixtures from '../fixtures/expenses'

test('should render XpenseDashboardPage correctly', () => {
  const wrapper = shallow(<XpenseDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})