import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import fixtures from '../fixtures/expenses'

test('should render EditExpensePage', () => {
  const wrapper = shallow(<EditExpensePage expense={fixtures[0]}/>)

  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
  const history = { push: jest.fn()}
  const editExpense = jest.fn()

  const wrapper = shallow(<EditExpensePage expense={fixtures[0]} history={history} editExpense={editExpense}/>)
  
  wrapper.find('ExpenseForm').prop('onSubmit')(fixtures[0])
  
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(1 , fixtures[0])
})

test('should handle remove expense', () => {
  const history = { push: jest.fn()}
  const removeExpense = jest.fn()

  const wrapper = shallow(<EditExpensePage expense={fixtures[0]} history={history} removeExpense={removeExpense}/>)
  
  wrapper.find('button').simulate('click')
  
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({id :fixtures[0].id})
})


