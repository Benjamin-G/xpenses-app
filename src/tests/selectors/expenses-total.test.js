import getExpensesTotal from '../../selectors/expenses-total'
import fixtures from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  expect(getExpensesTotal([])).toBe(0)
})

test('should correctly add up a single expense', () => {
  expect(getExpensesTotal([fixtures[0]])).toBe(195)
})

test('should correctly add up multiple expenses', () => {
  expect(getExpensesTotal(fixtures)).toBe(2145)
})
