import expensesReducer from '../../reducers/expenses'
import fixtures from '../fixtures/expenses'


test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 1
  }
  const state = expensesReducer(fixtures, action)
  expect(state).toEqual([ fixtures[1] , fixtures[2] ])
})

test('should remove no expense when given unmatching id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  }
  const state = expensesReducer(fixtures, action)
  expect(state).toEqual(fixtures)
})

test('should add an expense', () => {
  const expense ={ id:4, description:'gum', note:'', amount: 195, createdAt: 0 }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(fixtures, action)
  expect(state).toEqual([...fixtures, expense ])
})

test('should edit no expense when given unmatching id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 4,
    updates: {
      description: 'gummy'
    }
  }
  const state = expensesReducer(fixtures, action)
  expect(state).toEqual(fixtures)
})

test('should edit when given matching id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: {
      description: 'gummy'
    }
  }
  const state = expensesReducer(fixtures, action)
  expect(state[0].description).toBe('gummy')
})