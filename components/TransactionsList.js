import React, { Component } from 'react'

class TransactionsList extends Component {
  render() {
    return (
      <div>
        <h1>Transactions</h1>
        <div>
          <ul>
            <li>Ryan paid gas bill: $44.88</li>
            <li>Wayne paid Ryan for gas bill: $11.22</li>
            <li>Darren paid Ryan for gas bill: $11.22</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TransactionsList;
