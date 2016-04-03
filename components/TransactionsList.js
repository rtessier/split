import React, { Component } from 'react'

class TransactionsList extends Component {
  render() {
    return (
      <div>
        <h1>Transactions</h1>
        <div>
          <ul>
            <li>Ryan paid bill: $44.88</li>
            <li>Wayne paid Ryan: $11.22</li>
            <li>Darren paid Ryan: $11.22</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TransactionsList;
