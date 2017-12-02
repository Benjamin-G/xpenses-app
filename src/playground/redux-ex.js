// 
//
// store.subscribe(() => {
//   const state = store.getState()
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses)
// })
//
// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100050, createdAt: -11000 }))
// const expenseOne1 = store.dispatch(addExpense({ description: 'feburary and december     Rent', amount: 1000, createdAt: 1000 }))
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 150, createdAt: -1000 }))
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount : 500 } ))
//
// store.dispatch(setTextFilter('rent'))
// console.log('^^^');
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
//
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
//
// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(125))
// store.dispatch(setEndDate(999))
//
// const demoState = {
//   expenses: [{
//     id: 'asdf',
//     description: 'Jan Rent',
//     note: 'Final Payment',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// }
