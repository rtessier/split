import React, { Component } from 'react'
import { connect } from 'react-redux'
import { paymentReceived } from '../actions/paymentReceived'
import Transaction from '../components/Transaction'

class TransactionsList extends Component {
  render() {
console.log('Rerendering...', this.props)
    if (this.props.transactions.length > 0) {
      return (
        <div>
          <h2>Transactions</h2>
          <div>
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
          </div>
        </div>
      )
    }

    return (
      <div>
        <h2>Transactions</h2>
        <span>No transactions</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(TransactionsList)
