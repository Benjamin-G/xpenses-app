import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import fixtures from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
  startAddExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(fixtures[1])

  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(fixtures[1])
})
