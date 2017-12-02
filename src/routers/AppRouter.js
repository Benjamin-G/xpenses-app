import React from 'react'
import { Route, BrowserRouter , Switch } from 'react-router-dom'

import XpenseDashboardPage from '../components/XpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={XpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
