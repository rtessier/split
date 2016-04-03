import React, { Component } from 'react'
import { connect } from 'react-redux'
import { paymentReceived } from '../actions/paymentReceived'
import Transaction from '../components/Transaction'

class TransactionsList extends Component {
  render() {
    return (
      <div>
        <h2>Transactions</h2>
        {renderTransactionsList.bind(this)()}
      </div>
    )
  }
}

function renderTransactionsList() {
  if (this.props.transactions.length > 0) {
    return (
      <ul>
        {this.props.transactions.map(transaction =>
          <li
            key={`${transaction.from}: ${transaction.amount}`}>
            <Transaction
              from={transaction.from}
              amount={transaction.amount}
              />
          </li>
        )}
      </ul>
    )
  }

  return (
    <span>No transactions</span>
  )
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(TransactionsList)
