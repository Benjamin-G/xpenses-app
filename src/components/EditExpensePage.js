import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import RemoveModal from './RemoveModal'
import { startEditExpense , startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  state = {
    isModalOpen: false
  }
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  openModal = () =>{
    this.setState({isModalOpen: true})
  }
  handleConfirmedRemove = () => {
    this.setState({isModalOpen: false})
    this.props.removeExpense({ id : this.props.expense.id })
    this.props.history.push('/')
  }
  handleDeniedRemove = () => {
    this.setState({isModalOpen: false})
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
          
          <button className="button button--secondary" onClick={this.openModal}>Remove Expense</button>
          <RemoveModal isOpen={this.state.isModalOpen} onConfirmClose={this.handleConfirmedRemove}
          onDenyClose={this.handleDeniedRemove} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  removeExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state , props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
