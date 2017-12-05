import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render ExpensesSumary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSumary with many expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={12345}/>)
  expect(wrapper).toMatchSnapshot()
})
