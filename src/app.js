import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 12050, createdAt: -11000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 1050, createdAt: 11010 }))
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 150, createdAt: 0 }))

store.dispatch(setTextFilter())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
