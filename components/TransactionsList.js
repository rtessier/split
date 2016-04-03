import React, { Component } from 'react'
import Transaction from './Transaction'

class TransactionsList extends Component {
  render() {
    let defaultTransactions = [
      { description: 'Ryan paid bill', amount: 44.88 },
      { description: 'Wayne paid Ryan', amount: 11.22 },
      { description: 'Darren paid Ryan', amount: 11.22 }
    ];

    return (
      <div>
        <h2>Transactions</h2>
        <div>
          <ul>
            {defaultTransactions.map(transaction =>
              <li>
                <Transaction
                  description={transaction.description}
                  amount={transaction.amount}
                  />
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default TransactionsList;
