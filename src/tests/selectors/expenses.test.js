import moment from 'moment'

import selectExpenses from '../../selectors/expenses.js'
import fixtures from '../fixtures/expenses'

test('should filter by text value', () => {
  const filters = {
    text: 'n',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(fixtures, filters)
  expect(result).toEqual([ fixtures[1] ]) 
})

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(fixtures, filters)
  expect(result).toEqual([ fixtures[2], fixtures[0] ]) 
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = selectExpenses(fixtures, filters)
  expect(result).toEqual([ fixtures[0], fixtures[1] ]) 
})

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(fixtures, filters)
  expect(result).toEqual([ fixtures[2] , fixtures[0] , fixtures[1] ]) 
})

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(fixtures, filters)
  expect(result).toEqual([ fixtures[1] , fixtures[0] , fixtures[2] ]) 
})

