import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const XpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default XpenseDashboardPage
