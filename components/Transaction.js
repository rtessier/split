import React, { Component } from 'react'

class Transaction extends Component {
  render() {
    return (
      <div>{`${this.props.from} paid $${this.props.amount.toFixed(2)}`}</div>
    );
  }
}

export default Transaction;
