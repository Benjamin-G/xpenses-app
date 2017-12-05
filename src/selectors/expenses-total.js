import React from 'react'
import { connect } from 'react-redux'


export default (expenses) => {
  return expenses.reduce((acc, expense) => acc + expense.amount, 0) 
}
