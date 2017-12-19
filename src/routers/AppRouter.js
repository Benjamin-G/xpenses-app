import React from 'react'
import { Route , Router , Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import XpenseDashboardPage from '../components/XpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={XpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
