import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const XpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default XpenseDashboardPage
