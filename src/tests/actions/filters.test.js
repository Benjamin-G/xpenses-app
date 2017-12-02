import moment from 'moment'

import { setStartDate, setEndDate , setTextFilter ,
    sortByDate, sortByAmount } from '../../actions/filters'


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
  }) 
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
  }) 
})

test('should set object to sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' }) 
})

test('should set object to sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' }) 
})

test('should set object to text filter with default values', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should set object to text filter with values', () => {
  expect(setTextFilter('test')).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'test'
  })     
})